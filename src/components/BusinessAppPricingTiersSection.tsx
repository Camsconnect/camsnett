"use client";

import React from "react";
import PricingCard from "./PricingCard";

const tiers = [
  {
    name: "Standard Business App",
    price: "$300",
    frequency: "one-time",
    description: "A complete app solution for small to medium-sized businesses.",
    features: [
      "Custom UI/UX Design",
      "iOS & Android Compatible",
      "Core Functionality (e.g., user profiles, data entry)",
      "Basic Admin Panel",
      "App Store Submission Assistance",
      "3 Weeks Delivery",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise Solution",
    price: "Custom",
    frequency: "Quote",
    description: "For complex projects requiring advanced features and scalability.",
    features: [
      "Everything in Standard, plus:",
      "Advanced Feature Integration (e.g., payments, APIs)",
      "Scalable Backend Architecture",
      "In-depth Analytics & Reporting",
      "Dedicated Project Manager",
      "Ongoing Support & Maintenance",
    ],
    cta: "Contact Us",
  },
];

const BusinessAppPricingTiersSection = () => {
  return (
    <section className="py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {tiers.map((tier) => (
          <PricingCard key={tier.name} {...tier} />
        ))}
      </div>
    </section>
  );
};

export default BusinessAppPricingTiersSection;