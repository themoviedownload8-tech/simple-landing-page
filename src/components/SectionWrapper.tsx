import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface Props {
  id: string;
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ id, children, className = "" }: Props) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} id={id} className={`relative py-24 px-6 overflow-hidden ${className}`}>
      {/* Subtle section divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <motion.div style={{ y, opacity }} className="max-w-6xl mx-auto relative z-10">
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
