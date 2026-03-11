import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const skills = [
  { name: "Python",                 level: 90, color: "var(--neon-blue)" },
  { name: "React / TypeScript",     level: 88, color: "var(--neon-cyan)" },
  { name: "Machine Learning",       level: 82, color: "var(--neon-violet)" },
  { name: "Cybersecurity / IDS",    level: 80, color: "var(--neon-blue)" },
  { name: "Flask / FastAPI",        level: 82, color: "var(--neon-cyan)" },
  { name: "Computer Vision",        level: 78, color: "var(--neon-violet)" },
  { name: "Cloud (AWS / Supabase)", level: 72, color: "var(--neon-blue)" },
  { name: "IoT / Embedded (C++)",   level: 68, color: "var(--neon-cyan)" },
];

const SkillBars = () => (
  <SectionWrapper id="skills">
    <h2 className="section-heading">
      <span className="gradient-text">Skills</span> & Proficiency
    </h2>

    <div className="max-w-3xl mx-auto space-y-5">
      {skills.map((skill, i) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-sm font-medium text-foreground">{skill.name}</span>
            <span className="mono text-xs text-muted-foreground">{skill.level}%</span>
          </div>
          <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: i * 0.08, ease: "easeOut" }}
              className="h-full rounded-full relative"
              style={{
                background: `linear-gradient(90deg, hsl(${skill.color}), hsl(${skill.color} / 0.6))`,
                boxShadow: `0 0 12px hsl(${skill.color} / 0.3)`,
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillBars;
