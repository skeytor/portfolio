interface NavItems {
  path: string;
  title: string;
}
const NAVITEMS: NavItems[] = [
  {
    path: "#top",
    title: "Home",
  },
  {
    path: "#about",
    title: "About",
  },
  {
    path: "#experience",
    title: "Experience",
  },
  {
    path: "#projects",
    title: "Projects",
  },
  {
    path: "#contact",
    title: "Contact",
  },
];
export const Header = () => {
  return (
    <header className="flex justify-between items-center py-3 w-[1120px] mx-auto">
      <img
        src="/src/assets/profile.jpeg"
        className="rounded-full w-12 h-12"
        alt="Rober"
      />
      <nav className="flex flex-row gap-x-10 opacity-85">
        {NAVITEMS.map((item) => (
          <a 
            key={item.path} href={item.path}>
            {item.title}
          </a>
        ))}
      </nav>
    </header>
  );
};
