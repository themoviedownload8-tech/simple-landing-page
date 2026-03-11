import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Code, Server, Brain, Shield, Cloud, Wrench } from "lucide-react";

const categories = [
  { name: "Programming", icon: Code, items: ["Python", "C++", "Java", "TypeScript", "JavaScript"], angle: 0 },
  { name: "Frameworks", icon: Server, items: ["React", "Flask", "Express", "Django", "Node.js"], angle: 60 },
  { name: "AI/ML", icon: Brain, items: ["ML", "CV", "NLP", "Scikit-Learn", "TensorFlow"], angle: 120 },
  { name: "Cybersecurity", icon: Shield, items: ["Network Sec", "IDS", "Nmap", "Wireshark", "Crypto"], angle: 180 },
  { name: "Cloud", icon: Cloud, items: ["AWS", "Docker", "PostgreSQL", "Supabase", "Git"], angle: 240 },
  { name: "Tools", icon: Wrench, items: ["VS Code", "Linux", "Postman", "Figma", "Arduino"], angle: 300 },
];

const TechStackVisualization = () => {
  return (
    <SectionWrapper id="tech-stack">
      <h2 className="section-heading">
        <span className="gradient-text">Tech</span> Stack
      </h2>

      {/* Orbit visualization - desktop */}
      <div className="hidden lg:flex justify-center mb-16">
        <div className="relative w-[600px] h-[600px]">
          {/* Center node */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="w-32 h-32 rounded-full glass-card flex items-center justify-center border border-accent/30">
              <div className="text-center">
                <p className="text-xs mono text-accent font-semibold">Engineering</p>
                <p className="text-xs mono text-muted-foreground">Stack</p>
              </div>
            </div>
          </motion.div>

          {/* Orbit rings */}
          <div className="absolute inset-8 rounded-full border border-border/20" />
          <div className="absolute inset-20 rounded-full border border-border/10" />

          {/* Orbiting nodes */}
          {categories.map((cat, i) => {
            const radius = 230;
            const rad = (cat.angle * Math.PI) / 180;
            const x = 300 + radius * Math.cos(rad) - 56;
            const y = 300 + radius * Math.sin(rad) - 56;

            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="absolute group"
                style={{ left: x, top: y }}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 3 + i * 0.5, ease: "easeInOut" }}
                  className="w-28 h-28 glass-card rounded-2xl flex flex-col items-center justify-center gap-1 cursor-default group-hover:border-accent/40 transition-colors"
                >
                  <cat.icon className="w-5 h-5 text-accent" />
                  <span className="text-xs font-medium text-foreground">{cat.name}</span>
                  <span className="text-[10px] text-muted-foreground mono">{cat.items.length} skills</span>
                </motion.div>

                {/* Tooltip */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                  <div className="glass-card p-3 rounded-lg min-w-[140px]">
                    {cat.items.map((item) => (
                      <div key={item} className="text-xs text-foreground/80 py-0.5">{item}</div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Grid fallback for mobile/tablet */}
      <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card p-5"
          >
            <div className="flex items-center gap-2 mb-3">
              <cat.icon className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-foreground">{cat.name}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.items.map((item) => (
                <span key={item} className="tech-badge text-[10px] px-2 py-1">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default TechStackVisualization;
