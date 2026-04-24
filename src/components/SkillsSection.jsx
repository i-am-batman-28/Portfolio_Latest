import { useScrollReveal } from "@/hooks/useScrollReveal";

const groups = [
  { label: "Languages",          skills: ["Python", "JavaScript (ES6+)", "TypeScript", "Java", "C", "SQL"] },
  { label: "Backend",            skills: ["FastAPI", "Node.js", "Express.js", "REST APIs", "Microservices", "Celery", "JWT / OAuth2"] },
  { label: "Databases & Cache",  skills: ["PostgreSQL", "MongoDB", "Redis", "Pinecone"] },
  { label: "Frontend",           skills: ["React.js", "Next.js", "Redux", "Tailwind CSS"] },
  { label: "AI & ML",            skills: ["LangChain", "LLaMA-3", "RAG Pipelines", "HuggingFace", "Pandas", "NumPy", "Scikit-learn"] },
  { label: "Tools & Infra",      skills: ["Docker", "Git / GitHub", "Linux", "Postman", "Vercel", "Jupyter"] },
];

const concepts = ["Data Structures & Algorithms", "System Design", "OOP", "Distributed Systems", "Agile"];

export const SkillsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-32 px-4" ref={ref}>
      <div className="container max-w-4xl">

        <div className="reveal">
          <p className="section-label mb-4">
            <span className="w-8 h-px bg-[hsl(var(--primary))] inline-block" />
            Skills
          </p>
          <h2 className="section-heading mb-3">Tech stack</h2>
          <p className="text-[hsl(var(--muted-foreground))] text-[1.05rem] mb-12 max-w-lg">
            What I actually use — not a keyword-stuffed list.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {groups.map((g, i) => (
            <div
              key={g.label}
              className={`reveal reveal-delay-${(i % 3) + 1} glass-card-hover p-5 hover:border-[hsl(var(--primary)/0.3)] hover:-translate-y-0.5 group`}
            >
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[hsl(var(--primary))] font-mono mb-4 flex items-center gap-2">
                <span className="w-4 h-px bg-[hsl(var(--primary)/0.5)] inline-block" />
                {g.label}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2.5 py-1 rounded-md bg-[hsl(var(--muted))] text-[hsl(var(--foreground)/0.7)] border border-[hsl(var(--border))] hover:border-[hsl(var(--primary)/0.35)] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--primary)/0.06)] transition-all duration-150 cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Concepts */}
        <div className="reveal reveal-delay-2 glass-card p-5">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[hsl(var(--primary))] font-mono mb-4 flex items-center gap-2">
            <span className="w-4 h-px bg-[hsl(var(--primary)/0.5)] inline-block" />
            Concepts
          </p>
          <div className="flex flex-wrap gap-1.5">
            {concepts.map((c) => (
              <span
                key={c}
                className="text-xs px-2.5 py-1 rounded-md bg-[hsl(var(--muted))] text-[hsl(var(--foreground)/0.7)] border border-[hsl(var(--border))] hover:border-[hsl(var(--primary)/0.35)] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--primary)/0.06)] transition-all duration-150 cursor-default"
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
