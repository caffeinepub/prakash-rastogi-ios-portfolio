import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span className="text-xl font-bold text-gradient-blue">PKR</span>
          <span className="text-[#aeaeb2] text-sm">Senior iOS Architect</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#aeaeb2] hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <SiGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/prakash-rastogi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#aeaeb2] hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <SiLinkedin size={18} />
          </a>
        </div>

        <p className="text-[#aeaeb2] text-xs">
          © {year}. Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A84FF] hover:underline"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
