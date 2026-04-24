import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-[hsl(var(--background)/0.85)] backdrop-blur-md border-b border-[hsl(var(--border))]"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#hero" className="text-sm font-semibold tracking-tight text-[hsl(var(--foreground))]">
          karthik<span className="text-[hsl(var(--primary))]">.</span>dev
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1XLlVNa_IsVzFjnBEApQ-hG7WUeM9L6Dd/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-1.5 rounded-md border border-[hsl(var(--primary)/0.4)] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.08)] transition-colors duration-200"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors z-50"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-0 bg-[hsl(var(--background)/0.97)] backdrop-blur-sm z-40 flex flex-col items-center justify-center gap-8 md:hidden transition-all duration-300",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xl text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1XLlVNa_IsVzFjnBEApQ-hG7WUeM9L6Dd/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-[hsl(var(--primary))]"
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};
