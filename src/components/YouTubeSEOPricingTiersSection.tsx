"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const oneTimeTiers = [
  {
    name: "Basic Foundation",
    price: "$150",
    frequency: "one-time",
    description: "Essential setup for new channels to start on the right foot.",
    features: [
      "Channel Settings & Keywords Setup",
      "SEO-focused 'About' Section Rewrite",
      "Visual Consistency Check",
      "Upload Default Description Setup",
      "3 Days Delivery",
    ],
    cta: "Get Started",
  },
  {
    name: "Medium Overhaul",
    price: "$250",
    frequency: "one-time",
    description: "A deeper optimization for channels needing a performance boost.",
    features: [
      "Everything in Basic, plus:",
      "Competitor Audit (3 top competitors)",
      "Top 3 Video Overhaul (Titles, Tags, Descriptions)",
      "SEO-friendly Playlist Organization",
      "5 Days Delivery",
    ],
    cta: "Choose Medium",
    popular: true,
  },
  {
    name: "Premium AI Growth",
    price: "$600",
    frequency: "one-time",
    description: "The ultimate package with AI automation to put your growth on autopilot.",
    features: [
      "Everything in Medium, plus:",
      "Full Top 10 Video Overhaul (including Thumbnails)",
      "End-Screen & Comment Pinning Setup",
      "1 Animated Ad for Social Media",
      "AI Automation Setup (SEO, Posting, Trends)",
      "10-14 Days Delivery",
    ],
    cta: "Go Premium",
    highlight: true,
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {oneTimeTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`flex flex-col ${tier.popular ? "border-brand-neon border-2 shadow-lg" : ""} ${tier.highlight ? "border-purple-500 border-2 shadow-purple-200 shadow-lg" : ""}`}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-semibold flex items-center gap-2">
                  {tier.name}
                  {tier.highlight && <Sparkles className="h-5 w-5 text-purple-500 animate-pulse" />}
                </CardTitle>
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
                      <Check className={`h-5 w-5 mr-2 flex-shrink-0 mt-1 ${tier.highlight ? "text-purple-500" : "text-brand-neon"}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full mt-8 ${tier.popular ? "bg-brand-neon hover:bg-brand-neon/90 text-primary-foreground" : ""} ${tier.highlight ? "bg-purple-600 hover:bg-purple-700 text-white border-0" : ""}`}
                  variant={tier.popular || tier.highlight ? "default" : "outline"}
                >
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