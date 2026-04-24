import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTilt } from "@/hooks/useTilt";

const stats = [
  { value: "3+",    label: "Industry Roles",    icon: "💼" },
  { value: "2×",    label: "Hackathon Winner",  icon: "🏆" },
  { value: "600k+", label: "Records Processed", icon: "⚡" },
  { value: "60%",   label: "Pipeline Time Cut", icon: "📉" },
];

const cards = [
  { title: "Backend & AI Systems",   body: "Multi-tenant REST APIs with RBAC, RAG pipelines, Redis/Celery microservices. FastAPI and PostgreSQL are daily tools.", icon: "⚙️", accent: "#60a5fa" },
  { title: "Hackathon Track Record", body: "1st at IDEAVERSE'26 with ReRoute.AI. 2nd at Neural Nexus with a multi-modal mental health platform. I build fast and ship.", icon: "🏆", accent: "#818cf8" },
  { title: "IIIT Sri City · 2027",   body: "BTech AI & Data Science. JEE Advanced qualified. Building production systems since year 2.", icon: "🎓", accent: "#818cf8" },
  { title: "Community",              body: "Core member at TEDxIIITSriCity, GDG, and Matrix. Learning in public, building with others.", icon: "🤝", accent: "#60a5fa" },
];

const StatCard = ({ value, label, icon }) => {
  const { ref, onMouseMove, onMouseLeave } = useTilt(6);
  return (
    <div ref={ref} onMouseMove={onMouseMove}
      onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(96,165,250,0.3)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.3), 0 0 30px rgba(96,165,250,0.08)"; onMouseMove(e); }}
      onMouseLeave={e => { onMouseLeave(e); e.currentTarget.style.borderColor = "hsl(224 15% 13%)"; e.currentTarget.style.boxShadow = "none"; }}
      className="rounded-2xl p-5 text-center"
      style={{ background: "hsl(224 18% 7%)", border: "1px solid hsl(224 15% 13%)", transition: "border-color 0.3s, box-shadow 0.3s, transform 0.15s", transformStyle: "preserve-3d", willChange: "transform" }}>
      <div className="text-2xl mb-1">{icon}</div>
      <p className="text-2xl md:text-3xl font-extrabold mb-1"
        style={{ background: "linear-gradient(135deg, #60a5fa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
        {value}
      </p>
      <p className="text-xs" style={{ color: "hsl(215 12% 55%)", fontFamily: "'JetBrains Mono', monospace" }}>{label}</p>
    </div>
  );
};

const HighlightCard = ({ title, body, icon, accent, i }) => {
  const { ref, onMouseMove, onMouseLeave } = useTilt(5);
  return (
    <div ref={ref} onMouseMove={onMouseMove}
      onMouseEnter={e => { e.currentTarget.style.borderColor = accent + "44"; e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${accent}10`; onMouseMove(e); }}
      onMouseLeave={e => { onMouseLeave(e); e.currentTarget.style.borderColor = "hsl(224 15% 13%)"; e.currentTarget.style.boxShadow = "none"; }}
      className={`reveal reveal-delay-${i + 1} rounded-2xl p-6 group`}
      style={{ background: "hsl(224 18% 7%)", border: "1px solid hsl(224 15% 13%)", transition: "border-color 0.3s, box-shadow 0.3s, transform 0.15s", transformStyle: "preserve-3d", willChange: "transform" }}>
      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-4 transition-transform duration-200 group-hover:scale-110"
        style={{ background: accent + "15", border: `1px solid ${accent}30` }}>
        {icon}
      </div>
      <h3 className="font-semibold mb-2" style={{ fontSize: "0.95rem", color: "hsl(var(--foreground))", letterSpacing: "-0.01em" }}>{title}</h3>
      <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "hsl(215 12% 62%)" }}>{body}</p>
    </div>
  );
};

export const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-32 px-4" ref={ref}>
      <div className="container max-w-4xl">

        <div className="reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-6"
            style={{ background: "hsl(217 91% 60% / 0.08)", border: "1px solid hsl(217 91% 60% / 0.18)", color: "#60a5fa" }}>
            <span className="w-1 h-1 rounded-full bg-[#60a5fa]" /> 01 · About
          </div>

          <h2 className="mb-7"
            style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.1 }}>
            Builder by instinct,<br />
            <span style={{ color: "hsl(215 12% 55%)" }}>engineer by training.</span>
          </h2>

          <div className="space-y-5 mb-14 max-w-2xl">
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "hsl(215 12% 65%)" }}>
              I'm a 3rd-year BTech student in AI & Data Science at IIIT Sri City — but I've been
              shipping real software since year two. Fraud detection platforms processing{" "}
              <span style={{ color: "hsl(var(--foreground))", fontWeight: 600, borderBottom: "1px solid rgba(96,165,250,0.4)" }}>600k+ records</span>.
              WhatsApp AI agents handling{" "}
              <span style={{ color: "hsl(var(--foreground))", fontWeight: 600, borderBottom: "1px solid rgba(96,165,250,0.4)" }}>500+ leads/day</span>.
              A cloud-native recovery system that{" "}
              <span style={{ color: "#93c5fd", fontWeight: 600 }}>won first place</span>.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "hsl(215 12% 65%)" }}>
              I care about clean architecture, measurable outcomes, and code that doesn't
              embarrass you six months later.
            </p>
          </div>
        </div>

        <div className="reveal reveal-delay-1 grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
          {stats.map(s => <StatCard key={s.label} {...s} />)}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {cards.map((c, i) => <HighlightCard key={c.title} {...c} i={i} />)}
        </div>

        <div className="reveal reveal-delay-3 flex flex-wrap gap-3">
          <a href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
            style={{ background: "hsl(var(--primary))", color: "#0f172a", boxShadow: "0 0 25px hsl(217 91% 60% / 0.3)" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 0 35px hsl(217 91% 60% / 0.45)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 0 25px hsl(217 91% 60% / 0.3)"; }}>
            Get in Touch
          </a>
          <a href="https://drive.google.com/file/d/1XLlVNa_IsVzFjnBEApQ-hG7WUeM9L6Dd/view?usp=share_link"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200"
            style={{ background: "hsl(224 15% 10%)", border: "1px solid hsl(224 15% 18%)", color: "hsl(var(--foreground))" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "hsl(217 91% 60% / 0.4)"; e.currentTarget.style.color = "#60a5fa"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "hsl(224 15% 18%)"; e.currentTarget.style.color = "hsl(var(--foreground))"; }}>
            Download Resume ↗
          </a>
        </div>
      </div>
    </section>
  );
};
