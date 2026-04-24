import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Trophy, Zap, Users, GraduationCap } from "lucide-react";

const stats = [
  { value: "3+",    label: "Industry Roles" },
  { value: "2×",    label: "Hackathon Winner" },
  { value: "600k+", label: "Records Processed" },
  { value: "60%",   label: "Pipeline Time Cut" },
];

const highlights = [
  {
    icon: Zap,
    title: "Backend & AI Systems",
    body: "Multi-tenant REST APIs with RBAC, RAG pipelines, Redis/Celery microservices. FastAPI and PostgreSQL are daily tools.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/8",
  },
  {
    icon: Trophy,
    title: "Hackathon Track Record",
    body: "1st at IDEAVERSE'26 with ReRoute.AI. 2nd at Neural Nexus with a multi-modal mental health platform.",
    color: "text-amber-400",
    bg: "bg-amber-400/8",
  },
  {
    icon: GraduationCap,
    title: "IIIT Sri City · 2027",
    body: "BTech in AI & Data Science. JEE Advanced qualified. Building real systems since year 2.",
    color: "text-blue-400",
    bg: "bg-blue-400/8",
  },
  {
    icon: Users,
    title: "Community",
    body: "Core member at TEDxIIITSriCity, GDG, and Matrix. Learning in public.",
    color: "text-purple-400",
    bg: "bg-purple-400/8",
  },
];

export const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-32 px-4" ref={ref}>
      <div className="container max-w-4xl">

        <div className="reveal">
          <p className="section-label mb-4">
            <span className="w-8 h-px bg-[hsl(var(--primary))] inline-block" />
            About
          </p>
          <h2 className="section-heading mb-6 max-w-lg">
            Builder by instinct,<br />engineer by training.
          </h2>
          <div className="space-y-4 text-[hsl(var(--muted-foreground))] text-[1.05rem] leading-relaxed max-w-2xl mb-14">
            <p>
              I'm a 3rd-year BTech student in AI & Data Science at IIIT Sri City — but
              I've been shipping real software since my second year. Fraud detection platforms
              processing <span className="text-[hsl(var(--foreground))] font-medium">600k+ records</span>.
              WhatsApp AI agents handling <span className="text-[hsl(var(--foreground))] font-medium">500+ leads/day</span>.
              A cloud-native travel recovery system that <span className="text-[hsl(var(--primary))] font-medium">won a hackathon</span>.
            </p>
            <p>
              I care about clean architecture, measurable outcomes, and code that doesn't
              embarrass you six months later.
            </p>
          </div>
        </div>

        {/* Stats bar */}
        <div className="reveal reveal-delay-1 grid grid-cols-2 md:grid-cols-4 gap-px bg-[hsl(var(--border))] rounded-2xl overflow-hidden mb-14 border border-[hsl(var(--border))]">
          {stats.map((s) => (
            <div key={s.label} className="bg-[hsl(var(--card))] px-6 py-6 text-center group hover:bg-[hsl(var(--muted))] transition-colors duration-200">
              <p
                className="text-3xl font-extrabold mb-1"
                style={{
                  background: "linear-gradient(135deg, hsl(153 60% 60%), hsl(153 60% 45%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.value}
              </p>
              <p className="text-xs text-[hsl(var(--muted-foreground))]">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {highlights.map(({ icon: Icon, title, body, color, bg }, i) => (
            <div
              key={title}
              className={`reveal reveal-delay-${i + 1} glass-card-hover p-5 hover:border-[hsl(var(--primary)/0.28)] hover:-translate-y-1 group cursor-default`}
            >
              <div className={`w-9 h-9 rounded-xl ${bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200`}>
                <Icon size={16} className={color} />
              </div>
              <h3 className="font-semibold text-sm mb-2 text-[hsl(var(--foreground))]">{title}</h3>
              <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="reveal reveal-delay-3 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="btn-primary hover:opacity-90 hover:-translate-y-px"
            style={{ boxShadow: "0 0 20px hsl(153 60% 53% / 0.2)" }}
          >
            Get in Touch
          </a>
          <a
            href="https://drive.google.com/file/d/1XLlVNa_IsVzFjnBEApQ-hG7WUeM9L6Dd/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline hover:border-[hsl(var(--primary)/0.4)] hover:text-[hsl(var(--primary))]"
          >
            Download Resume ↗
          </a>
        </div>
      </div>
    </section>
  );
};
