export const About = () => {
  return (
    <article className="mt-5 flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row">
      <div className="[&>p]:mb-4 [&>p>strong]:text-sky-500 dark:[&>p>strong]:text-sky-200 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1">
        <p>
          My name is <strong>Rober Leon Guerrero Mendoza</strong>. Yes, Leon (Lion) is my
          second name. I grew up in a small town near the city, and I graduated from university
          with a degree in <strong>System Engineering</strong>.
        </p>
        <p>
          As a kid I was always the one taking things apart just to understand how they work.
          That curiosity never went away, it just found a better outlet. There's something
          I genuinely love about programming: <strong>your imagination is your only limit</strong>.
        </p>
        <p>
          Today, <strong>I work as a software engineer</strong>, and honestly,
          I still feel that same excitement I had when I wrote my first lines of code.
        </p>
      </div>
      <img
        width="200"
        height="200"
        src="profile.webp"
        alt="Rober Guerrero"
        className="order-1 object-cover w-64 h-full p-1 md:order-2 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20 "

      />
    </article>
  );
};
