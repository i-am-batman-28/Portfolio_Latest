import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "About",      href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects",   href: "#projects" },
  { name: "Skills",     href: "#skills" },
  { name: "Contact",    href: "#contact" },
];

export const Navbar = () => {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [active,     setActive]     = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["hero", "about", "experience", "projects", "skills", "contact"];
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={cn("fixed w-full z-50 transition-all duration-500", scrolled ? "py-3" : "py-6")}
      style={scrolled ? {
        background: "hsl(224 20% 4% / 0.88)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        borderBottom: "1px solid hsl(224 15% 12%)",
      } : {}}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
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
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => {
            const isActive = active === item.href.replace("#", "");
            return (
              <a
                key={item.name}
                href={item.href}
                className="text-sm flex items-center gap-1.5 transition-colors duration-200 relative group"
                style={{ color: isActive ? "hsl(var(--foreground))" : "hsl(215 12% 42%)" }}
                onMouseEnter={e => e.currentTarget.style.color = "hsl(var(--foreground))"}
                onMouseLeave={e => !isActive && (e.currentTarget.style.color = "hsl(215 12% 42%)")}
              >
                {isActive && (
                  <span
                    className="w-1 h-1 rounded-full"
                    style={{ background: "#60a5fa", boxShadow: "0 0 6px #60a5fa" }}
                  />
                )}
                {item.name}
                <span
                  className="absolute -bottom-0.5 left-0 h-px transition-all duration-300 w-0 group-hover:w-full"
                  style={{ background: "#60a5fa40" }}
                />
              </a>
            );
          })}
          <a
            href="https://drive.google.com/file/d/1XLlVNa_IsVzFjnBEApQ-hG7WUeM9L6Dd/view?usp=share_link"
            target="_blank" rel="noopener noreferrer"
            className="text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-all duration-200"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              background: "#60a5fa0a",
              border: "1px solid #60a5fa35",
              color: "#60a5fa",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#60a5fa18"; e.currentTarget.style.boxShadow = "0 0 15px #60a5fa20"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#60a5fa0a"; e.currentTarget.style.boxShadow = "none"; }}
          >
            Resume ↗
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(p => !p)}
          className="md:hidden p-1.5 transition-colors duration-200 z-50"
          style={{ color: "hsl(215 12% 45%)" }}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 md:hidden transition-all duration-400",
            menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          style={{ background: "hsl(224 20% 4% / 0.97)", backdropFilter: "blur(24px)" }}
        >
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="text-2xl font-semibold transition-colors duration-200"
              style={{ color: "hsl(215 12% 50%)" }}
              onMouseEnter={e => e.currentTarget.style.color = "hsl(var(--foreground))"}
              onMouseLeave={e => e.currentTarget.style.color = "hsl(215 12% 50%)"}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1XLlVNa_IsVzFjnBEApQ-hG7WUeM9L6Dd/view?usp=share_link"
            target="_blank" rel="noopener noreferrer"
            className="text-lg font-semibold"
            style={{ color: "#60a5fa" }}
            onClick={() => setMenuOpen(false)}
          >
            Resume ↗
          </a>
        </div>
      </div>
    </nav>
  );
};
