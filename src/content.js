// Real project copy for SIH 2026 PS 26160 (NTRO — Blockchain & Cybersecurity).

export const meta = {
  name: "IPsec Sentinel",
  tagline: "AI-Powered IPsec VPN Protocol Analyzer & Security Assessment Framework",
  ps: "PS 26160",
  org: "NTRO",
  theme: "Blockchain & Cybersecurity",
  event: "Smart India Hackathon 2026",
};

export const scoreBreakdown = [
  { label: "IKE / Phase-1 hygiene", id: "SC-01", value: 34, max: 100 },
  { label: "ESP cipher & integrity suite", id: "SC-02", value: 51, max: 100 },
  { label: "Rekey & PFS discipline", id: "SC-03", value: 28, max: 100 },
  { label: "Authentication strength", id: "SC-04", value: 60, max: 100 },
  { label: "PQC readiness", id: "SC-05", value: 12, max: 100 },
];

export const classifications = [
  { label: "VoIP", confidence: 94.2, note: "20 ms cadence, 172 B payload mode" },
  { label: "Video", confidence: 88.7, note: "bursty MTU-filled frames, GOP periodicity" },
  { label: "Web", confidence: 91.5, note: "short request / long response asymmetry" },
  { label: "Email", confidence: 82.3, note: "sparse bidirectional, TLS-over-ESP idle gaps" },
];

export const features = [
  {
    tier: "Tier 1",
    id: "WOW-01",
    title: "Zero-decryption traffic fingerprinting",
    blurb: "Classify application traffic inside ESP tunnels without touching keys.",
    detail:
      "Packet-size, inter-arrival and directionality features feed a gradient-boosted classifier; no payload bytes are ever parsed, keeping analysis lawful and key-free.",
  },
  {
    tier: "Tier 1",
    id: "WOW-02",
    title: "XAI confidence scoring",
    blurb: "Every verdict ships with SHAP attributions, not a black-box label.",
    detail:
      "Per-flow SHAP values rank the exact features that drove a classification, so an analyst can defend or reject the model's call in a report.",
  },
  {
    tier: "Tier 1",
    id: "WOW-03",
    title: "Deterministic IKE parser",
    blurb: "Byte-exact IKEv1/IKEv2 SA payload decomposition.",
    detail:
      "Transform sets, DH groups, auth methods, lifetimes and NAT-T behaviour extracted deterministically — rule findings are reproducible, never probabilistic.",
  },
  {
    tier: "Tier 2",
    id: "WOW-04",
    title: "Policy simulator",
    blurb: "Re-score a tunnel against a proposed config before you deploy it.",
    detail:
      "Edit a virtual IPsec policy (AES-GCM-256, DH-21, 1 h rekey) and the rubric recomputes instantly, showing the delta in each scoring component.",
  },
  {
    tier: "Tier 2",
    id: "WOW-05",
    title: "Attack-replay sandbox",
    blurb: "Replay IKE downgrade, aggressive-mode and DoS captures safely.",
    detail:
      "Curated PCAP corpus is replayed against the analyzer in an isolated namespace to prove detections fire, with evidence timestamps retained.",
  },
  {
    tier: "Tier 2",
    id: "WOW-06",
    title: "PQC readiness index",
    blurb: "Quantifies exposure to a future quantum adversary.",
    detail:
      "Grades key exchange and auth against NIST PQC migration guidance (ML-KEM hybrid groups), flagging harvest-now-decrypt-later risk per tunnel.",
  },
  {
    tier: "Tier 3",
    id: "WOW-07",
    title: "Blockchain-anchored audit trail",
    blurb: "Findings hashed and anchored so reports are tamper-evident.",
    endpointNote: true,
    detail:
      "Each assessment's Merkle root is written to a permissioned ledger; verification recomputes the root from the stored evidence bundle.",
  },
  {
    tier: "Tier 3",
    id: "WOW-08",
    title: "LLM analyst copilot",
    blurb: "Ask the capture questions in plain language.",
    detail:
      "A retrieval layer over parsed SAs, findings and rubric output lets the copilot answer 'why did tunnel 4 score 28?' with cited evidence rows.",
  },
  {
    tier: "Tier 3",
    id: "WOW-09",
    title: "Adversarial robustness testing",
    blurb: "Padding and timing perturbations stress the classifier.",
    detail:
      "Traffic-shaping adversaries (packet padding, dummy injection, jitter) measure accuracy decay so we publish honest robustness bounds.",
  },
  {
    tier: "Tier 3",
    id: "WOW-10",
    title: "SIEM export",
    blurb: "Findings leave as structured events, not PDFs.",
    detail:
      "STIX 2.1 bundles plus CEF/ECS syslog output stream into Splunk, Wazuh or Elastic with stable finding IDs for correlation.",
  },
];

