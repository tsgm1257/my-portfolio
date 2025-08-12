import { useState } from "react";
import { Link, useLocation } from "react-router";
import PageContainer from "./PageContainer.jsx";
import { useScrollSpy } from "../context/ScrollSpyContext.jsx";
import { FaDownload } from "react-icons/fa6";
import { site } from "../data/site.js";
import { showResumeToast } from "../lib/toast.js";

const nav = [
  { label: "About", to: "/#about", id: "about" },
  { label: "Skills", to: "/#skills", id: "skills" },
  { label: "Education", to: "/#education", id: "education" },
  { label: "Projects", to: "/#projects", id: "projects" },
  { label: "Contact", to: "/#contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { current } = useScrollSpy();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const isActive = (item) =>
    item.label === "Projects"
      ? isHome && current === "projects"
      : isHome && current === item.id;

  const itemClass = (item) =>
    `transition-colors hover:text-primary ${
      isActive(item) ? "text-primary font-medium" : ""
    }`;

  const onResumeClick = () => {
    if (site.resume.url) {
      const a = document.createElement("a");
      a.href = site.resume.url;
      a.download = site.resume.filename || "resume.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } else {
      showResumeToast(); 
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-base-100/90 backdrop-blur border-b">
      <PageContainer className="flex h-16 items-center gap-4">
        {/* Left: Brand */}
        <Link to="/" className="font-semibold text-lg tracking-tight shrink-0">
          {site.name}
        </Link>

        {/* Center: Nav links (desktop) */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-6">
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
        </nav>

        {/* Right: Resume (desktop) */}
        <div className="ml-auto hidden md:block">
          <button className="btn btn-primary btn-sm" onClick={onResumeClick}>
            <FaDownload className="mr-2" /> Resume
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden btn btn-sm ml-auto"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </PageContainer>

      {/* Mobile drawer */}
      {open && (
        <div id="mobile-nav" className="md:hidden border-t text-center">
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

            <button
              className="btn btn-primary mb-2"
              onClick={() => {
                setOpen(false);
                onResumeClick();
              }}
            >
              <FaDownload className="mr-2" /> Resume
            </button>
          </PageContainer>
        </div>
      )}
    </header>
  );
}
