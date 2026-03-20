import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

type Category = "All" | "FinTech" | "Multimedia" | "Enterprise" | "Core Tech";
const categories: Category[] = [
  "All",
  "FinTech",
  "Multimedia",
  "Enterprise",
  "Core Tech",
];

const categoryColors: Record<string, string> = {
  FinTech: "#0A84FF",
  Multimedia: "#FF375F",
  Enterprise: "#FF9F0A",
  "Core Tech": "#BF5AF2",
};

export default function Projects() {
  const [filter, setFilter] = useState<Category>("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <main className="min-h-screen pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-6 slide-up">
          <h1 className="text-5xl font-bold mb-3">
            <span className="text-gradient">Selected</span>
            <br />
            <span className="text-gradient-blue">Work</span>
          </h1>
          <p className="text-[#aeaeb2] text-lg max-w-xl">
            A curated portfolio of iOS architecture projects across banking,
            streaming, and enterprise.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6" data-ocid="projects.tab">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? "text-white"
                  : "text-[#aeaeb2] glass hover:text-white"
              }`}
              style={
                filter === cat
                  ? {
                      background: "#0A84FF",
                      boxShadow: "0 0 20px rgba(10,132,255,0.35)",
                    }
                  : {}
              }
              data-ocid={`projects.${cat.toLowerCase().replace(" ", "_")}.tab`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <Link
              key={project.id}
              to="/projects/$id"
              params={{ id: project.id }}
              className="glass rounded-2xl overflow-hidden card-hover flex flex-col cursor-pointer group"
              data-ocid={`projects.item.${i + 1}`}
            >
              {/* Color bar */}
              <div
                className="h-1.5"
                style={{
                  background: `linear-gradient(90deg, ${project.color}, transparent)`,
                }}
              />

              <div className="p-6 flex flex-col flex-1">
                {/* Category badge */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{
                      color: categoryColors[project.category],
                      background: `${categoryColors[project.category]}18`,
                    }}
                  >
                    {project.category}
                  </span>
                  <span className="text-[#aeaeb2] text-xs">{project.year}</span>
                </div>

                <h3 className="text-white font-bold text-xl mb-2">
                  {project.name}
                </h3>
                <p className="text-[#aeaeb2] text-sm leading-relaxed mb-3 flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-[10px] border-white/10 text-[#aeaeb2]"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div
                  className="w-full flex items-center justify-between text-sm px-3 py-2 rounded-lg border border-white/5 text-[#aeaeb2] group-hover:text-white group-hover:bg-white/5 transition-colors"
                  data-ocid={`projects.view_detail_button.${i + 1}`}
                >
                  View Details <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div
            className="text-center py-12 text-[#aeaeb2]"
            data-ocid="projects.empty_state"
          >
            No projects in this category yet.
          </div>
        )}
      </div>
    </main>
  );
}
