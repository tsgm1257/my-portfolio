import Section from "../Section.jsx";
import { FaGraduationCap } from "react-icons/fa6";

export default function Education() {
  return (
    <Section id="education">
      <div className="flex items-center gap-3 mb-6">
        <FaGraduationCap /><h2 className="text-2xl md:text-3xl font-semibold">Education</h2>
      </div>
      
      <div className="card bg-base-200">
        <div className="card-body">
          <h3 className="card-title">B.Sc. in Computer Science</h3>
          <p>Fort Hays State University (Online), 2023 – Present</p>
          <p>Relevant Coursework: Algorithms, Databases, Web Development</p>
        </div>
      </div>
    </Section>
  );
}
