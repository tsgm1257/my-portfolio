import Section from "../Section.jsx";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa6";
import { motion } from "motion/react";
import { staggerContainer, staggerItem } from "../anim.js";
import { site } from "../../data/site.js";

export default function Hero() {
  const [open, setOpen] = useState(false);

  const onResumeClick = () => {
    if (site.resume.url) {
      const link = document.createElement("a");
      link.href = site.resume.url;
      link.download = site.resume.filename || "resume.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
    } else {
      setOpen(true);
    }
  };

  return (
    <Section id="">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
          <motion.p className="text-sm tracking-wide text-primary" variants={staggerItem}>
            {site.designation}
          </motion.p>
          <motion.h1 className="text-3xl md:text-5xl font-bold mt-2" variants={staggerItem}>
            Hi, I’m {site.name}
          </motion.h1>
          <motion.p className="mt-4 text-base md:text-lg opacity-80" variants={staggerItem}>
            {site.tagline}
          </motion.p>

          <motion.div className="mt-6 flex flex-wrap items-center gap-3" variants={staggerItem}>
            <button className="btn btn-primary btn-md" onClick={onResumeClick}>
              <FaDownload className="mr-2" /> Resume
            </button>
            {site.socials.github && (
              <a className="btn btn-ghost btn-md" href={site.socials.github} aria-label="GitHub" target="_blank" rel="noreferrer">
                <FaGithub className="text-xl" />
              </a>
            )}
            {site.socials.linkedin && (
              <a className="btn btn-ghost btn-md" href={site.socials.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <FaLinkedin className="text-xl" />
              </a>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          className="justify-self-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <img
            src={site.photo}
            alt={`Professional headshot of ${site.name}`}
            className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover shadow-lg"
            loading="lazy"
          />
        </motion.div>
      </div>

      {/* Modal (shown only when resume.url is empty) */}
      <dialog className={`modal ${open ? "modal-open" : ""}`} onClose={() => setOpen(false)}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Resume</h3>
          <p className="py-4">Resume will be added later. Please check back soon.</p>
          <div className="modal-action">
            <button className="btn" onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop" onClick={() => setOpen(false)}>
          <button>close</button>
        </form>
      </dialog>
    </Section>
  );
}
