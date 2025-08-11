import { Link } from "react-router";

export default function ProjectCard({ project }) {
  return (
    <div className="card bg-base-200 hover:shadow-lg transition">
      <figure className="aspect-video overflow-hidden">
        <img
          src={project.cover}
          alt={`${project.name} cover`}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{project.name}</h3>
        <p className="line-clamp-2">{project.description}</p>
        <div className="card-actions justify-end">
          <Link to={`/projects/${project.slug}`} className="btn btn-primary btn-sm">
            View More / Details
          </Link>
        </div>
      </div>
    </div>
  );
}
