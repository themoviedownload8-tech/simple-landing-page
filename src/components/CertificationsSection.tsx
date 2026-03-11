import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { BadgeCheck, ExternalLink } from "lucide-react";

const certs = [
  {
    title: "Oracle Data Platform 2025 Certified Foundations Associate",
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=084C104EBF0BF50B96CD0A951E0CF91BFD7ED4F1A22F0A56000F90E3347DC655",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=453503E952833C909828DD47F8E97D716421243610E7589BE4142463219C071A",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=152541BD0FE6C77F29396920020B963C42EFDC97C5B73D72535B32417D39DC41",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=084C104EBF0BF50B96CD0A951E0CF91BA75630D6CE283BC9E823E4298DCA54D9",
  },
];

const CertificationsSection = () => (
  <SectionWrapper id="certifications">
    <h2 className="section-heading">
      <span className="gradient-text">Certifications</span>
    </h2>

    <div className="grid md:grid-cols-2 gap-4">
      {certs.map((cert, i) => (
        <motion.a
          key={i}
          href={cert.url}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          whileHover={{ y: -3, transition: { duration: 0.2 } }}
          className="glass-card p-5 flex items-center gap-4 group cursor-pointer"
        >
          <div className="p-2 rounded-lg bg-accent/10 flex-shrink-0">
            <BadgeCheck className="w-5 h-5 text-accent" />
          </div>
          <p className="text-sm text-foreground flex-1">{cert.title}</p>
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
        </motion.a>
      ))}
    </div>
  </SectionWrapper>
);

export default CertificationsSection;