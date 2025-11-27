"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const oneTimeTiers = [
  {
    name: "The Channel Foundation",
    price: "$197 - $297",
    frequency: "one-time",
    description: "Best for new channels or channels that have never been optimized.",
    features: [
      "Competitor Audit (3 top competitors)",
      "Channel Settings & Keywords Setup",
      "SEO-focused 'About' Section Rewrite",
      "Visual Consistency Check",
      "Upload Default Description Setup",
      "3 Days Delivery",
    ],
    cta: "Get Started",
  },
  {
    name: "The 'Deep Clean'",
    price: "$697",
    frequency: "one-time",
    description: "For established channels with views that have plateaued or dipped.",
    features: [
      "Everything in Foundation, plus:",
      "Top 10 Video Overhaul (Titles, Descriptions, Tags, Thumbnails)",
      "SEO-friendly Playlist Organization",
      "End-Screen Setup for Top 10 Videos",
      "Call-to-Action Comment Pinning",
      "7-10 Days Delivery",
    ],
    cta: "Choose This Package",
  },
];

const monthlyTiers = [
  {
    name: "The Standard Growth",
    price: "$500",
    frequency: "/month",
    description: "Ideal for weekly uploaders (1 video per week).",
    features: [
      "Keyword Strategy & Topics Provided",
      "Full Optimization for 4 Videos",
      "Click-worthy Titles",
      "SEO Descriptions with Timestamps",
      "Backend Tags & Hashtags",
      "2 Thumbnail Variations per Video",
      "Monthly Performance Report",
    ],
    cta: "Choose Standard",
    popular: true,
  },
  {
    name: "The Aggressive Growth",
    price: "$1,200",
    frequency: "/month",
    description: "For serious YouTubers (2 videos per week).",
    features: [
      "Full Optimization for 8 Videos",
      "Custom Thumbnails for all 8 Videos",
      "Community Management (First 20 comments)",
      "4 YouTube Shorts Repurposed",
      "Quarterly 30-min Strategy Call",
    ],
    cta: "Choose Aggressive",
  },
];

const YouTubeSEOPricingTiersSection = () => {
  return (
    <section id="pricing" className="space-y-12">
      <div>
        <h3 className="text-2xl font-semibold text-center mb-8">One-Time Optimization</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {oneTimeTiers.map((tier) => (
            <Card key={tier.name} className="flex flex-col">
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
                <Button className="w-full mt-8" variant="outline">
                  {tier.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-center mb-8">Monthly Management</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {monthlyTiers.map((tier) => (
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
      </div>
    </section>
  );
};

export default YouTubeSEOPricingTiersSection;