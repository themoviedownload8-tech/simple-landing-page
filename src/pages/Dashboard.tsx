import { DetectionPanel } from '@/components/DetectionPanel'
import { PropagationGraph } from '@/components/graph/PropagationGraph'
import { TopSpreadersChart } from '@/components/charts/TopSpreadersChart'
import { ClusterDonutChart } from '@/components/charts/ClusterDonutChart'
import { ContainmentChart } from '@/components/charts/ContainmentChart'
import { SuperSpreaderTable } from '@/components/SuperSpreaderTable'
import { ContainmentPanel } from '@/components/ContainmentPanel'
import { AlertsPanel } from '@/components/AlertsPanel'
import { AuditLogPanel } from '@/components/AuditLogPanel'
import { BarChart3, Network, Shield } from 'lucide-react'

export function Dashboard() {
  return (
    <main className="mx-auto max-w-[1600px] space-y-4 p-4">
      {/* Top Row: Detection + Graph */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[380px_1fr]">
        {/* Left: Detection */}
        <div className="card-glass rounded-xl p-4">
          <div className="mb-3 flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            <span className="font-mono text-xs font-semibold text-foreground">CONTENT ANALYSIS</span>
          </div>
          <DetectionPanel />
        </div>

        {/* Right: Propagation Graph */}
        <div className="h-[500px]">
          <PropagationGraph />
        </div>
      </div>

      {/* Middle Row: Charts */}
      <div id="analytics" className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="card-glass rounded-xl p-4">
          <div className="mb-3 flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-primary" />
            <span className="font-mono text-xs font-semibold text-foreground">TOP SPREADERS</span>
          </div>
          <div className="h-48">
            <TopSpreadersChart />
          </div>
        </div>

        <div className="card-glass rounded-xl p-4">
          <div className="mb-3 flex items-center gap-2">
            <Network className="h-4 w-4 text-primary" />
            <span className="font-mono text-xs font-semibold text-foreground">CLUSTER DISTRIBUTION</span>
          </div>
          <div className="h-48">
            <ClusterDonutChart />
          </div>
        </div>

        <div className="card-glass rounded-xl p-4">
          <div className="mb-3 flex items-center gap-2">
            <Shield className="h-4 w-4 text-safe" />
            <span className="font-mono text-xs font-semibold text-foreground">CONTAINMENT IMPACT</span>
          </div>
          <div className="h-48">
            <ContainmentChart />
          </div>
        </div>
      </div>

      {/* Threat Table */}
      <div id="threats" className="card-glass rounded-xl p-4">
        <div className="mb-3 flex items-center gap-2">
          <BarChart3 className="h-4 w-4 text-threat" />
          <span className="font-mono text-xs font-semibold text-foreground">THREAT RANKING</span>
        </div>
        <SuperSpreaderTable />
      </div>

      {/* Bottom Row: Containment + Alerts + Audit */}
      <div id="audit" className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <ContainmentPanel />
        <AlertsPanel />
        <AuditLogPanel />
      </div>
    </main>
  )
}
