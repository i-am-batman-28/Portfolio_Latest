import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTilt } from "@/hooks/useTilt";

const TiltCard = ({ exp, children }) => {
  const { ref, onMouseMove, onMouseLeave } = useTilt(5);
  return (
    <div
      ref={ref}
      className="rounded-2xl p-6"
      style={{
        background: "hsl(224 18% 7%)",
        border: "1px solid hsl(224 15% 13%)",
        transition: "border-color 0.3s ease, transform 0.15s ease, box-shadow 0.3s ease",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      onMouseMove={onMouseMove}
      onMouseEnter={e => { e.currentTarget.style.borderColor = exp.accent + "40"; e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${exp.accent}10`; }}
      onMouseLeave={e => { onMouseLeave(e); e.currentTarget.style.borderColor = "hsl(224 15% 13%)"; e.currentTarget.style.boxShadow = "none"; }}
    >
      {children}
    </div>
  );
};

const experiences = [
  {
    id: 1,
    title: "Backend Software Engineer",
    company: "OmniSageAI",
    period: "Dec 2025 – Present",
    location: "Remote · Full-time",
    accent: "#60a5fa",
    metrics: [{ n: "60%", l: "Faster validation" }, { n: "10+", l: "Tenants" }],
    bullets: [
      "Scalable multi-tenant REST API — FastAPI + PostgreSQL with RBAC across 3 permission tiers, audit-logged task lifecycle across 10+ tenant workspaces.",
      "Search evaluation microservice with bulk query ingestion + configurable ranking pipeline benchmarking — cut pipeline validation time by 60%.",
    ],
    stack: ["FastAPI", "PostgreSQL", "Python", "RBAC", "Microservices"],
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "OmniSageAI",
    period: "Jul – Sep 2025",
    location: "Remote · Contract",
    accent: "#818cf8",
    metrics: [{ n: "600k+", l: "Records" }, { n: "88%", l: "Precision" }, { n: "45%", l: "Cost saved" }],
    bullets: [
      "Fraud detection analytics platform over 600k+ records — 88% anomaly precision, 45% operational cost reduction.",
      "Merchant risk scoring dashboards — 25% fewer false positives, 2× faster analyst triage.",
    ],
    stack: ["Python", "Pandas", "SQL", "Analytics"],
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Ontune AI",
    period: "Jun – Jul 2025",
    location: "Hybrid · Internship",
    accent: "#818cf8",
    metrics: [{ n: "500+", l: "Leads/day" }, { n: "65%", l: "Cost cut" }, { n: "40%", l: "Faster queries" }],
    bullets: [
      "WhatsApp AI agent for real estate lead qualification — 500+ leads/day, 65% cost reduction.",
      "RAG pipelines with LangChain + LLaMA-3 + Pinecone — 40% faster query resolution.",
    ],
    stack: ["FastAPI", "LangChain", "LLaMA-3", "Pinecone"],
  },
  {
    id: 4,
    title: "AI Intern",
    company: "Excelerate",
    period: "May – Jul 2025",
    location: "Remote · Internship",
    accent: "#93c5fd",
    metrics: [],
    bullets: [
      "Worked with Dubai and US teams to extract insights from global job datasets.",
      "Modeled time-series job trends, analyzed employer trust scores and anomalies.",
    ],
    stack: ["Python", "Pandas", "Time Series"],
  },
];

export const ExperienceSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="py-32 px-4" ref={ref}>
      <div className="container max-w-4xl">

        <div className="reveal">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-6"
            style={{ background: "hsl(217 91% 60% / 0.08)", border: "1px solid hsl(217 91% 60% / 0.18)", color: "#60a5fa" }}
          >
            <span className="w-1 h-1 rounded-full bg-[#60a5fa]" /> 02 · Experience
          </div>
          <h2
            className="mb-14"
            style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.1 }}
          >
            Where I've worked
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[5px] top-0 bottom-0 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom, #60a5fa44, #818cf822, transparent)" }}
          />

          <div className="space-y-5">
            {experiences.map((exp, i) => (
              <div key={exp.id} className={`reveal reveal-delay-${i + 1} md:pl-10 relative group`}>
                {/* Node */}
                <div
                  className="absolute left-0 top-7 w-3 h-3 rounded-full hidden md:block -translate-x-[1px] transition-all duration-300"
                  style={{
                    background: "hsl(224 20% 4%)",
                    border: `2px solid hsl(224 15% 20%)`,
                    boxShadow: "none",
                  }}
                  ref={el => {
                    if (!el) return;
                    const parent = el.closest(".group");
                    if (!parent) return;
                    parent.addEventListener("mouseenter", () => {
                      el.style.borderColor = exp.accent;
                      el.style.boxShadow = `0 0 10px ${exp.accent}88`;
                      el.style.background = exp.accent + "22";
                    });
                    parent.addEventListener("mouseleave", () => {
                      el.style.borderColor = "hsl(224 15% 20%)";
                      el.style.boxShadow = "none";
                      el.style.background = "hsl(224 20% 4%)";
                    });
                  }}
                />

                <TiltCard exp={exp}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-bold text-base mb-0.5" style={{ color: "hsl(var(--foreground))" }}>{exp.title}</h3>
                      <p className="text-sm font-semibold" style={{ color: exp.accent }}>{exp.company}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs font-mono" style={{ color: "hsl(215 12% 40%)" }}>{exp.period}</p>
                      <p className="text-xs mt-0.5" style={{ color: "hsl(215 12% 35%)" }}>{exp.location}</p>
                    </div>
                  </div>

                  {/* Metric chips */}
                  {exp.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.metrics.map(m => (
                        <div
                          key={m.l}
                          className="px-3 py-1.5 rounded-lg text-center"
                          style={{ background: exp.accent + "10", border: `1px solid ${exp.accent}28` }}
                        >
                          <span className="text-sm font-bold block" style={{ color: exp.accent }}>{m.n}</span>
                          <span className="text-[0.6rem] font-mono" style={{ color: "hsl(215 12% 40%)" }}>{m.l}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <ul className="space-y-2.5 mb-5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: "hsl(215 12% 48%)" }}>
                        <span className="mt-[4px] shrink-0 text-xs" style={{ color: exp.accent }}>▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map(s => <span key={s} className="tag">{s}</span>)}
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
