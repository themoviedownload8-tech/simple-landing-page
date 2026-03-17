import { Shield, Activity, Radio } from 'lucide-react'

const navItems = ['Detection', 'Graph', 'Analytics', 'Threats', 'Audit']

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          <span className="font-mono text-sm font-semibold tracking-wider text-foreground">
            AEGIS<span className="text-primary">SHIELD</span>
          </span>
        </div>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <Radio className="h-3 w-3 animate-pulse text-safe" />
            <span className="font-mono text-[10px] text-safe">LIVE</span>
          </div>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    </nav>
  )
}
