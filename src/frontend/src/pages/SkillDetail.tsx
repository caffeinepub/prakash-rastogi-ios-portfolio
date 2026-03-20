import { Button } from "@/components/ui/button";
import { skills } from "@/data/skills";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  BookOpen,
  ExternalLink,
  FileText,
  Play,
} from "lucide-react";
import { motion } from "motion/react";

const typeConfig = {
  docs: { label: "Docs", icon: FileText, color: "#0A84FF" },
  tutorial: { label: "Tutorial", icon: BookOpen, color: "#30D158" },
  book: { label: "Book", icon: BookOpen, color: "#FF9F0A" },
  video: { label: "Video", icon: Play, color: "#FF375F" },
} as const;

export default function SkillDetail() {
  const { id } = useParams({ from: "/skills/$id" });
  const skill = skills.find((s) => s.id === id);

  if (!skill) {
    return (
      <main className="min-h-screen pt-20 pb-10 flex items-center justify-center">
        <div className="text-center" data-ocid="skill_detail.error_state">
          <p className="text-[#aeaeb2] text-lg mb-4">Skill not found.</p>
          <Button asChild variant="outline" className="border-white/10">
            <Link to="/">← Back to Home</Link>
          </Button>
        </div>
      </main>
    );
  }

  const paragraphs = skill.description.split("\n\n");

  return (
    <main className="min-h-screen pt-20 pb-10">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back */}
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="text-[#aeaeb2] hover:text-white mb-4 -ml-2"
          data-ocid="skill_detail.back_button"
        >
          <Link to="/">
            <ArrowLeft size={16} className="mr-1" /> Back to Home
          </Link>
        </Button>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl p-6 mb-6 relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${skill.color}18 0%, rgba(28,28,30,0.9) 100%)`,
            border: `1px solid ${skill.color}30`,
          }}
          data-ocid="skill_detail.panel"
        >
          <div
            className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none"
            style={{ background: skill.color }}
          />
          <div className="relative">
            <div
              className="w-12 h-12 rounded-2xl mb-4 flex items-center justify-center"
              style={{
                background: `${skill.color}20`,
                border: `1px solid ${skill.color}40`,
              }}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  background: skill.color,
                  boxShadow: `0 0 10px ${skill.color}`,
                }}
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {skill.name}
            </h1>
            <p className="text-[#aeaeb2] text-lg mb-3">{skill.tagline}</p>
            <div className="flex flex-wrap gap-3">
              <span
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{
                  color: skill.color,
                  background: `${skill.color}18`,
                }}
              >
                {skill.level}
              </span>
              <span
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{
                  color: "#aeaeb2",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {skill.yearsExp}+ years
              </span>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <h2 className="text-2xl font-bold mb-3 text-white">Overview</h2>
          <div className="glass rounded-2xl p-6 space-y-4">
            {paragraphs.map((para) => (
              <p
                key={para.slice(0, 40)}
                className="text-[#aeaeb2] leading-relaxed"
              >
                {para}
              </p>
            ))}
          </div>
        </motion.section>

        {/* Use Cases */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          <h2 className="text-2xl font-bold mb-3 text-white">Use Cases</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {skill.useCases.map((uc, i) => (
              <div
                key={uc}
                className="glass rounded-2xl p-5 flex items-start gap-3"
                data-ocid={`skill_detail.item.${i + 1}`}
              >
                <div
                  className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                  style={{
                    background: skill.color,
                    boxShadow: `0 0 6px ${skill.color}`,
                  }}
                />
                <p className="text-white text-sm leading-relaxed">{uc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Learning Resources */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-6"
        >
          <h2 className="text-2xl font-bold mb-3 text-white">
            Learning Resources
          </h2>
          <div className="space-y-3">
            {skill.resources.map((res, i) => {
              const cfg = typeConfig[res.type];
              const IconComp = cfg.icon;
              return (
                <a
                  key={res.url}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-2xl p-5 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors group block"
                  data-ocid={`skill_detail.link.${i + 1}`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${cfg.color}18`,
                        border: `1px solid ${cfg.color}30`,
                      }}
                    >
                      <IconComp size={15} style={{ color: cfg.color }} />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">
                        {res.title}
                      </p>
                      <span
                        className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold mt-1"
                        style={{
                          color: cfg.color,
                          background: `${cfg.color}15`,
                        }}
                      >
                        {cfg.label}
                      </span>
                    </div>
                  </div>
                  <ExternalLink
                    size={15}
                    className="text-[#aeaeb2] group-hover:text-white transition-colors flex-shrink-0"
                  />
                </a>
              );
            })}
          </div>
        </motion.section>

        <Button
          asChild
          variant="outline"
          className="border-white/10 text-white hover:bg-white/5"
          data-ocid="skill_detail.secondary_button"
        >
          <Link to="/">← Back to Home</Link>
        </Button>
      </div>
    </main>
  );
}
