import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Trophy, Star, Award } from "lucide-react";

const achievements = [
  {
    icon: Star,
    title: "JEE Advanced AIR 15,207",
    description: "Ranked in top 1% nationwide across major engineering entrance exams",
  },
  {
    icon: Award,
    title: "Current CGPA 9.75",
    description: "Maintaining exceptional academic performance at RVCE",
  },
];

const AchievementsSection = () => (
  <SectionWrapper id="achievements">
    <h2 className="section-heading">
      <span className="gradient-text">Achievements</span>
    </h2>

    <div className="grid md:grid-cols-2 gap-6">
      {achievements.map((a, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5, type: "spring" }}
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          className="glass-card p-6 gradient-border"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-accent/10 neon-glow-cyan">
              <a.icon className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-bold text-foreground heading-font text-lg">{a.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{a.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default AchievementsSection;