import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTilt } from "@/hooks/useTilt";

const featuredProjects = [
  {
    id: 1,
    name: "ReRoute.AI",
    tagline: "Autonomous travel disruption recovery platform",
    description: "Cloud-native system that detects flight disruptions and auto-orchestrates recovery — AI rebooking via Duffel API, real-time weather context, JWT + Google OAuth2, stateful observe-propose-confirm-apply agent loop.",
    highlights: [
      "FastAPI microservices + Redis-backed Celery task queues",
      "JWT rotation + Google OAuth2 + session revocation",
      "AI rebooking engine — Duffel flight offers + weather signals",
      "Router → Service → DAO layered architecture",
    ],
    decisions: [
      { title: "Redis over DB polling", body: "Celery task state in Redis keeps latency under 50ms. DB polling at that volume would've killed connection pool." },
      { title: "Duffel API for rebooking", body: "Real flight inventory + live pricing. Mock data would never survive a live demo judge trying actual disrupted routes." },
      { title: "Observe-Propose-Confirm loop", body: "Agent never auto-applies changes — human confirms first. Prevents cascade failures in safety-critical booking flows." },
    ],
    stack: ["FastAPI", "PostgreSQL", "Redis", "Celery", "Next.js", "JWT"],
    github: "https://github.com/i-am-batman-28/ReRoute.Ai-",
    demo: null,
    badge: "🏆 1st Place · IDEAVERSE'26",
    badgeColor: "#fbbf24",
    terminalCmd: "uvicorn app.main:app --host 0.0.0.0 --port 8000",
    accentColor: "#60a5fa",
    image: "/projects/1776272525639.jpeg",
  },
  {
    id: 2,
    name: "CraftChain",
    tagline: "Artisan marketplace with on-chain product authentication",
    description: "Full-stack e-commerce platform for artisans — idempotent order state machine, Razorpay webhook verification, dual-factor auth, and Polygon blockchain certificates via Ethers.js. Live in production.",
    highlights: [
      "Idempotent order state machine — prevents duplicate charges on network retries",
      "Razorpay webhook verification with HMAC signature replay protection",
      "Polygon on-chain certificates — immutable provenance for every artisan product",
      "Dual-factor auth + role-based seller/buyer/admin access control",
    ],
    decisions: [
      { title: "Polygon over Ethereum mainnet", body: "Gas fees on mainnet would cost more than the artisan products. Polygon gives real on-chain guarantees at <$0.01/tx." },
      { title: "Idempotent order machine", body: "Razorpay can fire duplicate webhooks on retries. State machine with idempotency keys ensures no double-charges ever." },
      { title: "MongoDB for catalog", body: "Artisan product listings are schema-flexible by nature — no two crafts have the same attributes. Document model fits perfectly." },
    ],
    stack: ["Next.js", "Node.js", "MongoDB", "Razorpay", "Ethers.js", "Polygon"],
    github: "https://github.com/i-am-batman-28/Craft-Chain",
    demo: "https://craft-chain.vercel.app",
    badge: "🚀 Live in Production",
    badgeColor: "#34d399",
    terminalCmd: "npm run build && vercel deploy --prod",
    accentColor: "#818cf8",
    image: "/projects/craftchain-screenshot.png",
  },
];

const projects = [
  {
    id: 3,
    name: "ShipsKart Pricing Intelligence",
    tagline: "Shipping price analytics & benchmarking",
    description: "FastAPI backend over large shipping datasets + Next.js 15 dashboard with cascading filters and interactive price benchmarking charts.",
    stack: ["FastAPI", "Next.js 15", "TypeScript", "Python"],
    github: "https://github.com/i-am-batman-28/ShipsKart-Pricing-Intelligence-Benchmarking",
    demo: null,
    badge: null,
    badgeColor: null,
  },
  {
    id: 4,
    name: "GAJHO — Genetic Algorithm TSP",
    tagline: "Research paper → interactive web app",
    description: "Full GA-JGHO with all 5 modifications from the paper. Real-time convergence charts, multi-algorithm comparison (GA vs ABCTSP vs PACO-3Opt), TSPLIB benchmarks.",
    stack: ["TypeScript", "React", "Canvas API", "Vite"],
    github: "https://github.com/i-am-batman-28/GAJHO-Genetic-Algo",
    demo: null,
    badge: null,
    badgeColor: null,
  },
  {
    id: 5,
    name: "MindEase",
    tagline: "Multi-modal mental health risk scoring",
    description: "Fuses RoBERTa (text) + Wav2Vec2-XLSR (speech) + Mini-Xception CNN (facial) via Llama 3.1 reasoning layer for explainable mental health risk scores.",
    stack: ["Python", "HuggingFace", "LLaMA 3.1", "RoBERTa"],
    github: "https://github.com/i-am-batman-28",
    demo: null,
    badge: "🥈 2nd Place · Neural Nexus",
    badgeColor: "#94a3b8",
  },
];

