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
    stack: ["FastAPI", "PostgreSQL", "Python", "RBAC"],
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "OmniSageAI",
    duration: "Jul 2025 – Sep 2025",
    location: "Remote",
    type: "Contract",
    bullets: [
      "Engineered fraud detection analytics platform processing 600k+ records using Python & Pandas — 88% anomaly detection precision, 45% reduction in operational costs.",
      "Designed merchant risk scoring dashboards with statistical outlier detection — reduced false positive alerts by 25% and accelerated analyst triage by 2×.",
    ],
    stack: ["Python", "Pandas", "SQL", "Data Analytics"],
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Ontune AI",
    duration: "Jun 2025 – Jul 2025",
    location: "Hybrid",
    type: "Internship",
    bullets: [
      "Deployed WhatsApp conversational AI agent for real estate lead qualification using FastAPI and LLM integration — handled 500+ leads/day, cut operational costs by 65%.",
      "Built RAG pipelines using LangChain, LLaMA-3, and Pinecone with dynamic memory management — reduced average query resolution time by 40%.",
    ],
    stack: ["FastAPI", "LangChain", "LLaMA-3", "Pinecone"],
  },
  {
    id: 4,
    title: "AI Intern",
    company: "Excelerate",
    duration: "May 2025 – Jul 2025",
    location: "Remote",
    type: "Internship",
    bullets: [
      "Collaborated with Dubai and US teams to extract insights from global job datasets.",
      "Analyzed employer trust scores, identified anomalies in verified hiring networks, modeled time-series job trends using Python.",
    ],
    stack: ["Python", "Pandas", "Data Analysis"],
  },
];

const typeColor = {
  "Full-time": "text-[hsl(var(--primary))] bg-[hsl(var(--primary)/0.1)] border-[hsl(var(--primary)/0.2)]",
  "Contract": "text-blue-400 bg-blue-400/10 border-blue-400/20",
  "Internship": "text-amber-400 bg-amber-400/10 border-amber-400/20",
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-28 px-4">
      <div className="container max-w-4xl">
        <p className="text-[hsl(var(--primary))] text-sm font-mono mb-3">Experience</p>
        <h2 className="section-heading mb-12">Where I've worked</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-[hsl(var(--border))] hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp) => (
              <div key={exp.id} className="md:pl-8 relative group">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-[hsl(var(--border))] group-hover:bg-[hsl(var(--primary))] transition-colors duration-200 -translate-x-[3px] hidden md:block" />

                <div className="p-5 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--primary)/0.25)] transition-colors duration-200">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-base">{exp.title}</h3>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${typeColor[exp.type]}`}>
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-[hsl(var(--primary))] text-sm font-medium mt-0.5">{exp.company}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs text-[hsl(var(--muted-foreground))] font-mono">{exp.duration}</p>
                      <p className="text-xs text-[hsl(var(--muted-foreground))] mt-0.5">{exp.location}</p>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                        <span className="text-[hsl(var(--primary))] mt-1 shrink-0">▸</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Stack tags */}
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
