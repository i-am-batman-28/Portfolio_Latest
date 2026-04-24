import { Trophy, Users, Zap } from "lucide-react";

const stats = [
  { value: "3+", label: "Industry Roles" },
  { value: "2x", label: "Hackathon Winner" },
  { value: "600k+", label: "Records Processed" },
  { value: "60%", label: "Pipeline Time Saved" },
];

const highlights = [
  {
    icon: Zap,
    title: "Backend & AI Systems",
    body: "I build production APIs — multi-tenant REST services with RBAC, RAG pipelines, microservices with Redis/Celery task queues. FastAPI, PostgreSQL, LangChain are my daily tools.",
  },
  {
    icon: Trophy,
    title: "Hackathon Track Record",
    body: "1st place at IDEAVERSE'26 with ReRoute.AI. 2nd at Neural Nexus with a multi-modal mental health platform. I build fast and I build things that work.",
  },
  {
    icon: Users,
    title: "Community & Collaboration",
    body: "Core member at TEDxIIITSriCity, GDG, and Matrix. I believe in learning in public and building with others.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-4">
      <div className="container max-w-4xl">
        {/* Label */}
        <p className="text-[hsl(var(--primary))] text-sm font-mono mb-3">About</p>

        <h2 className="section-heading mb-6">
          Builder by instinct,<br />engineer by training.
        </h2>

        <p className="text-[hsl(var(--muted-foreground))] text-lg leading-relaxed max-w-2xl mb-6">
          I'm a 3rd-year BTech student in AI & Data Science at IIIT Sri City — but I've been
          shipping real software since my second year. From fraud detection platforms
          processing 600k+ records, to WhatsApp AI agents handling 500+ leads/day, to
          winning a hackathon with a cloud-native travel disruption system.
        </p>

        <p className="text-[hsl(var(--muted-foreground))] text-lg leading-relaxed max-w-2xl mb-12">
          I care about clean architecture, measurable outcomes, and code that doesn't
          embarrass you six months later.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 p-6 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[hsl(var(--primary))]">{stat.value}</p>
              <p className="text-xs text-[hsl(var(--muted-foreground))] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {highlights.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="p-5 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--primary)/0.3)] transition-colors duration-200"
            >
              <div className="w-8 h-8 rounded-md bg-[hsl(var(--primary)/0.1)] flex items-center justify-center mb-3">
                <Icon size={16} className="text-[hsl(var(--primary))]" />
              </div>
              <h3 className="font-semibold text-sm mb-2">{title}</h3>
              <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <a href="#contact" className="btn-primary">Get in Touch</a>
          <a
            href="https://drive.google.com/file/d/1XLlVNa_IsVzFjnBEApQ-hG7WUeM9L6Dd/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};
