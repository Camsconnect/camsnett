"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Static 3D Model",
    price: "$500",
    frequency: "per model",
    description: "Ideal for product mockups, simple assets, and visualizations.",
    features: [
      "1 High-Quality 3D Model",
      "Basic Texturing & Lighting",
      "Up to 3 Rendered Images",
      "Commercial Use License",
      "1 Week Delivery",
    ],
    cta: "Get Started",
  },
  {
    name: "Animated Scene",
    price: "$1500",
    frequency: "starting from",
    description: "Perfect for short promotional animations, product demos, and logo reveals.",
    features: [
      "Everything in Static, plus:",
      "Up to 15 Seconds of Animation",
      "Custom Rigging",
      "Advanced Lighting & Rendering",
      "Sound Design & Music",
      "2-4 Weeks Delivery",
    ],
    cta: "Choose This Package",
    popular: true,
  },
  {
    name: "Custom 3D Project",
    price: "Let's Talk",
    frequency: "",
    description: "For complex projects like architectural walkthroughs, character animation, or VFX.",
    features: [
      "Full Project Scope Definition",
      "Advanced Character/Environment Design",
      "Complex Simulations & VFX",
      "Dedicated Project Management",
      "Custom Delivery Timeline",
    ],
    cta: "Contact Us",
  },
];

const ThreeDPricingTiersSection = () => {
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

export default ThreeDPricingTiersSection;