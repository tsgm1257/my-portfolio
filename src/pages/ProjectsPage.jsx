import Section from "../components/Section.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";
import { FaFolderOpen } from "react-icons/fa6";

export default function ProjectsPage() {
  return (
    <Section id="projects-page" className="pt-4">
      <div className="flex items-center gap-3 mb-6">
        <FaFolderOpen />
        <h1 className="text-2xl md:text-3xl font-semibold">All Projects</h1>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </Section>
  );
}
