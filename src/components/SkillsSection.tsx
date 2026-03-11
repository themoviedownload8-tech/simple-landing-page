import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import {
  Code, Server, Brain, Shield, Database, Users,
} from "lucide-react";

const skillGroups = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "C", "C++", "Java", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks",
    icon: Server,
    skills: ["React", "Flask", "Express.js", "Django", "Node.js"],
  },
  {
    title: "AI / ML",
    icon: Brain,
    skills: ["Machine Learning", "Computer Vision", "NLP", "Feature Engineering", "Model Evaluation"],
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    skills: ["Network Security", "Intrusion Detection", "Threat Classification", "Cryptography", "Wireshark", "Nmap"],
  },
  {
    title: "Database & Cloud",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "SQLite", "AWS Lambda", "Docker", "Git"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Problem Solving", "Teamwork", "Communication", "Adaptability", "Project Collaboration"],
  },
];

const SkillsSection = () => (
  <SectionWrapper id="skills">
    <h2 className="section-heading">
      <span className="gradient-text">Skills</span> & Tools
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillGroups.map((group, i) => (
        <motion.div
          key={group.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="glass-card p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-accent/10">
              <group.icon className="w-4 h-4 text-accent" />
            </div>
            <h3 className="mono text-xs text-muted-foreground uppercase tracking-wider">
              {group.title}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="tech-badge cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;