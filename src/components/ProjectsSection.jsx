import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    id: 1,
    name: "ReRoute.AI",
    tagline: "Autonomous travel disruption recovery",
    description:
      "Cloud-native system that detects flight disruptions and auto-orchestrates recovery — AI rebooking via Duffel API, real-time weather context, JWT + Google OAuth2 auth, stateful observe-propose-confirm-apply agent loop.",
    highlights: [
      "FastAPI microservices + Redis-backed Celery task queues",
      "JWT access/refresh rotation + Google OAuth2 + session revocation",
      "AI rebooking engine integrating Duffel flight offers + weather signals",
      "Clean router → service → DAO layered architecture",
    ],
    stack: ["FastAPI", "PostgreSQL", "Redis", "Celery", "Next.js", "JWT"],
    github: "https://github.com/i-am-batman-28/ReRoute.Ai-",
    demo: null,
    badge: "🏆 1st Place — IDEAVERSE'26",
    badgeStyle: "text-amber-400 bg-amber-400/10 border-amber-400/25",
    featured: true,
    terminalCmd: "python main.py --mode=recovery --concurrent=50",
  },
  {
    id: 2,
    name: "ShipsKart Pricing Intelligence",
    tagline: "Shipping price analytics & benchmarking",
    description:
      "FastAPI backend over large shipping datasets + Next.js 15 dashboard with cascading product filters and interactive price benchmarking charts.",
    stack: ["FastAPI", "Next.js 15", "TypeScript", "Python"],
    github: "https://github.com/i-am-batman-28/ShipsKart-Pricing-Intelligence-Benchmarking",
    demo: null,
    badge: null,
    badgeStyle: "",
  },
  {
    id: 3,
    name: "CraftChain",
    tagline: "E-commerce + blockchain authenticity",
    description:
      "Full-stack artisan marketplace — idempotent order state machine, Razorpay webhook verification, dual-factor auth, Polygon on-chain authenticity certificates.",
    stack: ["Next.js", "Node.js", "MongoDB", "Razorpay", "Ethers.js"],
    github: "https://github.com/i-am-batman-28/Craft-Chain",
    demo: "https://craft-chain.vercel.app",
    badge: null,
    badgeStyle: "",
  },
  {
    id: 4,
    name: "GAJHO — Genetic Algorithm TSP",
    tagline: "Research paper implemented as interactive app",
    description:
      "Full GA-JGHO algorithm with all 5 modifications from the paper. Real-time convergence charts, multi-algorithm comparison (GA vs ABCTSP vs PACO-3Opt), TSPLIB benchmarks.",
    stack: ["TypeScript", "React", "Canvas API", "Vite"],
    github: "https://github.com/i-am-batman-28/GAJHO-Genetic-Algo",
    demo: null,
    badge: null,
    badgeStyle: "",
  },
  {
    id: 5,
    name: "MindEase",
    tagline: "Multi-modal mental health risk scoring",
    description:
      "Fuses RoBERTa (text), Wav2Vec2-XLSR (speech), Mini-Xception CNN (facial) via Llama 3.1 reasoning layer for explainable mental health risk scoring.",
    stack: ["Python", "HuggingFace", "LLaMA 3.1", "RoBERTa"],
    github: "https://github.com/i-am-batman-28",
    demo: null,
    badge: "🥈 2nd Place — Neural Nexus",
    badgeStyle: "text-slate-300 bg-slate-300/10 border-slate-300/20",
  },
];

