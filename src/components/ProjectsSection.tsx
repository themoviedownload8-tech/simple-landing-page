import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { ArrowUpRight, Github, Globe } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  highlight?: string; // optional stat/badge
}

const featured: Project[] = [
  {
    title: "CatchUpX",
    subtitle: "AI-Powered Personalized Learning Platform",
    description:
      "Diagnoses student knowledge gaps and generates AI-crafted lessons and 5-day study plans via AWS Bedrock. Supports 7 grades × 3 subjects with per-concept gap analysis, worked examples and 4 practice questions per lesson.",
    tech: ["React", "TypeScript", "AWS Lambda", "AWS Bedrock", "Supabase", "Tailwind"],
    github: "https://github.com/Avi007-debug/catchupx",
    highlight: "AWS Bedrock · Serverless",
  },
  {
    title: "SmartSecure",
    subtitle: "Multi-Stage ML Intrusion Detection System",
    description:
      "Real-time IDS combining Scapy packet capture, bidirectional flow aggregation (30s windows), two-stage ML classifiers (Random Forest / Gradient Boosting) and SHAP explainability with an AI mitigation advisor.",
    tech: ["FastAPI", "Python", "Scapy", "Scikit-Learn", "SHAP", "React", "Pandas"],
    github: "https://github.com/Avi007-debug/SmartSecure",
    highlight: "Real-time · ML · SHAP",
  },
  {
    title: "Chyrp Rebuild",
    subtitle: "Modern Full-Stack Blogging Platform",
    description:
      "Rebuilt the legacy Chyrp blog engine as a modern React + Flask platform. Supports 7 content types (text, photo, video, audio, link, quote, uploader), extension modules (caching, tags, comments, likes), JWT auth and Supabase media storage.",
    tech: ["React", "TypeScript", "Flask", "PostgreSQL", "Supabase", "JWT", "Gunicorn"],
    github: "https://github.com/Avi007-debug/chyrp-rebuild-clonefest",
    highlight: "7 Content Types · Extensions",
  },
  {
    title: "Master Algorithm",
    subtitle: "Interactive Algorithm Visualization Platform",
    description:
      "Web platform visualizing 57 data-structure & algorithm implementations with step-by-step playback, speed control, syllabus filters, keyboard shortcuts and complexity metadata. C programs compiled via Node.js backend with CI/CD.",
    tech: ["React", "TypeScript", "Vite", "Node.js", "C", "Framer Motion", "GitHub Actions"],
    github: "https://github.com/Avi007-debug/Master_Algorithm",
    highlight: "57 Algorithms · CI/CD",
  },
];

const additional: Project[] = [
  {
    title: "SmartStay",
    subtitle: "AI-Powered PG Accommodation Platform",
    description:
      "6 AI features via Groq AI (recommendations, sentiment analysis, hidden-charges detector, travel estimator, description generator, chatbot), anonymous real-time chat, multi-role dashboards and row-level security via Supabase.",
    tech: ["React", "TypeScript", "Flask", "Supabase", "Groq AI", "React Query"],
    github: "https://github.com/Avi007-debug/SmartStay",
    highlight: "6 AI Features",
  },
  {
    title: "Urban Canopy Health Index",
    subtitle: "RGB Vegetation Monitoring & Visualization",
    description:
      "Deterministic HSV-based CV pipeline (no ML training) computing a reproducible Canopy Health Index (CHI = 0.7×coverage + 0.3×greenness) with area-aware thresholds, GeoJSON overlays and Leaflet maps.",
    tech: ["Python", "Flask", "OpenCV", "Supabase", "React", "Leaflet", "TypeScript"],
    github: "https://github.com/Avi007-debug/Urban_Canopy_Health_Index_UCHI",
    highlight: "Deterministic CV · GeoJSON",
  },
  {
    title: "MoodVue",
    subtitle: "Real-Time Emotion Detection & Mood Tracking",
    description:
      "Hackathon project: webcam video → DeepFace + OpenCV → per-frame emotion labels → session analytics stored in Supabase. React frontend with live video sessions, Recharts mood trends and AI-driven relaxation suggestions.",
    tech: ["Python", "Flask", "DeepFace", "OpenCV", "React", "Supabase", "Docker"],
    github: "https://github.com/Avi007-debug/MoodVue",
  },
  {
    title: "NetChat",
    subtitle: "Multi-Mode Multithreaded Chat System",
    description:
      "Two POSIX-C servers (pthreads + shared memory / message queues / semaphores) plus a modern Node.js/Socket.IO web server with JWT auth, AES-256 encrypted messaging, chat rooms, private DMs and offline delivery.",
    tech: ["C", "POSIX", "Node.js", "Socket.IO", "JWT", "AES-256", "Express"],
    github: "https://github.com/Avi007-debug/Netchat",
  },
  {
    title: "SmartDrop",
    subtitle: "AI-Driven IoT Irrigation Prototype",
    description:
      "Arduino firmware interfaces soil-moisture sensors and Wi-Fi; Python ML artifacts (.pkl) power irrigation decision logic at the gateway; repo ships firmware, dataset and model artifacts for field deployment.",
    tech: ["Arduino", "C++", "Python", "IoT", "ML", "scikit-learn"],
    github: "https://github.com/Avi007-debug/SmartDrop-AI-Driven-Irrigation",
  },
  {
    title: "CivicEye",
    subtitle: "Civic-Tech Accountability Platform",
    description:
      "Civic-tech platform for tracking public service responsiveness with reporting workflows and data visualization.",
    tech: ["Python", "React", "PostgreSQL"],
    github: "https://github.com/Avi007-debug/CivicEye",
  },
];

