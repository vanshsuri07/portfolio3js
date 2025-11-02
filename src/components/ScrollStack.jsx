import { useLayoutEffect, useRef, useCallback } from "react";
import Lenis from "lenis";

export const ScrollStackItem = ({ children, itemClassName = "" }) => (
  <div
    className={`scroll-stack-card w-full min-h-[320px] p-8 md:p-12 rounded-[32px] box-border relative overflow-hidden ${itemClassName}`.trim()}
    style={{
      background:
        "linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(148, 163, 184, 0.1)",
      boxShadow:
        "0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05) inset",
    }}
  >
    {/* Decorative gradient orb */}
    <div
      className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-20 blur-3xl"
      style={{
        background:
          "radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, transparent 70%)",
      }}
    />
    <div
      className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full opacity-20 blur-3xl"
      style={{
        background:
          "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)",
      }}
    />

    {/* Content */}
    <div className="relative z-10">{children}</div>
  </div>
);

const ScrollStack = ({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.05,
  itemStackDistance = 40,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.9,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
}) => {
  const scrollerRef = useRef(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef(null);
  const lenisRef = useRef(null);
  const cardsRef = useRef([]);

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === "string" && value.includes("%")) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length) return;

    const scrollTop = useWindowScroll
      ? window.scrollY
      : scrollerRef.current?.scrollTop || 0;
    const containerHeight = useWindowScroll
      ? window.innerHeight
      : scrollerRef.current?.clientHeight || 0;

    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(
      scaleEndPosition,
      containerHeight
    );

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardOriginalTop = parseFloat(card.dataset.originalTop || 0);
      const reachStackAt = cardOriginalTop - stackPositionPx;
      const finishScaleAt = cardOriginalTop - scaleEndPositionPx;

      // Calculate when cards should disappear (after all are stacked)
      const lastCardTop = parseFloat(
        cardsRef.current[cardsRef.current.length - 1]?.dataset.originalTop || 0
      );
      const stackCompleteAt =
        lastCardTop - scaleEndPositionPx + containerHeight * 0.5;

      let translateY = 0;
      let scaleProgress = 0;
      let opacity = 1;

      if (scrollTop < reachStackAt) {
        // Card hasn't reached stack position yet
        translateY = 0;
        scaleProgress = 0;
      } else if (scrollTop >= reachStackAt && scrollTop < finishScaleAt) {
        // Card is pinning and scaling
        const stackY = stackPositionPx + itemStackDistance * i;
        translateY = scrollTop - cardOriginalTop + stackY;
        scaleProgress =
          (scrollTop - reachStackAt) / (finishScaleAt - reachStackAt);
      } else if (scrollTop >= finishScaleAt && scrollTop < stackCompleteAt) {
        // Card is fully stacked
        const stackY = stackPositionPx + itemStackDistance * i;
        translateY = scrollTop - cardOriginalTop + stackY;
        scaleProgress = 1;
      } else {
        // Fade out cards after stack is complete
        const stackY = stackPositionPx + itemStackDistance * i;
        translateY = scrollTop - cardOriginalTop + stackY;
        scaleProgress = 1;
        const fadeProgress =
          (scrollTop - stackCompleteAt) / (containerHeight * 0.3);
        opacity = Math.max(0, 1 - fadeProgress);
      }

      // Calculate scale - each card scales UP (bigger than previous)
      const targetScale = baseScale + i * itemScale;
      const scale = 1 + scaleProgress * (targetScale - 1);

      // Calculate rotation
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      // Calculate blur for cards beneath
      let blur = 0;
      if (blurAmount && scaleProgress > 0) {
        blur = blurAmount * i * scaleProgress;
      }

      // Apply transforms
      card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotation}deg)`;
      card.style.filter = blur > 0 ? `blur(${blur}px)` : "";
      card.style.opacity = opacity;
      card.style.zIndex = i;

      // Check if last card is in view for callback
      if (i === cardsRef.current.length - 1) {
        const isStacked = scaleProgress >= 0.5;
        if (isStacked && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isStacked && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    parsePercentage,
  ]);

  const setupLenis = useCallback(() => {
    if (useWindowScroll) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: false,
      });

      lenis.on("scroll", updateCardTransforms);

      const raf = (time) => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;
    } else {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      const lenis = new Lenis({
        wrapper: scroller,
        content: scroller.querySelector(".scroll-stack-inner"),
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: false,
      });

      lenis.on("scroll", updateCardTransforms);

      const raf = (time) => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;
    }
  }, [updateCardTransforms, useWindowScroll]);

  useLayoutEffect(() => {
    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll(".scroll-stack-card")
        : scrollerRef.current?.querySelectorAll(".scroll-stack-card") || []
    );

    cardsRef.current = cards;

    // Store original positions and setup styles
    cards.forEach((card, i) => {
      const rect = card.getBoundingClientRect();
      const scrollTop = useWindowScroll
        ? window.scrollY
        : scrollerRef.current?.scrollTop || 0;
      const originalTop = useWindowScroll
        ? rect.top + scrollTop
        : card.offsetTop;
      card.dataset.originalTop = originalTop.toString();

      card.style.marginBottom =
        i < cards.length - 1 ? `${itemDistance}px` : "0";
      card.style.transformOrigin = "top center";
      card.style.willChange = "transform";
      card.style.position = "relative";
      card.style.transition = "opacity 0.3s ease-out";
    });

    setupLenis();

    requestAnimationFrame(() => {
      updateCardTransforms();
    });

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      stackCompletedRef.current = false;
      cardsRef.current = [];
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    setupLenis,
    updateCardTransforms,
  ]);

  const containerClassName = useWindowScroll
    ? `relative w-full ${className}`.trim()
    : `relative w-full h-full overflow-y-auto ${className}`.trim();

  return (
    <div className={containerClassName} ref={scrollerRef}>
      <div className="scroll-stack-inner pt-[10vh] px-4 md:px-20 pb-[80vh]">
        {children}
      </div>
    </div>
  );
};

export default ScrollStack;