const SmallCard = ({ project }) => {
  const { ref, onMouseMove, onMouseLeave } = useTilt(6);
  return (
    <div
      ref={ref}
      className="rounded-2xl p-5 flex flex-col h-full group"
      style={{ background: "hsl(224 18% 7%)", border: "1px solid hsl(224 15% 13%)", transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.15s ease", transformStyle: "preserve-3d", willChange: "transform" }}
      onMouseMove={onMouseMove}
      onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(96,165,250,0.3)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.3), 0 0 30px rgba(96,165,250,0.08)"; }}
      onMouseLeave={e => { onMouseLeave(e); e.currentTarget.style.borderColor = "hsl(224 15% 13%)"; e.currentTarget.style.boxShadow = "none"; }}
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex-1 min-w-0">
          {project.badge && (
            <span
              className="inline-flex items-center text-[0.65rem] font-mono font-semibold px-2 py-0.5 rounded-full mb-2"
              style={{ background: project.badgeColor + "18", color: project.badgeColor, border: `1px solid ${project.badgeColor}35` }}
            >
              {project.badge}
            </span>
          )}
          <h3 className="font-bold text-sm leading-snug" style={{ color: "hsl(var(--foreground))" }}>{project.name}</h3>
          <p className="text-xs mt-0.5" style={{ color: "hsl(215 12% 40%)" }}>{project.tagline}</p>
        </div>
        <div className="flex items-center gap-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ArrowUpRight size={14} style={{ color: "hsl(215 12% 50%)" }}
                onMouseEnter={e => e.currentTarget.style.color = "#60a5fa"}
                onMouseLeave={e => e.currentTarget.style.color = "hsl(215 12% 50%)"}
              />
            </a>
          )}
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <FaGithub size={14} style={{ color: "hsl(215 12% 50%)" }}
              onMouseEnter={e => e.currentTarget.style.color = "#60a5fa"}
              onMouseLeave={e => e.currentTarget.style.color = "hsl(215 12% 50%)"}
            />
          </a>
        </div>
      </div>
      <p className="text-xs leading-relaxed flex-1 mb-4" style={{ color: "hsl(215 12% 45%)" }}>{project.description}</p>
      <div className="flex flex-wrap gap-1.5 mt-auto tag-group">
        {project.stack.map(s => <span key={s} className="tag">{s}</span>)}
      </div>
    </div>
  );
};

