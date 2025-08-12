import Section from "../Section.jsx";
import { FaUser } from "react-icons/fa6";
import { motion } from "motion/react";
import { staggerContainer, staggerItem } from "../anim.js";

export default function About() {
  return (
    <Section id="about">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="card bg-base-100 border border-base-200 shadow-xl rounded-3xl"
      >
        <div className="card-body p-6 md:p-10">
          {/* Heading */}
          <motion.div
            className="flex items-center gap-3 mb-4"
            variants={staggerItem}
          >
            <FaUser className="text-xl" />
            <h2 className="text-2xl md:text-3xl font-semibold">About Me</h2>
          </motion.div>

          {/* Intro / Journey */}
          <motion.div className="space-y-3" variants={staggerItem}>
            <p className="text-base md:text-lg">
              {/* TODO: Replace with your story */}I started my programming
              journey in <strong>20XX</strong>, building small utilities and web
              apps. Over time I shifted toward creating clean UIs and reliable
              APIs that solve real problems.
            </p>
          </motion.div>

          {/* What I enjoy */}
          <motion.div className="mt-6 space-y-2" variants={staggerItem}>
            <h3 className="text-lg md:text-xl font-semibold">What I Enjoy</h3>
            <ul className="list-disc pl-6 space-y-1">
              {/* TODO: Replace with your preferences */}
              <li>Designing responsive, accessible interfaces.</li>
              <li>Building scalable REST APIs with clear contracts.</li>
              <li>Iterating fast with type-safe, maintainable code.</li>
            </ul>
          </motion.div>

          {/* Hobbies / interests */}
          <motion.div className="mt-6 space-y-2" variants={staggerItem}>
            <h3 className="text-lg md:text-xl font-semibold">
              Outside of Code
            </h3>
            <p>
              {/* TODO: Replace with your hobbies */}I enjoy football, community
              service, and teaching. These keep me balanced and sharpen my
              communication and leadership skills.
            </p>
          </motion.div>

          {/* Personality */}
          <motion.div className="mt-6 space-y-2" variants={staggerItem}>
            <h3 className="text-lg md:text-xl font-semibold">Personality</h3>
            <p>
              {/* TODO: Replace with your traits */}
              Pragmatic, detail-oriented, and collaborative. I love clear
              naming, consistent patterns, and small, steady improvements.
            </p>
          </motion.div>

          {/* Quick facts chips (optional) */}
          <motion.div
            className="mt-6 flex flex-wrap gap-2"
            variants={staggerItem}
          >
            {/* TODO: Edit or remove */}
            <span className="badge badge-outline">Remote-friendly</span>
            <span className="badge badge-outline">Open to internships</span>
            <span className="badge badge-outline">Mentoring</span>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