const SmallCard = ({ project }) => (
  <div className="glass-card-hover p-5 hover:border-[hsl(var(--primary)/0.28)] hover:-translate-y-1 flex flex-col group h-full">
    <div className="flex items-start justify-between gap-2 mb-3">
      <div className="flex-1 min-w-0">
        {project.badge && (
          <span className={`inline-flex items-center text-[0.65rem] font-semibold px-2 py-0.5 rounded-full border mb-2 ${project.badgeStyle}`}>
            {project.badge}
          </span>
        )}
        <h3 className="font-semibold text-sm text-[hsl(var(--foreground))] leading-snug">{project.name}</h3>
        <p className="text-[hsl(var(--muted-foreground))] text-xs mt-0.5">{project.tagline}</p>
      </div>
      <div className="flex items-center gap-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
            <ArrowUpRight size={14} className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors" />
          </a>
        )}
        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={14} className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors" />
        </a>
      </div>
    </div>
    <p className="text-[hsl(var(--muted-foreground))] text-xs leading-relaxed mb-4 flex-1">{project.description}</p>
    <div className="flex flex-wrap gap-1.5 mt-auto">
      {project.stack.map((s) => <span key={s} className="tag">{s}</span>)}
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
          <p className="section-label mb-4">
            <span className="w-8 h-px bg-[hsl(var(--primary))] inline-block" />
            Projects
          </p>
          <h2 className="section-heading mb-3">Things I've built</h2>
          <p className="text-[hsl(var(--muted-foreground))] text-[1.05rem] mb-12 max-w-lg">
            Real systems. Real constraints. Real impact.
          </p>
        </div>

        {/* Featured card */}
        <div className="reveal reveal-delay-1 mb-5">
          <div
            className="relative rounded-2xl overflow-hidden group"
            style={{
              border: "1px solid hsl(153 60% 53% / 0.3)",
              background: "hsl(var(--card))",
              transition: "border-color 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "hsl(153 60% 53% / 0.55)";
              e.currentTarget.style.boxShadow = "0 0 40px hsl(153 60% 53% / 0.1)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "hsl(153 60% 53% / 0.3)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Glow */}
            <div
              className="absolute -top-24 -right-24 w-80 h-80 rounded-full pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-500"
              style={{ background: "radial-gradient(circle, hsl(153 60% 53% / 0.12) 0%, transparent 70%)" }}
            />

            {/* Terminal header bar */}
            <div
              className="flex items-center justify-between px-5 py-3 border-b"
              style={{ borderColor: "hsl(153 60% 53% / 0.2)", background: "hsl(220 20% 6%)" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs font-mono text-[hsl(var(--muted-foreground))]">
                  ~/projects/{featured.name.toLowerCase().replace(/\s/g, "-")}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {featured.badge && (
                  <span className={`text-[0.65rem] font-semibold px-2.5 py-1 rounded-full border ${featured.badgeStyle}`}>
                    {featured.badge}
                  </span>
                )}
                <a href={featured.github} target="_blank" rel="noopener noreferrer"
                  className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors">
                  <FaGithub size={16} />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-7 md:p-9 relative">
              <h3 className="text-xl font-bold text-[hsl(var(--foreground))] mb-1">{featured.name}</h3>
              <p className="text-[hsl(var(--muted-foreground))] text-sm mb-5">{featured.tagline}</p>
              <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed mb-6 max-w-2xl">{featured.description}</p>

              <ul className="space-y-2 mb-7">
                {featured.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-[hsl(var(--muted-foreground))]">
                    <span className="text-[hsl(var(--primary))] mt-[3px] text-xs shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Terminal snippet */}
              <div
                className="rounded-lg px-4 py-3 font-mono text-xs mb-6 flex items-center gap-2"
                style={{ background: "hsl(220 20% 6%)", border: "1px solid hsl(var(--border))" }}
              >
                <span className="text-[hsl(var(--primary))]">❯</span>
                <span className="text-green-400">{featured.terminalCmd}</span>
                <span
                  className="w-1.5 h-4 bg-[hsl(var(--primary))] ml-1 inline-block"
                  style={{ animation: "terminal-cursor 1s step-end infinite" }}
                />
              </div>

              <div className="flex flex-wrap gap-1.5">
                {featured.stack.map((s) => <span key={s} className="tag">{s}</span>)}
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
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
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline hover:border-[hsl(var(--primary)/0.45)] hover:text-[hsl(var(--primary))]"
          >
            <FaGithub size={15} /> View all on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
