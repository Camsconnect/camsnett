"use client";

import React from "react";
import PricingCard from "./PricingCard";

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
    <section className="py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tiers.map((tier) => (
          <PricingCard key={tier.name} {...tier} />
        ))}
      </div>
    </section>
  );
};

export default BrandingPricingTiersSection;