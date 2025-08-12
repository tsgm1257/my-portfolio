import { Link } from "react-router";
import StackChips from "./StackChips.jsx";

export default function ProjectCard({ project }) {
  return (
    <div className="card bg-base-100 border border-base-200 hover:shadow-lg transition rounded-2xl h-full">
      <figure className="aspect-video overflow-hidden">
        <img
          src={project.cover}
          alt={`${project.name} cover`}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-start justify-between gap-3">
          <h3 className="card-title text-base md:text-lg">{project.name}</h3>
          {project.released && (
            <span className="badge badge-ghost">{project.released}</span>
          )}
        </div>
        <p className="text-sm opacity-80 line-clamp-2">{project.description}</p>
        <StackChips stack={project.stack?.slice(0, 4) || []} />
        <div className="card-actions justify-end mt-2">
          <Link
            to={`/projects/${project.slug}`}
            className="btn btn-primary btn-sm"
          >
            View More / Details
          </Link>
        </div>
      </div>
    </div>
  );
}
