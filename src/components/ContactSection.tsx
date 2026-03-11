import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Mail, Linkedin, Github, FileText, Phone } from "lucide-react";

const ContactSection = () => (
  <SectionWrapper id="contact">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="section-heading">
        <span className="gradient-text">Get in Touch</span>
      </h2>

      <p className="text-secondary-foreground mb-10 leading-relaxed">
        I'm always interested in collaborating on innovative projects, internships, and research opportunities related to cybersecurity, AI, and intelligent systems.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-3"
      >
        <a
          href="mailto:avimore088@gmail.com"
          className="btn-primary flex items-center gap-2"
        >
          <Mail className="w-4 h-4" /> Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/avishkarmore/"
          target="_blank"
          rel="noreferrer"
          className="btn-outline flex items-center gap-2"
        >
          <Linkedin className="w-4 h-4" /> LinkedIn
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
          href="https://drive.google.com/drive/folders/11JnB3OYwSR079ygyBRRkkCCn3GJEk7r4?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="btn-outline flex items-center gap-2"
        >
          <FileText className="w-4 h-4" /> Resume
        </a>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default ContactSection;