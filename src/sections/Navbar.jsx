import { useState, useEffect, useRef } from "react";
import GooeyNav from "../components/GooeyNav";

const navLinks = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "About", href: "#about" },
  { id: 3, label: "Work", href: "#work" },

  { id: 5, label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const isManualClick = useRef(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      // Skip scroll detection temporarily after manual click
      if (isManualClick.current) return;

      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );

      const scrollPosition = window.scrollY + 200;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle manual nav click
  const handleNavClick = (index) => {
    isManualClick.current = true;
    setActiveSection(index);

    // Re-enable scroll detection after animation completes
    setTimeout(() => {
      isManualClick.current = false;
    }, 1000);
  };

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div
        className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl"
        style={{ overflow: "visible" }}
      >
        <div className="flex justify-between items-center px-6 py-2.5">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative overflow-visible">
              <img
                src="/assets/vssslogo.png"
                alt="Logo"
                className="object-contain absolute inset-0 transform scale-150 z-10"
              />
            </div>
            <a
              href="/"
              className="text-white text-xl font-semibold hover:text-purple-300 transition-colors relative z-10"
            >
              Vansh
            </a>
          </div>

          <button
            onClick={toggleMenu}
            className="text-white hover:text-purple-300 focus:outline-none sm:hidden flex relative z-10"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <div className="sm:block hidden">
            <GooeyNav
              items={navLinks}
              particleCount={12}
              particleDistances={[60, 5]}
              particleR={70}
              initialActiveIndex={activeSection}
              animationTime={500}
              timeVariance={200}
              colors={[1, 2, 3, 4]}
              onNavClick={handleNavClick}
            />
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out sm:hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-6 pb-4 border-t border-white/10">
            <ul className="flex flex-col gap-3 pt-4">
              {navLinks.map((item, index) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="block text-white/90 hover:text-white hover:bg-white/10 transition-all px-4 py-2 rounded-lg font-medium"
                    onClick={() => {
                      closeMenu();
                      handleNavClick(index);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
