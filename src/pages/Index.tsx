import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InteractiveBackground from "@/components/InteractiveBackground";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackVisualization from "@/components/TechStackVisualization";
import SkillBars from "@/components/SkillBars";
import CertificationsSection from "@/components/CertificationsSection";
import AchievementsSection from "@/components/AchievementsSection";
import GitHubCalendarSection from "@/components/GitHubCalendarSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <InteractiveBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <TechStackVisualization />
      <SkillBars />
      <CertificationsSection />
      <AchievementsSection />
      <GitHubCalendarSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
