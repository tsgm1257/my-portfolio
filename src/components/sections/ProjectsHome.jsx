import Section from "../Section.jsx";
import { Link } from "react-router";
import { FaFolderOpen } from "react-icons/fa6";
import { projects } from "../../data/projects.js";
import ProjectCard from "../ProjectCard.jsx";
import { motion } from "motion/react";
import { staggerContainer, staggerItem } from "../anim.js";

export default function ProjectsHome() {
  const featured = [...projects].slice(0, 3); // pick first 3 (or sort as you like)

  return (
    <Section id="projects">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
        className="card bg-base-100 border border-base-200 shadow-xl rounded-3xl"
      >
        <div className="card-body p-6 md:p-10">
          <motion.div
            className="flex items-center gap-3 mb-4"
            variants={staggerItem}
          >
            <FaFolderOpen className="text-xl" />
            <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {featured.map((p) => (
              <motion.div
                key={p.slug}
                variants={staggerItem}
                className="h-full"
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-right mt-6">
            <Link to="/projects" className="link link-primary">
              See all projects →
            </Link>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
