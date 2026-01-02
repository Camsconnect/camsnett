"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter Automation",
    price: "$200",
    frequency: "one-time",
    description: "Perfect for small businesses getting started with automation.",
    features: [
      "Basic workflow setup (3 workflows)",
      "Integration with 2 platforms",
      "Email support",
      "Documentation",
      "1 week delivery"
    ],
    cta: "Get Started"
  },
  {
    name: "Agency Package",
    price: "$500",
    frequency: "one-time",
    description: "Comprehensive automation solution for agencies and growing businesses.",
    features: [
      "Everything in Starter, plus:",
      "Up to 10 custom workflows",
      "Integration with 5+ platforms",
      "AI-powered decision nodes",
      "Priority support",
      "2 weeks delivery"
    ],
    cta: "Choose Agency",
    popular: true
  },
  {
    name: "Enterprise Solution",
    price: "Custom",
    frequency: "",
    description: "Full-scale automation for complex business needs.",
    features: [
      "Unlimited workflows",
      "Advanced AI integrations",
      "Custom node development",
      "Dedicated support",
      "Real-time monitoring dashboard",
      "Ongoing maintenance"
    ],
    cta: "Contact Us"
  }
];

const N8nAutomationPricingTiersSection = () => {
  return (
    <section id="pricing">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={`flex flex-col ${tier.popular ? "border-brand-neon border-2 shadow-lg" : ""}`}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
              <div className="flex items-baseline pt-4">
                <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                {tier.frequency && (
                  <span className="ml-1 text-xl font-semibold text-muted-foreground">{tier.frequency}</span>
                )}
              </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <ul className="space-y-3 text-muted-foreground flex-grow">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-brand-neon mr-2 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full mt-8 ${tier.popular ? "bg-brand-neon hover:bg-brand-neon/90 text-primary-foreground" : ""}`}
                variant={tier.popular ? "default" : "outline"}
              >
                {tier.cta}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default N8nAutomationPricingTiersSection;