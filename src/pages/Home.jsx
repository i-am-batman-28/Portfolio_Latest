import { CustomCursor } from "../components/CustomCursor";
import { OrbitalBackground } from "../components/OrbitalBackground";
import { MouseSpotlight } from "../components/MouseSpotlight";
import { ScrollProgress } from "../components/ScrollProgress";
import { AnimatedOrbs } from "../components/AnimatedOrbs";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { AchievementsSection } from "../components/AchievementsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => (
  <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] overflow-x-hidden">
    <CustomCursor />
    <MouseSpotlight />
    <ScrollProgress />
    <OrbitalBackground />
    <AnimatedOrbs />
    <Navbar />
    <main className="relative z-10">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <AchievementsSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);
