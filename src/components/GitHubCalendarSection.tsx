import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import SectionWrapper from "./SectionWrapper";
import { useEffect, useState } from "react";
import { Github, Star, Users, BookOpen, Code } from "lucide-react";

interface GitHubStats {
  repos: number;
  stars: number;
  followers: number;
  topLangs: { name: string; pct: number }[];
}

const StatCard = ({ icon: Icon, label, value, delay }: { icon: any; label: string; value: string | number; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
    className="glass-card p-5 group cursor-default"
  >
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
        <Icon className="w-4 h-4 text-accent" />
      </div>
      <span className="mono text-xs text-muted-foreground uppercase tracking-wider">{label}</span>
    </div>
    <p className="text-2xl font-bold text-foreground heading-font">{value}</p>
  </motion.div>
);

const GitHubCalendarSection = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch("https://api.github.com/users/Avi007-debug"),
          fetch("https://api.github.com/users/Avi007-debug/repos?per_page=100"),
        ]);
        const user = await userRes.json();
        const repos = await reposRes.json();

        const stars = Array.isArray(repos)
          ? repos.reduce((sum: number, r: any) => sum + (r.stargazers_count || 0), 0)
          : 0;

        const langMap: Record<string, number> = {};
        if (Array.isArray(repos)) {
          repos.forEach((r: any) => {
            if (r.language) langMap[r.language] = (langMap[r.language] || 0) + 1;
          });
        }
        const total = Object.values(langMap).reduce((a, b) => a + b, 0);
        const topLangs = Object.entries(langMap)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([name, count]) => ({ name, pct: Math.round((count / total) * 100) }));

        setStats({
          repos: user.public_repos || 0,
          stars,
          followers: user.followers || 0,
          topLangs,
        });
      } catch {
        // silently fail
      }
    };
    fetchStats();
  }, []);

  return (
    <SectionWrapper id="github">
      <h2 className="section-heading">
        <span className="gradient-text">GitHub</span> Activity
      </h2>

      {/* Stats cards */}
      {stats && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <StatCard icon={BookOpen} label="Repositories" value={stats.repos} delay={0} />
          <StatCard icon={Star} label="Stars" value={stats.stars} delay={0.1} />
          <StatCard icon={Users} label="Followers" value={stats.followers} delay={0.2} />
          <StatCard icon={Code} label="Top Language" value={stats.topLangs[0]?.name || "—"} delay={0.3} />
        </div>
      )}

      {/* Contribution heatmap */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-6 overflow-x-auto mb-8"
      >
        <h3 className="mono text-xs text-muted-foreground mb-4 uppercase tracking-wider">Contribution Graph</h3>
        <GitHubCalendar
          username="Avi007-debug"
          colorScheme="dark"
          blockSize={13}
          blockMargin={4}
          fontSize={12}
          style={{ width: "100%" }}
        />
      </motion.div>

      {/* Top Languages breakdown */}
      {stats && stats.topLangs.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-6"
        >
          <h3 className="mono text-xs text-muted-foreground mb-4 uppercase tracking-wider">Top Languages</h3>
          <div className="space-y-3">
            {stats.topLangs.map((lang, i) => (
              <div key={lang.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-foreground">{lang.name}</span>
                  <span className="text-muted-foreground mono text-xs">{lang.pct}%</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, hsl(var(--neon-blue)), hsl(var(--neon-cyan)))`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </SectionWrapper>
  );
};

export default GitHubCalendarSection;
