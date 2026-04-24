import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

const roles = [
  "Backend Engineer",
  "AI Systems Builder",
  "Full-Stack Developer",
];

export const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 60);
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 35);
    } else if (deleting && charIndex < 0) {
      setDeleting(false);
      setCharIndex(0);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-4"
    >
      <div className="container max-w-3xl">
        {/* Eyebrow */}
        <p
          className="text-[hsl(var(--primary))] text-sm font-mono mb-6 opacity-0 animate-[fade-up_0.6s_ease-out_0.1s_forwards]"
        >
          Hi, I'm
        </p>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-4 opacity-0 animate-[fade-up_0.6s_ease-out_0.2s_forwards]"
          style={{ letterSpacing: "-0.03em" }}
        >
          Karthik M Sarma
        </h1>

        {/* Typewriter role */}
        <div
          className="text-2xl md:text-3xl font-semibold text-[hsl(var(--muted-foreground))] mb-6 h-10 opacity-0 animate-[fade-up_0.6s_ease-out_0.35s_forwards]"
        >
          <span>{displayed}</span>
          <span className="inline-block w-0.5 h-7 bg-[hsl(var(--primary))] ml-0.5 align-middle animate-[blink_1s_step-end_infinite]" />
        </div>

        {/* Bio */}
        <p
          className="text-[hsl(var(--muted-foreground))] text-lg max-w-xl leading-relaxed mb-10 opacity-0 animate-[fade-up_0.6s_ease-out_0.5s_forwards]"
        >
          BTech AI & Data Science @ IIIT Sri City. I build scalable backend
          systems, AI-powered APIs, and full-stack products — with real
          deployments and measurable impact.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center gap-4 opacity-0 animate-[fade-up_0.6s_ease-out_0.65s_forwards]"
        >
          <a href="#projects" className="btn-primary">
            View Projects <ArrowRight size={15} />
          </a>
          <a href="#contact" className="btn-outline">
            Get in Touch
          </a>
        </div>

        {/* Socials */}
        <div
          className="flex items-center gap-5 mt-10 opacity-0 animate-[fade-up_0.6s_ease-out_0.75s_forwards]"
        >
          <a
            href="https://github.com/i-am-batman-28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/karthik-sarma-9859b9291/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <span className="w-px h-4 bg-[hsl(var(--border))]" />
          <a
            href="mailto:karthikm.s23@iiits.in"
            className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors font-mono"
          >
            karthikm.s23@iiits.in
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-[hsl(var(--muted-foreground))]" />
        <span className="text-xs font-mono text-[hsl(var(--muted-foreground))] tracking-widest">SCROLL</span>
      </div>
    </section>
  );
};
