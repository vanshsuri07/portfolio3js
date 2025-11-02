import React from "react";
import LiquidEther from "../components/LiquidEther";
import TextType from "../components/TextType";
const Hero = () => {
  return (
    <section className="" id="home">
      <div
        style={{ height: 600, position: "relative" }}
        className="w-full overflow-hidden"
      >
        {/* Liquid Background */}
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={60}
          cursorSize={130}
          isViscous={false}
          viscous={15}
          iterationsViscous={16}
          iterationsPoisson={16}
          resolution={0.5}
          isBounce={false}
          dt={0.014}
          BFECC={false}
          autoSpeed={0.1}
          autoIntensity={1.0}
          takeoverDuration={0.1}
          autoResumeDelay={3000}
          autoRampDuration={0.3}
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 pointer-events-none">
          <div className="max-w-3xl">
            {/* Heading */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight select-none 
  [text-shadow:0_0_15px_rgba(100,100,255,0.6)] overflow-hidden whitespace-nowrap pr-2"
            >
              <TextType
                text={["Code.", "Build.", "Evolve.", "Code. Build. Evolve."]}
                typingSpeed={100}
                deletingSpeed={50}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                loop={true}
              />
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 leading-relaxed drop-shadow-lg select-none">
              I engineer next-gen web experiences — blending full-stack logic
              with futuristic, interactive design.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 pointer-events-auto">
              {/* Scroll to Work section */}
              <a
                href="#work"
                className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-purple-400/30 hover:scale-105"
              >
                Explore My Work
              </a>

              {/* Scroll to Contact section */}
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 shadow-lg hover:shadow-purple-400/30 hover:scale-105"
              >
                Let&apos;s Build Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
