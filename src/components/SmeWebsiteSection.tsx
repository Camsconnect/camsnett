"use client";

import React, { useState } from "react";
import { CheckCircle, ChevronDown } from "lucide-react";
import smeWebsiteImage from "@/assets/sme-website-design.png";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

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
  const [isOpen, setIsOpen] = useState(false);
  const visibleFeatures = features.slice(0, 3);
  const hiddenFeatures = features.slice(3);

  return (
    <section className="bg-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-screen-2xl">
        <div className="bg-black/20 border border-white/10 rounded-xl overflow-hidden grid md:grid-cols-2 text-white">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-semibold mb-4">
              A Professional Website That Works for You
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              We build more than just websites; we build digital storefronts that
              are fast, smart, and easy to manage. Our goal is to give you a
              powerful online presence that you control.
            </p>
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <ul className="space-y-4">
                {visibleFeatures.map((feature) => (
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
              <CollapsibleContent>
                <ul className="space-y-4 mt-4">
                  {hiddenFeatures.map((feature) => (
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
              </CollapsibleContent>
              {hiddenFeatures.length > 0 && (
                <CollapsibleTrigger asChild>
                  <Button
                    variant="link"
                    className="text-brand-neon p-0 mt-6 hover:no-underline"
                  >
                    {isOpen ? "Show Less" : "Show More"}
                    <ChevronDown
                      className={`ml-2 h-4 w-4 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                </CollapsibleTrigger>
              )}
            </Collapsible>
          </div>
          <div className="relative min-h-[300px] md:min-h-0">
            <img
              src={smeWebsiteImage}
              alt="Professionals working on laptops"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmeWebsiteSection;