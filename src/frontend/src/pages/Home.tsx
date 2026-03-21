import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Smartphone, Users, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

const stats = [
  { value: "14+", label: "Years Experience", icon: Zap },
  { value: "50+", label: "Apps Shipped", icon: Smartphone },
  { value: "3", label: "Major Banks", icon: Building2 },
  { value: "20M+", label: "Users Reached", icon: Users },
];

const categoryColors: Record<string, string> = {
  FinTech: "#0A84FF",
  Multimedia: "#FF375F",
  Enterprise: "#FF9F0A",
  "Core Tech": "#BF5AF2",
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.classList.add("fade-in");
  }, []);

  return (
    <main>
      {/* Hero — two-column layout */}
      <section
        ref={heroRef}
        className="relative flex items-center overflow-hidden pt-16 py-12"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(10,132,255,0.15) 0%, transparent 70%), #121212",
        }}
      >
        {/* Background grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 w-full flex items-center gap-5 slide-up">
          {/* Left: text content — stretches to fill available space, min gap 20px from image */}
          <div className="flex-1 min-w-0 flex flex-col items-start text-left">
            <h1
              className="w-full font-bold leading-[1.05] mb-3"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
            >
              Crafting iOS
              <br />
              <span className="text-gradient-blue">Experiences</span>
              <br />
              That Scale
            </h1>

            <p className="text-[#aeaeb2] text-lg mb-1 font-medium">
              Prakash Kumar Rastogi
            </p>
            <p className="text-[#aeaeb2] text-base mb-4 leading-relaxed">
              Senior iOS Architect with 14+ years building apps for 20M+ users.
              Specializing in performance engineering, SwiftUI, and system-scale
              architecture.
            </p>

            {/* Buttons + Available badge — horizontal row */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="gap-2 font-semibold"
                style={{ background: "#0A84FF" }}
                data-ocid="home.primary_button"
              >
                <Link to="/projects">
                  View My Work <ArrowRight size={16} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/10 text-white hover:bg-white/5"
                data-ocid="home.secondary_button"
              >
                <Link to="/about">Get in Touch</Link>
              </Button>
              <div
                className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold border"
                style={{
                  color: "#0A84FF",
                  borderColor: "rgba(10,132,255,0.3)",
                  background: "rgba(10,132,255,0.08)",
                }}
              >
                Available for Senior Roles
              </div>
            </div>
          </div>

          {/* Right: profile image — center aligned, fixed size */}
          <div
            className="hidden lg:flex flex-shrink-0 w-80 h-96 rounded-2xl overflow-hidden items-center justify-center"
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow:
                "0 0 40px rgba(10,132,255,0.15), 0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
            <img
              src="/assets/uploads/Screenshot-2026-03-21-at-12.35.59-AM-1.png"
              alt="Prakash Kumar Rastogi"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center center" }}
            />
          </div>
        </div>
      </section>

      {/* Selected Work — horizontal scroll strip */}
      <section className="py-8 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-1"
                style={{ color: "#0A84FF" }}
              >
                Portfolio
              </p>
              <h2 className="text-2xl font-bold text-white">Selected Work</h2>
            </div>
            <Link
              to="/projects"
              className="text-sm font-medium flex items-center gap-1 hover:opacity-80 transition-opacity"
              style={{ color: "#0A84FF" }}
              data-ocid="home.link"
            >
              All projects <ArrowRight size={14} />
            </Link>
          </div>

          {/* Horizontal scrollable row */}
          <div
            className="flex gap-4 overflow-x-auto pb-4"
            style={{ scrollbarWidth: "none" }}
          >
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                className="flex-shrink-0 w-52"
                data-ocid={`home.item.${i + 1}`}
              >
                <Link
                  to="/projects/$id"
                  params={{ id: project.id }}
                  className="block glass rounded-2xl p-5 h-full cursor-pointer hover:scale-105 transition-transform duration-200"
                  data-ocid={`home.card.${i + 1}`}
                >
                  {/* Accent bar */}
                  <div
                    className="w-full h-1 rounded-full mb-3"
                    style={{ background: project.color }}
                  />
                  <p className="text-white font-semibold text-sm leading-snug mb-2">
                    {project.name}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      style={{
                        color: categoryColors[project.category] ?? "#aeaeb2",
                        background: `${categoryColors[project.category] ?? "#aeaeb2"}18`,
                      }}
                    >
                      {project.category}
                    </span>
                    <span className="text-[#aeaeb2] text-[10px]">
                      {project.year}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-gradient-blue mb-1">
                  {stat.value}
                </p>
                <p className="text-[#aeaeb2] text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills grid — clickable */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2">Core Expertise</h2>
          <p className="text-[#aeaeb2] mb-6">
            The technologies I work with daily — click to explore
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <Link
                key={skill.id}
                to="/skills/$id"
                params={{ id: skill.id }}
                className="glass rounded-2xl p-5 card-hover cursor-pointer group block"
                data-ocid={`home.tab.${i + 1}`}
              >
                <div
                  className="w-2 h-2 rounded-full mb-3"
                  style={{
                    background: skill.color,
                    boxShadow: `0 0 8px ${skill.color}`,
                  }}
                />
                <p className="text-white font-semibold text-sm">{skill.name}</p>
                <p
                  className="text-[10px] mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: skill.color }}
                >
                  Explore →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
