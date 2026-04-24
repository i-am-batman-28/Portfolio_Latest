import { useEffect, useRef, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ROLES = ["Backend Engineer", "AI Systems Builder", "Full-Stack Developer", "Systems Thinker"];

/* ── Letter-by-letter animated word ── */
const AnimWord = ({ word, delay = 0, color, gradient }) => {
  const letters = word.split("");
  return (
    <span style={{ display: "inline-block" }}>
      {letters.map((ch, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            opacity: 0,
            filter: "blur(8px)",
            transform: "translateY(20px)",
            animation: `letter-in 0.5s cubic-bezier(0.16,1,0.3,1) ${delay + i * 0.04}s forwards`,
            ...(gradient ? {
              background: gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              backgroundSize: "200% 200%",
            } : { color }),
          }}
        >
          {ch === " " ? " " : ch}
        </span>
      ))}
    </span>
  );
};

/* ── Code Rain Canvas ── */
const CodeRain = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.offsetWidth || 420;
    const H = canvas.offsetHeight || 120;
    canvas.width  = W;
    canvas.height = H;
    const FONT_SIZE = 11;
    const COLS = Math.floor(W / FONT_SIZE);
    const drops = Array.from({ length: COLS }, () => Math.random() * -50);
    const chars = "01アイウエオカキクケコ<>{}[]()=>∑∏∆λφπ";
    let raf;
    const draw = () => {
      ctx.fillStyle = "rgba(8,11,20,0.18)";
      ctx.fillRect(0, 0, W, H);
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const y = drops[i] * FONT_SIZE;
        ctx.fillStyle = `rgba(96,165,250,${Math.random() * 0.5 + 0.3})`;
        ctx.font = `${FONT_SIZE}px 'JetBrains Mono', monospace`;
        ctx.fillText(char, i * FONT_SIZE, y);
        if (y > H && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 0.5 + Math.random() * 0.3;
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);
  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block", opacity: 0.4 }} />;
};

/* ── Terminal Window with live uptime ── */
const TerminalWindow = () => {
  const lines = [
    { delay: 400,  text: "$ git clone https://github.com/i-am-batman-28/ReRoute.Ai-", color: "#94a3b8" },
    { delay: 1000, text: "Cloning into 'ReRoute.Ai'...",                              color: "#475569" },
    { delay: 1600, text: "$ docker compose up --build -d",                            color: "#94a3b8" },
    { delay: 2200, text: "✓ api        Running   0.0.0.0:8000->8000/tcp",             color: "#60a5fa" },
    { delay: 2500, text: "✓ postgres   Running   5432/tcp",                           color: "#60a5fa" },
    { delay: 2800, text: "✓ redis      Running   6379/tcp",                           color: "#60a5fa" },
    { delay: 3200, text: "$ pytest --cov=app --cov-report=term-missing",              color: "#94a3b8" },
    { delay: 3800, text: "PASSED 47/47  Coverage: 94%",                               color: "#a5b4fc" },
  ];
  const [visible, setVisible] = useState(0);
  const [uptime, setUptime]   = useState(0);

  useEffect(() => {
    lines.forEach((line, i) => setTimeout(() => setVisible(i + 1), line.delay));
  }, []);

  useEffect(() => {
    const t = setInterval(() => setUptime(s => s + 1), 1000);
    return () => clearInterval(t);
  }, []);

  const fmt = (s) => {
    const h   = Math.floor(s / 3600).toString().padStart(2, "0");
    const m   = Math.floor((s % 3600) / 60).toString().padStart(2, "0");
    const sec = (s % 60).toString().padStart(2, "0");
    return `${h}:${m}:${sec}`;
  };

  return (
    <div className="rounded-xl overflow-hidden"
      style={{
        background: "hsl(224 20% 3%)",
        border: "1px solid hsl(224 15% 16%)",
        boxShadow: "0 25px 60px rgba(0,0,0,0.6), 0 0 80px rgba(96,165,250,0.05)",
        animation: "float 7s ease-in-out infinite",
      }}>
      <div className="flex items-center justify-between px-4 py-3"
        style={{ background: "hsl(224 20% 5%)", borderBottom: "1px solid hsl(224 15% 12%)" }}>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
        </div>
        <span className="text-xs px-3 py-0.5 rounded-md"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: "#475569", background: "hsl(224 20% 8%)" }}>
          karthik@dev — zsh
        </span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#60a5fa", boxShadow: "0 0 6px #60a5fa", animation: "glow-breathe 2s ease-in-out infinite" }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "#60a5fa" }}>{fmt(uptime)}</span>
        </div>
      </div>

      <div className="p-5 min-h-[200px] space-y-1.5">
        {lines.slice(0, visible).map((line, i) => (
          <div key={i} className="text-xs leading-relaxed"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: line.color, animation: "slide-in 0.3s ease-out both" }}>
            {line.text}
          </div>
        ))}
        {visible < lines.length && (
          <div className="flex items-center gap-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            <span style={{ color: "#60a5fa" }}>$</span>
            <span className="w-2 h-4 ml-1 inline-block"
              style={{ background: "#60a5fa", animation: "terminal-blink 1s step-end infinite" }} />
          </div>
        )}
      </div>

      <div className="px-5 py-2 flex items-center justify-between"
        style={{ borderTop: "1px solid hsl(224 15% 10%)", background: "hsl(224 20% 4%)" }}>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1"
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.58rem", color: "#60a5fa" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#60a5fa" }} /> RUNNING
          </span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.58rem", color: "#475569" }}>
            PORT 8000
          </span>
        </div>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.58rem", color: "#334155" }}>
          FastAPI · Python 3.11
        </span>
      </div>
    </div>
  );
};

