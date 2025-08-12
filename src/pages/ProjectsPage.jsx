import Section from "../components/Section.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";
import StackChips from "../components/StackChips.jsx";
import { FaFolderOpen, FaMagnifyingGlass } from "react-icons/fa6";
import { useMemo, useState } from "react";

function uniqueStacks(all) {
  const set = new Set();
  all.forEach((p) => (p.stack || []).forEach((s) => set.add(s)));
  return Array.from(set).sort();
}

export default function ProjectsPage() {
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState([]); // stack filters
  const [sort, setSort] = useState("new"); // "new" | "old" | "az"

  const stacks = useMemo(() => uniqueStacks(projects), []);

  const filtered = useMemo(() => {
    let list = projects.filter((p) => {
      const textHit = (p.name + " " + (p.description || ""))
        .toLowerCase()
        .includes(q.toLowerCase());
      const stackHit =
        selected.length === 0 ||
        selected.every((tag) => p.stack?.includes(tag));
      return textHit && stackHit;
    });

    if (sort === "az") list.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "new")
      list.sort(
        (a, b) => new Date(b.releasedAt || 0) - new Date(a.releasedAt || 0)
      );
    if (sort === "old")
      list.sort(
        (a, b) => new Date(a.releasedAt || 0) - new Date(b.releasedAt || 0)
      );
    return list;
  }, [q, selected, sort]);

  const toggle = (tag) =>
    setSelected((curr) =>
      curr.includes(tag) ? curr.filter((t) => t !== tag) : [...curr, tag]
    );

  return (
    <Section id="projects-page" className="pt-4">
      <div className="card bg-base-100 border border-base-200 shadow-xl rounded-3xl">
        <div className="card-body p-6 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <FaFolderOpen />
            <h1 className="text-2xl md:text-3xl font-semibold">All Projects</h1>
          </div>

          {/* Controls */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <label className="input input-bordered flex items-center gap-2 w-full md:max-w-md">
              <FaMagnifyingGlass />
              <input
                type="text"
                className="grow"
                placeholder="Search projects…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
            </label>

            {/* Sort */}
            <div className="join">
              <button
                className={`btn btn-sm join-item ${
                  sort === "new" ? "btn-primary" : "btn-ghost"
                }`}
                onClick={() => setSort("new")}
              >
                Newest
              </button>
              <button
                className={`btn btn-sm join-item ${
                  sort === "old" ? "btn-primary" : "btn-ghost"
                }`}
                onClick={() => setSort("old")}
              >
                Oldest
              </button>
              <button
                className={`btn btn-sm join-item ${
                  sort === "az" ? "btn-primary" : "btn-ghost"
                }`}
                onClick={() => setSort("az")}
              >
                A–Z
              </button>
            </div>
          </div>

          {/* Stack filters */}
          <div className="mt-4 flex flex-wrap gap-2">
            {stacks.map((tag) => (
              <button
                key={tag}
                className={`btn btn-xs rounded-full ${
                  selected.includes(tag) ? "btn-primary" : "btn-ghost"
                }`}
                onClick={() => toggle(tag)}
              >
                {tag}
              </button>
            ))}
            {selected.length > 0 && (
              <button
                className="btn btn-xs btn-ghost"
                onClick={() => setSelected([])}
              >
                Clear
              </button>
            )}
          </div>

          {/* Results count */}
          <div className="mt-2 text-sm opacity-70">
            {filtered.length} result(s)
          </div>

          {/* Grid */}
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
