import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const ContactSection = () => {
  const ref = useScrollReveal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setIsSubmitting(true); setTimeout(() => { setIsSubmitting(false); setSent(true); }, 1200); };

  return (
    <section id="contact" className="py-32 px-4" ref={ref}>
      <div className="container max-w-4xl">

        <div className="reveal">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-6"
            style={{ background: "hsl(217 91% 60% / 0.08)", border: "1px solid hsl(217 91% 60% / 0.18)", color: "#60a5fa" }}
          >
            <span className="w-1 h-1 rounded-full bg-[#60a5fa]" /> 05 · Contact
          </div>
          <h2
            className="mb-3"
            style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.1 }}
          >
            Let's build something.
          </h2>
          <p className="mb-14 text-[1.05rem] max-w-lg" style={{ color: "hsl(215 12% 45%)" }}>
            Open to SDE roles, internships, and interesting projects. I reply same day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <div className="reveal reveal-delay-1 space-y-6">
            <a href="mailto:karthikm.s23@iiits.in" className="flex items-center gap-4 group">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-110"
                style={{ background: "#60a5fa12", border: "1px solid #60a5fa28" }}
              >
                <Mail size={16} style={{ color: "#60a5fa" }} />
              </div>
              <div>
                <p className="text-[0.65rem] uppercase tracking-wider font-mono mb-0.5" style={{ color: "hsl(215 12% 38%)" }}>Email</p>
                <p className="text-sm font-mono transition-colors duration-200" style={{ color: "hsl(var(--foreground))" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#60a5fa"}
                  onMouseLeave={e => e.currentTarget.style.color = "hsl(var(--foreground))"}
                >karthikm.s23@iiits.in</p>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "#60a5fa12", border: "1px solid #60a5fa28" }}
              >
                <MapPin size={16} style={{ color: "#60a5fa" }} />
              </div>
              <div>
                <p className="text-[0.65rem] uppercase tracking-wider font-mono mb-0.5" style={{ color: "hsl(215 12% 38%)" }}>Location</p>
                <p className="text-sm" style={{ color: "hsl(var(--foreground))" }}>Bangalore, India</p>
              </div>
            </div>

            <div className="flex items-center gap-5 pt-1">
              {[
                { href: "https://github.com/i-am-batman-28", icon: FaGithub, label: "GitHub" },
                { href: "https://www.linkedin.com/in/karthik-sarma-9859b9291/", icon: FaLinkedin, label: "LinkedIn" },
              ].map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors duration-200"
                  style={{ color: "hsl(215 12% 42%)" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#60a5fa"}
                  onMouseLeave={e => e.currentTarget.style.color = "hsl(215 12% 42%)"}
                >
                  <Icon size={16} /> {label}
                </a>
              ))}
            </div>

            <div className="pt-1">
              <a
                href="https://drive.google.com/file/d/1XLlVNa_IsVzFjnBEApQ-hG7WUeM9L6Dd/view?usp=share_link"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                style={{ background: "hsl(224 15% 10%)", border: "1px solid hsl(224 15% 18%)", color: "hsl(215 12% 55%)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#60a5fa40"; e.currentTarget.style.color = "#60a5fa"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "hsl(224 15% 18%)"; e.currentTarget.style.color = "hsl(215 12% 55%)"; }}
              >
                Download Resume ↗
              </a>
            </div>

            {/* Availability */}
            <div
              className="p-4 rounded-xl"
              style={{ background: "rgba(96,165,250,0.04)", border: "1px solid rgba(96,165,250,0.12)" }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#60a5fa", boxShadow: "0 0 8px #60a5fa, 0 0 16px #60a5fa60" }}
                />
                <span className="text-xs font-semibold" style={{ color: "#60a5fa" }}>Currently Available</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "hsl(215 12% 42%)" }}>
                Open to full-time SDE roles and internships starting mid-2025.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="reveal reveal-delay-2">
            <div className="rounded-2xl p-6" style={{ background: "hsl(224 18% 7%)", border: "1px solid hsl(224 15% 13%)" }}>
              {sent ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-1"
                    style={{ background: "#60a5fa12", border: "1px solid #60a5fa30" }}>
                    <Send size={18} style={{ color: "#60a5fa" }} />
                  </div>
                  <p className="font-semibold" style={{ color: "hsl(var(--foreground))" }}>Message sent!</p>
                  <p className="text-sm" style={{ color: "hsl(215 12% 42%)" }}>I'll get back to you soon.</p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {[
                    { id: "name",  label: "Name",  type: "text",  ph: "Your name" },
                    { id: "email", label: "Email", type: "email", ph: "you@example.com" },
                  ].map(f => (
                    <div key={f.id}>
                      <label htmlFor={f.id} className="block text-[0.65rem] uppercase tracking-wider font-mono mb-1.5" style={{ color: "hsl(215 12% 38%)" }}>
                        {f.label}
                      </label>
                      <input
                        type={f.type} id={f.id} name={f.id} required placeholder={f.ph}
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{ background: "hsl(224 20% 9%)", border: "1px solid hsl(224 15% 15%)", color: "hsl(var(--foreground))" }}
                        onFocus={e => e.target.style.borderColor = "#60a5fa50"}
                        onBlur={e => e.target.style.borderColor = "hsl(224 15% 15%)"}
                      />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="message" className="block text-[0.65rem] uppercase tracking-wider font-mono mb-1.5" style={{ color: "hsl(215 12% 38%)" }}>
                      Message
                    </label>
                    <textarea
                      id="message" name="message" required rows={4} placeholder="Hello, I'd like to..."
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm outline-none resize-none transition-all duration-200"
                      style={{ background: "hsl(224 20% 9%)", border: "1px solid hsl(224 15% 15%)", color: "hsl(var(--foreground))" }}
                      onFocus={e => e.target.style.borderColor = "#60a5fa50"}
                      onBlur={e => e.target.style.borderColor = "hsl(224 15% 15%)"}
                    />
                  </div>
                  <button
                    type="submit" disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 disabled:opacity-50"
                    style={{ background: "hsl(var(--primary))", color: "#0f172a", boxShadow: "0 0 25px hsl(217 91% 60% / 0.25)" }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 35px hsl(217 91% 60% / 0.4)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 0 25px hsl(217 91% 60% / 0.25)"; e.currentTarget.style.transform = "translateY(0)"; }}
                  >
                    {isSubmitting ? "Sending…" : "Send Message"} <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
