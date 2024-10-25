import { Badge } from "./components/Badge";
import { SectionContainer } from "./components/SectionContainer";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import { SocialNetworkSection } from "./components/SocialNetworkSection";
import Briefcase from "./icons/Briefcase";
import { Projects } from "./components/Projects";
import { FolderIcon } from "./icons/Folder";

export const App = () => {
  return (
    <>
      <Header />
      <SectionContainer className="py-44 pb-24">
        <main>
          <h1 className="text-white text-5xl font-bold flex flex-row gap-x-4">
            Hi there! I am Rober
            <a
              href="https://www.linkedin.com/in/rober-guerrero/"
              target="_blank"
              rel="noopener"
              className="flex justify-center items-center"
            >
              <Badge>Avalible to work</Badge>
            </a>
          </h1>
          <h2 className="text-xl">As a software developer fullstack</h2>
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
    </>
  );
};
