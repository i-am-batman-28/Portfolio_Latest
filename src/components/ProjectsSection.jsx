import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
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
    stack: ["FastAPI", "PostgreSQL", "Redis", "Celery", "Next.js", "JWT"],
    github: "https://github.com/i-am-batman-28/ReRoute.Ai-",
    demo: null,
    badge: "🏆 1st Place · IDEAVERSE'26",
    badgeColor: "#fbbf24",
    terminalCmd: "uvicorn app.main:app --host 0.0.0.0 --port 8000",
    featured: true,
  },
  {
    id: 2,
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
    id: 3,
    name: "CraftChain",
    tagline: "E-commerce + blockchain trust layer",
    description: "Full-stack artisan marketplace — idempotent order state machine, Razorpay webhook verification, dual-factor auth, Polygon on-chain certificates via Ethers.js.",
    stack: ["Next.js", "Node.js", "MongoDB", "Razorpay", "Ethers.js"],
    github: "https://github.com/i-am-batman-28/Craft-Chain",
    demo: "https://craft-chain.vercel.app",
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

const SmallCard = ({ project }) => (
  <div
    className="rounded-2xl p-5 flex flex-col h-full group transition-all duration-300"
    style={{ background: "hsl(224 18% 7%)", border: "1px solid hsl(224 15% 13%)" }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = "hsl(217 91% 60% / 0.3)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = "hsl(224 15% 13%)"; e.currentTarget.style.transform = "translateY(0)"; }}
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
    <div className="flex flex-wrap gap-1.5 mt-auto">
      {project.stack.map(s => <span key={s} className="tag">{s}</span>)}
    </div>
  </div>
);

export const ProjectsSection = () => {
  const ref = useScrollReveal();
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="py-32 px-4" ref={ref}>
      <div className="container max-w-4xl">

        <div className="reveal">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-6"
            style={{ background: "hsl(217 91% 60% / 0.08)", border: "1px solid hsl(217 91% 60% / 0.18)", color: "#60a5fa" }}
          >
            <span className="w-1 h-1 rounded-full bg-[#60a5fa]" /> 03 · Projects
          </div>
          <h2
            className="mb-3"
            style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.1 }}
          >
            Things I've built
          </h2>
          <p className="mb-12 text-[1.05rem] max-w-lg" style={{ color: "hsl(215 12% 45%)" }}>
            Real systems. Real constraints. Real impact.
          </p>
        </div>

        {/* ─── FEATURED CARD ─── */}
        <div className="reveal reveal-delay-1 mb-5">
          <div
            className="relative rounded-2xl overflow-hidden transition-all duration-300 group"
            style={{ background: "hsl(224 18% 7%)", border: "1px solid #60a5fa28" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#60a5fa55"; e.currentTarget.style.boxShadow = "0 0 60px #60a5fa12"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#60a5fa28"; e.currentTarget.style.boxShadow = "none"; }}
          >
            {/* Glow */}
            <div
              className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none transition-opacity duration-500 opacity-30 group-hover:opacity-60"
              style={{ background: "radial-gradient(circle, #60a5fa0f 0%, transparent 70%)" }}
            />

            {/* Terminal header */}
            <div
              className="flex items-center justify-between px-5 py-3.5 border-b"
              style={{ background: "hsl(224 20% 5%)", borderColor: "#60a5fa18" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
                <span
                  className="ml-3 text-xs"
                  style={{ fontFamily: "'JetBrains Mono', monospace", color: "hsl(215 12% 35%)" }}
                >
                  ~/projects/reroute-ai
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className="text-[0.65rem] font-mono font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: "#fbbf2418", color: "#fbbf24", border: "1px solid #fbbf2430" }}
                >
                  {featured.badge}
                </span>
                <a href={featured.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub size={16} style={{ color: "hsl(215 12% 40%)" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#60a5fa"}
                    onMouseLeave={e => e.currentTarget.style.color = "hsl(215 12% 40%)"}
                  />
                </a>
              </div>
            </div>

            {/* Terminal command line */}
            <div
              className="px-5 py-3 border-b flex items-center gap-2"
              style={{ background: "hsl(224 20% 5%)", borderColor: "hsl(224 15% 11%)" }}
            >
              <span style={{ color: "#60a5fa", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem" }}>❯</span>
              <span style={{ color: "#4ade80", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem" }}>{featured.terminalCmd}</span>
              <span
                className="w-1.5 h-4 ml-1 inline-block"
                style={{ background: "#60a5fa", animation: "terminal-blink 1s step-end infinite" }}
              />
            </div>

            {/* Content */}
            <div className="p-7 md:p-9 relative">
              <h3 className="text-xl font-bold mb-1" style={{ color: "hsl(var(--foreground))" }}>{featured.name}</h3>
              <p className="text-sm mb-5" style={{ color: "hsl(215 12% 42%)" }}>{featured.tagline}</p>
              <p className="text-sm leading-relaxed mb-6 max-w-2xl" style={{ color: "hsl(215 12% 48%)" }}>{featured.description}</p>

              <ul className="space-y-2.5 mb-7">
                {featured.highlights.map(h => (
                  <li key={h} className="flex items-start gap-2.5 text-sm" style={{ color: "hsl(215 12% 48%)" }}>
                    <span className="mt-[4px] text-xs shrink-0" style={{ color: "#60a5fa" }}>▸</span>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {featured.stack.map(s => <span key={s} className="tag">{s}</span>)}
              </div>
            </div>
          </div>
        </div>

        {/* ─── GRID ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {rest.map((p, i) => (
            <div key={p.id} className={`reveal reveal-delay-${i + 1}`}>
              <SmallCard project={p} />
            </div>
          ))}
        </div>

        <div className="reveal reveal-delay-3">
          <a
            href="https://github.com/i-am-batman-28"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
            style={{ background: "hsl(224 15% 10%)", border: "1px solid hsl(224 15% 18%)", color: "hsl(215 12% 50%)" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#60a5fa40"; e.currentTarget.style.color = "#60a5fa"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "hsl(224 15% 18%)"; e.currentTarget.style.color = "hsl(215 12% 50%)"; }}
          >
            <FaGithub size={15} /> View all on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
