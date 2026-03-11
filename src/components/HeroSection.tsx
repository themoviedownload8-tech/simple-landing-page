import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown, FileText } from "lucide-react";
import ParticleField from "./ParticleField";
import TerminalIntro from "./TerminalIntro";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 animated-gradient-bg">
      <ParticleField />

      {/* Ambient glow orbs */}
      <div className="hero-glow animate-pulse-glow" style={{ top: "5%", left: "15%", background: "hsl(217 91% 60%)" }} />
      <div className="hero-glow animate-pulse-glow" style={{ top: "50%", right: "5%", background: "hsl(263 70% 50%)", animationDelay: "2s" }} />
      <div className="hero-glow animate-pulse-glow" style={{ bottom: "10%", left: "35%", background: "hsl(187 92% 41%)", animationDelay: "4s", width: "350px", height: "350px" }} />

      <div className="relative z-10 max-w-6xl mx-auto w-full pt-28 pb-20">
        {/* Two-column layout: text left, terminal right */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ── Left: Main Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/8 text-green-400 text-xs font-medium mb-8 cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Open to Internships &amp; Collaborations
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight heading-font"
            >
              <span className="gradient-text">Avishkar</span>{" "}
              <span className="text-foreground">More</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-lg font-semibold text-accent mb-3"
            >
              Cybersecurity Engineering Student
            </motion.p>

            {/* Tag line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mono text-[11px] text-muted-foreground mb-7 tracking-widest uppercase"
            >
              AI · Systems · IoT · Computer Vision · ML · Cloud
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="text-secondary-foreground max-w-md mb-10 leading-relaxed text-sm md:text-base mx-auto lg:mx-0"
            >
              2nd-year CSE (Cybersecurity) student at RV College of Engineering
              with a <span className="text-accent font-semibold">CGPA of 9.75</span>, building secure, intelligent systems
              that solve real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              {/* Resume — primary, most prominent */}
              <a
                href="https://drive.google.com/drive/folders/11JnB3OYwSR079ygyBRRkkCCn3GJEk7r4?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn-primary flex items-center gap-2 text-sm font-semibold"
              >
                <FileText className="w-4 h-4" /> View Resume
              </a>
              <a href="#projects" className="btn-outline flex items-center gap-2">
                View Projects <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Avi007-debug"
                target="_blank"
                rel="noreferrer"
                className="btn-outline flex items-center gap-2"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/avishkarmore/"
                target="_blank"
                rel="noreferrer"
                className="btn-outline flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: Terminal (desktop) ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <TerminalIntro />
          </motion.div>
        </div>

        {/* Terminal — mobile/tablet (below content) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="lg:hidden mt-10"
        >
          <TerminalIntro />
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
