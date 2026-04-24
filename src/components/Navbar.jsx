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

const sectionIds = ["hero", "about", "experience", "projects", "skills", "contact"];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-500",
      isScrolled
        ? "py-3 backdrop-blur-xl border-b"
        : "py-6"
    )}
    style={isScrolled ? {
      background: "hsl(220 15% 5% / 0.85)",
      borderColor: "hsl(var(--border))",
    } : {}}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-1 group">
          <span className="text-sm font-bold tracking-tight text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors duration-200">
            kms
          </span>
          <span
            className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] ml-0.5"
            style={{ boxShadow: "0 0 6px hsl(153 60% 53%)" }}
          />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm transition-colors duration-200 relative flex items-center gap-1.5",
                  isActive
                    ? "text-[hsl(var(--foreground))]"
                    : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
                )}
              >
                {isActive && (
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))]"
                    style={{ boxShadow: "0 0 6px hsl(153 60% 53%)" }}
                  />
                )}
                {item.name}
              </a>
            );
          })}
          <a
            href="https://drive.google.com/file/d/1XLlVNa_IsVzFjnBEApQ-hG7WUeM9L6Dd/view?usp=share_link"
            target="_blank" rel="noopener noreferrer"
            className="text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-all duration-200"
            style={{
              border: "1px solid hsl(153 60% 53% / 0.35)",
              color: "hsl(var(--primary))",
              background: "hsl(153 60% 53% / 0.06)",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "hsl(153 60% 53% / 0.12)"}
            onMouseLeave={e => e.currentTarget.style.background = "hsl(153 60% 53% / 0.06)"}
          >
            Resume ↗
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMenuOpen((p) => !p)}
          className="md:hidden p-1.5 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors z-50"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile menu */}
        <div className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 md:hidden transition-all duration-400",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{ background: "hsl(220 15% 5% / 0.97)", backdropFilter: "blur(20px)" }}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-2xl font-medium text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1XLlVNa_IsVzFjnBEApQ-hG7WUeM9L6Dd/view?usp=share_link"
            target="_blank" rel="noopener noreferrer"
            className="text-xl text-[hsl(var(--primary))] font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            Resume ↗
          </a>
        </div>
      </div>
    </nav>
  );
};
