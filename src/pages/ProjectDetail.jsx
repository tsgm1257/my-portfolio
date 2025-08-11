import { useParams, Link } from "react-router";
import Section from "../components/Section.jsx";
import { projects } from "../data/projects.js";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <Section id="project-not-found">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">Project not found</h1>
        <Link to="/projects" className="btn btn-primary">Back to Projects</Link>
      </Section>
    );
    }

  return (
    <Section id={`project-${slug}`}>
      {/* 1) Project name */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.name}</h1>

      {/* 2) Project image (cover) */}
      <figure className="aspect-video rounded-2xl overflow-hidden mb-6 border">
        <img src={project.cover} alt={`${project.name} cover`} className="w-full h-full object-cover" />
      </figure>

      {/* Optional gallery */}
      {project.images?.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
          {project.images.map((src, i) => (
            <img key={i} src={src} alt={`${project.name} screenshot ${i+1}`} className="rounded-xl border object-cover w-full h-48" loading="lazy" />
          ))}
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* 3) Brief description */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p>{project.description}</p>
          </section>

          {/* 4) Challenges faced */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Challenges</h2>
            <ul className="list-disc pl-6 space-y-1">
              {project.challenges.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </section>

          {/* 5) Improvements / future plans */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Improvements & Future Plans</h2>
            <ul className="list-disc pl-6 space-y-1">
              {project.improvements.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </section>
        </div>

        <aside className="space-y-6">
          {/* 6) Main tech stack */}
          <section className="card bg-base-200">
            <div className="card-body">
              <h2 className="card-title">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map(s => (
                  <span key={s} className="badge badge-outline">{s}</span>
                ))}
              </div>
            </div>
          </section>

          {/* 7) Live link & 8) GitHub client link */}
          <section className="card bg-base-200">
            <div className="card-body space-y-2">
              <h2 className="card-title">Links</h2>
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-sm w-full"
              >
                Live Project
              </a>
              <a
                href={project.githubClient}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline btn-sm w-full"
              >
                GitHub (Client)
              </a>
            </div>
          </section>

          <Link to="/projects" className="btn btn-ghost w-full">← Back to Projects</Link>
        </aside>
      </div>
    </Section>
  );
}
