import { motion } from "framer-motion";
import NetworkCanvas from "../components/NetworkCanvas";
import { meta } from "../content";

const TELEMETRY = [
  ["tunnels_observed", "128"],
  ["ike_findings", "37"],
  ["esp_flows_classified", "9,412"],
  ["decryption_required", "none"],
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.55]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 scanlines" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <NetworkCanvas />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-base-900"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 border border-line bg-base-850/70 px-3 py-1.5 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 animate-blink bg-signal-300" />
          <span className="font-mono text-[11px] tracking-wider text-slateish-400">
            {meta.event} · {meta.ps} · {meta.org} · {meta.theme}
          </span>
        </motion.div>

        <div className="mt-7 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl text-[2.1rem] leading-[1.06] font-semibold md:text-6xl"
            >
              Audit an IPsec tunnel
              <br />
              <span className="text-signal-300">without ever holding the keys.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-slateish-400 md:text-base"
            >
              {meta.name} parses IKEv1/IKEv2 negotiations deterministically, classifies encrypted ESP
              traffic with explainable machine learning, and returns a defensible 0–100 security
              posture score — with SHAP evidence behind every verdict.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#assessment"
                className="bg-signal-500 px-5 py-2.5 font-mono text-sm text-white transition-colors duration-200 hover:bg-signal-400"
              >
                run_assessment()
              </a>
              <a
                href="#architecture"
                className="border border-line px-5 py-2.5 font-mono text-sm text-slateish-300 transition-shadow duration-200 hover:glow-edge"
              >
                inspect_architecture
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="hairline bg-base-850/80 backdrop-blur"
          >
            <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
              <span className="font-mono text-[11px] tracking-wider text-slateish-500">
                sentinel@ntro:~/live
              </span>
              <span className="font-mono text-[11px] text-signal-300">STREAMING</span>
            </div>
            <dl className="divide-y divide-line">
              {TELEMETRY.map(([k, v]) => (
                <div key={k} className="flex items-center justify-between px-4 py-3">
                  <dt className="font-mono text-[11px] tracking-wide text-slateish-500">{k}</dt>
                  <dd className="font-mono text-sm text-slateish-100">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="border-t border-line px-4 py-3 font-mono text-[11px] text-slateish-400">
              <span className="text-signal-300">$</span> analyze --pcap lab/tunnel-04.pcap --explain
              <span className="ml-1 inline-block h-3 w-1.5 translate-y-[2px] animate-blink bg-signal-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
