import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => (
  <footer
    className="py-8 px-4"
    style={{ borderTop: "1px solid hsl(224 15% 11%)" }}
  >
    <div className="container max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
      <a href="#hero" className="flex items-center gap-1.5 group">
        <span
          className="text-sm font-bold tracking-tight transition-colors duration-200"
          style={{ color: "hsl(var(--foreground))" }}
          onMouseEnter={e => e.currentTarget.style.color = "#60a5fa"}
          onMouseLeave={e => e.currentTarget.style.color = "hsl(var(--foreground))"}
        >
          kms
        </span>
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "#60a5fa", boxShadow: "0 0 6px #60a5fa" }}
        />
        <span className="text-xs" style={{ color: "hsl(215 12% 35%)" }}>
          © {new Date().getFullYear()} Karthik M Sarma
        </span>
      </a>

      <div className="flex items-center gap-5">
        {[
          { href: "https://github.com/i-am-batman-28", Icon: FaGithub, label: "GitHub" },
          { href: "https://www.linkedin.com/in/karthik-sarma-9859b9291/", Icon: FaLinkedin, label: "LinkedIn" },
        ].map(({ href, Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank" rel="noopener noreferrer"
            aria-label={label}
            style={{ color: "hsl(215 12% 38%)" }}
            onMouseEnter={e => e.currentTarget.style.color = "#60a5fa"}
            onMouseLeave={e => e.currentTarget.style.color = "hsl(215 12% 38%)"}
            className="transition-colors duration-200"
          >
            <Icon size={16} />
          </a>
        ))}
        <a
          href="mailto:karthikm.s23@iiits.in"
          className="text-xs font-mono transition-colors duration-200"
          style={{ color: "hsl(215 12% 38%)" }}
          onMouseEnter={e => e.currentTarget.style.color = "#60a5fa"}
          onMouseLeave={e => e.currentTarget.style.color = "hsl(215 12% 38%)"}
        >
          back to top ↑
        </a>
      </div>
    </div>
  </footer>
);
