import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitMessage } from "@/hooks/useQueries";
import { Briefcase, CheckCircle, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { toast } from "sonner";

const timeline = [
  {
    year: "2024",
    role: "Lead iOS Architect",
    company: "Jio Platforms",
    location: "Mumbai",
    color: "#FF375F",
  },
  {
    year: "2021",
    role: "Senior iOS Engineer",
    company: "HDFC Bank",
    location: "Mumbai",
    color: "#0A84FF",
  },
  {
    year: "2018",
    role: "iOS Engineer",
    company: "Tata Consultancy Services",
    location: "Pune",
    color: "#30D158",
  },
  {
    year: "2015",
    role: "iOS Developer",
    company: "Wipro Technologies",
    location: "Bengaluru",
    color: "#FF9F0A",
  },
  {
    year: "2010",
    role: "Junior Developer",
    company: "Infosys",
    location: "Bengaluru",
    color: "#BF5AF2",
  },
];

export default function About() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { mutateAsync, isPending } = useSubmitMessage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill in all fields");
      return;
    }
    try {
      await mutateAsync({ name, email, message });
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message sent! I'll get back to you soon.");
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <main className="min-h-screen pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-6 slide-up">
          <h1 className="text-5xl font-bold mb-3">
            <span className="text-gradient">About</span>{" "}
            <span className="text-gradient-blue">Prakash</span>
          </h1>
          <p className="text-[#aeaeb2] text-lg max-w-xl">
            14 years of crafting mobile experiences — from Infosys to
            architecting India's highest-traffic iOS apps.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Timeline + Education */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">
              Career Timeline
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />

              <div className="flex flex-col gap-5">
                {timeline.map((item, i) => (
                  <div
                    key={item.company}
                    className="pl-12 relative"
                    data-ocid={`about.timeline.item.${i + 1}`}
                  >
                    {/* Dot */}
                    <div
                      className="absolute left-0 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{
                        background: `${item.color}20`,
                        border: `2px solid ${item.color}`,
                      }}
                    >
                      <Briefcase size={12} style={{ color: item.color }} />
                    </div>

                    <div className="glass rounded-xl p-4">
                      <div className="flex items-center justify-between mb-1">
                        <span
                          className="text-xs font-bold"
                          style={{ color: item.color }}
                        >
                          {item.year}
                        </span>
                        <span className="text-[#aeaeb2] text-xs flex items-center gap-1">
                          <MapPin size={10} /> {item.location}
                        </span>
                      </div>
                      <p className="text-white font-semibold text-sm">
                        {item.role}
                      </p>
                      <p className="text-[#aeaeb2] text-xs mt-0.5">
                        {item.company}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <h2 className="text-2xl font-bold mt-8 mb-4 text-white">
              Education
            </h2>
            <div className="glass rounded-2xl p-6">
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                style={{
                  color: "#0A84FF",
                  background: "rgba(10,132,255,0.12)",
                }}
              >
                2006 – 2010
              </div>
              <h3 className="text-white font-bold text-lg">
                B.Tech Computer Science
              </h3>
              <p className="text-[#aeaeb2] text-sm mt-1">
                BITS Pilani — Birla Institute of Technology & Science
              </p>
              <p className="text-[#aeaeb2] text-xs mt-2">
                Graduated with distinction. Focus: Operating Systems, Networks,
                Algorithms.
              </p>
            </div>
          </div>

          {/* Right: Contact form */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">Get in Touch</h2>

            <div className="flex gap-4 mb-4">
              <a
                href="https://linkedin.com/in/prakash-rastogi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 glass rounded-xl px-4 py-3 text-[#aeaeb2] hover:text-white transition-colors text-sm"
                data-ocid="about.linkedin.link"
              >
                <SiLinkedin size={16} style={{ color: "#0A84FF" }} />
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 glass rounded-xl px-4 py-3 text-[#aeaeb2] hover:text-white transition-colors text-sm"
                data-ocid="about.github.link"
              >
                <SiGithub size={16} />
                GitHub
              </a>
              <div className="flex items-center gap-2 glass rounded-xl px-4 py-3 text-[#aeaeb2] text-sm">
                <Mail size={16} style={{ color: "#0A84FF" }} />
                prakash@ios.dev
              </div>
            </div>

            {submitted ? (
              <div
                className="glass rounded-2xl p-8 text-center"
                data-ocid="about.contact.success_state"
              >
                <CheckCircle
                  size={40}
                  className="mx-auto mb-3"
                  style={{ color: "#30D158" }}
                />
                <h3 className="text-white font-bold text-xl mb-2">
                  Message sent!
                </h3>
                <p className="text-[#aeaeb2]">I'll respond within 24 hours.</p>
                <Button
                  variant="ghost"
                  className="mt-4 text-[#0A84FF]"
                  onClick={() => setSubmitted(false)}
                >
                  Send another
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-6 flex flex-col gap-4"
                data-ocid="about.contact.modal"
              >
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name" className="text-[#aeaeb2] text-sm">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#0A84FF]/50"
                    data-ocid="about.name.input"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email" className="text-[#aeaeb2] text-sm">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#0A84FF]/50"
                    data-ocid="about.email.input"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="message" className="text-[#aeaeb2] text-sm">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#0A84FF]/50 resize-none"
                    data-ocid="about.message.textarea"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full font-semibold"
                  style={{ background: "#0A84FF" }}
                  data-ocid="about.contact.submit_button"
                >
                  {isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
