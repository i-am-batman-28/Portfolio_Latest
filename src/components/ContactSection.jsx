import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSent(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-28 px-4">
      <div className="container max-w-4xl">
        <p className="text-[hsl(var(--primary))] text-sm font-mono mb-3">Contact</p>
        <h2 className="section-heading mb-3">Let's talk</h2>
        <p className="text-[hsl(var(--muted-foreground))] mb-12 max-w-xl">
          Open to SDE roles, internships, and interesting projects. Response time usually same day.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left — contact info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-lg bg-[hsl(var(--primary)/0.1)] flex items-center justify-center shrink-0">
                <Mail size={16} className="text-[hsl(var(--primary))]" />
              </div>
              <div>
                <p className="text-xs text-[hsl(var(--muted-foreground))] mb-0.5">Email</p>
                <a
                  href="mailto:karthikm.s23@iiits.in"
                  className="text-sm text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors font-mono"
                >
                  karthikm.s23@iiits.in
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-lg bg-[hsl(var(--primary)/0.1)] flex items-center justify-center shrink-0">
                <MapPin size={16} className="text-[hsl(var(--primary))]" />
              </div>
              <div>
                <p className="text-xs text-[hsl(var(--muted-foreground))] mb-0.5">Location</p>
                <p className="text-sm text-[hsl(var(--foreground))]">Bangalore, India</p>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a
                href="https://github.com/i-am-batman-28"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
              >
                <FaGithub size={18} /> i-am-batman-28
              </a>
              <a
                href="https://www.linkedin.com/in/karthik-sarma-9859b9291/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
              >
                <FaLinkedin size={18} /> LinkedIn
              </a>
            </div>

            <div className="pt-2">
              <a
                href="https://drive.google.com/file/d/1XLlVNa_IsVzFjnBEApQ-hG7WUeM9L6Dd/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="p-6 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8 gap-3">
                <div className="w-10 h-10 rounded-full bg-[hsl(var(--primary)/0.15)] flex items-center justify-center">
                  <Send size={18} className="text-[hsl(var(--primary))]" />
                </div>
                <p className="font-semibold">Message sent!</p>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">I'll get back to you soon.</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-[hsl(var(--muted-foreground))] mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2.5 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--input))] text-sm focus:outline-none focus:border-[hsl(var(--primary)/0.5)] focus:ring-1 focus:ring-[hsl(var(--primary)/0.3)] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-[hsl(var(--muted-foreground))] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2.5 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--input))] text-sm focus:outline-none focus:border-[hsl(var(--primary)/0.5)] focus:ring-1 focus:ring-[hsl(var(--primary)/0.3)] transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-[hsl(var(--muted-foreground))] mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-3 py-2.5 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--input))] text-sm focus:outline-none focus:border-[hsl(var(--primary)/0.5)] focus:ring-1 focus:ring-[hsl(var(--primary)/0.3)] transition-colors resize-none"
                    placeholder="Hello, I'd like to..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
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
