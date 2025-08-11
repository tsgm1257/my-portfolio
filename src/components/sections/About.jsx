import Section from "../Section.jsx";
import { FaUser } from "react-icons/fa6";

export default function About() {
  return (
    <Section id="about">
      <div className="flex items-center gap-3 mb-6">
        <FaUser /><h2 className="text-2xl md:text-3xl font-semibold">About Me</h2>
      </div>
      <div className="prose max-w-none">
        <p>
          I started programming in 20XX and enjoy shipping useful, performant products.
          I love clean UIs, predictable state, and simple APIs.
        </p>
        <p>
          Outside coding: football, volunteering, and teaching. I value clarity,
          consistency, and incremental improvements.
        </p>
      </div>
    </Section>
  );
}
