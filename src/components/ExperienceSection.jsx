import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    id: 1,
    title: "Backend Software Engineer",
    company: "OmniSageAI",
    period: "Dec 2025 – Present",
    location: "Remote",
    type: "Full-time",
    typeStyle: "text-[hsl(var(--primary))] bg-[hsl(var(--primary)/0.08)] border-[hsl(var(--primary)/0.2)]",
    bullets: [
      "Designed scalable multi-tenant REST API — RBAC across 3 permission tiers, audit-logged task lifecycle across 10+ tenant workspaces.",
      "Built search evaluation microservice with bulk query ingestion and configurable ranking pipeline benchmarking — reduced validation time by 60%.",
    ],
    stack: ["FastAPI", "PostgreSQL", "Python", "RBAC", "Microservices"],
    metrics: [{ n: "60%", l: "Faster Validation" }, { n: "10+", l: "Tenant Workspaces" }],
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "OmniSageAI",
    period: "Jul – Sep 2025",
    location: "Remote",
    type: "Contract",
    typeStyle: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    bullets: [
      "Engineered fraud detection platform processing 600k+ records — 88% anomaly detection precision, 45% reduction in operational costs.",
      "Merchant risk scoring dashboards — reduced false positive alerts by 25%, accelerated analyst triage by 2×.",
    ],
    stack: ["Python", "Pandas", "SQL", "Data Analytics"],
    metrics: [{ n: "600k+", l: "Records" }, { n: "88%", l: "Precision" }],
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Ontune AI",
    period: "Jun – Jul 2025",
    location: "Hybrid",
    type: "Internship",
    typeStyle: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    bullets: [
      "Deployed WhatsApp conversational AI agent for real estate — 500+ leads/day, operational costs cut by 65%.",
      "RAG pipelines with LangChain, LLaMA-3, Pinecone — query resolution time reduced by 40%.",
    ],
    stack: ["FastAPI", "LangChain", "LLaMA-3", "Pinecone"],
    metrics: [{ n: "500+", l: "Leads/Day" }, { n: "65%", l: "Cost Cut" }],
  },
  {
    id: 4,
    title: "AI Intern",
    company: "Excelerate",
    period: "May – Jul 2025",
    location: "Remote",
    type: "Internship",
    typeStyle: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    bullets: [
      "Collaborated with Dubai and US teams to extract insights from global job datasets.",
      "Modeled time-series job trends, analyzed employer trust scores and anomalies.",
    ],
    stack: ["Python", "Pandas", "Time Series"],
    metrics: [],
  },
];

export const ExperienceSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="py-32 px-4" ref={ref}>
      <div className="container max-w-4xl">

        <div className="reveal">
          <p className="section-label mb-4">
            <span className="w-8 h-px bg-[hsl(var(--primary))] inline-block" />
            Experience
          </p>
          <h2 className="section-heading mb-14">Where I've worked</h2>
        </div>

        <div className="relative">
          {/* Animated vertical line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px hidden md:block origin-top"
            style={{
              background: "linear-gradient(to bottom, hsl(153 60% 53% / 0.6), hsl(var(--border)), transparent)",
              animation: "draw-line 1.5s ease-out forwards",
            }}
          />

          <div className="space-y-5">
            {experiences.map((exp, i) => (
              <div
                key={exp.id}
                className={`reveal reveal-delay-${i + 1} md:pl-10 relative group`}
              >
                {/* Timeline node */}
                <div
                  className="absolute left-0 top-6 w-3 h-3 rounded-full border-2 border-[hsl(var(--border))] bg-[hsl(var(--background))] hidden md:flex items-center justify-center -translate-x-[5px] group-hover:border-[hsl(var(--primary))] transition-all duration-300"
                  style={{ boxShadow: "0 0 0 0 hsl(153 60% 53% / 0)" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--border))] group-hover:bg-[hsl(var(--primary))] transition-colors duration-300" />
                </div>

                <div className="glass-card-hover p-6 hover:border-[hsl(var(--primary)/0.28)] hover:-translate-y-0.5 group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap mb-1">
                        <h3 className="font-semibold text-[hsl(var(--foreground))]">{exp.title}</h3>
                        <span className={`text-[0.65rem] font-semibold px-2 py-0.5 rounded-full border ${exp.typeStyle}`}>
                          {exp.type}
                        </span>
                      </div>
                      <p
                        className="text-sm font-semibold"
                        style={{
                          background: "linear-gradient(90deg, hsl(153 60% 58%), hsl(153 60% 48%))",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs font-mono text-[hsl(var(--muted-foreground))]">{exp.period}</p>
                      <p className="text-xs text-[hsl(var(--muted-foreground))] mt-0.5">{exp.location}</p>
                    </div>
                  </div>

                  {/* Metric pills */}
                  {exp.metrics.length > 0 && (
                    <div className="flex gap-2 mb-4">
                      {exp.metrics.map((m) => (
                        <div
                          key={m.l}
                          className="px-3 py-1.5 rounded-lg text-center"
                          style={{ background: "hsl(153 60% 53% / 0.07)", border: "1px solid hsl(153 60% 53% / 0.15)" }}
                        >
                          <p className="text-sm font-bold text-[hsl(var(--primary))]">{m.n}</p>
                          <p className="text-[0.6rem] text-[hsl(var(--muted-foreground))]">{m.l}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <ul className="space-y-2.5 mb-5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                        <span className="text-[hsl(var(--primary))] mt-[3px] shrink-0 text-xs">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((s) => (
                      <span key={s} className="tag hover:bg-[hsl(var(--primary)/0.14)]">{s}</span>
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
