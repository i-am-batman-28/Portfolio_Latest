import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-[hsl(var(--border))]">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[hsl(var(--muted-foreground))]">
          © {new Date().getFullYear()} Karthik M Sarma
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/i-am-batman-28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/karthik-sarma-9859b9291/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
};
