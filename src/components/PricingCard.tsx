"use client";

import React from "react";

const PricingCard = () => {
  return (
    <div className="relative z-10 w-full mt-16 rounded-xl bg-menubar/10 p-8 text-left text-white shadow-outer-glass backdrop-blur-3xl border border-menubar-border/15 shadow-inner-glass-bottom shadow-inner-glass-stroke supports-[backdrop-filter]:bg-menubar/10">
      <h2 className="text-4xl font-thin mb-4">Plans and prices</h2>
      <p className="text-lg opacity-90 mb-6">
        Explore packages tailored for modern business online operation and reaching more customers and branding
      </p>
      <p className="text-2xl font-semibold text-lime-neon">from $60/month</p>
    </div>
  );
};

export default PricingCard;