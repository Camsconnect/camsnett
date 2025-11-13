"use client";

import React from "react";
import { CheckCircle, DollarSign } from "lucide-react";
import smeSalesImage from "@/assets/sme-sales-package.png";

const features = [
  {
    name: "Custom Invoice & Quote Templates",
    description: "Branded templates for professional financial communications.",
  },
  {
    name: "Digital Business Card Setup",
    description: "A modern, shareable digital card for easy networking.",
  },
  {
    name: "Service & Pricing Flier Design",
    description: "A beautifully designed flier to showcase what you offer.",
  },
  {
    name: "Payment Gateway Consultation",
    description: "Guidance on setting up online payments for your services.",
  },
];

const SmeSalesSection = () => {
  return (
    <section className="bg-gray-900 py-16 md:py-24 px-4 sm:px-8 md:px-12">
      <div className="bg-black/20 border border-white/10 rounded-xl overflow-hidden grid md:grid-cols-2 text-white">
        <div className="p-8 md:p-12">
          <DollarSign className="h-10 w-10 text-brand-neon mb-4" />
          <h2 className="text-3xl font-semibold mb-4">
            Equip Your Business for Sales
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Get the essential tools to manage your finances, present your
            services professionally, and make it easy for customers to pay you.
          </p>
          <ul className="space-y-4">
            {features.map((feature) => (
              <li key={feature.name} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-brand-neon mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">{feature.name}</h4>
                  <p className="text-sm text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative min-h-[300px] md:min-h-0">
          <img
            src={smeSalesImage}
            alt="Sales chart and financial icons"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SmeSalesSection;