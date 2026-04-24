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
  const [isScrolled, setIsScrolled]   = useState(false);
  const [isMenuOpen, setIsMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-500",
      isScrolled
        ? "py-3 bg-[hsl(0,0%,4%,0.82)] backdrop-blur-xl border-b border-[hsl(var(--border))]"
        : "py-6"
    )}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-1.5 group">
          <span className="text-sm font-semibold tracking-tight text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors duration-200">
            karthik
          </span>
          <span className="text-[hsl(var(--primary))] text-lg leading-none">·</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors duration-200 relative group"
            >
              {item.name}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[hsl(var(--primary))] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1XLlVNa_IsVzFjnBEApQ-hG7WUeM9L6Dd/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium px-3.5 py-1.5 rounded-md border border-[hsl(var(--border))] text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary)/0.5)] hover:text-[hsl(var(--primary))] transition-all duration-200"
          >
            Resume ↗
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMenuOpen((p) => !p)}
          className="md:hidden p-1.5 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors z-50"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile menu */}
        <div className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 md:hidden transition-all duration-300",
          "bg-[hsl(0,0%,4%,0.97)] backdrop-blur-sm",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
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
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-[hsl(var(--primary))]"
            onClick={() => setIsMenuOpen(false)}
          >
            Resume ↗
          </a>
        </div>
      </div>
    </nav>
  );
};
