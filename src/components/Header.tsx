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
  { path: "#contact", title: "Contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled more than 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed flex top-0 z-10 w-full transition-all duration-300 
      ${isScrolled ? "bg-gray-800 bg-opacity-90 shadow-lg backdrop-blur-md" : "mt-5 bg-transparent"}`}
    >
      <div className="flex items-center justify-center mx-auto">
        <img
          src="/src/assets/profile.webp"
          className="rounded-full size-12 "
          alt="Rober"
        />
        <nav className="flex flex-row gap-x-10 opacity-85 ml-5">
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
      </div>
    </header>
  );
};
