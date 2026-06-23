import { useEffect, useState } from "react";

interface NavItem {
  path: string;
  title: string;
}

const NAV_ITEMS: NavItem[] = [
  { path: "#top", title: "Home" },
  { path: "#experience", title: "Experience" },
  { path: "#projects", title: "Projects" },
  { path: "#education", title: "Education" },
  { path: "#about", title: "About" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.path.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 z-20 w-full transition-all duration-300
      ${isScrolled || menuOpen ? "bg-gray-800 bg-opacity-90 shadow-lg backdrop-blur-md" : "mt-5 bg-transparent"}`}
    >
      <div className="flex items-center justify-between px-4 py-1 mx-auto max-w-4xl">
        <img src="profile.webp" className="rounded-full size-10" alt="Rober" />

        {/* Desktop nav */}
        <nav className="hidden md:flex flex-row items-center gap-x-8 opacity-85">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.path.replace("#", "");
            return (
              <a
                className={`relative block px-2 py-2 text-sm transition-colors duration-200
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-full after:transition-all after:duration-300
                  ${
                    isActive
                      ? "text-white after:w-full after:bg-blue-500"
                      : "text-gray-400 hover:text-white after:w-0 hover:after:w-full hover:after:bg-gray-500"
                  }`}
                key={item.path}
                href={item.path}
              >
                {item.title}
              </a>
            );
          })}
          <a
            href="/portfolio/cv.pdf"
            download
            className="flex items-center gap-x-1.5 px-3 py-1.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
        </nav>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <nav
        className={`md:hidden flex flex-col px-4 pb-4 gap-y-2 transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.path.replace("#", "");
          return (
            <a
              className={`block px-2 py-2 text-sm transition-colors border-l-2 ${
                isActive
                  ? "text-white border-blue-500 pl-3"
                  : "text-gray-400 border-transparent hover:text-white pl-3"
              }`}
              key={item.path}
              href={item.path}
              onClick={closeMenu}
            >
              {item.title}
            </a>
          );
        })}
        <a
          href="/portfolio/cv.pdf"
          download
          onClick={closeMenu}
          className="flex items-center gap-x-1.5 px-3 py-1.5 mt-1 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-colors w-fit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download CV
        </a>
      </nav>
    </header>
  );
};
