import Section from "../Section.jsx";
import { motion } from "motion/react";
import { staggerContainer, staggerItem } from "../anim.js";
import { site } from "../../data/site.js";
import { FaUser } from "react-icons/fa6";

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
          {/* Title with icon (matches other sections) */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            variants={staggerItem}
          >
            <FaUser className="text-xl" />
            <h2 className="text-2xl md:text-3xl font-semibold">About Me</h2>
          </motion.div>

          {/* Layout */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: narrative */}
            <div className="lg:col-span-2 space-y-6">
              {/* Intro */}
              <motion.p
                className="text-base md:text-lg opacity-90"
                variants={staggerItem}
              >
                {site.intro}
              </motion.p>

              {/* Journey */}
              {site.journey?.length > 0 && (
                <motion.section variants={staggerItem}>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    My Programming Journey
                  </h3>
                  <ul className="list-disc pl-6 space-y-1">
                    {site.journey.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </motion.section>
              )}

              {/* Enjoy */}
              {site.enjoy?.length > 0 && (
                <motion.section variants={staggerItem}>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    What I Enjoy
                  </h3>
                  <ul className="list-disc pl-6 space-y-1">
                    {site.enjoy.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </motion.section>
              )}

              {/* Hobbies */}
              {site.hobbies?.length > 0 && (
                <motion.section variants={staggerItem}>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    Outside of Code
                  </h3>
                  <p>{site.hobbies.join(" · ")}</p>
                </motion.section>
              )}

              {/* Personality */}
              {site.traits?.length > 0 && (
                <motion.section variants={staggerItem}>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    Personality
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {site.traits.map((t, i) => (
                      <span key={i} className="badge badge-outline">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.section>
              )}
            </div>

            {/* Right: quick facts */}
            <motion.aside className="space-y-4" variants={staggerItem}>
              <div className="card bg-base-200">
                <div className="card-body">
                  <h4 className="card-title">Quick Facts</h4>
                  <div className="flex flex-wrap gap-2">
                    {(site.quickFacts || []).map((q, i) => (
                      <span key={i} className="badge">
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
