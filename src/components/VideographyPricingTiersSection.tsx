"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Social Media Reels",
    price: "$150",
    frequency: "/month",
    description: "Perfect for content creators and businesses needing consistent social media video content.",
    features: [
      "Up to 4 Short-Form Videos (Reels/TikToks)",
      "Concept & Script Writing",
      "Copyright-Safe Music",
      "Optimized for IG, TikTok, YouTube Shorts",
      "Monthly Content Strategy Call",
    ],
    cta: "Get Started",
  },
  {
    name: "Corporate & Brand Video",
    price: "$400",
    frequency: "per video",
    description: "Ideal for promotional content, business profiles, and commercial spots.",
    features: [
      "Up to 2-Minute Final Video",
      "In-depth Script Writing & Storyboarding",
      "Professional On-site Filming (Half-Day)",
      "Custom Sound Design",
      "Advanced Color Grading & Editing",
    ],
    cta: "Choose This Package",
    popular: true,
  },
  {
    name: "Premium Production",
    price: "Custom Quote",
    frequency: "",
    description: "For high-end projects requiring advanced production for big screens and unique displays.",
    features: [
      "Everything in Corporate, plus:",
      "Multi-Day Shoots",
      "Advanced VFX & Animation",
      "Custom Musical Score",
      "Delivery for Big Screens & Anamorphic 3D",
      "Dedicated Producer",
    ],
    cta: "Contact Us",
  },
];

const VideographyPricingTiersSection = () => {
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

export default VideographyPricingTiersSection;