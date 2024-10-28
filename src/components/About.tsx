export const About = () => {
  return (
    <article className="mt-5 flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row">
      <div className="[&>p]:mb-4 [&>p>strong]:text-sky-500 dark:[&>p>strong]:text-sky-200 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1">
        <p>
          My full name is Rober Leon Guerrero Mendoza. Yes, Leon (Lion) is my
          second name. I graduated from university and grew up in a small town
          near the city.
        </p>
        <p>
          Ever since I was a child, I have always been a{" "}
          <strong>curious person</strong> who loves learning new things. This
          curiosity led me to the amazing world of technology.
        </p>
        <p>
          Today, <strong>I am a software engineer</strong> who enjoys
          programming because it allows me to{" "}
          <strong>create amazing things that help others.</strong>
        </p>
      </div>
      <img
        width="200"
        height="200"
        src="/src/assets/profile.webp"
        alt="Rober Guerrero"
        className="order-1 object-cover w-64 h-full p-1 md:order-2 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20 "

      />
    </article>
  );
};
