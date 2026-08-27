import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/sentinel/Nav";
import { Hero } from "@/components/sentinel/Hero";
import { ProblemSolution } from "@/components/sentinel/ProblemSolution";
import { ScoreGauge } from "@/components/sentinel/ScoreGauge";
import { Classification } from "@/components/sentinel/Classification";
import { Features } from "@/components/sentinel/Features";
import { Architecture } from "@/components/sentinel/Architecture";
import { TechStack } from "@/components/sentinel/TechStack";
import { Roadmap } from "@/components/sentinel/Roadmap";
import { Team } from "@/components/sentinel/Team";
import { Footer } from "@/components/sentinel/Footer";

const TITLE = "IPsec Sentinel — AI IPsec VPN Protocol Analyzer";
const DESC =
  "AI-powered IPsec VPN protocol analyzer and security assessment framework: deterministic IKE parsing, zero-decryption ESP classification and explainable posture scoring. SIH 2026, PS 26160.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <ProblemSolution />
        <ScoreGauge />
        <Classification />
        <Features />
        <Architecture />
        <TechStack />
        <Roadmap />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
