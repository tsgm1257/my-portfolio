import Section from "../Section.jsx";
import { useState, useRef, useEffect, useMemo } from "react";
import { FaCode } from "react-icons/fa6";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiFirebase,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiPostman,
} from "react-icons/si";
import { motion } from "motion/react";
import { staggerContainer, staggerItem } from "../anim.js";
import { demos } from "../../data/demoCode.js";

function SkillChip({ item, onPick }) {
  const { name, Icon, demo } = item;
  return (
    <motion.button
      type="button"
      title={name}
      variants={staggerItem}
      onClick={() => onPick(demo)}
      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm tooltip tooltip-bottom bg-neutral text-neutral-content hover:scale-105 transition"
      data-tip={name}
      aria-label={name}
    >
      <Icon className="text-2xl" />
    </motion.button>
  );
}

const categories = [
  {
    key: "languages",
    title: "Languages",
    items: [
      { name: "JavaScript", Icon: SiJavascript, demo: "javascript" },
      { name: "TypeScript", Icon: SiTypescript, demo: "typescript" },
    ],
  },
  {
    key: "frontend",
    title: "Frontend",
    items: [
      { name: "HTML5", Icon: SiHtml5, demo: "html" },
      { name: "CSS3", Icon: SiCss3, demo: "css" },
      { name: "React", Icon: SiReact, demo: "react" },
      { name: "Redux", Icon: SiRedux, demo: "redux" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, demo: "tailwind" },
      { name: "Firebase", Icon: SiFirebase, demo: "firebase" },
    ],
  },
  {
    key: "backend",
    title: "Backend & Database",
    items: [
      { name: "Node.js", Icon: SiNodedotjs, demo: "node" },
      { name: "Express", Icon: SiExpress, demo: "express" },
      { name: "MongoDB", Icon: SiMongodb, demo: "mongodb" },
      { name: "PostgreSQL", Icon: SiPostgresql, demo: "postgres" },
    ],
  },
  {
    key: "tools",
    title: "Tools",
    items: [
      { name: "Git", Icon: SiGit, demo: "git" },
      { name: "GitHub", Icon: SiGithub, demo: null },
      { name: "Vercel", Icon: SiVercel, demo: null },
      { name: "Netlify", Icon: SiNetlify, demo: null },
      { name: "Postman", Icon: SiPostman, demo: null },
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState("languages");
  const [picked, setPicked] = useState(null);
  const demoRef = useRef(null);

  useEffect(() => setPicked(null), [active]);
  useEffect(() => {
    if (picked && demoRef.current)
      demoRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [picked]);

  const current = useMemo(
    () => categories.find((c) => c.key === active) ?? categories[0],
    [active]
  );
  const demo = picked ? demos[picked] : null;

  const copyCode = async () => {
    if (!demo) return;
    try {
      await navigator.clipboard.writeText(demo.code);
    } catch {}
  };

  return (
    <Section id="skills">
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
            <FaCode className="text-xl" />
            <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>
          </motion.div>

          {/* Pills */}
          <motion.div
            className="flex flex-wrap gap-2"
            variants={staggerItem}
            role="tablist"
            aria-label="Skill categories"
          >
            {categories.map((c) => (
              <button
                key={c.key}
                type="button"
                role="tab"
                aria-selected={c.key === active}
                onClick={() => setActive(c.key)}
                className={`btn btn-sm ${
                  c.key === active ? "btn-primary" : "btn-ghost"
                } rounded-full`}
              >
                {c.title}
              </button>
            ))}
          </motion.div>

          {/* Icons */}
          <motion.div
            key={current.key}
            className="mt-6 flex flex-wrap gap-3"
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            {current.items.map((item) => (
              <SkillChip key={item.name} item={item} onPick={setPicked} />
            ))}
          </motion.div>

          {/* Micro-demo */}
          {demo && (
            <motion.div
              ref={demoRef}
              className="mt-8 card bg-base-200 rounded-2xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="card-body">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <h3 className="card-title">{demo.title}</h3>
                    {demo.lang && (
                      <span className="badge badge-outline">{demo.lang}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="btn btn-ghost btn-sm" onClick={copyCode}>
                      Copy
                    </button>
                    <button
                      className="btn btn-ghost btn-sm"
                      onClick={() => setPicked(null)}
                    >
                      Close
                    </button>
                  </div>
                </div>
                <pre className="mt-3 p-4 rounded-xl bg-base-100 overflow-auto text-sm">
                  <code>{demo.code}</code>
                </pre>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </Section>
  );
}
