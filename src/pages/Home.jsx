import Hero from "../components/sections/Hero.jsx";
import About from "../components/sections/About.jsx";
import Skills from "../components/sections/Skills.jsx";
import Education from "../components/sections/Education.jsx";
import ProjectsHome from "../components/sections/ProjectsHome.jsx";
import Contact from "../components/sections/Contact.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Education />
      <ProjectsHome />
      <Contact />
    </>
  );
}
