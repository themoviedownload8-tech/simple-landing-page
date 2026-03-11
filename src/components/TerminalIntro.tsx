import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const commands = [
  { cmd: "whoami", output: "Avishkar More" },
  { cmd: "cat role.txt", output: "Cybersecurity Engineering Student" },
  { cmd: "ls skills/", output: "AI  CV  IoT  Cybersecurity  FullStack" },
  { cmd: "echo $CGPA", output: "9.75 @ RV College of Engineering" },
  { cmd: "./status.sh", output: "⚡ Open to internships & research roles" },
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
            updated[idx] = { text: `❯ ${cmd.slice(0, currentChar)}`, isCommand: true, done: false };
            return updated;
          });
          setCurrentChar((c) => c + 1);
        }, 32 + Math.random() * 20);
        return () => clearTimeout(timeout);
      } else {
        setLines((prev) => {
          const updated = [...prev];
          updated[currentCmd * 2] = { text: `❯ ${cmd}`, isCommand: true, done: true };
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
      }, 180);
      return () => clearTimeout(timeout);
    }
  }, [currentCmd, currentChar, phase]);

  const isTyping = currentCmd < commands.length;

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="terminal-window rounded-xl overflow-hidden border border-white/5 shadow-2xl">
        {/* macOS-style title bar */}
        <div className="terminal-titlebar flex items-center gap-2 px-4 py-3 border-b border-white/5">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-default" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/80 hover:bg-yellow-400 transition-colors cursor-default" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-default" />
          </div>
          <span className="ml-auto mr-auto text-xs text-white/30 mono">avishkar@portfolio — zsh</span>
        </div>

        {/* Terminal body */}
        <div className="terminal-body p-5 mono text-sm space-y-2 min-h-[220px] max-h-[280px] overflow-y-auto">
          {lines.map((line, i) =>
            line ? (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={line.isCommand
                  ? "text-cyan-400 font-medium"
                  : "text-white/60 pl-4 border-l border-white/10"
                }
              >
                {line.text}
              </motion.div>
            ) : null
          )}
          {isTyping && (
            <span className="inline-block w-1.5 h-4 bg-cyan-400/80 animate-pulse rounded-sm ml-0.5" />
          )}
          {!isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-cyan-400/50 text-xs"
            >
              ❯ <span className="animate-pulse">_</span>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TerminalIntro;
