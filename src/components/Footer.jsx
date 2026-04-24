import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => (
  <footer className="py-10 px-4 border-t border-[hsl(var(--border))]">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-5">
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold text-[hsl(var(--foreground))]">kms</span>
        <span
          className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))]"
          style={{ boxShadow: "0 0 6px hsl(153 60% 53%)" }}
        />
        <span className="text-sm text-[hsl(var(--muted-foreground))]">· © {new Date().getFullYear()} Karthik M Sarma</span>
      </div>
      <div className="flex items-center gap-5">
        <a
          href="https://github.com/i-am-batman-28"
          target="_blank" rel="noopener noreferrer"
          className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
          aria-label="GitHub"
        >
          <FaGithub size={17} />
        </a>
        <a
          href="https://www.linkedin.com/in/karthik-sarma-9859b9291/"
          target="_blank" rel="noopener noreferrer"
          className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={17} />
        </a>
        <a
          href="#hero"
          className="text-xs font-mono text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
        >
          back to top ↑
        </a>
      </div>
    </div>
  </footer>
);
