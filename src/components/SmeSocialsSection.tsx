"use client";

import React from "react";
import { CheckCircle, Share2 } from "lucide-react";
import smeSocialsImage from "@/assets/sme-socials-package.png";

const features = [
  {
    name: "Facebook & Instagram Setup",
    description: "We create and optimize your profiles on the most vital platforms.",
  },
  {
    name: "Professionally Designed Banners",
    description: "Custom cover photos and banners that align with your brand.",
  },
  {
    name: "Consistent Branding",
    description: "Ensure your brand looks cohesive across all social channels.",
  },
  {
    name: "Initial Content Strategy",
    description: "A starter plan with content ideas to get you posting.",
  },
];

const SmeSocialsSection = () => {
  return (
    <section className="bg-gray-900 py-16 md:py-24 px-4 sm:px-8 md:px-12">
      <div className="bg-black/20 border border-white/10 rounded-xl overflow-hidden grid md:grid-cols-2 text-white">
        <div className="relative min-h-[300px] md:min-h-0 order-1 md:order-2">
          <img
            src={smeSocialsImage}
            alt="Social media icons on a screen"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="p-8 md:p-12 order-2 md:order-1">
          <Share2 className="h-10 w-10 text-brand-neon mb-4" />
          <h2 className="text-3xl font-semibold mb-4">
            Launch Your Social Media Presence
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            We set up and brand your social media profiles on key platforms to
            help you start connecting with your audience from day one.
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
      </div>
    </section>
  );
};

export default SmeSocialsSection;