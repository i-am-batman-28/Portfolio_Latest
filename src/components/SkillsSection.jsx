import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Skills3DGlobe } from "./Skills3DGlobe";

const allSkills = [
  { cat: "Languages",        items: ["Python","JavaScript","TypeScript","Java","C","SQL"],                             accent: "#60a5fa" },
  { cat: "Backend",          items: ["FastAPI","Node.js","Express.js","REST APIs","Microservices","Celery","JWT"],     accent: "#818cf8" },
  { cat: "Databases",        items: ["PostgreSQL","MongoDB","Redis","Pinecone"],                                       accent: "#93c5fd" },
  { cat: "Frontend",         items: ["React","Next.js","Redux","Tailwind CSS"],                                        accent: "#60a5fa" },
  { cat: "AI & ML",          items: ["LangChain","LLaMA-3","RAG","HuggingFace","Pandas","NumPy","Scikit-learn"],      accent: "#a5b4fc" },
  { cat: "Tools & Infra",    items: ["Docker","Git","Linux","Postman","Vercel","Jupyter"],                            accent: "#818cf8" },
];

const marqueeItems = allSkills.flatMap(g => g.items.map(s => ({ s, accent: g.accent })));

export const SkillsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-32 px-4 overflow-hidden" ref={ref}>
      <div className="container max-w-4xl">

        <div className="reveal">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-6"
            style={{ background: "hsl(217 91% 60% / 0.08)", border: "1px solid hsl(217 91% 60% / 0.18)", color: "#60a5fa" }}
          >
            <span className="w-1 h-1 rounded-full bg-[#60a5fa]" /> 04 · Skills
          </div>
          <h2 className="mb-3" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.1 }}>
            Tech stack
          </h2>
          <p className="mb-12 text-[1.05rem]" style={{ color: "hsl(215 12% 45%)" }}>
            What I actually use — not a bingo card.
          </p>
        </div>

        {/* 3D Globe + categories side-by-side */}
        <div className="reveal reveal-delay-1 grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-8 items-center mb-12">
          {/* Globe */}
          <div
            className="rounded-2xl overflow-hidden flex items-center justify-center"
            style={{
              background: "hsl(224 18% 6%)",
              border: "1px solid hsl(224 15% 13%)",
              height: "480px",
              position: "relative",
            }}
          >
            {/* Corner label */}
            <div style={{
              position: "absolute", top: 14, left: 16,
              fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem",
              color: "rgba(96,165,250,0.4)", letterSpacing: "0.1em", zIndex: 2,
            }}>
              DRAG TO ROTATE
            </div>
            <div style={{ width: "100%", height: "100%" }}>
              <Skills3DGlobe />
            </div>
          </div>

          {/* Category list */}
          <div className="space-y-3">
            {allSkills.map((g, i) => (
              <div
                key={g.cat}
                className={`reveal reveal-delay-${(i % 3) + 1} rounded-xl p-4 transition-all duration-300`}
                style={{ background: "hsl(224 18% 7%)", border: "1px solid hsl(224 15% 13%)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = g.accent + "40"; e.currentTarget.style.background = g.accent + "06"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "hsl(224 15% 13%)"; e.currentTarget.style.background = "hsl(224 18% 7%)"; }}
              >
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: g.accent, boxShadow: `0 0 5px ${g.accent}` }} />
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.14em]"
                    style={{ color: g.accent, fontFamily: "'JetBrains Mono', monospace" }}>
                    {g.cat}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map(s => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded-md transition-all duration-150 cursor-default"
                      style={{ background: "hsl(224 20% 10%)", color: "hsl(215 12% 52%)", border: "1px solid hsl(224 15% 15%)" }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = g.accent + "50"; e.currentTarget.style.color = g.accent; e.currentTarget.style.background = g.accent + "10"; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "hsl(224 15% 15%)"; e.currentTarget.style.color = "hsl(215 12% 52%)"; e.currentTarget.style.background = "hsl(224 20% 10%)"; }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee ticker */}
        <div className="reveal reveal-delay-2 relative overflow-hidden rounded-xl py-3"
          style={{ background: "hsl(224 18% 6%)", border: "1px solid hsl(224 15% 12%)" }}>
          {/* fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, hsl(224 18% 6%), transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, hsl(224 18% 6%), transparent)" }} />

          <div className="flex gap-4 w-max" style={{ animation: "marquee 28s linear infinite" }}>
            {[...marqueeItems, ...marqueeItems].map(({ s, accent }, i) => (
              <span key={i} className="flex items-center gap-1.5 text-xs font-mono whitespace-nowrap px-3 py-1 rounded-full"
                style={{ color: "hsl(215 12% 48%)", border: "1px solid hsl(224 15% 14%)", background: "hsl(224 20% 8%)" }}>
                <span className="w-1 h-1 rounded-full" style={{ background: accent, boxShadow: `0 0 4px ${accent}` }} />
                {s}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
