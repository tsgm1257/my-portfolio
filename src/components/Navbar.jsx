import { useState } from "react";
import { Link, useLocation } from "react-router";
import PageContainer from "./PageContainer.jsx";
import { useScrollSpy } from "../context/ScrollSpyContext.jsx";
import { FaGithub, FaLinkedin, FaXTwitter, FaFacebook } from "react-icons/fa6";

const nav = [
  { label: "About", to: "/#about", id: "about" },
  { label: "Skills", to: "/#skills", id: "skills" },
  { label: "Education", to: "/#education", id: "education" },
  { label: "Projects", to: "/projects", id: "projects" }, 
  { label: "Contact", to: "/#contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { current } = useScrollSpy();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const isActive = (item) => {
    if (item.label === "Projects") {
      return (
        location.pathname === "/projects" || (isHome && current === "projects")
      );
    }
    return isHome && current === item.id;
  };

  const itemClass = (item) =>
    `hover:text-primary ${isActive(item) ? "text-primary font-medium" : ""}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-base-100/90 backdrop-blur border-b">
      <PageContainer className="flex h-16 items-center justify-between">
        <Link to="/" className="font-semibold text-lg tracking-tight">
          YourName
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={itemClass(item)}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="ml-2 flex items-center gap-3">
            <a
              href="https://github.com/yourname"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://linkedin.com/in/yourname"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://twitter.com/yourname"
              aria-label="Twitter/X"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter className="text-xl" />
            </a>
            <a
              href="https://facebook.com/yourname"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
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
      </PageContainer>

      {/* Mobile drawer */}
      {open && (
        <div id="mobile-nav" className="md:hidden border-t">
          <PageContainer className="py-2 flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`py-3 ${itemClass(item)}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 py-3">
              <a href="https://github.com/yourname" aria-label="GitHub">
                <FaGithub className="text-xl" />
              </a>
              <a href="https://linkedin.com/in/yourname" aria-label="LinkedIn">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="https://twitter.com/yourname" aria-label="Twitter/X">
                <FaXTwitter className="text-xl" />
              </a>
              <a href="https://facebook.com/yourname" aria-label="Facebook">
                <FaFacebook className="text-xl" />
              </a>
            </div>
          </PageContainer>
        </div>
      )}
    </header>
  );
}
