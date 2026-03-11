import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const EducationSection = () => (
  <SectionWrapper id="education">
    <h2 className="section-heading">
      <span className="gradient-text">Education</span>
    </h2>

    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue via-neon-violet to-transparent hidden md:block" />

      <div className="space-y-8">
        {/* RVCE */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex gap-6"
        >
          <div className="hidden md:flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0 z-10">
              <GraduationCap className="w-5 h-5 text-accent" />
            </div>
          </div>
          <div className="glass-card p-6 md:p-8 flex-1 gradient-border">
            <div className="flex items-start justify-between flex-wrap gap-2">
              <div>
                <h3 className="text-xl font-bold text-foreground heading-font">RV College of Engineering</h3>
                <p className="text-accent font-medium">B.E. Computer Science (Cybersecurity)</p>
                <p className="text-sm text-muted-foreground mono mt-1">2024 – 2028</p>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
                className="px-4 py-2 rounded-lg bg-accent/10 border border-accent/20"
              >
                <p className="text-xs text-muted-foreground">Current CGPA</p>
                <p className="text-2xl font-bold text-accent heading-font">9.75</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* GT School */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="flex gap-6"
        >
          <div className="hidden md:flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 z-10">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
          </div>
          <div className="glass-card p-6 md:p-8 flex-1">
            <h3 className="text-lg font-bold text-foreground heading-font">GT School and Junior College</h3>
            <p className="text-primary font-medium text-sm">Science (PCM + CS)</p>
            <p className="text-sm text-muted-foreground mono mt-1">2022 – 2024</p>
            <div className="mt-4 space-y-2">
              {[
                "AIR 15,207 — JEE Advanced 2024",
                "99.002 percentile — MHT-CET 2024",
                "AIR 779 — COMEDK UGET",
              ].map((a) => (
                <p key={a} className="text-sm text-secondary-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {a}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </SectionWrapper>
);

export default EducationSection;