import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Shield, Brain, Eye, Cloud, Cpu, Network, Code, Briefcase } from "lucide-react";

const interests = [
  { icon: Shield, label: "Cybersecurity Systems" },
  { icon: Brain, label: "Machine Learning" },
  { icon: Eye, label: "Computer Vision" },
  { icon: Cloud, label: "Cloud Infrastructure" },
  { icon: Cpu, label: "IoT Systems" },
  { icon: Code, label: "Full Stack Dev" },
];

const AboutSection = () => (
  <SectionWrapper id="about">
    <h2 className="section-heading">
      <span className="gradient-text">About</span> Me
    </h2>

    <div className="grid md:grid-cols-2 gap-12">
      <div className="space-y-6">
        <p className="text-secondary-foreground leading-relaxed">
          I'm a 2nd-year CSE (Cybersecurity) student at RV College of Engineering passionate about building secure, smart, and scalable systems.
        </p>
        <p className="text-secondary-foreground leading-relaxed">
          I have hands-on experience in Full Stack Web Development, AI/ML, and IoT-based systems, along with active participation in hackathons and technical workshops that strengthen my problem-solving and teamwork skills.
        </p>
        <p className="text-secondary-foreground leading-relaxed">
          Always eager to learn and explore emerging technologies, I'm currently open to internship opportunities in cybersecurity, AI/ML, and software engineering.
        </p>
      </div>

      <div>
        <p className="text-sm text-muted-foreground mb-4 mono">// current interests</p>
        <div className="grid grid-cols-2 gap-3">
          {interests.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="glass-card p-4 flex items-center gap-3"
            >
              <div className="p-2 rounded-lg bg-accent/10">
                <item.icon className="w-4 h-4 text-accent flex-shrink-0" />
              </div>
              <span className="text-sm text-foreground">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;