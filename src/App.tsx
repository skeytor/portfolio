import { SectionContainer } from "./components/SectionContainer";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import Briefcase from "./icons/Briefcase";
import { Projects } from "./components/Projects";
import { FolderIcon } from "./icons/Folder";
import { About } from "./components/About";
import { ProgressCheckIcon } from "./icons/ProgressCheck";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <SectionContainer id="top" className="py-44 pb-24">
        <Hero />
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
          <ProgressCheckIcon className="size-7" />
          About
        </h2>
        <About />
      </SectionContainer>
      <Footer />
    </>
  );
};
