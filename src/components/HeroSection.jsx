import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

const roles = ["Backend Engineer", "AI Systems Builder", "Full-Stack Developer"];

export const HeroSection = () => {
  const [roleIdx, setRoleIdx]     = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting]   = useState(false);
  const [charIdx, setCharIdx]     = useState(0);

  useEffect(() => {
    const current = roles[roleIdx];
    let t;
    if (!deleting && charIdx <= current.length) {
      t = setTimeout(() => { setDisplayed(current.slice(0, charIdx)); setCharIdx(c => c + 1); }, 65);
    } else if (!deleting && charIdx > current.length) {
      t = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIdx >= 0) {
      t = setTimeout(() => { setDisplayed(current.slice(0, charIdx)); setCharIdx(c => c - 1); }, 32);
    } else {
      setDeleting(false);
      setCharIdx(0);
      setRoleIdx(i => (i + 1) % roles.length);
    }
    return () => clearTimeout(t);
  }, [charIdx, deleting, roleIdx]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-4 overflow-hidden">

      {/* Radial glow behind content */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(153 60% 53% / 0.07) 0%, transparent 70%)" }}
      />

      <div className="container max-w-3xl relative">

        {/* Available badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-xs text-[hsl(var(--muted-foreground))] mb-8"
          style={{ animation: "fade-up 0.6s ease-out 0.05s both" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))]" style={{ boxShadow: "0 0 6px hsl(153 60% 53% / 0.8)" }} />
          Open to SDE opportunities
        </div>

        {/* Name */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-[-0.04em] leading-[1.05] mb-5"
          style={{ animation: "fade-up 0.65s ease-out 0.15s both" }}
        >
          Karthik M Sarma
        </h1>

        {/* Typewriter role */}
        <div
          className="h-10 flex items-center mb-6"
          style={{ animation: "fade-up 0.65s ease-out 0.25s both" }}
        >
          <span className="text-xl md:text-2xl font-medium text-[hsl(var(--muted-foreground))]">
            {displayed}
            <span
              className="inline-block w-[2px] h-6 bg-[hsl(var(--primary))] ml-0.5 align-middle"
              style={{ animation: "blink 1s step-end infinite" }}
            />
          </span>
        </div>

        {/* Bio */}
        <p
          className="text-base md:text-lg text-[hsl(var(--muted-foreground))] max-w-[520px] leading-relaxed mb-10"
          style={{ animation: "fade-up 0.65s ease-out 0.35s both" }}
        >
          BTech AI & DS @ IIIT Sri City. I build production backend systems,
          AI-powered APIs, and full-stack products — with measurable impact.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center gap-3 mb-12"
          style={{ animation: "fade-up 0.65s ease-out 0.45s both" }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] text-sm font-semibold hover:opacity-90 hover:-translate-y-px transition-all duration-200"
          >
            View Projects <ArrowRight size={14} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[hsl(var(--border))] text-sm font-medium text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary)/0.4)] hover:text-[hsl(var(--primary))] transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>

        {/* Socials + divider */}
        <div
          className="flex items-center gap-5"
          style={{ animation: "fade-up 0.65s ease-out 0.55s both" }}
        >
          <a
            href="https://github.com/i-am-batman-28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={19} />
          </a>
          <a
            href="https://www.linkedin.com/in/karthik-sarma-9859b9291/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={19} />
          </a>
          <div className="w-px h-4 bg-[hsl(var(--border))]" />
          <a
            href="mailto:karthikm.s23@iiits.in"
            className="text-xs font-mono text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors duration-200"
          >
            karthikm.s23@iiits.in
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[hsl(var(--muted-foreground))]" />
      </div>
    </section>
  );
};
