export const Footer = () => {
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  return (
    <footer className="opacity-80 m-4 min-[375px]:pl-4 md:pl-0 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center">
      <div className="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4">
        <span className="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90">
          © {currentYear} Rober Guerrero.{" "}
          <a href="https://midu.dev/" className="hover:underline">
            Inspired by midudev
          </a>
        </span>
      </div>
    </footer>
  );
};
