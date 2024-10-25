import { Badge } from "./components/Badge";
import { SectionContainer } from "./components/SectionContainer";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import { SocialNetworkSection } from "./components/SocialNetworkSection";
import Briefcase from "./icons/Briefcase";
import { Projects } from "./components/Projects";
import { FolderIcon } from "./icons/Folder";
import { About } from "./components/About";

export const App = () => {
  return (
    <>
      <Header />
      <SectionContainer id="top" className="py-44 pb-24">
        <main>
          <h1 className="text-white text-5xl font-bold flex flex-row gap-x-4">
            Hi there!
            <span className="inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent">
              I am Rober
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
          <p className="text-pretty mt-6 text-xl text-gray-800 dark:[&>strong]:text-sky-300 [&>strong]:text-yellow-500 [&>strong]:font-semibold dark:text-gray-300">
            <strong>Software Enginner.</strong> 1+ years of experience
            developing innovate solutions that drive projects{" "}
            <strong>success</strong>, incorporating a critical perspective and
            adherence to industry <strong>best pracitces.</strong>
            <br />I focus on delivering <strong>high-quality </strong> software,
            ensuring both{" "}
            <strong>efficiency </strong> and <strong>sustainability</strong> in
            every development.
          </p>
          <SocialNetworkSection />
        </main>
      </SectionContainer>
      <SectionContainer id="experience">
        <h2 className="text-2xl font-semibold flex gap-x-1">
          <Briefcase className="size-7" />
          Laboral Experience
        </h2>
        <Experience />
      </SectionContainer>
      <SectionContainer id="projects">
        <h2 className="text-2xl font-semibold flex gap-x-1">
          <FolderIcon className="size-7" />
          Projects
        </h2>
        <Projects />
      </SectionContainer>
      <SectionContainer id="about">
        <h2 className="text-2xl font-semibold flex gap-x-1">
          <FolderIcon className="size-7" />
          About
        </h2>
        <About />
      </SectionContainer>
    </>
  );
};
