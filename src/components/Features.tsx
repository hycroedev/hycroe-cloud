import { Cpu, HardDrive, Globe, Shield, Gauge, Headphones } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Dedicated vCPUs",
    description: "High-performance AMD EPYC and Intel Xeon processors with guaranteed resources for your workloads.",
  },
  {
    icon: HardDrive,
    title: "NVMe SSD Storage",
    description: "Ultra-fast NVMe drives delivering up to 10x the speed of traditional SSDs for your data.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "12 strategically located data centers worldwide with sub-10ms latency to major markets.",
  },
  {
    icon: Shield,
    title: "DDoS Protection",
    description: "Enterprise-grade protection included free with every server, blocking attacks up to 10Tbps.",
  },
  {
    icon: Gauge,
    title: "Instant Deployment",
    description: "Launch your server in under 60 seconds with our automated provisioning system.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Expert engineers available around the clock via live chat, tickets, and phone.",
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-24">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Built for <span className="gradient-text">Performance</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Everything you need to run production workloads with confidence. No compromises.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-hover gradient-border group rounded-xl bg-card p-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
