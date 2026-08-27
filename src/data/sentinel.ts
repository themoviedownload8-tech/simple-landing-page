export const PROJECT = {
  name: "IPsec Sentinel",
  tagline: "AI-Powered IPsec VPN Protocol Analyzer & Security Assessment Framework",
  ps: "PS 26160",
  org: "NTRO",
  theme: "Blockchain & Cybersecurity",
  event: "Smart India Hackathon 2026",
};

export const SCORE_BREAKDOWN = [
  { label: "IKE_NEGOTIATION", value: 34, note: "IKEv1 aggressive mode permitted" },
  { label: "CRYPTO_SUITE", value: 41, note: "3DES / SHA-1 still in proposal set" },
  { label: "AUTH_METHOD", value: 28, note: "Static PSK, no certificate binding" },
  { label: "PFS_REKEY", value: 55, note: "DH group 14, 8h SA lifetime" },
  { label: "PQC_READINESS", value: 12, note: "No RFC 8784 / ML-KEM hybrid support" },
];

export const CLASSES = [
  { label: "VoIP", conf: 96.4, hint: "isochronous 20ms, 172B payload" },
  { label: "VIDEO", conf: 91.8, hint: "bursty GOP cadence, 1.4KB frames" },
  { label: "WEB", conf: 88.2, hint: "request/response asymmetry" },
  { label: "EMAIL", conf: 83.5, hint: "long idle, batched flush" },
];

export const FEATURES = [
  {
    tier: "TIER 1",
    id: "WOW-01",
    title: "Zero-Decryption Traffic Fingerprinting",
    blurb:
      "Classifies application traffic inside ESP tunnels without touching a single plaintext byte.",
    detail:
      "Gradient-boosted classifier over packet-size histograms, inter-arrival entropy and burst cadence — payload never decrypted, only timing/volume side-channel features.",
  },
  {
    tier: "TIER 1",
    id: "WOW-02",
    title: "XAI Confidence Scoring",
    blurb: "Every verdict ships with SHAP attributions, not a black-box number.",
    detail:
      "Per-prediction SHAP values ranked into an analyst-readable rationale: which feature moved the score, by how much, and the model's calibrated uncertainty band.",
  },
  {
    tier: "TIER 1",
    id: "WOW-03",
    title: "Deterministic IKE Parser",
    blurb: "Full IKEv1/IKEv2 handshake state machine with RFC-cited findings.",
    detail:
      "Parses SA proposals, transforms, NAT-T, auth payloads and notify codes; each weakness maps to an RFC clause and a CVSS-weighted rubric row.",
  },
  {
    tier: "TIER 2",
    id: "POL-04",
    title: "Policy Simulator",
    blurb: "Model a config change before you ship it to the tunnel.",
    detail:
      "What-if engine re-runs the scoring rubric against a mutated ipsec.conf / strongSwan policy and diffs the resulting posture delta.",
  },
  {
    tier: "TIER 2",
    id: "SBX-05",
    title: "Attack-Replay Sandbox",
    blurb: "Replays downgrade, PSK-crack and rekey-starvation scenarios safely.",
    detail:
      "Containerised testbed replays crafted IKE exchanges (aggressive-mode PSK capture, transform downgrade, DoS half-open flood) against an isolated responder.",
  },
  {
    tier: "TIER 2",
    id: "PQC-06",
    title: "PQC Readiness Index",
    blurb: "Quantifies how far a tunnel is from post-quantum safety.",
    detail:
      "Scores support for RFC 8784 PPKs and ML-KEM hybrid key exchange, weighted by SA lifetime and harvest-now-decrypt-later exposure window.",
  },
  {
    tier: "TIER 3",
    id: "LDG-07",
    title: "Blockchain-Anchored Audit Trail",
    blurb: "Tamper-evident evidence chain for every assessment run.",
    detail:
      "Merkle-root of each report anchored to a permissioned ledger; auditors verify integrity without access to the underlying capture.",
  },
  {
    tier: "TIER 3",
    id: "LLM-08",
    title: "LLM Analyst Copilot",
    blurb: "Ask the capture questions in plain language.",
    detail:
      "Retrieval-grounded copilot over parsed IKE state, findings and rubric rows — answers cite the exact packet index and RFC clause.",
  },
  {
    tier: "TIER 3",
    id: "ADV-09",
    title: "Adversarial Robustness Testing",
    blurb: "Stress-tests the classifier against padding and cover traffic.",
    detail:
      "Evaluates accuracy decay under packet padding, timing jitter injection and chaff flows to publish an honest robustness envelope.",
  },
  {
    tier: "TIER 3",
    id: "SIE-10",
    title: "SIEM Export Pipeline",
    blurb: "Findings land in the SOC, not in a PDF.",
    detail:
      "Emits ECS/CEF-normalised events with STIX indicators over syslog or HTTP to Splunk, Elastic and Wazuh.",
  },
];

