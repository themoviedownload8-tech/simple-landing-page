import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const commands = [
  { cmd: "whoami", output: "Avishkar More" },
  { cmd: "role", output: "Cybersecurity Engineering Student" },
  { cmd: "focus", output: "AI | Systems | Cybersecurity | IoT | Computer Vision" },
  { cmd: "location", output: "Bangalore, India" },
  { cmd: "status", output: "Open to internships" },
];

const TerminalIntro = () => {
  const [lines, setLines] = useState<{ text: string; isCommand: boolean; done: boolean }[]>([]);
  const [currentCmd, setCurrentCmd] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [phase, setPhase] = useState<"cmd" | "output">("cmd");

  useEffect(() => {
    if (currentCmd >= commands.length) return;

    const { cmd, output } = commands[currentCmd];

    if (phase === "cmd") {
      if (currentChar <= cmd.length) {
        const timeout = setTimeout(() => {
          setLines((prev) => {
            const updated = [...prev];
            const idx = currentCmd * 2;
            updated[idx] = { text: `> ${cmd.slice(0, currentChar)}`, isCommand: true, done: false };
            return updated;
          });
          setCurrentChar((c) => c + 1);
        }, 50 + Math.random() * 40);
        return () => clearTimeout(timeout);
      } else {
        setLines((prev) => {
          const updated = [...prev];
          updated[currentCmd * 2] = { text: `> ${cmd}`, isCommand: true, done: true };
          return updated;
        });
        setPhase("output");
        setCurrentChar(0);
      }
    } else {
      const timeout = setTimeout(() => {
        setLines((prev) => {
          const updated = [...prev];
          updated[currentCmd * 2 + 1] = { text: output, isCommand: false, done: true };
          return updated;
        });
        setCurrentCmd((c) => c + 1);
        setPhase("cmd");
        setCurrentChar(0);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [currentCmd, currentChar, phase]);

  const isTyping = currentCmd < commands.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full max-w-xl mx-auto mb-8"
    >
      <div className="rounded-xl overflow-hidden border border-border/60" style={{ background: "hsl(222 47% 6% / 0.9)" }}>
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/40" style={{ background: "hsl(222 47% 8% / 0.8)" }}>
          <span className="w-3 h-3 rounded-full" style={{ background: "hsl(0 84% 60%)" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "hsl(45 93% 47%)" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "hsl(142 71% 45%)" }} />
          <span className="ml-3 text-xs text-muted-foreground mono">avishkar@portfolio ~ %</span>
        </div>

        {/* Terminal body */}
        <div className="p-4 mono text-sm space-y-1 min-h-[180px]">
          {lines.map((line, i) =>
            line ? (
              <div
                key={i}
                className={line.isCommand ? "text-accent" : "text-foreground/80"}
              >
                {line.text}
              </div>
            ) : null
          )}
          {isTyping && (
            <span className="inline-block w-2 h-4 bg-accent animate-pulse" />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TerminalIntro;
