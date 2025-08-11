import Section from "../Section.jsx";
import { Link } from "react-router";
import { FaFolderOpen } from "react-icons/fa6";
import { projects } from "../../data/projects.js";

export default function ProjectsHome() {
  const featured = projects.slice(0, 3); // take any 3
  return (
    <Section id="projects">
      <div className="flex items-center gap-3 mb-6">
        <FaFolderOpen /><h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((p) => (
          <div key={p.slug} className="card bg-base-200 hover:shadow-lg transition">
            <figure className="aspect-video overflow-hidden">
              <img src={p.cover} alt={`${p.name} cover`} className="object-cover w-full h-full" loading="lazy" />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{p.name}</h3>
              <p className="line-clamp-2">{p.description}</p>
              <div className="card-actions justify-end">
                <Link to={`/projects/${p.slug}`} className="btn btn-primary btn-sm">View More / Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-right mt-6">
        <Link to="/projects" className="link link-primary">See all projects →</Link>
      </div>
    </Section>
  );
}
