import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => { setIsSubmitting(false); setSent(true); }, 1200);
  };

  return (
    <section id="contact" className="py-32 px-4">
      <div className="container max-w-4xl">

        <p className="section-label mb-4">Contact</p>
        <h2 className="section-heading mb-3">Let's talk</h2>
        <p className="text-[hsl(var(--muted-foreground))] text-[1.05rem] mb-14 max-w-lg">
          Open to SDE roles, internships, and interesting projects. Usually reply same day.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <div className="space-y-7">
            <a href="mailto:karthikm.s23@iiits.in" className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] flex items-center justify-center shrink-0 group-hover:border-[hsl(var(--primary)/0.4)] transition-colors duration-200">
                <Mail size={15} className="text-[hsl(var(--primary))]" />
              </div>
              <div>
                <p className="text-[0.7rem] text-[hsl(var(--muted-foreground))] mb-0.5 uppercase tracking-wider font-mono">Email</p>
                <p className="text-sm font-mono text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors duration-200">
                  karthikm.s23@iiits.in
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] flex items-center justify-center shrink-0">
                <MapPin size={15} className="text-[hsl(var(--primary))]" />
              </div>
              <div>
                <p className="text-[0.7rem] text-[hsl(var(--muted-foreground))] mb-0.5 uppercase tracking-wider font-mono">Location</p>
                <p className="text-sm text-[hsl(var(--foreground))]">Bangalore, India</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/i-am-batman-28"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors duration-200"
              >
                <FaGithub size={16} /> GitHub
              </a>
              <div className="w-px h-4 bg-[hsl(var(--border))]" />
              <a
                href="https://www.linkedin.com/in/karthik-sarma-9859b9291/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors duration-200"
              >
                <FaLinkedin size={16} /> LinkedIn
              </a>
            </div>

            <a
              href="https://drive.google.com/file/d/1XLlVNa_IsVzFjnBEApQ-hG7WUeM9L6Dd/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[hsl(var(--border))] text-sm font-medium text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary)/0.4)] hover:text-[hsl(var(--primary))] transition-all duration-200"
            >
              Download Resume ↗
            </a>
          </div>

          {/* Right — form */}
          <div className="card p-6">
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-10 gap-3">
                <div className="w-11 h-11 rounded-full bg-[hsl(var(--primary)/0.12)] flex items-center justify-center mb-1">
                  <Send size={17} className="text-[hsl(var(--primary))]" />
                </div>
                <p className="font-semibold text-[hsl(var(--foreground))]">Message sent!</p>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">I'll get back to you soon.</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-xs text-[hsl(var(--muted-foreground))] mb-1.5 font-mono uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text" id="name" name="name" required
                    placeholder="Your name"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--input))] text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:border-[hsl(var(--primary)/0.5)] focus:ring-1 focus:ring-[hsl(var(--primary)/0.15)] transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs text-[hsl(var(--muted-foreground))] mb-1.5 font-mono uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email" id="email" name="email" required
                    placeholder="you@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--input))] text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:border-[hsl(var(--primary)/0.5)] focus:ring-1 focus:ring-[hsl(var(--primary)/0.15)] transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs text-[hsl(var(--muted-foreground))] mb-1.5 font-mono uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message" name="message" required rows={4}
                    placeholder="Hello, I'd like to..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--input))] text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:border-[hsl(var(--primary)/0.5)] focus:ring-1 focus:ring-[hsl(var(--primary)/0.15)] transition-all duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] text-sm font-semibold hover:opacity-90 disabled:opacity-50 transition-all duration-200"
                >
                  {isSubmitting ? "Sending…" : "Send Message"}
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