/* ── Magnetic button ── */
const MagneticBtn = ({ children, href, style, onMouseEnter, onMouseLeave, className }) => {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width  / 2) * 0.25;
    const y = (e.clientY - rect.top  - rect.height / 2) * 0.25;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const onLeave = (e) => {
    ref.current.style.transform = "translate(0,0)";
    onMouseLeave?.(e);
  };
  return (
    <a ref={ref} href={href} className={className}
      style={{ ...style, transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, color 0.2s ease" }}
      onMouseMove={onMove} onMouseLeave={onLeave} onMouseEnter={onMouseEnter}>
      {children}
    </a>
  );
};

/* ── Hero ── */
export const HeroSection = () => {
  const [roleIdx,   setRoleIdx]   = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting,  setDeleting]  = useState(false);
  const [charIdx,   setCharIdx]   = useState(0);
  const [loaded,    setLoaded]    = useState(false);

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

      <div className="absolute pointer-events-none" style={{
        top: "10%", left: "-10%", width: "70vw", height: "70vw",
        background: "radial-gradient(circle, hsl(217 91% 60% / 0.07) 0%, transparent 60%)",
        animation: "glow-breathe 8s ease-in-out infinite",
      }} />
      <div className="absolute pointer-events-none" style={{
        bottom: "0%", right: "-5%", width: "45vw", height: "45vw",
        background: "radial-gradient(circle, rgba(129,140,248,0.05) 0%, transparent 65%)",
        animation: "glow-breathe 11s ease-in-out infinite 2s",
      }} />

      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        <div style={{
          position: "absolute", left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(96,165,250,0.12) 30%, rgba(129,140,248,0.2) 50%, rgba(96,165,250,0.12) 70%, transparent 100%)",
          animation: "scan-line 8s linear infinite",
          boxShadow: "0 0 10px rgba(96,165,250,0.25)",
        }} />
      </div>

      <div className="container relative pt-28 pb-20" style={{ zIndex: 10 }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 xl:gap-24 items-center">

          <div>
            <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full text-xs font-semibold"
              style={{
                background: "hsl(217 91% 60% / 0.08)", border: "1px solid hsl(217 91% 60% / 0.22)",
                color: "hsl(217 91% 72%)", fontFamily: "'JetBrains Mono', monospace",
                opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
              }}>
              <span className="w-2 h-2 rounded-full"
                style={{ background: "#60a5fa", boxShadow: "0 0 8px #60a5fa, 0 0 16px #60a5fa60", animation: "glow-breathe 2s ease-in-out infinite" }} />
              Available for SDE roles · 2025
            </div>

            <div className="flex items-center gap-4 mb-6"
              style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s" }}>
              <div className="relative">
                <img src="/karthik.jpg" alt="Karthik M Sarma" className="w-12 h-12 rounded-full object-cover"
                  style={{ border: "2px solid rgba(96,165,250,0.5)", boxShadow: "0 0 0 4px rgba(96,165,250,0.1), 0 0 20px rgba(96,165,250,0.2)" }} />
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2"
                  style={{ background: "#60a5fa", borderColor: "hsl(224 20% 4%)" }} />
              </div>
              <p className="text-sm" style={{ color: "hsl(215 12% 55%)", fontFamily: "'JetBrains Mono', monospace" }}>
                Hi, I'm Karthik 👋
              </p>
            </div>

            <h1 style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.0, marginBottom: "1.25rem" }}>
              <AnimWord word="I build systems" delay={0.3} color="hsl(var(--foreground))" />
              <br />
              <AnimWord
                word="that scale."
                delay={0.9}
                gradient="linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #60a5fa 100%)"
              />
            </h1>

            <div className="h-8 flex items-center mb-7"
              style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.7s ease 1.4s, transform 0.7s ease 1.4s" }}>
              <span className="text-lg font-medium" style={{ color: "hsl(215 12% 52%)", fontFamily: "'JetBrains Mono', monospace" }}>
                {displayed}
                <span className="inline-block w-[2px] h-5 ml-0.5 align-middle"
                  style={{ background: "#60a5fa", animation: "blink 1s step-end infinite" }} />
              </span>
            </div>

            <p className="max-w-[520px] mb-10 text-[1.05rem] leading-relaxed"
              style={{ color: "hsl(215 12% 50%)", opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.7s ease 1.5s, transform 0.7s ease 1.5s" }}>
              BTech AI & DS @ IIIT Sri City. I ship production APIs, AI pipelines, and full-stack products —{" "}
              <span style={{ color: "hsl(var(--foreground))", fontWeight: 500 }}>with numbers to back it up.</span>
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-10"
              style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.7s ease 1.6s, transform 0.7s ease 1.6s" }}>
              <MagneticBtn href="#projects"
                className="group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
                style={{ background: "hsl(var(--primary))", color: "#0f172a", boxShadow: "0 0 30px rgba(96,165,250,0.35), 0 4px 15px rgba(0,0,0,0.3)" }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 50px rgba(96,165,250,0.65), 0 8px 25px rgba(0,0,0,0.3)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 0 30px rgba(96,165,250,0.35), 0 4px 15px rgba(0,0,0,0.3)"; }}>
                View My Work <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </MagneticBtn>

              <MagneticBtn href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm"
                style={{ background: "hsl(224 15% 10%)", color: "hsl(var(--foreground))", border: "1px solid hsl(224 15% 18%)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(96,165,250,0.4)"; e.currentTarget.style.color = "#60a5fa"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "hsl(224 15% 18%)"; e.currentTarget.style.color = "hsl(var(--foreground))"; }}>
                Get in Touch
              </MagneticBtn>

              <MagneticBtn href="https://drive.google.com/file/d/1XLlVNa_IsVzFjnBEApQ-hG7WUeM9L6Dd/view?usp=share_link"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm"
                style={{ color: "hsl(215 12% 48%)" }}
                onMouseEnter={e => e.currentTarget.style.color = "#60a5fa"}
                onMouseLeave={e => e.currentTarget.style.color = "hsl(215 12% 48%)"}>
                <Download size={14} /> Resume
              </MagneticBtn>
            </div>

            <div className="flex items-center gap-5"
              style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.7s ease 1.7s" }}>
              {[
                { href: "https://github.com/i-am-batman-28",                    icon: FaGithub,   label: "GitHub" },
                { href: "https://www.linkedin.com/in/karthik-sarma-9859b9291/", icon: FaLinkedin, label: "LinkedIn" },
              ].map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors duration-200"
                  style={{ color: "hsl(215 12% 42%)" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#60a5fa"}
                  onMouseLeave={e => e.currentTarget.style.color = "hsl(215 12% 42%)"}>
                  <Icon size={16} /> {label}
                </a>
              ))}
              <div className="w-px h-4" style={{ background: "hsl(224 15% 18%)" }} />
              <a href="mailto:karthikm.s23@iiits.in"
                className="text-xs transition-colors duration-200"
                style={{ color: "hsl(215 12% 38%)", fontFamily: "'JetBrains Mono', monospace" }}
                onMouseEnter={e => e.currentTarget.style.color = "#60a5fa"}
                onMouseLeave={e => e.currentTarget.style.color = "hsl(215 12% 38%)"}>
                karthikm.s23@iiits.in
              </a>
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-4"
            style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.9s ease 0.6s, transform 0.9s ease 0.6s" }}>
            <TerminalWindow />

            <div className="grid grid-cols-3 gap-2.5">
              {[
                { n: "600k+", l: "Records/run" },
                { n: "1st 🏆", l: "IDEAVERSE'26" },
                { n: "60%",   l: "Time saved" },
              ].map(({ n, l }) => (
                <div key={l} className="rounded-xl p-3.5 text-center transition-all duration-200"
                  style={{ background: "hsl(224 20% 6%)", border: "1px solid hsl(224 15% 13%)" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(96,165,250,0.3)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "hsl(224 15% 13%)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  <p className="text-xl font-bold mb-0.5"
                    style={{ background: "linear-gradient(135deg, #60a5fa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    {n}
                  </p>
                  <p className="text-[0.62rem]" style={{ color: "hsl(215 12% 38%)", fontFamily: "'JetBrains Mono', monospace" }}>{l}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl overflow-hidden"
              style={{ height: "110px", background: "hsl(224 20% 3%)", border: "1px solid hsl(224 15% 14%)", position: "relative" }}>
              <CodeRain />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, hsl(224 20% 3%) 0%, transparent 25%, transparent 75%, hsl(224 20% 3%) 100%)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: "10px", right: "12px", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "rgba(96,165,250,0.35)", letterSpacing: "0.1em" }}>
                SYSTEM ACTIVE
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ opacity: 0.3 }}>
        <div className="w-px h-14" style={{ background: "linear-gradient(to bottom, transparent, #60a5fa)" }} />
        <span className="text-[0.58rem] tracking-[0.22em]" style={{ color: "#475569", fontFamily: "'JetBrains Mono', monospace" }}>SCROLL</span>
      </div>
    </section>
  );
};
