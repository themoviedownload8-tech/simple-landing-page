import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  github: string;
  featured?: boolean;
}

const featured: Project[] = [
  {
    title: "CatchUpX",
    subtitle: "AI Powered Personalized Learning Platform",
    description: "AI-powered personalized learning system that generates lessons and study plans using AWS Bedrock.",
    tech: ["React", "TypeScript", "AWS Lambda", "AWS Bedrock", "Supabase"],
    github: "https://github.com/Avi007-debug/catchupx",
    featured: true,
  },
  {
    title: "SmartSecure",
    subtitle: "AI Driven Intrusion Detection System",
    description: "Real-time network intrusion detection system using packet capture, flow aggregation and machine learning classifiers with explainability.",
    tech: ["Python", "FastAPI", "Scapy", "Scikit-Learn", "React"],
    github: "https://github.com/Avi007-debug/SmartSecure",
    featured: true,
  },
  {
    title: "NetChat",
    subtitle: "Real-Time Network Chat System",
    description: "Real-time network chat application enabling seamless communication between connected users.",
    tech: ["Python", "Sockets", "Networking"],
    github: "https://github.com/Avi007-debug",
    featured: true,
  },
  {
    title: "SmartDrop",
    subtitle: "AI Driven IoT Irrigation System",
    description: "IoT-based irrigation prototype combining sensors, microcontrollers and machine learning models.",
    tech: ["Arduino", "IoT", "Python", "Machine Learning"],
    github: "https://github.com/Avi007-debug/SmartDrop-AI-Driven-Irrigation",
    featured: true,
  },
];

const additional: Project[] = [
  {
    title: "SmartStay",
    subtitle: "AI Powered PG Platform",
    description: "Full-stack platform with AI-powered recommendations, sentiment analysis, hidden charge detection and real-time chat.",
    tech: ["React", "TypeScript", "Flask", "Supabase", "Groq AI"],
    github: "https://github.com/Avi007-debug/SmartStay",
  },
  {
    title: "Urban Canopy Health Index",
    subtitle: "Vegetation Analysis",
    description: "Computer vision pipeline to analyze urban vegetation health from RGB satellite imagery.",
    tech: ["Python", "OpenCV", "Flask", "React", "Leaflet"],
    github: "https://github.com/Avi007-debug/Urban_Canopy_Health_Index_UCHI",
  },
  {
    title: "MoodVue",
    subtitle: "Real-Time Emotion Detection",
    description: "Real-time facial emotion detection using OpenCV and DeepFace with mood analytics dashboard.",
    tech: ["Python", "Flask", "OpenCV", "DeepFace", "React"],
    github: "https://github.com/Avi007-debug/MoodVue",
  },
  {
    title: "CivicEye",
    subtitle: "Civic Tech Platform",
    description: "Civic-tech project for tracking public service responsiveness.",
    tech: ["Python", "React"],
    github: "https://github.com/Avi007-debug/CivicEye",
  },
  {
    title: "GoodGear",
    subtitle: "E-Commerce UI",
    description: "Frontend-focused e-commerce UI emphasizing component design and UX.",
    tech: ["JavaScript", "CSS"],
    github: "https://github.com/Avi007-debug/GoodGear",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className="glass-card p-6 group flex flex-col relative overflow-hidden cursor-default"
    >
      {/* Animated gradient border glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[inherit]"
        style={{
          background: "linear-gradient(135deg, hsl(var(--neon-blue) / 0.08), transparent 50%, hsl(var(--neon-violet) / 0.08))",
        }}
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

      <div className="flex items-start justify-between mb-2 relative z-10">
        <div>
          <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors heading-font">
            {project.title}
          </h3>
          <p className="text-xs text-muted-foreground">{project.subtitle}</p>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground hover:text-accent transition-colors p-1"
        >
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>

      <p className="text-sm text-secondary-foreground mb-4 flex-1 leading-relaxed relative z-10">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 relative z-10">
        {project.tech.map((t) => (
          <span key={t} className="tech-badge">{t}</span>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => (
  <SectionWrapper id="projects">
    <h2 className="section-heading">
      <span className="gradient-text">Featured</span> Projects
    </h2>

    <div className="grid md:grid-cols-2 gap-6 mb-16">
      {featured.map((p, i) => (
        <ProjectCard key={p.title} project={p} index={i} />
      ))}
    </div>

    <h3 className="text-2xl font-bold mb-8 text-foreground heading-font">More Projects</h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {additional.map((p, i) => (
        <ProjectCard key={p.title} project={p} index={i} />
      ))}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
