import { SectionContainer } from "./components/SectionContainer";
import { Experience } from "./pages/Experience";
import { Header } from "./components/Header";
import Briefcase from "./icons/Briefcase";
import { FolderIcon } from "./icons/Folder";
import { About } from "./pages/About";
import { ProgressCheckIcon } from "./icons/ProgressCheck";
import { Hero } from "./pages/Hero";
import { Footer } from "./components/Footer";
// import { Contact } from "./pages/Contact";
// import { ProfileIcon } from "./icons/Profile";
import { Projects } from "./pages/Projects";

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
        <SectionContainer id="about">
          <h2 className="text-2xl font-semibold flex gap-x-1">
            <ProgressCheckIcon className="size-7" />
            About
          </h2>
          <About />
        </SectionContainer>
        {/* <SectionContainer id="contact">
          <h2 className="text-2xl font-semibold flex gap-x-1">
            <ProfileIcon className="size-7" />
            Contact Me
          </h2>
          <Contact />
        </SectionContainer> */}
      </main>
      <Footer />
    </>
  );
};
