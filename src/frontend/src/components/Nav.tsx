import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
];

function LiveClock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const timeStr = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const dateStr = now.toLocaleDateString([], {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <div className="hidden sm:flex flex-col items-end leading-tight">
      <span className="text-white text-sm font-mono font-medium">
        {timeStr}
      </span>
      <span className="text-[#aeaeb2] text-xs">
        {dateStr} &middot; {tz}
      </span>
    </div>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-glass" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left slot - empty */}
        <div className="w-8" />

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.to)
                    ? "text-[#0A84FF]"
                    : "text-[#aeaeb2] hover:text-white"
                }`}
                data-ocid="nav.link"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Live clock - top right */}
        <LiveClock />

        {/* Mobile menu button */}
        <button
          type="button"
          className="sm:hidden text-[#aeaeb2] hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="sm:hidden glass border-t border-white/5">
          <ul className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-base font-medium transition-colors ${
                    isActive(link.to) ? "text-[#0A84FF]" : "text-[#aeaeb2]"
                  }`}
                  data-ocid="nav.link"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-white/10">
              <MobileClock />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function MobileClock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const timeStr = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const dateStr = now.toLocaleDateString([], {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-white text-sm font-mono font-medium">
        {timeStr}
      </span>
      <span className="text-[#aeaeb2] text-xs">
        {dateStr} &middot; {tz}
      </span>
    </div>
  );
}
