"use client";

import React from "react";
import PricingCard from "./PricingCard";

const tiers = [
  {
    name: "Basic",
    price: "$100",
    frequency: "/month",
    description: "Perfect for small businesses that need a consistent online presence.",
    features: [
      "Facebook management",
      "Regular posting",
      "Professionally designed graphics",
      "2 promotional videos per month",
    ],
    cta: "Choose Basic",
  },
  {
    name: "Standard",
    price: "$180",
    frequency: "/month",
    description: "Ideal for growing businesses ready to scale their engagement and reach.",
    features: [
      "Everything in Basic, plus:",
      "Instagram & TikTok management",
      "Audience engagement & moderation",
      "Paid ad campaign management",
      "Full branding kit design (business cards, invoices, etc.)",
      "Monthly analytics report",
    ],
    cta: "Choose Standard",
    popular: true,
  },
  {
    name: "Premium",
    price: "$300",
    frequency: "/month",
    description: "Comprehensive management for established brands seeking maximum growth.",
    features: [
      "Everything in Standard, plus:",
      "Management of up to 4 platforms",
      "Weekly in-depth strategy calls",
      "Advanced content creation",
      "Dedicated account manager",
    ],
    cta: "Choose Premium",
  },
];

const PricingTiersSection = () => {
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

export default PricingTiersSection;