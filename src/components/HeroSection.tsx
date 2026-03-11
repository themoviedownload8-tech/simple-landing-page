import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, FileText, Phone } from "lucide-react";
import ParticleField from "./ParticleField";
import TerminalIntro from "./TerminalIntro";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 animated-gradient-bg">
      <ParticleField />

      {/* Glow orbs */}
      <div className="hero-glow animate-pulse-glow" style={{ top: "5%", left: "15%", background: "hsl(217 91% 60%)" }} />
      <div className="hero-glow animate-pulse-glow" style={{ top: "50%", right: "5%", background: "hsl(263 70% 50%)", animationDelay: "2s" }} />
      <div className="hero-glow animate-pulse-glow" style={{ bottom: "10%", left: "40%", background: "hsl(187 92% 41%)", animationDelay: "4s", width: "400px", height: "400px" }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TerminalIntro />

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-tight heading-font">
            <span className="gradient-text">Avishkar</span>{" "}
            <span className="text-foreground">More</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl font-semibold text-accent mb-3"
          >
            Cybersecurity Engineering Student
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mono text-xs md:text-sm text-muted-foreground mb-8 tracking-wide"
          >
            AI • Systems • IoT • Computer Vision • ML • Embedded • Cloud
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-secondary-foreground max-w-2xl mx-auto mb-4 leading-relaxed text-sm md:text-base"
          >
            I'm a 2nd-year Computer Science (Cybersecurity) student at RV College of Engineering passionate about building secure, intelligent, and scalable systems.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-secondary-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-sm md:text-base"
          >
            My work spans AI/ML, cybersecurity, computer vision, IoT platforms, and full-stack development with a focus on solving real-world problems.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#projects" className="btn-primary flex items-center gap-2">
            View Projects <ArrowDown className="w-4 h-4" />
          </a>
          <a href="https://drive.google.com/drive/folders/11JnB3OYwSR079ygyBRRkkCCn3GJEk7r4?usp=sharing" target="_blank" rel="noreferrer" className="btn-outline flex items-center gap-2">
            <FileText className="w-4 h-4" /> View Resume
          </a>
          <a href="https://github.com/Avi007-debug" target="_blank" rel="noreferrer" className="btn-outline flex items-center gap-2">
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/avishkarmore/" target="_blank" rel="noreferrer" className="btn-outline flex items-center gap-2">
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a href="#contact" className="btn-outline flex items-center gap-2">
            <Mail className="w-4 h-4" /> Contact
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;