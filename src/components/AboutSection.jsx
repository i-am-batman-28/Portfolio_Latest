import { Trophy, Zap, Users } from "lucide-react";

const stats = [
  { value: "3+",   label: "Industry Roles" },
  { value: "2×",   label: "Hackathon Winner" },
  { value: "600k+",label: "Records Processed" },
  { value: "60%",  label: "Pipeline Time Cut" },
];

const highlights = [
  {
    icon: Zap,
    title: "Backend & AI Systems",
    body: "Multi-tenant REST APIs with RBAC, RAG pipelines, microservices with Redis/Celery queues. FastAPI, PostgreSQL, and LangChain are daily tools.",
  },
  {
    icon: Trophy,
    title: "Hackathon Track Record",
    body: "1st at IDEAVERSE'26 with ReRoute.AI. 2nd at Neural Nexus with a multi-modal mental health platform. I build fast and it works.",
  },
  {
    icon: Users,
    title: "Community",
    body: "Core member at TEDxIIITSriCity, GDG, and Matrix. Learning in public, building with others.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-4">
      <div className="container max-w-4xl">

        <p className="section-label mb-4">About</p>

        <h2 className="section-heading mb-7 max-w-lg">
          Builder by instinct,<br />engineer by training.
        </h2>

        <div className="space-y-4 text-[hsl(var(--muted-foreground))] text-[1.05rem] leading-relaxed max-w-2xl mb-14">
          <p>
            I'm a 3rd-year BTech student in AI & Data Science at IIIT Sri City — but
            I've been shipping real software since my second year. Fraud detection platforms
            processing 600k+ records. WhatsApp AI agents handling 500+ leads per day.
            A cloud-native travel disruption system that won a hackathon.
          </p>
          <p>
            I care about clean architecture, measurable outcomes, and code that doesn't
            embarrass you six months later.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[hsl(var(--border))] rounded-xl overflow-hidden mb-14 border border-[hsl(var(--border))]">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[hsl(var(--card))] px-6 py-5 text-center">
              <p className="text-2xl md:text-3xl font-bold text-[hsl(var(--primary))] mb-1">{stat.value}</p>
              <p className="text-xs text-[hsl(var(--muted-foreground))]">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {highlights.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="card-hover p-5 hover:border-[hsl(var(--primary)/0.28)] group"
            >
              <div className="w-8 h-8 rounded-lg bg-[hsl(var(--primary)/0.08)] flex items-center justify-center mb-3 group-hover:bg-[hsl(var(--primary)/0.14)] transition-colors duration-200">
                <Icon size={15} className="text-[hsl(var(--primary))]" />
              </div>
              <h3 className="font-semibold text-sm mb-2 text-[hsl(var(--foreground))]">{title}</h3>
              <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] text-sm font-semibold hover:opacity-90 hover:-translate-y-px transition-all duration-200"
          >
            Get in Touch
          </a>
          <a
            href="https://drive.google.com/file/d/1XLlVNa_IsVzFjnBEApQ-hG7WUeM9L6Dd/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[hsl(var(--border))] text-sm font-medium text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary)/0.4)] hover:text-[hsl(var(--primary))] transition-all duration-200"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};
