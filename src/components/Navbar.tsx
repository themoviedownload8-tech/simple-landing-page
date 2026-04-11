import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, MessageSquare, Info, Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  { to: '/', label: 'Home', icon: Activity },
  { to: '/chat', label: 'Chat', icon: MessageSquare },
  { to: '/about', label: 'About', icon: Info },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="relative z-50 flex items-center justify-between px-6 py-3 glass-strong"
    >
      <NavLink to="/" className="flex items-center gap-2.5 group">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-lg shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
          🩺
        </div>
        <span className="text-foreground font-bold text-lg tracking-tight hidden sm:block">
          Medical AI Assistant
        </span>
      </NavLink>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-1">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-primary/15 text-primary glow-primary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
              }`
            }
          >
            <l.icon size={16} />
            {l.label}
          </NavLink>
        ))}
      </div>

      {/* Mobile toggle */}
      <button
        className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 glass-strong rounded-b-2xl p-4 flex flex-col gap-1 md:hidden"
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-primary/15 text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                }`
              }
            >
              <l.icon size={18} />
              {l.label}
            </NavLink>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
