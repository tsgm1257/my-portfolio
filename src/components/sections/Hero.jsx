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
      const a = document.createElement("a");
      a.href = site.resume.url;
      a.download = site.resume.filename || "resume.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } else {
      setOpen(true);
    }
  };

  return (
    <Section id="">
      {/* FULL HERO CARD */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="card bg-base-100 border border-base-200 shadow-xl rounded-3xl"
      >
        <div className="card-body p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: text */}
            <div>
              <motion.p
                className="text-sm tracking-wide text-primary"
                variants={staggerItem}
              >
                {site.designation}
              </motion.p>

              <motion.h1
                className="text-3xl md:text-5xl font-bold mt-1"
                variants={staggerItem}
              >
                Hi, I’m {site.name}
              </motion.h1>

              <motion.p
                className="mt-4 text-base md:text-lg opacity-90"
                variants={staggerItem}
              >
                {site.tagline}
              </motion.p>

              <motion.div
                className="mt-6 flex flex-wrap items-center gap-3"
                variants={staggerItem}
              >
                <button
                  className="btn btn-primary btn-md"
                  onClick={onResumeClick}
                >
                  <FaDownload className="mr-2" /> Resume
                </button>

                {site.socials.github && (
                  <a
                    className="btn btn-ghost btn-md"
                    href={site.socials.github}
                    aria-label="GitHub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                )}
                {site.socials.linkedin && (
                  <a
                    className="btn btn-ghost btn-md"
                    href={site.socials.linkedin}
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                )}
              </motion.div>
            </div>

            {/* Right: photo */}
            
            <motion.div
              className="justify-self-center order-first md:order-none"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="relative w-72 h-[22rem] sm:w-80 sm:h-[26rem] md:w-96 md:h-[30rem] overflow-hidden rounded-2xl border border-base-300 shadow-lg">
                <img
                  src={site.photo2x || site.photo} 
                  srcSet={
                    site.photo2x
                      ? `${site.photo} 1x, ${site.photo2x} 2x`
                      : undefined
                  }
                  sizes="(min-width:1024px) 24rem, (min-width:640px) 20rem, 18rem"
                  alt={`Professional headshot of ${site.name}`}
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Resume modal (only when no resume url) */}
      <dialog
        className={`modal ${open ? "modal-open" : ""}`}
        onClose={() => setOpen(false)}
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Resume</h3>
          <p className="py-4">
            Resume will be added later. Please check back soon.
          </p>
          <div className="modal-action">
            <button className="btn" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        </div>
        <form
          method="dialog"
          className="modal-backdrop"
          onClick={() => setOpen(false)}
        >
          <button>close</button>
        </form>
      </dialog>
    </Section>
  );
}
