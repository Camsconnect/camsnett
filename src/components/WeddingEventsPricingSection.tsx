"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Video } from "lucide-react";

const packages = [
  {
    name: "Half-Day Coverage",
    price: "$600",
    description: "Ideal for smaller weddings, ceremonies, or corporate events.",
    features: [
      "Up to 5 hours of on-site coverage",
      "1 professional videographer",
      "3-5 minute cinematic highlight reel",
      "Professionally edited with licensed music",
      "Digital delivery of final video",
    ],
    cta: "Book Now",
  },
  {
    name: "Full-Day Coverage",
    price: "$1200",
    description: "Capture every moment of your special day from start to finish.",
    features: [
      "Up to 10 hours of on-site coverage",
      "2 professional videographers",
      "8-10 minute cinematic feature film",
      "1-minute social media teaser trailer",
      "Full ceremony & speeches edit",
      "Drone footage (venue permitting)",
      "Digital delivery + USB keepsake",
    ],
    cta: "Book Now",
    popular: true,
  },
];

const WeddingEventsPricingSection = () => {
  return (
    <section id="weddings-events" className="text-center">
      <h2 className="text-3xl font-semibold mb-4 text-foreground flex items-center justify-center gap-3">
        <Video className="h-8 w-8" />
        Weddings & Events Coverage
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
        We specialize in capturing the magic of your most important moments. Our packages are designed to provide comprehensive coverage for your wedding, corporate function, or special event.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {packages.map((pkg) => (
          <Card
            key={pkg.name}
            className={`flex flex-col ${pkg.popular ? "border-brand-neon border-2 shadow-lg" : ""}`}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">{pkg.name}</CardTitle>
              <CardDescription>{pkg.description}</CardDescription>
              <div className="flex items-baseline pt-4">
                <span className="text-4xl font-bold tracking-tight">{pkg.price}</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <ul className="space-y-3 text-muted-foreground flex-grow">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-brand-neon mr-2 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full mt-8 ${pkg.popular ? "bg-brand-neon hover:bg-brand-neon/90 text-primary-foreground" : ""}`}
                variant={pkg.popular ? "default" : "outline"}
              >
                {pkg.cta}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default WeddingEventsPricingSection;