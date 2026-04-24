import { useScrollReveal } from "@/hooks/useScrollReveal";

const groups = [
  { label: "Languages",        skills: ["Python", "JavaScript (ES6+)", "TypeScript", "Java", "C", "SQL"],                                                         accent: "#60a5fa" },
  { label: "Backend",          skills: ["FastAPI", "Node.js", "Express.js", "REST APIs", "Microservices", "Celery", "JWT / OAuth2"],                               accent: "#818cf8" },
  { label: "Databases & Cache",skills: ["PostgreSQL", "MongoDB", "Redis", "Pinecone"],                                                                             accent: "#34d399" },
  { label: "Frontend",         skills: ["React.js", "Next.js", "Redux", "Tailwind CSS"],                                                                           accent: "#f472b6" },
  { label: "AI & ML",          skills: ["LangChain", "LLaMA-3", "RAG Pipelines", "HuggingFace", "Pandas", "NumPy", "Scikit-learn"],                               accent: "#fbbf24" },
  { label: "Tools & Infra",    skills: ["Docker", "Git / GitHub", "Linux", "Postman", "Vercel", "Jupyter"],                                                       accent: "#fb923c" },
];

const concepts = ["Data Structures & Algorithms", "System Design", "OOP", "Distributed Systems", "Agile"];

export const SkillsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-32 px-4" ref={ref}>
      <div className="container max-w-4xl">

        <div className="reveal">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-6"
            style={{ background: "hsl(217 91% 60% / 0.08)", border: "1px solid hsl(217 91% 60% / 0.18)", color: "#60a5fa" }}
          >
            <span className="w-1 h-1 rounded-full bg-[#60a5fa]" /> 04 · Skills
          </div>
          <h2
            className="mb-3"
            style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.1 }}
          >
            Tech stack
          </h2>
          <p className="mb-12 text-[1.05rem]" style={{ color: "hsl(215 12% 45%)" }}>
            What I actually use — not a bingo card.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {groups.map((g, i) => (
            <div
              key={g.label}
              className={`reveal reveal-delay-${(i % 3) + 1} rounded-2xl p-5 transition-all duration-300 group`}
              style={{ background: "hsl(224 18% 7%)", border: "1px solid hsl(224 15% 13%)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = g.accent + "40"; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "hsl(224 15% 13%)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full" style={{ background: g.accent, boxShadow: `0 0 6px ${g.accent}` }} />
                <p
                  className="text-[0.65rem] font-bold uppercase tracking-[0.14em]"
                  style={{ color: g.accent, fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {g.label}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {g.skills.map(s => (
                  <span
                    key={s}
                    className="text-xs px-2.5 py-1 rounded-lg transition-all duration-150 cursor-default"
                    style={{
                      background: "hsl(224 20% 10%)",
                      color: "hsl(215 12% 55%)",
                      border: "1px solid hsl(224 15% 15%)",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = g.accent + "50"; e.currentTarget.style.color = g.accent; e.currentTarget.style.background = g.accent + "10"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "hsl(224 15% 15%)"; e.currentTarget.style.color = "hsl(215 12% 55%)"; e.currentTarget.style.background = "hsl(224 20% 10%)"; }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="reveal reveal-delay-2 rounded-2xl p-5"
          style={{ background: "hsl(224 18% 7%)", border: "1px solid hsl(224 15% 13%)" }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full" style={{ background: "#a78bfa", boxShadow: "0 0 6px #a78bfa" }} />
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em]" style={{ color: "#a78bfa", fontFamily: "'JetBrains Mono', monospace" }}>
              Concepts
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {concepts.map(c => (
              <span
                key={c}
                className="text-xs px-2.5 py-1 rounded-lg transition-all duration-150 cursor-default"
                style={{ background: "hsl(224 20% 10%)", color: "hsl(215 12% 55%)", border: "1px solid hsl(224 15% 15%)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#a78bfa50"; e.currentTarget.style.color = "#a78bfa"; e.currentTarget.style.background = "#a78bfa10"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "hsl(224 15% 15%)"; e.currentTarget.style.color = "hsl(215 12% 55%)"; e.currentTarget.style.background = "hsl(224 20% 10%)"; }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
