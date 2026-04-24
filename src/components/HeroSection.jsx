import { useEffect, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ROLES = ["Backend Engineer", "AI Systems Builder", "Full-Stack Developer", "Systems Thinker"];

const TerminalWindow = () => {
  const lines = [
    { delay: 400,  text: "$ git clone https://github.com/i-am-batman-28/ReRoute.Ai-", color: "#94a3b8" },
    { delay: 1000, text: "Cloning into 'ReRoute.Ai'...", color: "#64748b" },
    { delay: 1600, text: "$ docker compose up --build -d", color: "#94a3b8" },
    { delay: 2200, text: "✓ api        Running   0.0.0.0:8000->8000/tcp", color: "#4ade80" },
    { delay: 2500, text: "✓ postgres   Running   5432/tcp", color: "#4ade80" },
    { delay: 2800, text: "✓ redis      Running   6379/tcp", color: "#4ade80" },
    { delay: 3200, text: "$ pytest --cov=app --cov-report=term-missing", color: "#94a3b8" },
    { delay: 3800, text: "PASSED 47/47  Coverage: 94%", color: "#60a5fa" },
  ];

  const [visible, setVisible] = useState(0);

  useEffect(() => {
    lines.forEach((line, i) => {
      setTimeout(() => setVisible(i + 1), line.delay);
    });
  }, []);

  return (
    <div
      className="rounded-xl overflow-hidden shadow-2xl"
      style={{
        background: "hsl(224 20% 3%)",
        border: "1px solid hsl(224 15% 16%)",
        boxShadow: "0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px hsl(224 15% 16%)",
        animation: "float 7s ease-in-out infinite",
      }}
    >
      {/* Window chrome */}
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{ background: "hsl(224 20% 5%)", borderBottom: "1px solid hsl(224 15% 12%)" }}
      >
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
        </div>
        <span
          className="text-xs px-3 py-0.5 rounded-md"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "#475569",
            background: "hsl(224 20% 8%)",
          }}
        >
          karthik@dev — zsh — 80×24
        </span>
        <div className="w-16" />
      </div>

      {/* Terminal body */}
      <div className="p-5 min-h-[200px] space-y-1.5">
        {lines.slice(0, visible).map((line, i) => (
          <div
            key={i}
            className="text-xs leading-relaxed"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: line.color,
              animation: "slide-in 0.3s ease-out both",
            }}
          >
            {line.text}
          </div>
        ))}
        {visible < lines.length && (
          <div className="flex items-center gap-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            <span style={{ color: "#60a5fa" }}>$</span>
            <span
              className="w-2 h-4 ml-1 inline-block"
              style={{ background: "#60a5fa", animation: "terminal-blink 1s step-end infinite" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export const HeroSection = () => {
  const [roleIdx, setRoleIdx]     = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting]   = useState(false);
  const [charIdx, setCharIdx]     = useState(0);
  const [loaded, setLoaded]       = useState(false);

  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  useEffect(() => {
    const current = ROLES[roleIdx];
    let t;
    if (!deleting && charIdx <= current.length) {
      t = setTimeout(() => { setDisplayed(current.slice(0, charIdx)); setCharIdx(c => c + 1); }, 68);
    } else if (!deleting && charIdx > current.length) {
      t = setTimeout(() => setDeleting(true), 2400);
    } else if (deleting && charIdx >= 0) {
      t = setTimeout(() => { setDisplayed(current.slice(0, charIdx)); setCharIdx(c => c - 1); }, 38);
    } else {
      setDeleting(false); setCharIdx(0);
      setRoleIdx(i => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(t);
  }, [charIdx, deleting, roleIdx]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">

      {/* Big ambient glow behind text */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "10%", left: "-10%",
          width: "70vw", height: "70vw",
          background: "radial-gradient(circle, hsl(217 91% 60% / 0.07) 0%, transparent 60%)",
          animation: "glow-breathe 8s ease-in-out infinite",
        }}
      />

      <div className="container relative z-10 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 xl:gap-24 items-center">

          {/* ── LEFT COLUMN ── */}
          <div>

            {/* Eyebrow badge */}
            <div
              className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full text-xs font-semibold"
              style={{
                background: "hsl(217 91% 60% / 0.08)",
                border: "1px solid hsl(217 91% 60% / 0.22)",
                color: "hsl(217 91% 72%)",
                fontFamily: "'JetBrains Mono', monospace",
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: "#4ade80",
                  boxShadow: "0 0 8px #4ade80, 0 0 16px #4ade8060",
                  animation: "glow-breathe 2s ease-in-out infinite",
                }}
              />
              Available for SDE roles · 2025
            </div>

            {/* Avatar + greeting row */}
            <div
              className="flex items-center gap-4 mb-5"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s",
              }}
            >
              <div className="relative">
                <img
                  src="/karthik.jpg"
                  alt="Karthik M Sarma"
                  className="w-12 h-12 rounded-full object-cover"
                  style={{
                    border: "2px solid hsl(217 91% 60% / 0.5)",
                    boxShadow: "0 0 0 4px hsl(217 91% 60% / 0.1), 0 0 20px hsl(217 91% 60% / 0.2)",
                  }}
                />
                <span
                  className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2"
                  style={{ background: "#4ade80", borderColor: "hsl(224 20% 4%)" }}
                />
              </div>
              <p
                className="text-sm"
                style={{ color: "hsl(215 12% 55%)", fontFamily: "'JetBrains Mono', monospace" }}
              >
                Hi, I'm Karthik 👋
              </p>
            </div>

            {/* MAIN HEADLINE */}
            <h1
              style={{
                fontSize: "clamp(2.8rem, 7vw, 5rem)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1.0,
                marginBottom: "1.25rem",
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
              }}
            >
              <span style={{ color: "hsl(var(--foreground))" }}>I build systems</span>
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #60a5fa 0%, #818cf8 40%, #a78bfa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  backgroundSize: "200% 200%",
                  animation: "gradient-shift 6s ease infinite",
                }}
              >
                that scale.
              </span>
            </h1>

            {/* Typewriter role */}
            <div
              className="h-8 flex items-center mb-7"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s",
              }}
            >
              <span
                className="text-lg font-medium"
                style={{ color: "hsl(215 12% 52%)", fontFamily: "'JetBrains Mono', monospace" }}
              >
                {displayed}
                <span
                  className="inline-block w-[2px] h-5 ml-0.5 align-middle"
                  style={{ background: "#60a5fa", animation: "blink 1s step-end infinite" }}
                />
              </span>
            </div>

            {/* Bio */}
            <p
              className="max-w-[520px] mb-10 text-[1.05rem] leading-relaxed"
              style={{
                color: "hsl(215 12% 50%)",
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s",
              }}
            >
              BTech AI & DS @ IIIT Sri City. I ship production APIs, AI pipelines, and
              full-stack products —{" "}
              <span style={{ color: "hsl(var(--foreground))", fontWeight: 500 }}>
                with numbers to back it up.
              </span>
            </p>

            {/* CTA row */}
            <div
              className="flex flex-wrap items-center gap-3 mb-10"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s ease 0.55s, transform 0.7s ease 0.55s",
              }}
            >
              <a
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                style={{
                  background: "hsl(var(--primary))",
                  color: "#0f172a",
                  boxShadow: "0 0 30px hsl(217 91% 60% / 0.35), 0 4px 15px rgba(0,0,0,0.3)",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 0 40px hsl(217 91% 60% / 0.5), 0 8px 25px rgba(0,0,0,0.3)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 0 30px hsl(217 91% 60% / 0.35), 0 4px 15px rgba(0,0,0,0.3)"; }}
              >
                View My Work
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200"
                style={{
                  background: "hsl(224 15% 10%)",
                  color: "hsl(var(--foreground))",
                  border: "1px solid hsl(224 15% 18%)",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "hsl(217 91% 60% / 0.4)"; e.currentTarget.style.color = "#60a5fa"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "hsl(224 15% 18%)"; e.currentTarget.style.color = "hsl(var(--foreground))"; }}
              >
                Get in Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1XLlVNa_IsVzFjnBEApQ-hG7WUeM9L6Dd/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-200"
                style={{ color: "hsl(215 12% 48%)" }}
                onMouseEnter={e => e.currentTarget.style.color = "#60a5fa"}
                onMouseLeave={e => e.currentTarget.style.color = "hsl(215 12% 48%)"}
              >
                <Download size={14} /> Resume
              </a>
            </div>

            {/* Socials */}
            <div
              className="flex items-center gap-5"
              style={{
                opacity: loaded ? 1 : 0,
                transition: "opacity 0.7s ease 0.65s",
              }}
            >
              {[
                { href: "https://github.com/i-am-batman-28", icon: FaGithub, label: "GitHub" },
                { href: "https://www.linkedin.com/in/karthik-sarma-9859b9291/", icon: FaLinkedin, label: "LinkedIn" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors duration-200"
                  style={{ color: "hsl(215 12% 42%)" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#60a5fa"}
                  onMouseLeave={e => e.currentTarget.style.color = "hsl(215 12% 42%)"}
                >
                  <Icon size={16} /> {label}
                </a>
              ))}
              <div className="w-px h-4" style={{ background: "hsl(224 15% 18%)" }} />
              <a
                href="mailto:karthikm.s23@iiits.in"
                className="text-xs transition-colors duration-200"
                style={{ color: "hsl(215 12% 38%)", fontFamily: "'JetBrains Mono', monospace" }}
                onMouseEnter={e => e.currentTarget.style.color = "#60a5fa"}
                onMouseLeave={e => e.currentTarget.style.color = "hsl(215 12% 38%)"}
              >
                karthikm.s23@iiits.in
              </a>
            </div>
          </div>

          {/* ── RIGHT COLUMN — Terminal ── */}
          <div
            className="hidden lg:block"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.9s ease 0.5s, transform 0.9s ease 0.5s",
            }}
          >
            <TerminalWindow />

            {/* Stat pills below terminal */}
            <div className="grid grid-cols-3 gap-2.5 mt-4">
              {[
                { n: "600k+", l: "Records/run" },
                { n: "1st 🏆", l: "IDEAVERSE'26" },
                { n: "60%",   l: "Time saved" },
              ].map(({ n, l }) => (
                <div
                  key={l}
                  className="rounded-xl p-3.5 text-center transition-all duration-200"
                  style={{
                    background: "hsl(224 20% 6%)",
                    border: "1px solid hsl(224 15% 13%)",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "hsl(217 91% 60% / 0.3)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "hsl(224 15% 13%)"; }}
                >
                  <p
                    className="text-xl font-bold mb-0.5"
                    style={{
                      background: "linear-gradient(135deg, #60a5fa, #818cf8)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {n}
                  </p>
                  <p className="text-[0.62rem]" style={{ color: "hsl(215 12% 38%)", fontFamily: "'JetBrains Mono', monospace" }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: 0.3 }}
      >
        <div
          className="w-px h-14 bg-gradient-to-b from-transparent"
          style={{ background: "linear-gradient(to bottom, transparent, #60a5fa)" }}
        />
        <span
          className="text-[0.58rem] tracking-[0.22em]"
          style={{ color: "#475569", fontFamily: "'JetBrains Mono', monospace" }}
        >
          SCROLL
        </span>
      </div>
    </section>
  );
};
