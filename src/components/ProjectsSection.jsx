import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    name: "ReRoute.AI",
    tagline: "Autonomous travel disruption recovery platform",
    description:
      "Cloud-native system that detects flight disruptions and automatically orchestrates recovery — rebooking alternatives via Duffel API, real-time weather context, JWT auth with Google OAuth2. Stateful observe-propose-confirm-apply agent loop.",
    highlights: [
      "FastAPI microservices + Redis-backed Celery task queues for concurrent monitoring",
      "JWT access/refresh token rotation + Google OAuth2 + session revocation",
      "AI rebooking engine integrating Duffel flight offers API + weather context",
      "Clean router → service → DAO layered architecture",
    ],
    stack: ["FastAPI", "PostgreSQL", "Redis", "Celery", "Next.js", "JWT"],
    github: "https://github.com/i-am-batman-28/ReRoute.Ai-",
    demo: null,
    badge: { label: "🏆 1st Place — IDEAVERSE'26", color: "text-amber-400 bg-amber-400/10 border-amber-400/25" },
    featured: true,
  },
  {
    id: 2,
    name: "ShipsKart Pricing Intelligence",
    tagline: "Full-stack shipping price analytics & benchmarking platform",
    description:
      "FastAPI backend over large CSV datasets + Next.js 15 dashboard with cascading product filters and interactive charts. Built for real pricing intelligence workflows.",
    highlights: [
      "FastAPI REST API with Pydantic models over large shipping datasets",
      "Next.js 15 App Router dashboard with cascading filters",
      "Interactive price benchmarking charts",
    ],
    stack: ["FastAPI", "Next.js 15", "TypeScript", "Python"],
    github: "https://github.com/i-am-batman-28/ShipsKart-Pricing-Intelligence-Benchmarking",
    demo: null,
    badge: null,
    featured: false,
  },
  {
    id: 3,
    name: "CraftChain",
    tagline: "E-commerce marketplace with blockchain trust layer",
    description:
      "Full-stack artisan marketplace with idempotent order state machine, Razorpay webhook verification, dual-factor auth, and on-chain authenticity certificates on Polygon via Ethers.js.",
    highlights: [
      "Idempotent order state machine + Razorpay webhook signature verification",
      "Dual-factor auth: bcrypt + OTP + JWT + Redux-persisted state",
      "Polygon blockchain certificates via Ethers.js post-payment",
    ],
    stack: ["Next.js", "Node.js", "MongoDB", "Razorpay", "Ethers.js"],
    github: "https://github.com/i-am-batman-28/Craft-Chain",
    demo: "https://craft-chain.vercel.app",
    badge: null,
    featured: false,
  },
  {
    id: 4,
    name: "GAJHO — Genetic Algorithm for TSP",
    tagline: "Interactive TSP solver with novel jumping-gene heuristic operators",
    description:
      "Web app implementing GA-JGHO algorithm from a research paper — all 5 modifications. Real-time convergence charts, multi-algorithm comparison (GA vs ABCTSP vs PACO-3Opt), and TSPLIB benchmark datasets.",
    highlights: [
      "Full GA-JGHO with jumping gene + heuristic operators",
      "Multi-algorithm comparison with real-time performance charts",
      "Interactive canvas city placement + TSPLIB benchmarks",
    ],
    stack: ["TypeScript", "React", "Vite", "Canvas API"],
    github: "https://github.com/i-am-batman-28/GAJHO-Genetic-Algo",
    demo: null,
    badge: null,
    featured: false,
  },
  {
    id: 5,
    name: "MindEase",
    tagline: "Multi-modal mental health risk scoring",
    description:
      "Fuses text (RoBERTa), speech (Wav2Vec2-XLSR), and facial expression (Mini-Xception CNN) signals via a Llama 3.1 reasoning layer for explainable mental health risk scoring.",
    highlights: [
      "RoBERTa sentiment + Wav2Vec2-XLSR speech emotion",
      "Mini-Xception CNN facial expression detection",
      "Llama 3.1 fusion layer for explainable risk scores",
    ],
    stack: ["Python", "HuggingFace", "LLaMA 3.1", "RoBERTa"],
    github: "https://github.com/i-am-batman-28",
    demo: null,
    badge: { label: "🥈 2nd Place — Neural Nexus", color: "text-slate-300 bg-slate-300/10 border-slate-300/25" },
    featured: false,
  },
];

export const ProjectsSection = () => {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="py-28 px-4">
      <div className="container max-w-4xl">
        <p className="text-[hsl(var(--primary))] text-sm font-mono mb-3">Projects</p>
        <h2 className="section-heading mb-3">Things I've built</h2>
        <p className="text-[hsl(var(--muted-foreground))] mb-12 max-w-xl">
          Real systems with real constraints — not tutorials or side experiments.
        </p>

        {/* Featured project */}
        <div className="p-6 md:p-8 rounded-xl border border-[hsl(var(--primary)/0.3)] bg-[hsl(var(--card))] mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--primary)/0.04)] rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4 relative">
            <div>
              {featured.badge && (
                <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border mb-3 ${featured.badge.color}`}>
                  {featured.badge.label}
                </span>
              )}
              <h3 className="text-xl font-bold">{featured.name}</h3>
              <p className="text-[hsl(var(--muted-foreground))] text-sm mt-1">{featured.tagline}</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={featured.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
            </div>
          </div>

          <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed mb-5">
            {featured.description}
          </p>

          <ul className="space-y-1.5 mb-5">
            {featured.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))]">
                <span className="text-[hsl(var(--primary))] mt-0.5 shrink-0">▸</span>
                {h}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5">
            {featured.stack.map((s) => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </div>

        {/* Other projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {rest.map((project) => (
            <div
              key={project.id}
              className="p-5 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--primary)/0.25)] transition-colors duration-200 flex flex-col"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  {project.badge && (
                    <span className={`inline-flex items-center text-xs font-medium px-2 py-0.5 rounded-full border mb-2 ${project.badge.color}`}>
                      {project.badge.label}
                    </span>
                  )}
                  <h3 className="font-semibold text-base">{project.name}</h3>
                  <p className="text-[hsl(var(--muted-foreground))] text-xs mt-0.5">{project.tagline}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                      aria-label="Live demo"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub size={16} />
                  </a>
                </div>
              </div>

              <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.stack.map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <a
          href="https://github.com/i-am-batman-28"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline inline-flex"
        >
          <FaGithub size={15} /> View all on GitHub
        </a>
      </div>
    </section>
  );
};
