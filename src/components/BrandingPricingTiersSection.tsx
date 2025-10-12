"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Logo & Brand Identity",
    price: "$150",
    frequency: "one-time",
    description: "Establish a strong visual foundation for your brand.",
    features: [
      "3 Custom Logo Concepts",
      "Full Color Palette",
      "Typography Selection",
      "Final Logo Files (Vector, PNG, JPG)",
      "Brand Style Guide (1-page)",
    ],
    cta: "Get Started",
  },
  {
    name: "Corporate Kit",
    price: "$250",
    frequency: "one-time",
    description: "A complete stationery package for a professional brand image.",
    features: [
      "Everything in Brand Identity, plus:",
      "Business Card Design",
      "Letterhead Design",
      "Email Signature Design",
      "Printing & Delivery Included",
    ],
    cta: "Choose This Kit",
    popular: true,
  },
  {
    name: "Complete Branding Package",
    price: "$500+",
    frequency: "starting from",
    description: "The ultimate solution for a cohesive brand presence across all platforms.",
    features: [
      "Everything in Corporate Kit, plus:",
      "Social Media Kit (Profile & Banner Images)",
      "Comprehensive Brand Guidelines Document",
      "Up to 5 Custom Marketing Templates",
      "Dedicated Brand Strategist",
    ],
    cta: "Contact Us",
  },
];

const BrandingPricingTiersSection = () => {
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

export default BrandingPricingTiersSection;