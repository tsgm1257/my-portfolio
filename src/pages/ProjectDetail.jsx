import { useParams, Link } from "react-router";
import Section from "../components/Section.jsx";
import { projects } from "../data/projects.js";
import { motion } from "motion/react";
import { staggerContainer, staggerItem } from "../components/anim.js";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Section id="project-not-found">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">
          Project not found
        </h1>
        <Link to="/projects" className="btn btn-primary">
          Back to Projects
        </Link>
      </Section>
    );
  }

  return (
    <Section id={`project-${slug}`}>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.name}</h1>

      <figure className="aspect-video rounded-2xl overflow-hidden mb-6 border">
        <img
          src={project.cover}
          alt={`${project.name} cover`}
          className="w-full h-full object-cover"
        />
      </figure>

      {project.images?.length > 0 && (
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {project.images.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`${project.name} screenshot ${i + 1}`}
              className="rounded-xl border object-cover w-full h-48"
              loading="lazy"
              variants={staggerItem}
            />
          ))}
        </motion.div>
      )}

      {/* rest unchanged */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* left column ... */}
        {/* right column ... */}
      </div>
    </Section>
  );
}
