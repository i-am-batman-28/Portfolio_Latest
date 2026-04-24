import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const ContactSection = () => {
  const ref = useScrollReveal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => { setIsSubmitting(false); setSent(true); }, 1200);
  };

  return (
    <section id="contact" className="py-32 px-4" ref={ref}>
      <div className="container max-w-4xl">

        <div className="reveal">
          <p className="section-label mb-4">
            <span className="w-8 h-px bg-[hsl(var(--primary))] inline-block" />
            Contact
          </p>
          <h2 className="section-heading mb-3">Let's build something.</h2>
          <p className="text-[hsl(var(--muted-foreground))] text-[1.05rem] mb-14 max-w-lg">
            Open to SDE roles, internships, and interesting projects. I usually reply the same day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* Left */}
          <div className="reveal reveal-delay-1 space-y-6">
            <a href="mailto:karthikm.s23@iiits.in" className="flex items-center gap-4 group">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-110"
                style={{
                  background: "hsl(153 60% 53% / 0.08)",
                  border: "1px solid hsl(153 60% 53% / 0.2)",
                }}
              >
                <Mail size={16} className="text-[hsl(var(--primary))]" />
              </div>
              <div>
                <p className="text-[0.68rem] text-[hsl(var(--muted-foreground))] uppercase tracking-wider font-mono mb-0.5">Email</p>
                <p className="text-sm font-mono text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors">
                  karthikm.s23@iiits.in
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "hsl(153 60% 53% / 0.08)", border: "1px solid hsl(153 60% 53% / 0.2)" }}
              >
                <MapPin size={16} className="text-[hsl(var(--primary))]" />
              </div>
              <div>
                <p className="text-[0.68rem] text-[hsl(var(--muted-foreground))] uppercase tracking-wider font-mono mb-0.5">Location</p>
                <p className="text-sm text-[hsl(var(--foreground))]">Bangalore, India</p>
              </div>
            </div>

            <div className="flex items-center gap-5 pt-2">
              <a
                href="https://github.com/i-am-batman-28"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
              >
                <FaGithub size={17} /> GitHub
              </a>
              <div className="w-px h-4 bg-[hsl(var(--border))]" />
              <a
                href="https://www.linkedin.com/in/karthik-sarma-9859b9291/"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
              >
                <FaLinkedin size={17} /> LinkedIn
              </a>
            </div>

            <div className="pt-2">
              <a
                href="https://drive.google.com/file/d/1XLlVNa_IsVzFjnBEApQ-hG7WUeM9L6Dd/view?usp=share_link"
                target="_blank" rel="noopener noreferrer"
                className="btn-outline hover:border-[hsl(var(--primary)/0.45)] hover:text-[hsl(var(--primary))]"
              >
                Download Resume ↗
              </a>
            </div>

            {/* Availability card */}
            <div
              className="p-4 rounded-xl mt-2"
              style={{ background: "hsl(153 60% 53% / 0.05)", border: "1px solid hsl(153 60% 53% / 0.18)" }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="w-2 h-2 rounded-full bg-[hsl(var(--primary))]"
                  style={{ boxShadow: "0 0 8px hsl(153 60% 53%)" }}
                />
                <span className="text-xs font-semibold text-[hsl(var(--primary))]">Currently Available</span>
              </div>
              <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed">
                Open to full-time SDE roles, internships, and project collaborations starting mid-2025.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal reveal-delay-2">
            <div className="glass-card p-6">
              {sent ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-2"
                    style={{ background: "hsl(153 60% 53% / 0.12)", border: "1px solid hsl(153 60% 53% / 0.3)" }}
                  >
                    <Send size={18} className="text-[hsl(var(--primary))]" />
                  </div>
                  <p className="font-semibold text-[hsl(var(--foreground))]">Message sent!</p>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">I'll get back to you soon.</p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {[
                    { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                    { id: "email", label: "Email", type: "email", placeholder: "you@example.com" },
                  ].map(({ id, label, type, placeholder }) => (
                    <div key={id}>
                      <label htmlFor={id} className="block text-[0.68rem] text-[hsl(var(--muted-foreground))] mb-1.5 font-mono uppercase tracking-wider">
                        {label}
                      </label>
                      <input
                        type={type} id={id} name={id} required placeholder={placeholder}
                        className="w-full px-3.5 py-2.5 rounded-lg text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] outline-none transition-all duration-200"
                        style={{
                          background: "hsl(var(--input))",
                          border: "1px solid hsl(var(--border))",
                        }}
                        onFocus={e => e.target.style.borderColor = "hsl(153 60% 53% / 0.5)"}
                        onBlur={e => e.target.style.borderColor = "hsl(var(--border))"}
                      />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="message" className="block text-[0.68rem] text-[hsl(var(--muted-foreground))] mb-1.5 font-mono uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      id="message" name="message" required rows={4} placeholder="Hello, I'd like to..."
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] outline-none resize-none transition-all duration-200"
                      style={{ background: "hsl(var(--input))", border: "1px solid hsl(var(--border))" }}
                      onFocus={e => e.target.style.borderColor = "hsl(153 60% 53% / 0.5)"}
                      onBlur={e => e.target.style.borderColor = "hsl(var(--border))"}
                    />
                  </div>
                  <button
                    type="submit" disabled={isSubmitting}
                    className="btn-primary w-full justify-center hover:opacity-90 disabled:opacity-50"
                    style={{ boxShadow: "0 0 20px hsl(153 60% 53% / 0.2)" }}
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
