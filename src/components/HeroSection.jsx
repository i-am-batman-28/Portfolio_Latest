import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

const roles = ["Backend Engineer", "AI Systems Builder", "Full-Stack Developer"];

const terminalLines = [
  { prompt: "~", cmd: "git clone ReRoute.AI", color: "text-green-400" },
  { prompt: "~", cmd: "docker compose up --build", color: "text-blue-400" },
  { prompt: "~", cmd: "pytest --cov=. --cov-report=html", color: "text-yellow-400" },
  { prompt: "~", cmd: "curl -X POST /api/v1/rebook", color: "text-purple-400" },
];

const TerminalBlock = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((v) => {
        if (v < terminalLines.length) return v + 1;
        clearInterval(interval);
        return v;
      });
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="rounded-xl overflow-hidden border border-[hsl(var(--border))] shadow-2xl"
      style={{ background: "hsl(220 20% 6%)", animation: "float-slow 6s ease-in-out infinite" }}
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[hsl(var(--border))]">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-2 text-xs text-[hsl(var(--muted-foreground))] font-mono">karthik@dev — zsh</span>
      </div>
      {/* Terminal body */}
      <div className="p-5 font-mono text-xs space-y-2 min-h-[140px]">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-[hsl(var(--primary))]">❯</span>
            <span className={line.color}>{line.cmd}</span>
          </div>
        ))}
        {visibleLines < terminalLines.length && (
          <div className="flex items-center gap-2">
            <span className="text-[hsl(var(--primary))]">❯</span>
            <span
              className="w-2 h-4 bg-[hsl(var(--primary))] inline-block"
              style={{ animation: "terminal-cursor 1s step-end infinite" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export const HeroSection = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = roles[roleIdx];
    let t;
    if (!deleting && charIdx <= current.length) {
      t = setTimeout(() => { setDisplayed(current.slice(0, charIdx)); setCharIdx(c => c + 1); }, 65);
    } else if (!deleting && charIdx > current.length) {
      t = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && charIdx >= 0) {
      t = setTimeout(() => { setDisplayed(current.slice(0, charIdx)); setCharIdx(c => c - 1); }, 35);
    } else {
      setDeleting(false); setCharIdx(0);
      setRoleIdx(i => (i + 1) % roles.length);
    }
    return () => clearTimeout(t);
  }, [charIdx, deleting, roleIdx]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center px-4 overflow-hidden">

      {/* Hero glow */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(153 60% 53% / 0.09) 0%, transparent 65%)" }}
      />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            {/* Status badge */}
            <div
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[hsl(var(--primary)/0.25)] bg-[hsl(var(--primary)/0.06)] text-xs font-medium text-[hsl(var(--primary))] mb-8"
              style={{ animation: "fade-up 0.5s ease-out 0.1s both" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))]"
                style={{ boxShadow: "0 0 8px hsl(153 60% 53%)", animation: "glow-pulse 2s ease-in-out infinite" }}
              />
              Open to SDE opportunities · 2025
            </div>

            {/* Avatar + name row */}
            <div
              className="flex items-center gap-4 mb-5"
              style={{ animation: "fade-up 0.6s ease-out 0.2s both" }}
            >
              <div className="relative shrink-0">
                <img
                  src="/karthik.jpg"
                  alt="Karthik M Sarma"
                  className="w-14 h-14 rounded-full object-cover"
                  style={{
                    border: "2px solid hsl(153 60% 53% / 0.6)",
                    boxShadow: "0 0 0 4px hsl(153 60% 53% / 0.1)",
                  }}
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-[hsl(var(--primary))] border-2 border-[hsl(var(--background))] flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary-foreground))]" />
                </span>
              </div>
              <div>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Hey, I'm</p>
                <p className="font-semibold text-[hsl(var(--foreground))]">Karthik M Sarma</p>
              </div>
            </div>

            {/* Headline */}
            <h1
              className="font-extrabold tracking-[-0.04em] leading-[1.05] mb-5"
              style={{
                fontSize: "clamp(2.6rem, 6vw, 4.2rem)",
                animation: "fade-up 0.65s ease-out 0.3s both",
              }}
            >
              I build systems<br />
              <span
                style={{
                  background: "linear-gradient(135deg, hsl(153 60% 60%), hsl(180 60% 55%), hsl(153 60% 45%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                that scale.
              </span>
            </h1>

            {/* Typewriter */}
            <div
              className="h-9 flex items-center mb-6"
              style={{ animation: "fade-up 0.65s ease-out 0.4s both" }}
            >
              <span className="text-lg md:text-xl font-medium text-[hsl(var(--muted-foreground))]">
                {displayed}
                <span
                  className="inline-block w-0.5 h-5 bg-[hsl(var(--primary))] ml-0.5 align-middle"
                  style={{ animation: "blink 1s step-end infinite" }}
                />
              </span>
            </div>

            {/* Bio */}
            <p
              className="text-[hsl(var(--muted-foreground))] leading-relaxed max-w-[500px] mb-10 text-[1.02rem]"
              style={{ animation: "fade-up 0.65s ease-out 0.5s both" }}
            >
              BTech AI & DS @ IIIT Sri City. I've shipped fraud detection platforms
              processing <span className="text-[hsl(var(--foreground))] font-medium">600k+ records</span>,
              WhatsApp AI agents handling <span className="text-[hsl(var(--foreground))] font-medium">500+ leads/day</span>,
              and won a hackathon building a cloud-native travel recovery system.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap items-center gap-3 mb-10"
              style={{ animation: "fade-up 0.65s ease-out 0.6s both" }}
            >
              <a
                href="#projects"
                className="btn-primary hover:opacity-90 hover:-translate-y-px"
                style={{ boxShadow: "0 0 24px hsl(153 60% 53% / 0.25)" }}
              >
                See My Work <ArrowRight size={15} />
              </a>
              <a
                href="#contact"
                className="btn-outline hover:border-[hsl(var(--primary)/0.45)] hover:text-[hsl(var(--primary))]"
              >
                Get in Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1XLlVNa_IsVzFjnBEApQ-hG7WUeM9L6Dd/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors duration-200 flex items-center gap-1.5"
              >
                Resume ↗
              </a>
            </div>

            {/* Socials */}
            <div
              className="flex items-center gap-5"
              style={{ animation: "fade-up 0.65s ease-out 0.7s both" }}
            >
              <a href="https://github.com/i-am-batman-28" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors">
                <FaGithub size={17} /> GitHub
              </a>
              <div className="w-px h-4 bg-[hsl(var(--border))]" />
              <a href="https://www.linkedin.com/in/karthik-sarma-9859b9291/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors">
                <FaLinkedin size={17} /> LinkedIn
              </a>
              <div className="w-px h-4 bg-[hsl(var(--border))]" />
              <a href="mailto:karthikm.s23@iiits.in"
                className="text-sm font-mono text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors">
                karthikm.s23@iiits.in
              </a>
            </div>
          </div>

          {/* Right — Terminal */}
          <div
            className="hidden lg:block"
            style={{ animation: "fade-up 0.8s ease-out 0.5s both" }}
          >
            <TerminalBlock />

            {/* Stats below terminal */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { n: "3+", l: "Industry Roles" },
                { n: "2×", l: "Hackathon Winner" },
                { n: "600k+", l: "Records Processed" },
              ].map(({ n, l }) => (
                <div
                  key={l}
                  className="glass-card p-4 text-center hover:border-[hsl(var(--primary)/0.3)] cursor-default"
                >
                  <p className="text-xl font-bold text-[hsl(var(--primary))]">{n}</p>
                  <p className="text-[0.65rem] text-[hsl(var(--muted-foreground))] mt-0.5 leading-tight">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-25">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[hsl(var(--muted-foreground))]" />
        <span className="text-[0.6rem] font-mono tracking-[0.2em] text-[hsl(var(--muted-foreground))]">SCROLL</span>
      </div>
    </section>
  );
};
