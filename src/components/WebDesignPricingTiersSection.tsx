"use client";

import React from "react";
import PricingCard from "./PricingCard";

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
    <section className="py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tiers.map((tier) => (
          <PricingCard key={tier.name} {...tier} />
        ))}
      </div>
    </section>
  );
};

export default WebDesignPricingTiersSection;