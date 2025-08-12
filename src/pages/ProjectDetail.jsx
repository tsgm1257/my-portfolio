import { useParams, Link } from "react-router";
import Section from "../components/Section.jsx";
import { projects } from "../data/projects.js";
import StackChips from "../components/StackChips.jsx";
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaFolderOpen,
} from "react-icons/fa6";

export default function ProjectDetail() {
  const { slug } = useParams();
  const idx = projects.findIndex((p) => p.slug === slug);
  const project = idx >= 0 ? projects[idx] : null;

  if (!project) {
    return (
      <Section id="project-not-found">
        <div className="card bg-base-100 border border-base-200 shadow-xl rounded-3xl">
          <div className="card-body">
            <h1 className="text-2xl md:text-3xl font-semibold mb-4">
              Project not found
            </h1>
            <Link to="/projects" className="btn btn-primary">
              Back to Projects
            </Link>
          </div>
        </div>
      </Section>
    );
  }

  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <Section id={`project-${slug}`}>
      <div className="card bg-base-100 border border-base-200 shadow-xl rounded-3xl">
        <div className="card-body p-6 md:p-10">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">{project.name}</h1>
              {project.year && <p className="opacity-70">{project.year}</p>}
            </div>
            <Link to="/projects" className="btn btn-ghost btn-sm">
              <FaFolderOpen className="mr-2" /> All Projects
            </Link>
          </div>

          {/* Cover */}
          <figure className="aspect-video rounded-2xl overflow-hidden border mt-4">
            <img
              src={project.cover}
              alt={`${project.name} cover`}
              className="w-full h-full object-cover"
            />
          </figure>

          {/* Gallery */}
          {project.images?.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
              {project.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${project.name} screenshot ${i + 1}`}
                  className="rounded-xl border object-cover w-full h-48"
                  loading="lazy"
                />
              ))}
            </div>
          )}

          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            {/* LEFT: Overview, Challenges, Improvements */}
            <div className="lg:col-span-2 space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-2">Overview</h2>
                <p>{project.description}</p>
              </section>

              {project.challenges?.length > 0 && (
                <section>
                  <h2 className="text-xl font-semibold mb-2">Challenges</h2>
                  <ul className="list-disc pl-6 space-y-1">
                    {project.challenges.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </section>
              )}

              {project.improvements?.length > 0 && (
                <section>
                  <h2 className="text-xl font-semibold mb-2">
                    Improvements & Future Plans
                  </h2>
                  <ul className="list-disc pl-6 space-y-1">
                    {project.improvements.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* RIGHT: Tech stack + links */}
            <aside className="space-y-6">
              <section className="card bg-base-200">
                <div className="card-body">
                  <h2 className="card-title">Tech Stack</h2>
                  <StackChips stack={project.stack || []} />
                </div>
              </section>

              <section className="card bg-base-200">
                <div className="card-body space-y-2">
                  <h2 className="card-title">Links</h2>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary btn-sm w-full"
                    >
                      Live Project
                    </a>
                  )}
                  {project.githubClient && (
                    <a
                      href={project.githubClient}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline btn-sm w-full"
                    >
                      GitHub (Client)
                    </a>
                  )}
                </div>
              </section>
            </aside>
          </div>

          {/* Prev/Next */}
          <div className="mt-10 flex items-center justify-between">
            <Link to={`/projects/${prev.slug}`} className="btn btn-ghost">
              <FaArrowLeftLong className="mr-2" /> {prev.name}
            </Link>
            <Link to={`/projects/${next.slug}`} className="btn btn-ghost">
              {next.name} <FaArrowRightLong className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
