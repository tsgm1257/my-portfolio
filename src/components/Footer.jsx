import PageContainer from "./PageContainer.jsx";
import { Link, useLocation } from "react-router";
import { site } from "../data/site.js";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaArrowUpLong,
} from "react-icons/fa6";
import { useMemo } from "react";

// All quick links go to home anchors now (including Projects)
const navLinks = [
  { label: "About", to: "/#about" },
  { label: "Skills", to: "/#skills" },
  { label: "Education", to: "/#education" },
  { label: "Projects", to: "/#projects" }, // ⬅️ changed
  { label: "Contact", to: "/#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const { email, phone, whatsapp } = site.contact || {};
  const location = useLocation();

  // sanitize tel/wa links
  const telHref = useMemo(() => (phone || "").replace(/[^\d+]/g, ""), [phone]);
  const waHref = useMemo(
    () => (whatsapp || "").replace(/[^\d]/g, ""),
    [whatsapp]
  );

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // active state for hash links when on home
  const isActive = (to) => location.pathname === "/" && to.startsWith("/#");

  return (
    <footer className="mt-16 border-t bg-base-100 w-full">
      <PageContainer className="py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Left: brand / blurb / socials */}
          <div>
            <div className="text-lg font-semibold">{site.name}</div>
            <p className="opacity-80 mt-1">{site.designation}</p>
            {site.tagline && (
              <p className="opacity-70 mt-3 text-sm">{site.tagline}</p>
            )}

            <div className="mt-4 flex items-center gap-3">
              {site.socials?.github && (
                <a
                  href={site.socials.github}
                  aria-label="GitHub"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost btn-sm"
                >
                  <FaGithub className="text-lg" />
                </a>
              )}
              {site.socials?.linkedin && (
                <a
                  href={site.socials.linkedin}
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost btn-sm"
                >
                  <FaLinkedin className="text-lg" />
                </a>
              )}
              {site.socials?.twitter && site.socials.twitter !== "" && (
                <a
                  href={site.socials.twitter}
                  aria-label="Twitter/X"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost btn-sm"
                >
                  <FaXTwitter className="text-lg" />
                </a>
              )}
              {site.socials?.facebook && site.socials.facebook !== "" && (
                <a
                  href={site.socials.facebook}
                  aria-label="Facebook"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost btn-sm"
                >
                  <FaFacebook className="text-lg" />
                </a>
              )}
            </div>
          </div>

          {/* Middle: Quick Links (black default, blue on hover like navbar) */}
          <div className="space-y-2 md:justify-self-center">
            <div className="font-semibold">Quick Links</div>
            <div className="flex flex-col gap-2">
              {navLinks.map((n) => (
                <Link
                  key={n.label}
                  to={n.to}
                  className={`transition-colors ${
                    isActive(n.to) ? "font-medium" : "text-black"
                  } hover:text-primary`}
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Contact */}
          <div className="space-y-2">
            <div className="font-semibold">Contact</div>
            {email && (
              <a
                className="flex items-center gap-2 link link-hover"
                href={`mailto:${email}`}
              >
                <FaEnvelope /> {email}
              </a>
            )}
            {phone && (
              <a
                className="flex items-center gap-2 link link-hover"
                href={`tel:${telHref}`}
              >
                <FaPhone /> {phone}
              </a>
            )}
            {waHref && (
              <a
                className="flex items-center gap-2 link link-hover"
                href={`https://wa.me/${waHref}`}
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            )}
            <button onClick={scrollTop} className="btn btn-sm btn-outline mt-4">
              <FaArrowUpLong className="mr-2" /> Back to top
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t text-sm opacity-70 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {year} {site.name}. All rights reserved.
          </div>
          <div>Built with React and Tailwind/DaisyUI.</div>
        </div>
      </PageContainer>
    </footer>
  );
}
