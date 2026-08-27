# IPsec Sentinel Hub

Website Generation Prompt — SIH 26160

Copy everything below into your AI website builder (v0, Claude, Cursor, Lovable, etc.)

Build a professional, production-grade landing/showcase website for a cybersecurity + AI hackathon project called "IPsec Sentinel" — an AI-Powered IPsec VPN Protocol Analyzer and Security Assessment Framework, built for Smart India Hackathon 2026 (Problem Statement 26160, NTRO, Theme: Blockchain & Cybersecurity).

Hard constraint: this must NOT look like a generic AI-generated template. No generic centered hero with a gradient blob and a bold headline + two buttons layout, no default shadcn card grid, no stock "rocket ship" or "AI brain" iconography, no purple-to-pink gradient clichés. Design like a real cybersecurity/threat-intelligence product (think: Wiz, Cloudflare Radar, Shodan, CrowdStrike, Censys) — dark, technical, data-dense, confident. Every section should feel intentional, not templated.

Visual Direction

Palette: deep navy/near-black base (#0A0E1A – #0F1729), electric teal (#0E7C7B / #14B8A6) as the primary accent, muted slate greys for body text, a sparing warning-red accent (#C0392B) reserved only for "risk/vulnerability" states. Avoid default Tailwind indigo/violet.

Typography: a technical sans (Inter, Space Grotesk, or IBM Plex Sans) for UI text, paired with a monospace (JetBrains Mono / IBM Plex Mono) for anything representing data, code, hashes, packet fields, or scores — this is what makes it feel like a real security tool instead of a marketing site.

Texture, not flatness: subtle grid/dot background patterns, faint network-topology line art, thin 1px borders on cards (not heavy shadows), low-opacity scanlines or noise — restrained, not busy.

Required Sections & Unique Animation Ideas (not generic fade-ins)

Hero — headline + subheadline + CTA, but behind/around it render an animated, slowly drifting packet-flow / network-graph visualization (nodes = VPN endpoints, animated dashed lines = encrypted tunnels pulsing with data). Not a static image — actual canvas/SVG animation (Framer Motion or a lightweight D3/canvas loop).

Live "Security Score" gauge — an animated circular gauge/dial that counts up from 0 to a score (e.g. 0→42) on scroll-into-view, with color transitioning red→amber→teal as it climbs, and a small breakdown bar chart of rubric components animating in staggered.

"Zero-Decryption Classification" interactive demo strip — a horizontal timeline of encrypted packets (represented as abstract blocks of varying size/spacing) that visually "gets analyzed" — a scanning line sweeps across, and a label (VoIP / Video / Web / Email) fades in with a confidence percentage, on loop or on click.

Problem → Solution split — not a plain two-column; use a scroll-linked reveal where the "before" (manual packet inspection, black-box output) visually dissolves/glitches into the "after" (automated, explainable dashboard).

Feature grid (Tier 1 / Tier 2 / Tier 3 differentiators) — cards with a monospace "technique ID" tag (like ATT&CK-style IDs, e.g. WOW-01), hover state that reveals a one-line technical detail via a smooth height/opacity expand, not a generic lift-and-shadow hover.

Architecture diagram section — an animated 5-layer pipeline (Testbed → Capture → AI Engine → Scoring → Dashboard) where each stage lights up sequentially on scroll, connected by an animated flowing line (like current flowing through a circuit), built in SVG with stroke-dashoffset animation.

Tech stack — a clean logo/wordmark strip in monospace, grouped by layer, not generic icon cards.

Execution roadmap — a horizontal (desktop) / vertical (mobile) timeline of the 8 build phases, each node expandable to show phase objective + key deliverable, connected by a progress line that animates/fills on scroll.

Team — minimal, role-tag based (monospace role labels like > NETWORK_ENGINEER), no cheesy circular headshots-on-gradient-cards look.

Footer/CTA — link placeholders for GitHub repo, demo video, and technical documentation.

Interaction & Motion Principles

Use scroll-triggered reveals sparingly and with purpose — animate what represents data changing state (score climbing, classification resolving, pipeline lighting up), not just "fade up on scroll" for every div.

Respect prefers-reduced-motion.

Micro-interactions: monospace counters, blinking cursor accents on terminal-style text, subtle 1px border-glow on interactive elements on hover (not big drop shadows).

Keep animations fast and purposeful (150–400ms for UI, longer for the ambient background network animation) — nothing should feel laggy or gimmicky.

Technical Requirements

Next.js + TypeScript + Tailwind CSS

Framer Motion for scroll/interaction animation; plain SVG/canvas (or a lightweight library) for the network-graph and pipeline animations — avoid heavy Three.js unless a background particle network is wanted, in which case keep it low-density and slow.

Fully responsive; dark mode is the only mode (no light/dark toggle needed).

Semantic HTML, accessible contrast ratios despite the dark palette, real alt text.

Component-based structure so each section above is its own component.

Content to Use

Use the actual project content: problem statement 26160 (NTRO, Blockchain & Cybersecurity theme), the five-layer architecture, the AI/ML methodology (deterministic IKE parsing + ML-based ESP traffic classification with SHAP explainability), the Tier 1–3 differentiator features (zero-decryption fingerprinting, XAI confidence scoring, policy simulator, attack-replay sandbox, PQC readiness index, blockchain-anchored audit trail, LLM analyst copilot, adversarial robustness testing, SIEM export), the tech stack, and the 8-phase execution roadmap — treat these as the real product copy, not placeholder lorem ipsum.

Build it so it looks like a well-funded cybersecurity startup's product page, not a hackathon student project page.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/64d05213-c5dc-4ce2-8e14-e3aee0be60de).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
