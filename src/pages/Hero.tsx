import { Badge } from "../components/Badge";
import { SocialNetworkSection } from "../components/SocialNetworkSection";

export const Hero = () => {
  return (
    <div className="max-w-xl">
      <h1 className="text-white text-2xl sm:text-4xl font-bold flex flex-wrap gap-x-4 gap-y-2">
        Hi there!
        <span className="inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent">
          I'm Rober
        </span>
        <a
          href="https://www.linkedin.com/in/rober-guerrero/"
          target="_blank"
          rel="noopener"
          className="flex justify-center items-center"
        >
          <Badge>Available to work</Badge>
        </a>
      </h1>
      <p className="text-pretty mt-6 text-base sm:text-xl text-gray-800 dark:[&>strong]:text-sky-300 [&>strong]:text-yellow-500 [&>strong]:font-semibold dark:text-gray-300">
        <strong>Software Engineer</strong> with 2 years of experience developing
        innovative solutions that drive projects <strong>success</strong>,
        incorporating a critical perspective and adherence to industry{" "}
        <strong>best practices.</strong>
        <br />I focus on delivering <strong>high-quality </strong> software,
        ensuring both <strong>efficiency </strong> and{" "}
        <strong>sustainability</strong> in every development.
      </p>
      <SocialNetworkSection />
    </div>
  );
};