export const PIPELINE = [
  {
    n: "01",
    name: "Testbed",
    desc: "strongSwan / libreswan tunnels across intentionally mis-configured topologies.",
  },
  {
    n: "02",
    name: "Capture",
    desc: "Passive tap; PCAP normalisation, flow reassembly and ESP/IKE demux.",
  },
  {
    n: "03",
    name: "AI Engine",
    desc: "Deterministic IKE parser + ML ESP classifier with SHAP explainability.",
  },
  {
    n: "04",
    name: "Scoring",
    desc: "Weighted rubric across crypto, auth, PFS and PQC into a 0–100 posture score.",
  },
  {
    n: "05",
    name: "Dashboard",
    desc: "Analyst console: findings, evidence, remediation and SIEM export.",
  },
];

export const STACK = [
  {
    layer: "CAPTURE",
    items: ["Scapy", "tshark", "libpcap", "strongSwan", "libreswan"],
  },
  { layer: "ANALYSIS", items: ["Python 3.12", "scikit-learn", "XGBoost", "SHAP", "NumPy"] },
  { layer: "SERVICE", items: ["FastAPI", "PostgreSQL", "Redis", "Celery", "Docker"] },
  { layer: "INTERFACE", items: ["React", "TypeScript", "Tailwind", "D3", "Recharts"] },
  { layer: "INTEGRITY", items: ["Hyperledger Fabric", "Merkle anchoring", "ECS / CEF", "STIX"] },
];

export const ROADMAP = [
  {
    p: "P1",
    name: "Testbed Bring-Up",
    obj: "Stand up reproducible IPsec topologies with seeded misconfigurations.",
    del: "Dockerised lab + 12 labelled scenarios",
  },
  {
    p: "P2",
    name: "Capture Layer",
    obj: "Deterministic PCAP ingestion and IKE/ESP demultiplexing.",
    del: "Normalised flow store",
  },
  {
    p: "P3",
    name: "IKE Parser",
    obj: "Full IKEv1/IKEv2 handshake state machine with RFC-mapped findings.",
    del: "Parser + finding taxonomy",
  },
  {
    p: "P4",
    name: "ESP Classifier",
    obj: "Train zero-decryption traffic classifier on side-channel features.",
    del: "Model card, ≥90% macro-F1",
  },
  {
    p: "P5",
    name: "Explainability",
    obj: "Wire SHAP attributions and calibrated confidence into every verdict.",
    del: "XAI rationale API",
  },
  {
    p: "P6",
    name: "Scoring Rubric",
    obj: "Formalise weighted posture score incl. PQC readiness index.",
    del: "Rubric spec v1.0",
  },
  {
    p: "P7",
    name: "Console & Integrations",
    obj: "Analyst dashboard, policy simulator, SIEM export, ledger anchoring.",
    del: "End-to-end demo build",
  },
  {
    p: "P8",
    name: "Hardening & Eval",
    obj: "Adversarial robustness sweep, performance profiling, documentation.",
    del: "Eval report + handover docs",
  },
];

export const TEAM = [
  { role: "NETWORK_ENGINEER", scope: "IPsec testbed, tunnel topologies, capture fidelity" },
  { role: "ML_ENGINEER", scope: "Feature engineering, classifier training, SHAP pipeline" },
  { role: "PROTOCOL_ANALYST", scope: "IKE state machine, RFC mapping, finding taxonomy" },
  { role: "BACKEND_ENGINEER", scope: "FastAPI services, job orchestration, data model" },
  { role: "FRONTEND_ENGINEER", scope: "Analyst console, visualisation, accessibility" },
  { role: "SECURITY_RESEARCHER", scope: "Attack replay, adversarial testing, PQC posture" },
];
