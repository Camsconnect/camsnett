"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Interior Visualization",
    price: "$800",
    frequency: "per room",
    description: "Photorealistic interior design visualization.",
    features: [
      "3D modeling of room layout",
      "Material and lighting design",
      "5 high-quality renders",
      "360° panorama view",
      "1 week delivery"
    ],
    cta: "Visualize Interior"
  },
  {
    name: "Architectural Exterior",
    price: "$2,500",
    frequency: "per building",
    description: "Complete exterior architectural visualization.",
    features: [
      "Full 3D building modeling",
      "Landscape integration",
      "Day and night renders",
      "4K resolution images",
      "Surrounding environment",
      "2 weeks delivery"
    ],
    cta: "Visualize Exterior",
    popular: true
  },
  {
    name: "VR Interactive Design",
    price: "$5,000+",
    frequency: "per project",
    description: "Immersive VR experience with Unreal Engine.",
    features: [
      "Full 3D environment modeling",
      "Real-time VR walkthrough",
      "Interactive design elements",
      "Multi-platform support (VR/AR/Desktop)",
      "Custom UI/UX integration",
      "Ongoing support and updates"
    ],
    cta: "Experience VR"
  }
];

const ArchitecturalVisualizationPricingTiersSection = () => {
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

export default ArchitecturalVisualizationPricingTiersSection;