import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Briefcase, Users, Smartphone } from "lucide-react";

const experiences = [
  {
    title: "Junior Core Team Member",
    org: "Google Developer Groups RVCE",
    period: "May 2025 – Present",
    icon: Briefcase,
    points: [
      "Help organize developer events and hackathons",
      "Contribute to community tech initiatives",
      "Support technical workshops",
    ],
  },
  {
    title: "Student Member",
    org: "Rotaract Club of RVCE",
    period: "Sep 2024 – Present",
    icon: Users,
    points: [
      "Organizing community and college events",
      "Student welfare initiatives",
    ],
  },
  {
    title: "Student Member",
    org: "ACCELERATE RVCE",
    period: "Sep 2024 – Present",
    icon: Smartphone,
    points: [
      "Work on mobile app development projects",
      "Android and iOS development initiatives",
    ],
  },
];

const ExperienceSection = () => (
  <SectionWrapper id="experience">
    <h2 className="section-heading">
      <span className="gradient-text">Experience</span>
    </h2>

    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue via-neon-violet to-transparent hidden md:block" />

      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="flex gap-6"
          >
            <div className="hidden md:flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-10 h-10 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0 z-10"
              >
                <exp.icon className="w-4 h-4 text-accent" />
              </motion.div>
            </div>

            <motion.div
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              className="glass-card p-6 flex-1"
            >
              <h3 className="font-bold text-foreground heading-font">{exp.title}</h3>
              <p className="text-accent text-sm font-medium">{exp.org}</p>
              {exp.period && (
                <p className="text-xs text-muted-foreground mono mt-1">{exp.period}</p>
              )}
              {exp.points.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {exp.points.map((p, j) => (
                    <li key={j} className="text-sm text-secondary-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default ExperienceSection;