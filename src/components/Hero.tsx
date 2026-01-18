import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      {/* Background effects */}
      <div className="hero-glow absolute inset-0" />
      <div className="grid-pattern absolute inset-0 opacity-30" />
      
      {/* Floating orbs */}
      <div className="absolute left-1/4 top-1/3 h-64 w-64 animate-float rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-1/4 top-1/2 h-48 w-48 animate-float rounded-full bg-cyan-500/10 blur-3xl" style={{ animationDelay: '-2s' }} />

      <div className="container relative mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center">
        {/* Badge */}
        <div className="mb-8 animate-fade-up opacity-0" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <Zap className="h-4 w-4" />
            <span>99.99% Uptime Guaranteed</span>
          </div>
        </div>

        {/* Main headline */}
        <h1 className="mb-6 max-w-4xl animate-fade-up text-4xl font-black leading-tight opacity-0 sm:text-5xl md:text-6xl lg:text-7xl" style={{ animationDelay: '0.2s' }}>
          <span className="text-balance">
            Reliable Compute for{" "}
            <span className="gradient-text">Modern Infrastructure</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mb-10 max-w-2xl animate-fade-up text-lg text-muted-foreground opacity-0 sm:text-xl" style={{ animationDelay: '0.3s' }}>
          Deploy lightning-fast VPS instances in seconds. Enterprise-grade performance with NVMe storage, dedicated vCPUs, and global data centers.
        </p>

        {/* CTA buttons */}
        <div className="flex animate-fade-up flex-col items-center gap-4 opacity-0 sm:flex-row" style={{ animationDelay: '0.4s' }}>
          <Button variant="hero" size="xl">
            Deploy Your Server
            <ArrowRight className="ml-1 h-5 w-5" />
          </Button>
          <Button variant="heroOutline" size="xl">
            View Pricing
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid animate-fade-up grid-cols-2 gap-8 opacity-0 md:grid-cols-4" style={{ animationDelay: '0.5s' }}>
          {[
            { value: "50K+", label: "Active Servers" },
            { value: "99.99%", label: "Uptime SLA" },
            { value: "12", label: "Global Regions" },
            { value: "24/7", label: "Expert Support" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-foreground sm:text-4xl">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
