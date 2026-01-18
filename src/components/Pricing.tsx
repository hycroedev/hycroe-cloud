import { Button } from "@/components/ui/button";
import { Check, ExternalLink, Cpu } from "lucide-react";

const plans = [
  {
    name: "UL-1",
    priceInr: "₹170",
    priceUsd: "$2",
    period: "/mo",
    features: [
      "8 GB RAM",
      "2 vCores",
      "50 GB NVMe",
      "AMD Ryzen 9 7900",
    ],
    popular: false,
  },
  {
    name: "UL-2",
    priceInr: "₹320",
    priceUsd: "$4",
    period: "/mo",
    features: [
      "16 GB RAM",
      "4 vCores",
      "100 GB NVMe",
      "AMD Ryzen 9 7900",
    ],
    popular: false,
  },
  {
    name: "UL-3",
    priceInr: "₹600",
    priceUsd: "$7",
    period: "/mo",
    features: [
      "32 GB RAM",
      "6 vCores",
      "200 GB NVMe",
      "AMD Ryzen 9 7900",
    ],
    popular: true,
  },
  {
    name: "XL-1",
    priceInr: "₹900",
    priceUsd: "$11",
    period: "/mo",
    features: [
      "48 GB RAM",
      "8 vCores",
      "350 GB NVMe",
      "AMD Ryzen 9 7900",
    ],
    popular: false,
  },
  {
    name: "XL-2",
    priceInr: "₹1200",
    priceUsd: "$15",
    period: "/mo",
    features: [
      "64 GB RAM",
      "12 vCores",
      "500 GB NVMe",
      "AMD Ryzen 9 7900",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-24">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <Cpu className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">AMD Ryzen 9 7900</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            High-Performance <span className="gradient-text">VPS Plans</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Suitable for websites, game servers, and heavy workloads. No hidden fees.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`card-hover relative rounded-2xl p-6 ${
                plan.popular
                  ? "gradient-border glow-effect bg-card"
                  : "border border-border bg-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-gradient-to-r from-primary to-cyan-400 px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Best Value
                  </span>
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
              </div>

              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{plan.priceInr}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {plan.priceUsd}{plan.period}
                </div>
              </div>

              <ul className="mb-6 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                className="w-full"
                size="default"
                asChild
              >
                <a href="https://discord.gg/w3gKgSsqH4" target="_blank" rel="noopener noreferrer">
                  Order Now
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Notes and links */}
        <div className="mt-12 space-y-4 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Note:</span> IPv4 not included. Add-ons available (IPv4, extra cores, extra storage).
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <a 
              href="https://vm.hycroe.fun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary hover:underline"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              VPS Control Panel
            </a>
            <span className="text-muted-foreground">•</span>
            <a 
              href="https://pve.hycroe.fun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary hover:underline"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Proxmox Panel
            </a>
            <span className="text-muted-foreground">•</span>
            <a 
              href="https://discord.gg/w3gKgSsqH4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary hover:underline"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Order on Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
