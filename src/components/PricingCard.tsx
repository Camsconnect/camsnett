"use client";

import React from "react";

const PricingCard = () => {
  return (
    <div className="relative z-10 w-full mt-16 rounded-xl bg-card p-8 text-left text-foreground border shadow-sm">
      <h2 className="text-4xl font-thin mb-4">Plans and prices</h2>
      <p className="text-lg opacity-90 mb-6">
        Explore packages tailored for modern business online operation and
        reaching more customers and branding
      </p>
      <p className="text-2xl font-semibold text-lime-neon">from $60/month</p>
    </div>
  );
};

export default PricingCard;