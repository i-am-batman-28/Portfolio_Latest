const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "JavaScript (ES6+)", "TypeScript", "Java", "C", "SQL"],
  },
  {
    label: "Backend",
    skills: ["FastAPI", "Node.js", "Express.js", "REST APIs", "Microservices", "Celery", "JWT / OAuth2"],
  },
  {
    label: "Databases & Caching",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Pinecone (Vector DB)"],
  },
  {
    label: "Frontend",
    skills: ["React.js", "Next.js", "Redux", "Tailwind CSS"],
  },
  {
    label: "AI & ML",
    skills: ["LangChain", "LLaMA-3", "RAG Pipelines", "HuggingFace", "Pandas", "NumPy", "Scikit-learn"],
  },
  {
    label: "Tools & Infra",
    skills: ["Docker", "Git / GitHub", "Linux", "Postman", "Vercel", "Jupyter"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 px-4">
      <div className="container max-w-4xl">
        <p className="text-[hsl(var(--primary))] text-sm font-mono mb-3">Skills</p>
        <h2 className="section-heading mb-3">Tech stack</h2>
        <p className="text-[hsl(var(--muted-foreground))] mb-12 max-w-xl">
          Tools I use day-to-day — not a bingo card, just what I actually know.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="p-5 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--primary)/0.25)] transition-colors duration-200"
            >
              <h3 className="text-xs font-semibold text-[hsl(var(--primary))] uppercase tracking-widest mb-4 font-mono">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-2.5 py-1 rounded-md bg-[hsl(var(--muted))] text-[hsl(var(--foreground)/0.8)] border border-[hsl(var(--border))] hover:border-[hsl(var(--primary)/0.3)] hover:text-[hsl(var(--foreground))] transition-colors duration-150"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Concepts row */}
        <div className="mt-5 p-5 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]">
          <h3 className="text-xs font-semibold text-[hsl(var(--primary))] uppercase tracking-widest mb-4 font-mono">
            Concepts
          </h3>
          <div className="flex flex-wrap gap-2">
            {["Data Structures & Algorithms", "System Design", "OOP", "Distributed Systems", "Agile"].map((c) => (
              <span
                key={c}
                className="text-sm px-2.5 py-1 rounded-md bg-[hsl(var(--muted))] text-[hsl(var(--foreground)/0.8)] border border-[hsl(var(--border))] hover:border-[hsl(var(--primary)/0.3)] hover:text-[hsl(var(--foreground))] transition-colors duration-150"
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
