"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
import smeWebsiteImage from "@/assets/sme-website-design.png";

const features = [
  {
    name: "Blazing-Fast Performance",
    description:
      "Built with modern tech for rapid load times that keep visitors engaged.",
  },
  {
    name: "AI-Powered SEO",
    description:
      "Optimized with Google AI to maximize your search visibility and attract organic traffic.",
  },
  {
    name: "Analytics Dashboard",
    description:
      "Includes a custom dashboard to track analytics and manage updates.",
  },
  {
    name: "Full Ownership & Control",
    description:
      "Get full control to manage your site content without needing a developer.",
  },
  {
    name: "Seamless Integrations",
    description:
      "Connect your social media and WhatsApp for direct customer engagement.",
  },
];

const SmeWebsiteSection = () => {
  return (
    <section className="bg-gray-900 text-white py-24">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-3xl font-semibold mb-4">
              A Professional Website That Works for You
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              We build more than just websites; we build digital storefronts
              that are fast, smart, and easy to manage. Our goal is to give you
              a powerful online presence that you control.
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
          <div>
            <img
              src={smeWebsiteImage}
              alt="Professionals working on laptops"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmeWebsiteSection;