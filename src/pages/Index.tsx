import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-border">
        <span className="text-xl font-bold text-foreground tracking-tight">Acme</span>
        <Button variant="outline" size="sm">Get Started</Button>
      </nav>

      {/* Hero */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-2xl text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            Build something<br />
            <span className="text-primary">amazing today</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            A clean starting point for your next great idea. Simple, fast, and ready to grow.
          </p>
          <div className="flex gap-3 justify-center pt-2">
            <Button size="lg">
              Start Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-muted-foreground border-t border-border">
        © 2026 Acme. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
