import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import AchievementsSection from "@/components/AchievementsSection";
import TechStackVisualization from "@/components/TechStackVisualization";
import SkillBars from "@/components/SkillBars";
import GitHubCalendarSection from "@/components/GitHubCalendarSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
