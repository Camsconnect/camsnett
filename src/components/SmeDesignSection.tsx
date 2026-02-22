"use client";

import React from "react";
import { CheckCircle, Palette } from "lucide-react";
import smeDesignImage from "@/assets/sme-design-package.png";

const features = [
  {
    name: "Custom Logo Design",
    description: "A unique logo that captures the essence of your brand.",
  },
  {
    name: "Business Card & Letterhead",
    description: "Professional stationery to make a lasting impression.",
  },
  {
    name: "Social Media Kit",
    description: "Branded profile pictures and banners for your social channels.",
  },
  {
    name: "Brand Style Guide",
    description: "A document outlining your colors, fonts, and logo usage.",
  },
];

const SmeDesignSection = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-8 md:px-12">
      <div className="bg-white border border-gray-200 shadow-xl rounded-xl overflow-hidden grid md:grid-cols-2 text-foreground">
        <div className="p-8 md:p-12">
          <Palette className="h-10 w-10 text-brand-neon mb-4" />
          <h2 className="text-3xl font-semibold mb-4">
            Establish Your Brand Identity
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Make a memorable first impression with a professional logo and a
            complete branding kit designed to ensure consistency everywhere.
          </p>
          <ul className="space-y-4">
            {features.map((feature) => (
              <li key={feature.name} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-brand-neon mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">{feature.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative min-h-[300px] md:min-h-0">
          <img
            src={smeDesignImage}
            alt="Graphic design tools and logos"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SmeDesignSection;