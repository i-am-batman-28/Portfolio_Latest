const experiences = [
  {
    id: 1,
    title: "Backend Software Engineer",
    company: "OmniSageAI",
    duration: "Dec 2025 – Present",
    location: "Remote",
    type: "Full-time",
    bullets: [
      "Designed scalable multi-tenant REST API with FastAPI & PostgreSQL — RBAC across 3 permission tiers, audit-logged task lifecycle across 10+ tenant workspaces.",
      "Built search evaluation microservice supporting bulk query ingestion and configurable ranking pipeline benchmarking — reduced pipeline validation time by 60%.",
    ],
    stack: ["FastAPI", "PostgreSQL", "Python", "RBAC", "Microservices"],
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "OmniSageAI",
    duration: "Jul – Sep 2025",
    location: "Remote",
    type: "Contract",
    bullets: [
      "Engineered fraud detection analytics platform processing 600k+ records — 88% anomaly detection precision, 45% reduction in operational costs.",
      "Merchant risk scoring dashboards with statistical outlier detection — reduced false positive alerts by 25%, accelerated analyst triage by 2×.",
    ],
    stack: ["Python", "Pandas", "SQL", "Data Analytics"],
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Ontune AI",
    duration: "Jun – Jul 2025",
    location: "Hybrid",
    type: "Internship",
    bullets: [
      "Deployed WhatsApp conversational AI agent for real estate lead qualification — 500+ leads/day, operational costs cut by 65%.",
      "RAG pipelines using LangChain, LLaMA-3, and Pinecone with dynamic memory — query resolution time reduced by 40%.",
    ],
    stack: ["FastAPI", "LangChain", "LLaMA-3", "Pinecone"],
  },
  {
    id: 4,
    title: "AI Intern",
    company: "Excelerate",
    duration: "May – Jul 2025",
    location: "Remote",
    type: "Internship",
    bullets: [
      "Collaborated with Dubai and US teams to extract insights from global job datasets.",
      "Analyzed employer trust scores, identified anomalies, modeled time-series job trends using Python.",
    ],
    stack: ["Python", "Pandas", "Time Series"],
  },
];

const typeBadge = {
  "Full-time":  "text-[hsl(var(--primary))] bg-[hsl(var(--primary)/0.08)] border-[hsl(var(--primary)/0.2)]",
  "Contract":   "text-blue-400 bg-blue-400/10 border-blue-400/20",
  "Internship": "text-amber-400 bg-amber-400/10 border-amber-400/20",
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 px-4">
      <div className="container max-w-4xl">

        <p className="section-label mb-4">Experience</p>
        <h2 className="section-heading mb-14">Where I've worked</h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[hsl(var(--primary)/0.4)] via-[hsl(var(--border))] to-transparent hidden md:block" />

          <div className="space-y-6">
            {experiences.map((exp) => (
              <div key={exp.id} className="md:pl-10 relative group">
                {/* Dot */}
                <div className="absolute left-0 top-6 w-2.5 h-2.5 rounded-full border-2 border-[hsl(var(--border))] bg-[hsl(var(--background))] group-hover:border-[hsl(var(--primary))] group-hover:bg-[hsl(var(--primary)/0.15)] transition-all duration-300 -translate-x-[4.5px] hidden md:block" />

                <div className="card-hover p-6 hover:border-[hsl(var(--primary)/0.25)] group">
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap mb-1">
                        <h3 className="font-semibold text-[hsl(var(--foreground))]">{exp.title}</h3>
                        <span className={`text-[0.68rem] font-medium px-2 py-0.5 rounded-full border ${typeBadge[exp.type]}`}>
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-[hsl(var(--primary))] text-sm font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs font-mono text-[hsl(var(--muted-foreground))]">{exp.duration}</p>
                      <p className="text-xs text-[hsl(var(--muted-foreground))] mt-0.5">{exp.location}</p>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                        <span className="text-[hsl(var(--primary))] mt-[3px] shrink-0 text-xs">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((s) => (
                      <span key={s} className="tag">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
