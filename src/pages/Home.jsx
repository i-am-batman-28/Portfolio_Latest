import { CustomCursor } from "../components/CustomCursor";
import { ParticleCanvas } from "../components/ParticleCanvas";
import { ScrollProgress } from "../components/ScrollProgress";
import { AnimatedOrbs } from "../components/AnimatedOrbs";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => (
  <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] overflow-x-hidden">
    <CustomCursor />
    <ScrollProgress />
    {/* Particle canvas sits behind everything */}
    <div className="fixed inset-0 z-0 pointer-events-none">
      <ParticleCanvas />
    </div>
    <AnimatedOrbs />
    <Navbar />
    <main className="relative z-10">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);
