import { useState } from "react";
import { Link } from "react-router";
import { FaGithub, FaLinkedin, FaXTwitter, FaFacebook } from "react-icons/fa6";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#education", label: "Education" },
  { href: "/projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-base-100/90 backdrop-blur border-b">
      {/* Aligned with the rest of the content */}
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-semibold text-lg tracking-tight">
          YourName
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            // anchors so section IDs work with smooth scrolling
            <a key={l.label} href={l.href} className="hover:text-primary">
              {l.label}
            </a>
          ))}
          <div className="ml-2 flex items-center gap-3">
            <a href="https://github.com/yourname" aria-label="GitHub" target="_blank" rel="noreferrer">
              <FaGithub className="text-xl" />
            </a>
            <a href="https://linkedin.com/in/yourname" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="https://twitter.com/yourname" aria-label="Twitter/X" target="_blank" rel="noreferrer">
              <FaXTwitter className="text-xl" />
            </a>
            <a href="https://facebook.com/yourname" aria-label="Facebook" target="_blank" rel="noreferrer">
              <FaFacebook className="text-xl" />
            </a>
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden btn btn-sm"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          Menu
        </button>
      </div>

      {/* Mobile drawer (full width bg; content aligned via container) */}
      {open && (
        <div id="mobile-nav" className="md:hidden border-t">
          <div className="container py-2 flex flex-col">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="py-3"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-4 py-3">
              <a href="https://github.com/yourname" aria-label="GitHub"><FaGithub className="text-xl" /></a>
              <a href="https://linkedin.com/in/yourname" aria-label="LinkedIn"><FaLinkedin className="text-xl" /></a>
              <a href="https://twitter.com/yourname" aria-label="Twitter/X"><FaXTwitter className="text-xl" /></a>
              <a href="https://facebook.com/yourname" aria-label="Facebook"><FaFacebook className="text-xl" /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
