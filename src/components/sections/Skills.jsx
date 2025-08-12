// src/components/sections/Skills.jsx
import Section from "../Section.jsx";
import { useState, useRef, useEffect, useMemo, useCallback } from "react";
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

/* -------------------- chip -------------------- */
function SkillChip({ item, onPick }) {
  const { name, Icon, demo } = item;
  const clickable = Boolean(demo);
  return (
    <motion.button
      type="button"
      title={name}
      variants={staggerItem}
      onClick={() => clickable && onPick(demo)}
      className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm tooltip tooltip-bottom
        ${
          clickable ? "hover:scale-105 transition" : ""
        } bg-neutral text-neutral-content`}
      data-tip={name}
      aria-label={name}
    >
      <Icon className="text-2xl" />
    </motion.button>
  );
}

/* -------------------- data -------------------- */
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
      { name: "Git", Icon: SiGit, demo: "git" }, // only Tools demo
      { name: "GitHub", Icon: SiGithub, demo: null },
      { name: "Vercel", Icon: SiVercel, demo: null },
      { name: "Netlify", Icon: SiNetlify, demo: null },
      { name: "Postman", Icon: SiPostman, demo: null },
    ],
  },
];

const ORDER = categories.map((c) => c.key);
const DURATION_MS = 3800; // per-snippet time
const PROGRESS_TICK = 40; // ms

/* -------------------- component -------------------- */
export default function Skills() {
  const [active, setActive] = useState(ORDER[0]);
  const [catIndex, setCatIndex] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);
  const [picked, setPicked] = useState(null);

  // progress / pause bookkeeping
  const [progress, setProgress] = useState(0);
  const [accMs, setAccMs] = useState(0);
  const [lastResumeAt, setLastResumeAt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const cardRef = useRef(null);
  const demoRef = useRef(null);

  // derived
  const currentCat = useMemo(
    () => categories.find((c) => c.key === active) ?? categories[0],
    [active]
  );
  const currentDemos = useMemo(
    () => (currentCat?.items ?? []).filter((i) => Boolean(i.demo)),
    [currentCat]
  );
  const demo = picked ? demos[picked] : null;

  /* ---- pause when section is off-screen ---- */
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) =>
        setIsVisible(entry.isIntersecting && entry.intersectionRatio >= 0.3),
      { threshold: [0, 0.3, 1] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!picked) return;
    if (isVisible) {
      setLastResumeAt(Date.now());
    } else {
      setAccMs((prev) => prev + (lastResumeAt ? Date.now() - lastResumeAt : 0));
      setLastResumeAt(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible, picked]);

  /* ---- initial: open first available demo ---- */
  useEffect(() => {
    const firstCatIdx = categories.findIndex((c) =>
      c.items.some((i) => i.demo)
    );
    const idx = firstCatIdx >= 0 ? firstCatIdx : 0;
    const cat = categories[idx];
    const firstDemoItem = cat.items.find((i) => i.demo) ?? null;

    setActive(cat.key);
    setCatIndex(idx);
    setItemIndex(0);
    setPicked(firstDemoItem?.demo ?? null);

    setAccMs(0);
    setLastResumeAt(null);
    setProgress(0);
  }, []);

  /* -------------------- stable helpers -------------------- */
  const scrollDemoIntoView = useCallback(() => {
    if (!demoRef.current) return;
    demoRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, []);

  const goToNextTabWithDemo = useCallback(
    (userInitiated = false) => {
      for (let step = 1; step <= ORDER.length; step++) {
        const idx = (catIndex + step) % ORDER.length;
        const targetCat = categories.find((c) => c.key === ORDER[idx]);
        if (!targetCat) continue;
        const firstDemoItem = targetCat.items.find((i) => i.demo);
        if (firstDemoItem) {
          setActive(targetCat.key);
          setCatIndex(idx);
          setItemIndex(0);
          setPicked(firstDemoItem.demo);
          if (userInitiated) setTimeout(scrollDemoIntoView, 0);
          return;
        }
      }
      setPicked(null); // nothing left with demos
    },
    [catIndex, scrollDemoIntoView]
  );

  const advance = useCallback(
    (userInitiated = false) => {
      if (currentDemos.length === 0) {
        goToNextTabWithDemo(userInitiated);
        return;
      }
      const nextItemIndex = itemIndex + 1;
      if (nextItemIndex < currentDemos.length) {
        setItemIndex(nextItemIndex);
        setPicked(currentDemos[nextItemIndex].demo);
      } else {
        goToNextTabWithDemo(userInitiated);
      }
      if (userInitiated) setTimeout(scrollDemoIntoView, 0);
    },
    [currentDemos, itemIndex, goToNextTabWithDemo, scrollDemoIntoView]
  );

  /* ---- autoplay tick (respects visibility) ---- */
  useEffect(() => {
    if (!picked) return;
    const id = setInterval(() => {
      const elapsed =
        accMs + (isVisible && lastResumeAt ? Date.now() - lastResumeAt : 0);
      const pct = Math.min(100, (elapsed / DURATION_MS) * 100);
      setProgress(pct);
      if (elapsed >= DURATION_MS) {
        clearInterval(id);
        advance(false); // autoplay
      }
    }, PROGRESS_TICK);
    return () => clearInterval(id);
  }, [picked, accMs, lastResumeAt, isVisible, active, advance]);

  // reset timers when snippet changes
  useEffect(() => {
    if (!picked) return;
    setAccMs(0);
    setLastResumeAt(isVisible ? Date.now() : null);
    setProgress(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [picked]);

  /* -------------------- user actions -------------------- */
  const onTabClick = (key) => {
    const idx = ORDER.indexOf(key);
    const cat = categories[idx];
    setActive(key);
    setCatIndex(idx);
    const firstDemoItem = cat.items.find((i) => i.demo);
    setItemIndex(0);
    setPicked(firstDemoItem ? firstDemoItem.demo : null);
    setProgress(0);
    setAccMs(0);
    setLastResumeAt(isVisible ? Date.now() : null);
    setTimeout(scrollDemoIntoView, 0);
  };

  const onPick = (demoKey) => {
    if (!demoKey) return;
    const idx = currentDemos.findIndex((i) => i.demo === demoKey);
    setItemIndex(idx >= 0 ? idx : 0);
    setPicked(demoKey);
    setProgress(0);
    setAccMs(0);
    setLastResumeAt(isVisible ? Date.now() : null);
    setTimeout(scrollDemoIntoView, 0);
  };

  const copyCode = async () => {
    if (!demo) return;
    try {
      await navigator.clipboard.writeText(demo.code);
    } catch {
      // Silently handle clipboard errors
    }
  };

  /* -------------------- render -------------------- */
  return (
    <Section id="skills">
      <motion.div
        ref={cardRef}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
        className="card bg-base-100 border border-base-200 shadow-xl rounded-3xl"
      >
        <div className="card-body p-6 md:p-10">
          {/* Heading */}
          <motion.div
            className="flex items-center gap-3 mb-4"
            variants={staggerItem}
          >
            <FaCode className="text-xl" />
            <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>
          </motion.div>

          {/* Category pills */}
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
                onClick={() => onTabClick(c.key)}
                className={`btn btn-sm ${
                  c.key === active ? "btn-primary" : "btn-ghost"
                } rounded-full`}
              >
                {c.title}
              </button>
            ))}
          </motion.div>

          {/* Icon chips */}
          <motion.div
            key={currentCat.key}
            className="mt-6 flex flex-wrap gap-3"
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            {currentCat.items.map((item) => (
              <SkillChip key={item.name} item={item} onPick={onPick} />
            ))}
          </motion.div>

          {/* Micro-demo card (mobile-safe) */}
          {demo && (
            <motion.div
              ref={demoRef}
              className="mt-8 card bg-base-200 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="card-body">
                {/* Header stacks on mobile to avoid overflow */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <h3 className="card-title break-words">{demo.title}</h3>
                    {demo.lang && (
                      <span className="badge badge-outline mt-1">
                        {demo.lang}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="btn btn-ghost btn-sm" onClick={copyCode}>
                      Copy
                    </button>
                    <button
                      className="btn btn-ghost btn-sm"
                      onClick={() => advance(true)}
                    >
                      Next ▶
                    </button>
                  </div>
                </div>

                {/* Progress (pauses off-screen) */}
                <div className="mt-3">
                  <progress
                    className="progress w-full"
                    value={progress}
                    max="100"
                  />
                </div>

                {/* Code: horizontal scroll if needed, never spills */}
                <pre className="mt-3 p-3 sm:p-4 rounded-xl bg-base-100 overflow-x-auto w-full max-w-full text-xs sm:text-sm">
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
