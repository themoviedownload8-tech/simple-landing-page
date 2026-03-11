import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const GitHubSection = () => (
  <SectionWrapper id="github">
    <h2 className="section-heading">
      <span className="gradient-text">GitHub</span> Activity
    </h2>

    <div className="space-y-8">
      {/* Contribution graph */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-6 overflow-hidden"
      >
        <h3 className="mono text-xs text-muted-foreground mb-4 uppercase tracking-wider">Contribution Graph</h3>
        <img
          src="https://ghchart.rshah.org/2563eb/Avi007-debug"
          alt="GitHub Contribution Graph"
          className="w-full rounded"
          loading="lazy"
        />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6"
        >
          <h3 className="mono text-xs text-muted-foreground mb-4 uppercase tracking-wider">Stats</h3>
          <img
            src="https://github-readme-stats.vercel.app/api?username=Avi007-debug&show_icons=true&theme=transparent&hide_border=true&title_color=2563eb&text_color=94a3b8&icon_color=06b6d4"
            alt="GitHub Stats"
            className="w-full"
            loading="lazy"
          />
        </motion.div>

        {/* Top Languages */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6"
        >
          <h3 className="mono text-xs text-muted-foreground mb-4 uppercase tracking-wider">Top Languages</h3>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Avi007-debug&layout=compact&theme=transparent&hide_border=true&title_color=2563eb&text_color=94a3b8"
            alt="Top Languages"
            className="w-full"
            loading="lazy"
          />
        </motion.div>
      </div>

      {/* Streak */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-6"
      >
        <h3 className="mono text-xs text-muted-foreground mb-4 uppercase tracking-wider">Streak</h3>
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=Avi007-debug&theme=transparent&hide_border=true&ring=2563eb&fire=06b6d4&currStreakLabel=2563eb&sideLabels=94a3b8&dates=64748b&currStreakNum=e2e8f0&sideNums=e2e8f0"
          alt="GitHub Streak"
          className="w-full"
          loading="lazy"
        />
      </motion.div>
    </div>
  </SectionWrapper>
);

export default GitHubSection;