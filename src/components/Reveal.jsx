import { motion } from "framer-motion";

// Restrained reveal: 8px rise + opacity, one pass, never on every child.
export default function Reveal({ children, delay = 0, y = 8, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.35, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
