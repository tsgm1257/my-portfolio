import Section from "../Section.jsx";
import { FaCode, FaReact, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa6";
import { SiTypescript, SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

const stacks = [
  { name: "React", icon: FaReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Git", icon: FaGitAlt },
  { name: "Docker", icon: FaDocker },
];

export default function Skills() {
  return (
    <Section id="skills">
      <div className="flex items-center gap-3 mb-6">
        <FaCode /><h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        {stacks.map(({ name, icon: Icon }) => (
          <div key={name} className="tooltip tooltip-bottom" data-tip={name}>
            <div className="btn btn-ghost w-full aspect-square flex items-center justify-center rounded-2xl border hover:shadow-md">
              <Icon className="text-3xl" aria-label={name} />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