const FeaturedCard = ({ project }) => {
  const [showDecisions, setShowDecisions] = useState(false);
  const accent = project.accentColor;
  const folderName = project.name.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");

  return (
    <div
      className="relative rounded-2xl overflow-hidden transition-all duration-300 group"
      style={{ background: "hsl(224 18% 7%)", border: `1px solid ${accent}28` }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = accent + "55"; e.currentTarget.style.boxShadow = `0 0 60px ${accent}12`; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = accent + "28"; e.currentTarget.style.boxShadow = "none"; }}
    >
      {/* Corner glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none transition-opacity duration-500 opacity-30 group-hover:opacity-60"
        style={{ background: `radial-gradient(circle, ${accent}0f 0%, transparent 70%)` }} />

      {/* Terminal header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b"
        style={{ background: "hsl(224 20% 5%)", borderColor: accent + "18" }}>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
          <span className="ml-3 text-xs" style={{ fontFamily: "'JetBrains Mono', monospace", color: "hsl(215 12% 35%)" }}>
            ~/projects/{folderName}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[0.65rem] font-mono font-semibold px-2.5 py-1 rounded-full"
            style={{ background: project.badgeColor + "18", color: project.badgeColor, border: `1px solid ${project.badgeColor}30` }}>
            {project.badge}
          </span>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="transition-colors duration-200" style={{ color: "hsl(215 12% 40%)" }}
              onMouseEnter={e => e.currentTarget.style.color = accent}
              onMouseLeave={e => e.currentTarget.style.color = "hsl(215 12% 40%)"}>
              <ArrowUpRight size={16} />
            </a>
          )}
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="transition-colors duration-200" style={{ color: "hsl(215 12% 40%)" }}
            onMouseEnter={e => e.currentTarget.style.color = accent}
            onMouseLeave={e => e.currentTarget.style.color = "hsl(215 12% 40%)"}>
            <FaGithub size={16} />
          </a>
        </div>
      </div>

      {/* Terminal command */}
      <div className="px-5 py-3 border-b flex items-center gap-2"
        style={{ background: "hsl(224 20% 5%)", borderColor: "hsl(224 15% 11%)" }}>
        <span style={{ color: accent, fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem" }}>❯</span>
        <span style={{ color: "#4ade80", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem" }}>{project.terminalCmd}</span>
        <span className="w-1.5 h-4 ml-1 inline-block"
          style={{ background: accent, animation: "terminal-blink 1s step-end infinite" }} />
      </div>

      {/* Main content */}
      <div className="p-7 md:p-9 relative">
        {/* Screenshot */}
        <div className="w-full rounded-xl mb-7 overflow-hidden"
          style={{ position: "relative", background: "hsl(224 20% 4%)", border: `1px solid ${accent}20` }}>
          {project.image
            ? (
              <div style={{ position: "relative" }}>
                <img
                  src={project.image}
                  alt={project.name}
                  style={{ width: "100%", height: "auto", display: "block", maxHeight: "420px", objectFit: "cover", objectPosition: "top" }}
                />
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom, transparent 55%, hsl(224 18% 7%))`, pointerEvents: "none" }} />
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, ${accent}08, transparent 40%)`, pointerEvents: "none" }} />
              </div>
            )
            : (
              <div className="flex flex-col items-center justify-center gap-2 select-none"
                style={{ height: "240px", color: accent + "40", border: `1px dashed ${accent}25` }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em" }}>
                  [ DROP SCREENSHOT HERE ]
                </span>
              </div>
            )}
        </div>

        <h3 className="text-xl font-bold mb-1" style={{ color: "hsl(var(--foreground))" }}>{project.name}</h3>
        <p className="text-sm mb-5" style={{ color: "hsl(215 12% 42%)" }}>{project.tagline}</p>
        <p className="text-sm leading-relaxed mb-6 max-w-2xl" style={{ color: "hsl(215 12% 48%)" }}>{project.description}</p>

        <ul className="space-y-2.5 mb-7">
          {project.highlights.map(h => (
            <li key={h} className="flex items-start gap-2.5 text-sm" style={{ color: "hsl(215 12% 50%)" }}>
              <span className="mt-[4px] text-xs shrink-0" style={{ color: accent }}>▸</span>
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 mb-7">
          {project.stack.map(s => <span key={s} className="tag">{s}</span>)}
        </div>

        {/* Design Decisions toggle */}
        <button
          onClick={() => setShowDecisions(v => !v)}
          className="flex items-center gap-2 text-xs font-mono transition-all duration-200 mb-1"
          style={{ color: showDecisions ? accent : "hsl(215 12% 40%)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
          onMouseEnter={e => e.currentTarget.style.color = accent}
          onMouseLeave={e => e.currentTarget.style.color = showDecisions ? accent : "hsl(215 12% 40%)"}>
          <span style={{ transition: "transform 0.2s", display: "inline-block", transform: showDecisions ? "rotate(90deg)" : "rotate(0deg)" }}>▶</span>
          {showDecisions ? "Hide" : "Show"} Design Decisions
        </button>

        {showDecisions && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
            {project.decisions.map(d => (
              <div key={d.title} className="rounded-xl p-4"
                style={{ background: "hsl(224 20% 5%)", border: `1px solid ${accent}20` }}>
                <p className="text-xs font-semibold mb-2" style={{ color: accent }}>{d.title}</p>
                <p className="text-xs leading-relaxed" style={{ color: "hsl(215 12% 42%)" }}>{d.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-32 px-4" ref={ref}>
      <div className="container max-w-4xl">

        <div className="reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-6"
            style={{ background: "hsl(217 91% 60% / 0.08)", border: "1px solid hsl(217 91% 60% / 0.18)", color: "#60a5fa" }}>
            <span className="w-1 h-1 rounded-full bg-[#60a5fa]" /> 04 · Projects
          </div>
          <h2 className="mb-3"
            style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.1 }}>
            Things I've built
          </h2>
          <p className="mb-12 text-[1.05rem] max-w-lg" style={{ color: "hsl(215 12% 45%)" }}>
            Real systems. Real constraints. Real impact.
          </p>
        </div>

        {/* ─── TWO FEATURED CARDS ─── */}
        <div className="space-y-5 mb-5">
          {featuredProjects.map((p, i) => (
            <div key={p.id} className={`reveal reveal-delay-${i + 1}`}>
              <FeaturedCard project={p} index={i} />
            </div>
          ))}
        </div>

        {/* ─── SMALL GRID ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {projects.map((p, i) => (
            <div key={p.id} className={`reveal reveal-delay-${i + 1}`}>
              <SmallCard project={p} />
            </div>
          ))}
        </div>

        <div className="reveal reveal-delay-3">
          <a href="https://github.com/i-am-batman-28" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
            style={{ background: "hsl(224 15% 10%)", border: "1px solid hsl(224 15% 18%)", color: "hsl(215 12% 50%)" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#60a5fa40"; e.currentTarget.style.color = "#60a5fa"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "hsl(224 15% 18%)"; e.currentTarget.style.color = "hsl(215 12% 50%)"; }}>
            <FaGithub size={15} /> View all on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
