"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Basic",
    price: "$60",
    frequency: "/month",
    description: "Perfect for small businesses that need a consistent online presence.",
    features: [
      "Facebook management",
      "Regular posting",
      "Professionally designed graphics",
      "2 promotional videos per month",
    ],
    cta: "Choose Basic",
  },
  {
    name: "Standard",
    price: "$150",
    frequency: "/month",
    description: "Ideal for growing businesses ready to scale their engagement and reach.",
    features: [
      "Everything in Basic, plus:",
      "Instagram management",
      "Audience engagement & moderation",
      "Monthly analytics report",
      "Targeted ad campaign setup",
    ],
    cta: "Choose Standard",
    popular: true,
  },
  {
    name: "Premium",
    price: "$300",
    frequency: "/month",
    description: "Comprehensive management for established brands seeking maximum growth.",
    features: [
      "Everything in Standard, plus:",
      "Management of up to 4 platforms",
      "Weekly in-depth strategy calls",
      "Advanced content creation",
      "Dedicated account manager",
    ],
    cta: "Choose Premium",
  },
];

const PricingTiersSection = () => {
  return (
    <section>
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
                <span className="ml-1 text-xl font-semibold text-muted-foreground">{tier.frequency}</span>
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

export default PricingTiersSection;