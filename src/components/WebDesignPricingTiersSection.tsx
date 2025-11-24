"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const tiers = [
  {
    name: "Starter Site",
    price: "$120",
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
    price: "$285",
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
    name: "AI-Powered Website",
    price: "$800+",
    frequency: "starting from",
    description: "A smart, automated platform designed to engage visitors and drive sales 24/7.",
    features: [
      "Everything in Business, plus:",
      "24/7 AI Customer Support Chatbot",
      "Automated Content Generation",
      "Smart User Personalization",
      "Full E-commerce (Optional)",
      "Advanced AI SEO & Analytics",
      "2-3 Weeks Delivery",
    ],
    cta: "Contact Us",
    highlight: true,
  },
];

const WebDesignPricingTiersSection = () => {
  return (
    <section id="pricing">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={`flex flex-col ${tier.popular ? "border-brand-neon border-2 shadow-lg" : ""} ${tier.highlight ? "border-purple-500 border-2 shadow-purple-200 shadow-lg" : ""}`}
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-2xl font-semibold flex items-center gap-2">
                  {tier.name}
                  {tier.highlight && <Sparkles className="h-5 w-5 text-purple-500 animate-pulse" />}
                </CardTitle>
              </div>
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
    </section>
  );
};

export default WebDesignPricingTiersSection;