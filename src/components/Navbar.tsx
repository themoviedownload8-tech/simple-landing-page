import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, FileText } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Certs", href: "#certifications" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = navItems.map((n) => n.href.slice(1));

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.25, rootMargin: "-64px 0px -40% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl border-b border-border/50 bg-background/80 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-lg font-black gradient-text mono tracking-tight">AM</a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-5">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`text-xs font-medium uppercase tracking-wider transition-all duration-200 relative group ${
                  isActive ? "text-accent" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}

          {/* Theme toggle */}
          <motion.button
            onClick={toggle}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="p-2 rounded-lg border border-border/60 text-muted-foreground hover:text-accent hover:border-accent/40 transition-all duration-200"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </motion.button>

          <a
            href="https://drive.google.com/drive/folders/11JnB3OYwSR079ygyBRRkkCCn3GJEk7r4?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-xs px-4 py-2 flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" /> Resume
          </a>
        </div>

        {/* Mobile: theme + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <motion.button
            onClick={toggle}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-lg border border-border/60 text-muted-foreground hover:text-accent transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </motion.button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground p-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden backdrop-blur-xl bg-background/90 border-t border-border/50 px-6 py-4 space-y-3"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`block py-2 text-sm font-medium transition-colors ${
                  activeSection === item.href.slice(1) ? "text-accent" : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-border/30">
              <a
                href="https://drive.google.com/drive/folders/11JnB3OYwSR079ygyBRRkkCCn3GJEk7r4?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-xs px-4 py-2 inline-flex items-center gap-1.5"
                onClick={() => setMobileOpen(false)}
              >
                <FileText className="w-3.5 h-3.5" /> Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
