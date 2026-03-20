import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, TrendingUp } from "lucide-react";

const categoryColors: Record<string, string> = {
  FinTech: "#0A84FF",
  Multimedia: "#FF375F",
  Enterprise: "#FF9F0A",
  "Core Tech": "#BF5AF2",
};

// Map display names to skill page IDs
const techToSkillId: Record<string, string> = {
  Swift: "swift",
  SwiftUI: "swiftui",
  "Objective-C": "objective-c",
  "Core Data": "core-data",
  ARKit: "arkit",
  Metal: "metal",
};

export default function ProjectDetail() {
  const { id } = useParams({ from: "/projects/$id" });
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="min-h-screen pt-20 pb-10 flex items-center justify-center">
        <div className="text-center" data-ocid="project_detail.error_state">
          <p className="text-[#aeaeb2] text-lg mb-4">Project not found.</p>
          <Button asChild variant="outline" className="border-white/10">
            <Link to="/projects">← Back to Projects</Link>
          </Button>
        </div>
      </main>
    );
  }

  const accentColor = project.color;
  const archLayers = [
    { label: "Presentation Layer", sub: "SwiftUI / UIKit" },
    { label: "Business Logic", sub: "Combine / Async" },
    { label: "Data Layer", sub: "Core Data / Network" },
  ];
  const archOpacity = ["15", "10", "08"];
  const archBorder = ["40", "25", "18"];

  return (
    <main className="min-h-screen pt-20 pb-10">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back */}
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="text-[#aeaeb2] hover:text-white mb-4 -ml-2"
          data-ocid="project_detail.back_button"
        >
          <Link to="/projects">
            <ArrowLeft size={16} className="mr-1" /> All Projects
          </Link>
        </Button>

        {/* Hero */}
        <div
          className="rounded-3xl p-6 mb-6 relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${accentColor}18 0%, rgba(28,28,30,0.9) 100%)`,
            border: `1px solid ${accentColor}30`,
          }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
            style={{ background: accentColor }}
          />
          <div className="relative">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
              style={{
                color: categoryColors[project.category],
                background: `${categoryColors[project.category]}18`,
              }}
            >
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {project.name}
            </h1>
            <p className="text-[#aeaeb2] text-lg">{project.description}</p>
          </div>
        </div>

        {/* Challenge */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-3 text-white">The Challenge</h2>
          <div className="glass rounded-2xl p-6">
            <p className="text-[#aeaeb2] leading-relaxed">
              {project.challenge}
            </p>
          </div>
        </section>

        {/* Architecture */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-3 text-white">Architecture</h2>
          <div className="glass rounded-2xl p-6">
            <p className="text-[#aeaeb2] leading-relaxed mb-4">
              {project.architecture}
            </p>
            <div className="grid grid-cols-3 gap-3">
              {archLayers.map((layer, i) => (
                <div
                  key={layer.label}
                  className="rounded-xl p-4 text-center"
                  style={{
                    background: `${accentColor}${archOpacity[i]}`,
                    border: `1px solid ${accentColor}${archBorder[i]}`,
                  }}
                >
                  <p className="text-white text-xs font-semibold">
                    {layer.label}
                  </p>
                  <p className="text-[#aeaeb2] text-[10px] mt-1">{layer.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-3 text-white">Impact</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {project.impact.map((item, i) => (
              <div
                key={item}
                className="glass rounded-2xl p-5 flex items-start gap-3"
                data-ocid={`project_detail.impact.item.${i + 1}`}
              >
                <TrendingUp
                  size={16}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: accentColor }}
                />
                <p className="text-white text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-3 text-white">Tech Stack</h2>
          <p className="text-[#aeaeb2] text-sm mb-3">
            Tap a technology to explore its details and learning resources.
          </p>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => {
              const skillId = techToSkillId[tech];
              const badgeContent = (
                <Badge
                  key={tech}
                  className="px-4 py-1.5 text-sm font-medium border transition-all duration-200"
                  style={{
                    background: skillId
                      ? `${accentColor}18`
                      : `${accentColor}08`,
                    borderColor: skillId
                      ? `${accentColor}60`
                      : `${accentColor}30`,
                    color: skillId ? accentColor : "#aeaeb2",
                    cursor: skillId ? "pointer" : "default",
                  }}
                >
                  {tech}
                  {skillId ? " →" : ""}
                </Badge>
              );

              return skillId ? (
                <Link
                  key={tech}
                  to="/skills/$id"
                  params={{ id: skillId }}
                  data-ocid={`project_detail.tech.${tech.toLowerCase().replace(/[^a-z0-9]/g, "_")}`}
                >
                  {badgeContent}
                </Link>
              ) : (
                <span key={tech}>{badgeContent}</span>
              );
            })}
          </div>
        </section>

        {/* Back CTA */}
        <Button
          asChild
          variant="outline"
          className="border-white/10 text-white hover:bg-white/5"
          data-ocid="project_detail.back_button"
        >
          <Link to="/projects">← Back to All Projects</Link>
        </Button>
      </div>
    </main>
  );
}
