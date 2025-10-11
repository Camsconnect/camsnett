"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter Site",
    price: "$80",
    frequency: "one-time",
    description: "Perfect for portfolios, landing pages, and small businesses.",
    features: [
      "Up to 3 Pages",
      "Responsive Design",
      "Domain Registration",
      "Basic Security",
      "Up to 10 Custom Emails",
      "Contact Form",
      "Basic SEO Setup",
      "3 Days Delivery",
    ],
    cta: "Get Started",
  },
  {
    name: "Business Site",
    price: "$250",
    frequency: "one-time",
    description: "Ideal for growing businesses needing more features and content.",
    features: [
      "Everything in Starter, plus:",
      "Up to 6 Pages",
      "Unlimited Custom Emails",
      "Content Management System (CMS)",
      "Blog Integration",
      "1 Week Delivery",
    ],
    cta: "Choose Business",
    popular: true,
  },
  {
    name: "E-commerce Store",
    price: "$500+",
    frequency: "starting from",
    description: "A complete online store to sell your products and services.",
    features: [
      "Everything in Business, plus:",
      "Full E-commerce Functionality",
      "Payment Gateway Integration",
      "Product & Inventory Management",
      "2-3 Weeks Delivery",
    ],
    cta: "Contact Us",
  },
];

const WebDesignPricingTiersSection = () => {
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

export default WebDesignPricingTiersSection;