export const pipeline = [
  {
    id: "L1",
    name: "Testbed",
    detail: "strongSwan / libreswan peers, Docker network namespaces, deliberate weak & hardened policy pairs.",
  },
  {
    id: "L2",
    name: "Capture",
    detail: "tcpdump / Scapy taps, IKE_SA_INIT and ESP flow segmentation, session reassembly and metadata extraction.",
  },
  {
    id: "L3",
    name: "AI Engine",
    detail: "Deterministic IKE rule parser + gradient-boosted ESP classifier, SHAP explainer attached to every inference.",
  },
  {
    id: "L4",
    name: "Scoring",
    detail: "Weighted rubric across cipher suite, PFS, rekey, auth and PQC readiness — 0-100 with per-component evidence.",
  },
  {
    id: "L5",
    name: "Dashboard",
    detail: "Analyst console: tunnel inventory, findings, XAI panels, policy simulator, ledger-anchored report export.",
  },
];

export const stack = [
  {
    layer: "Testbed",
    items: ["strongSwan", "libreswan", "Docker", "netns", "tc / netem"],
  },
  {
    layer: "Capture & Parse",
    items: ["Scapy", "tcpdump", "PyShark", "dpkt"],
  },
  {
    layer: "AI / ML",
    items: ["scikit-learn", "XGBoost", "SHAP", "NumPy", "pandas"],
  },
  {
    layer: "Services",
    items: ["FastAPI", "PostgreSQL", "Redis", "Celery"],
  },
  {
    layer: "Interface",
    items: ["React", "TypeScript", "Tailwind", "D3", "Framer Motion"],
  },
  {
    layer: "Integrity & Egress",
    items: ["Hyperledger Fabric", "STIX 2.1", "CEF / ECS", "Splunk HEC"],
  },
];

export const roadmap = [
  { phase: "01", name: "Testbed bring-up", objective: "Stand up strongSwan peer pairs with weak/strong policy matrices.", deliverable: "Reproducible lab compose file + 12 policy profiles." },
  { phase: "02", name: "Capture corpus", objective: "Record labelled IKE and ESP traffic across all profiles.", deliverable: "Versioned PCAP dataset with per-flow ground truth." },
  { phase: "03", name: "IKE parser", objective: "Deterministic decomposition of IKEv1/IKEv2 SA payloads.", deliverable: "Parser library + rule findings with CVE/RFC citations." },
  { phase: "04", name: "ESP classifier", objective: "Train and validate zero-decryption traffic classification.", deliverable: "Model card, confusion matrix, cross-profile accuracy." },
  { phase: "05", name: "Explainability", objective: "Bind SHAP attributions to every inference path.", deliverable: "XAI panel API returning ranked feature contributions." },
  { phase: "06", name: "Scoring rubric", objective: "Codify the 0-100 assessment with weighted components.", deliverable: "Rubric spec + policy simulator recompute engine." },
  { phase: "07", name: "Console & integrity", objective: "Analyst dashboard, ledger anchoring, SIEM export paths.", deliverable: "React console + STIX/CEF exporters + anchored reports." },
  { phase: "08", name: "Adversarial hardening", objective: "Stress the model with padding/timing adversaries.", deliverable: "Robustness report with published accuracy bounds." },
];

export const team = [
  { role: "NETWORK_ENGINEER", scope: "IPsec testbed, policy matrices, capture taps" },
  { role: "ML_ENGINEER", scope: "Feature engineering, ESP classifier, SHAP explainability" },
  { role: "PROTOCOL_ANALYST", scope: "IKEv1/IKEv2 parsing, rule findings, RFC mapping" },
  { role: "BACKEND_ENGINEER", scope: "FastAPI services, scoring engine, SIEM export" },
  { role: "FRONTEND_ENGINEER", scope: "Analyst console, XAI panels, visualisation" },
  { role: "SECURITY_RESEARCHER", scope: "Attack replay, PQC readiness, adversarial testing" },
];
