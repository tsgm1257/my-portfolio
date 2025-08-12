import Section from "../Section.jsx";
import { motion } from "motion/react";
import { staggerContainer, staggerItem } from "../anim.js";
import { education } from "../../data/education.js";
import {
  FaGraduationCap,
  FaCalendarDays,
  FaLocationDot,
} from "react-icons/fa6";

function EduPanel({ item }) {
  return (
    <motion.li
      variants={staggerItem}
      className="relative flex gap-4 md:gap-6"
      aria-label={`${item.degree} at ${item.institution}`}
    >
      {/* Timeline dot + vertical line */}
      <div className="relative flex flex-col items-center pt-2">
        <div className="w-3 h-3 rounded-full bg-primary border-4 border-base-100 shadow" />
        {/* vertical line – stretches naturally via flex; hidden on last by parent */}
        <div className="flex-1 w-px bg-base-300 mt-2" />
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="rounded-2xl border bg-base-100 p-4 md:p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                {item.degree}
              </h3>
              <p className="opacity-80">{item.institution}</p>
            </div>
            <span className="badge badge-outline">{item.level}</span>
          </div>

          {/* meta */}
          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm opacity-80">
            {item.period && (
              <span className="inline-flex items-center gap-2">
                <FaCalendarDays /> {item.period}
              </span>
            )}
            {item.location && (
              <span className="inline-flex items-center gap-2">
                <FaLocationDot /> {item.location}
              </span>
            )}
            {item.gpa && (
              <span className="inline-flex items-center gap-2">
                GPA: {item.gpa}
              </span>
            )}
          </div>

          {/* coursework */}
          {item.coursework?.length > 0 && (
            <div className="mt-4">
              <h4 className="font-medium mb-1">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {item.coursework.map((c) => (
                  <span key={c} className="badge badge-ghost">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* highlights */}
          {item.highlights?.length > 0 && (
            <div className="mt-4">
              <h4 className="font-medium mb-1">Highlights</h4>
              <ul className="list-disc pl-5 space-y-1">
                {item.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          )}

          {/* link */}
          {item.link && (
            <div className="mt-4">
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="link link-primary"
              >
                Institution website →
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.li>
  );
}

export default function Education() {
  // If nothing above HSC, you can conditionally skip rendering this section.
  const items = education;

  if (!items || items.length === 0) return null;

  return (
    <Section id="education">
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
            className="flex items-center gap-3 mb-6"
            variants={staggerItem}
          >
            <FaGraduationCap className="text-xl" />
            <h2 className="text-2xl md:text-3xl font-semibold">Education</h2>
          </motion.div>

          {/* Timeline */}
          <ul className="space-y-8">
            {items.map((item, idx) => (
              <div key={idx} className="relative">
                <EduPanel item={item} />
                {/* Hide the connector line for the last item by overlaying a white block */}
                {idx === items.length - 1 && (
                  <div
                    className="absolute left-[7px] bottom-0 translate-y-1 h-6 w-[2px] bg-base-100"
                    aria-hidden
                  />
                )}
              </div>
            ))}
          </ul>
        </div>
      </motion.div>
    </Section>
  );
}
