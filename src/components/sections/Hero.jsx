import Section from "../Section.jsx";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa6";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <Section id="">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-sm tracking-wide text-primary">Full Stack Developer</p>
          <h1 className="text-3xl md:text-5xl font-bold mt-2">Hi, I’m Your Name</h1>
          <p className="mt-4 text-base md:text-lg opacity-80">
            I build clean, responsive web apps with React, Node, and MongoDB.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button className="btn btn-primary btn-md" onClick={() => setOpen(true)}>
              <FaDownload className="mr-2" /> Resume
            </button>
            <a
              className="btn btn-ghost btn-md"
              href="https://github.com/yourname"
              aria-label="GitHub"
              target="_blank" rel="noreferrer"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              className="btn btn-ghost btn-md"
              href="https://linkedin.com/in/yourname"
              aria-label="LinkedIn"
              target="_blank" rel="noreferrer"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>

        <div className="justify-self-center">
          <img
            src="/images/me.jpg"
            alt="Professional headshot of Your Name"
            className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover shadow-lg"
            loading="lazy"
          />
        </div>
      </div>

      {/* Modal */}
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