const ProjectCard = ({ project, index, isFeatured = false }: { project: Project; index: number; isFeatured?: boolean }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-6, 6]), { stiffness: 300, damping: 30 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className="glass-card p-6 group flex flex-col relative overflow-hidden cursor-default h-full"
    >
      {/* Gradient hover shimmer */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[inherit]"
        style={{ background: "linear-gradient(135deg, hsl(var(--neon-blue) / 0.07), transparent 50%, hsl(var(--neon-violet) / 0.07))" }}
      />
      <div className="absolute inset-[-1px] rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, hsl(var(--neon-blue) / 0.4), transparent, hsl(var(--neon-violet) / 0.3))",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      {/* Header row */}
      <div className="flex items-start justify-between mb-2 relative z-10 gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-0.5">
            <h3 className={`font-bold text-foreground group-hover:text-accent transition-colors heading-font ${isFeatured ? "text-lg" : "text-base"}`}>
              {project.title}
            </h3>
            {project.highlight && (
              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20 whitespace-nowrap">
                {project.highlight}
              </span>
            )}
          </div>
          <p className="text-xs text-muted-foreground">{project.subtitle}</p>
        </div>
        {/* Action links */}
        <div className="flex items-center gap-1 flex-shrink-0">
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer"
              className="p-1.5 rounded-md text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all"
              title="Live Demo"
            >
              <Globe className="w-4 h-4" />
            </a>
          )}
          <a href={project.github} target="_blank" rel="noreferrer"
            className="p-1.5 rounded-md text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all"
            title="GitHub"
          >
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-secondary-foreground mb-4 flex-1 leading-relaxed relative z-10">
        {project.description}
      </p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-1.5 relative z-10">
        {project.tech.map((t) => (
          <span key={t} className="tech-badge text-[10px] px-2 py-1">{t}</span>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => (
  <SectionWrapper id="projects">
    <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
      <h2 className="section-heading mb-0">
        <span className="gradient-text">Featured</span> Projects
      </h2>
      <a
        href="https://github.com/Avi007-debug"
        target="_blank"
        rel="noreferrer"
        className="btn-outline flex items-center gap-2 text-xs"
      >
        <Github className="w-3.5 h-3.5" /> View All on GitHub
      </a>
    </div>

    <div className="grid md:grid-cols-2 gap-6 mb-16">
      {featured.map((p, i) => (
        <ProjectCard key={p.title} project={p} index={i} isFeatured />
      ))}
    </div>

    <h3 className="text-2xl font-bold mb-8 text-foreground heading-font">More Projects</h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {additional.map((p, i) => (
        <ProjectCard key={p.title} project={p} index={i} />
      ))}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
