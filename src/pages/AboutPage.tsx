import { motion } from 'framer-motion';
import { Database, Cpu, Shield, Layers, GitBranch, Zap } from 'lucide-react';

const stack = [
  { icon: Database, title: 'Hybrid RAG', desc: 'Dense + sparse retrieval across medical, drug, disease, and nutrition knowledge bases' },
  { icon: Cpu, title: 'Multi-Agent Pipeline', desc: 'Tool agent routes queries to specialized tools: drug interactions, risk prediction, reminders' },
  { icon: Shield, title: 'Safety Layer', desc: 'Emergency detection, clinical disclaimers, and fallback handling for out-of-scope queries' },
  { icon: Layers, title: 'Vector Store', desc: 'ChromaDB-powered vector database with medical embeddings for semantic search' },
  { icon: GitBranch, title: 'Conversation Memory', desc: 'Context-aware retrieval using conversation history for follow-up questions' },
  { icon: Zap, title: 'FastAPI Backend', desc: 'High-performance REST API with health checks, prediction, and interaction endpoints' },
];

export default function AboutPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-1 overflow-y-auto relative z-10"
    >
      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            <span className="text-gradient">About</span>{' '}
            <span className="text-foreground">MedAssist AI</span>
          </h1>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
            An AI-powered medical assistant built with hybrid retrieval-augmented generation,
            multi-agent orchestration, and clinical health tools for intelligent healthcare insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {stack.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -3 }}
              className="glass rounded-2xl p-6 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-4 group-hover:glow-primary transition-shadow">
                <s.icon size={18} className="text-primary" />
              </div>
              <h3 className="text-foreground font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground text-xs">
            ⚠️ This is an AI assistant for informational purposes only. Always consult a qualified healthcare professional for medical advice.
          </p>
        </motion.div>
      </div>
    </motion.main>
  );
}
