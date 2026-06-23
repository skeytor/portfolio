import { useEffect, useState } from "react";

interface NavItem {
  path: string;
  title: string;
}

const NAV_ITEMS: NavItem[] = [
  { path: "#top", title: "Home" },
  { path: "#experience", title: "Experience" },
  { path: "#projects", title: "Projects" },
  { path: "#about", title: "About" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        <nav className="hidden md:flex flex-row gap-x-8 opacity-85">
          {NAV_ITEMS.map((item) => (
            <a
              className="relative block px-2 py-2 text-black transition hover:text-blue-500 dark:text-white dark:hover:text-blue-500"
              key={item.path}
              href={item.path}
            >
              {item.title}
            </a>
          ))}
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
        className={`md:hidden flex flex-col px-4 pb-4 gap-y-2 transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
      >
        {NAV_ITEMS.map((item) => (
          <a
            className="block px-2 py-2 text-white hover:text-blue-400 transition"
            key={item.path}
            href={item.path}
            onClick={closeMenu}
          >
            {item.title}
          </a>
        ))}
      </nav>
    </header>
  );
};
