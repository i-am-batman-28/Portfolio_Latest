import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTilt } from "@/hooks/useTilt";

const achievements = [
  {
    icon: "🏆",
    title: "1st Place — IDEAVERSE'26",
    sub: "ReRoute.AI · Cloud-native travel recovery platform",
    detail: "Competed against 200+ teams. Built and shipped a full AI agent system in 36 hours.",
    accent: "#fbbf24",
    type: "Hackathon",
  },
  {
    icon: "🥈",
    title: "2nd Place — Neural Nexus",
    sub: "MindEase · Multi-modal mental health AI",
    detail: "Fused RoBERTa + Wav2Vec2 + CNN via LLaMA-3.1 reasoning layer for explainable risk scoring.",
    accent: "#94a3b8",
    type: "Hackathon",
  },
  {
    icon: "🎓",
    title: "JEE Advanced Qualified",
    sub: "Top engineering entrance exam in India",
    detail: "Top percentile in one of the world's most competitive engineering entrance exams.",
    accent: "#818cf8",
    type: "Academic",
  },
  {
    icon: "🎤",
    title: "TEDxIIITSriCity — Core Team",
    sub: "Organised speakers, logistics & production",
    detail: "Core organising member for a licensed TEDx event — curated speakers and managed full event production.",
    accent: "#60a5fa",
    type: "Leadership",
  },
  {
    icon: "🌐",
    title: "GDG on Campus — Member",
    sub: "Google Developer Groups · IIIT Sri City",
    detail: "Active contributor and workshop participant in Google's developer community on campus.",
    accent: "#60a5fa",
    type: "Community",
  },
  {
    icon: "⚡",
    title: "Matrix Club — Core Member",
    sub: "Competitive programming & systems club",
    detail: "Core member of the technical club focused on algorithms, systems, and competitive programming.",
    accent: "#818cf8",
    type: "Community",
  },
];

const typeColors = {
  Hackathon:  { bg: "#fbbf2412", border: "#fbbf2430", text: "#fbbf24" },
  Academic:   { bg: "#818cf812", border: "#818cf830", text: "#818cf8" },
  Leadership: { bg: "#60a5fa12", border: "#60a5fa30", text: "#60a5fa" },
  Community:  { bg: "#60a5fa0d", border: "#60a5fa25", text: "#93c5fd" },
};

const AchievementCard = ({ a, i }) => {
  const { ref, onMouseMove, onMouseLeave } = useTilt(5);
  const tc = typeColors[a.type];
  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={e => { e.currentTarget.style.borderColor = a.accent + "40"; e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${a.accent}10`; onMouseMove(e); }}
      onMouseLeave={e => { onMouseLeave(e); e.currentTarget.style.borderColor = "hsl(224 15% 13%)"; e.currentTarget.style.boxShadow = "none"; }}
      className={`reveal reveal-delay-${i + 1} rounded-2xl p-5 flex flex-col gap-3`}
      style={{ background: "hsl(224 18% 7%)", border: "1px solid hsl(224 15% 13%)", transition: "border-color 0.3s, box-shadow 0.3s, transform 0.15s", transformStyle: "preserve-3d", willChange: "transform" }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
          style={{ background: a.accent + "15", border: `1px solid ${a.accent}30` }}>
          {a.icon}
        </div>
        <span className="text-[0.6rem] font-mono font-semibold px-2 py-0.5 rounded-full"
          style={{ background: tc.bg, border: `1px solid ${tc.border}`, color: tc.text }}>
          {a.type}
        </span>
      </div>
      <div>
        <h3 className="font-bold text-sm leading-snug mb-0.5" style={{ color: "hsl(var(--foreground))" }}>{a.title}</h3>
        <p className="text-xs font-medium mb-2" style={{ color: a.accent }}>{a.sub}</p>
        <p className="text-xs leading-relaxed" style={{ color: "hsl(215 12% 42%)" }}>{a.detail}</p>
      </div>
    </div>
  );
};

export const AchievementsSection = () => {
  const ref = useScrollReveal();
  return (
    <section id="achievements" className="py-32 px-4" ref={ref}>
      <div className="container max-w-4xl">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-6"
            style={{ background: "hsl(217 91% 60% / 0.08)", border: "1px solid hsl(217 91% 60% / 0.18)", color: "#60a5fa" }}>
            <span className="w-1 h-1 rounded-full bg-[#60a5fa]" /> 03 · Achievements &amp; Awards
          </div>
          <h2 className="mb-3"
            style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.1 }}>
            Proof of work
          </h2>
          <p className="mb-12 text-[1.05rem] max-w-lg" style={{ color: "hsl(215 12% 45%)" }}>
            Wins, leadership, and things that cost real time to earn.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((a, i) => (
            <AchievementCard key={a.title} a={a} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
