import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, Heart } from "lucide-react";

const links = [
  { icon: Github, href: "https://github.com/Avi007-debug", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/avishkarmore/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:avimore088@gmail.com", label: "Email" },
  { icon: FileText, href: "https://drive.google.com/drive/folders/11JnB3OYwSR079ygyBRRkkCCn3GJEk7r4?usp=sharing", label: "Resume" },
];

const Footer = () => (
  <footer className="border-t border-border/40 py-12 px-6 bg-background">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col items-center gap-6">
        <motion.a
          href="#"
          className="text-2xl font-black gradient-text mono tracking-tight"
          whileHover={{ scale: 1.06 }}
        >
          AM
        </motion.a>

        <div className="flex items-center gap-3">
          {links.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={label}
              whileHover={{ y: -3, scale: 1.12 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 rounded-lg border border-border/50 text-muted-foreground hover:text-accent hover:border-accent/40 transition-all duration-200"
            >
              <Icon className="w-4 h-4" />
            </motion.a>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center gap-3 text-center">
          <p className="text-sm text-muted-foreground">© 2026 Avishkar More. All rights reserved.</p>
          <span className="hidden md:block text-muted-foreground/30">•</span>
          <p className="mono text-xs text-muted-foreground/60 flex items-center gap-1.5">
            Built with <Heart className="w-3 h-3 text-accent fill-accent" /> React, TailwindCSS &amp; Framer Motion
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;