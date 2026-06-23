import { SectionContainer } from "./components/SectionContainer";
import { Experience } from "./pages/Experience";
import { Header } from "./components/Header";
import Briefcase from "./icons/Briefcase";
import { FolderIcon } from "./icons/Folder";
import { About } from "./pages/About";
import { ProgressCheckIcon } from "./icons/ProgressCheck";
import { Hero } from "./pages/Hero";
import { Footer } from "./components/Footer";
import { Projects } from "./pages/Projects";
import { Education } from "./pages/Education";
import { TechStack } from "./pages/TechStack";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <SectionContainer id="top" className="py-28 sm:py-44 pb-16 sm:pb-24">
          <Hero />
        </SectionContainer>
        <SectionContainer id="experience">
          <h2 className="text-2xl font-semibold flex gap-x-1">
            <Briefcase className="size-7" />
            Professional Experience
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
        <SectionContainer id="stack">
          <h2 className="text-2xl font-semibold flex gap-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
            </svg>
            Tech Stack
          </h2>
          <TechStack />
        </SectionContainer>
        <SectionContainer id="education">
          <h2 className="text-2xl font-semibold flex gap-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
            Education
          </h2>
          <Education />
        </SectionContainer>
        <SectionContainer id="about">
          <h2 className="text-2xl font-semibold flex gap-x-1">
            <ProgressCheckIcon className="size-7" />
            About
          </h2>
          <About />
        </SectionContainer>
      </main>
      <Footer />
    </>
  );
};
