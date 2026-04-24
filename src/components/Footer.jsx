import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => (
  <footer className="py-8 px-4 border-t border-[hsl(var(--border))]">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-1.5">
        <span className="text-sm text-[hsl(var(--muted-foreground))]">© {new Date().getFullYear()}</span>
        <span className="text-sm text-[hsl(var(--foreground))] font-medium">Karthik M Sarma</span>
      </div>
      <div className="flex items-center gap-5">
        <a
          href="https://github.com/i-am-batman-28"
          target="_blank" rel="noopener noreferrer"
          className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors duration-200"
          aria-label="GitHub"
        >
          <FaGithub size={16} />
        </a>
        <a
          href="https://www.linkedin.com/in/karthik-sarma-9859b9291/"
          target="_blank" rel="noopener noreferrer"
          className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={16} />
        </a>
        <a
          href="#hero"
          className="text-xs text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors duration-200 font-mono"
        >
          Back to top ↑
        </a>
      </div>
    </div>
  </footer>
);
