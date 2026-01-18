import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$5",
    period: "/mo",
    description: "Perfect for development and testing",
    features: [
      "1 vCPU Core",
      "1 GB RAM",
      "25 GB NVMe SSD",
      "1 TB Transfer",
      "DDoS Protection",
      "99.9% Uptime SLA",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$20",
    period: "/mo",
    description: "Ideal for production workloads",
    features: [
      "4 vCPU Cores",
      "8 GB RAM",
      "160 GB NVMe SSD",
      "5 TB Transfer",
      "DDoS Protection",
      "99.99% Uptime SLA",
      "Priority Support",
      "Automated Backups",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$80",
    period: "/mo",
    description: "Maximum power for demanding apps",
    features: [
      "16 vCPU Cores",
      "32 GB RAM",
      "640 GB NVMe SSD",
      "10 TB Transfer",
      "DDoS Protection",
      "99.99% Uptime SLA",
      "24/7 Phone Support",
      "Daily Backups",
      "Dedicated Account Manager",
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
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            No hidden fees, no surprises. Pay only for what you use with predictable monthly billing.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`card-hover relative rounded-2xl p-8 ${
                plan.popular
                  ? "gradient-border glow-effect bg-card"
                  : "border border-border bg-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-gradient-to-r from-primary to-cyan-400 px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                className="w-full"
                size="lg"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Custom pricing note */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
          Need more resources?{" "}
          <a href="#" className="text-primary underline-offset-4 hover:underline">
            Contact us
          </a>{" "}
          for custom configurations and volume discounts.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
