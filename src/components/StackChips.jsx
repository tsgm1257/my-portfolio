import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiFirebase,
  SiPostgresql,
  SiDaisyui, // 👈 DaisyUI
} from "react-icons/si";

const map = {
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Tailwind: SiTailwindcss,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  Redux: SiRedux,
  Firebase: SiFirebase,
  PostgreSQL: SiPostgresql,
  DaisyUI: SiDaisyui, // 👈 works with your project data
  daisyui: SiDaisyui, // (optional) lowercase alias
};

export default function StackChips({ stack = [], size = "text-base" }) {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((label) => {
        const Icon = map[label] || null;
        return (
          <div key={label} className="tooltip tooltip-bottom" data-tip={label}>
            <div className="inline-flex items-center gap-1 rounded-xl border px-2 py-1 bg-base-100">
              {Icon && <Icon className={`${size}`} aria-hidden />}
              <span className="text-xs">{label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
