"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Standard Business App",
    price: "$300",
    frequency: "one-time",
    description: "A complete app solution for small to medium-sized businesses.",
    features: [
      "Custom UI/UX Design",
      "iOS & Android Compatible",
      "Core Functionality (e.g., user profiles, data entry)",
      "Basic Admin Panel",
      "App Store Submission Assistance",
      "3 Weeks Delivery",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise Solution",
    price: "Let's Talk",
    frequency: "",
    description: "For complex projects requiring advanced features and scalability.",
    features: [
      "Everything in Standard, plus:",
      "Advanced Feature Integration (e.g., payments, APIs)",
      "Scalable Backend Architecture",
      "In-depth Analytics & Reporting",
      "Dedicated Project Manager",
      "Ongoing Support & Maintenance",
    ],
    cta: "Contact Us",
  },
];

const BusinessAppPricingTiersSection = () => {
  return (
    <section id="pricing">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

export default BusinessAppPricingTiersSection;