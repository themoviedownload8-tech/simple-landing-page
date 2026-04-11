import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Brain, Shield, Zap, ArrowRight } from 'lucide-react';

const features = [
  { icon: Brain, title: 'Hybrid RAG', desc: 'Multi-source retrieval across drugs, diseases, and nutrition databases' },
  { icon: Shield, title: 'Safety Fallback', desc: 'Built-in guardrails with emergency detection and clinical disclaimers' },
  { icon: Zap, title: 'Multi-Agent', desc: 'Intelligent tool routing for drug interactions, risk prediction, and reminders' },
  { icon: MessageSquare, title: 'Context Memory', desc: 'Conversation-aware retrieval for seamless follow-up questions' },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-1 overflow-y-auto relative z-10"
    >
      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Hero */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-20 h-20 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl shadow-2xl shadow-primary/20"
          >
            🩺
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span className="text-gradient">Medical AI</span>
            <br />
            <span className="text-foreground">Assistant</span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Intelligent healthcare assistant powered by hybrid retrieval, multi-agent reasoning, and clinical health tools.
          </p>

          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 0 40px hsl(160 70% 40% / 0.3)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/chat')}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-base shadow-xl shadow-primary/20 transition-all"
          >
            Start Consultation
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -4, borderColor: 'hsl(160 70% 40% / 0.3)' }}
              className="glass rounded-2xl p-6 group cursor-default transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center mb-4 group-hover:glow-primary transition-shadow">
                <f.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-foreground font-semibold text-base mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
}
