"use client";

import React from "react";
import {
  Search,
  Lightbulb,
  Palette,
  PenTool,
  CheckCircle,
} from "lucide-react";

const processSteps = [
  {
    icon: <Search className="h-5 w-5 text-brand-neon" />,
    title: "1. Discovery & Briefing",
    description:
      "We start by understanding your business, values, and target audience to define the project's creative direction.",
  },
  {
    icon: <Lightbulb className="h-5 w-5 text-brand-neon" />,
    title: "2. Research & Moodboarding",
    description:
      "Our team researches your industry and competitors, then creates a mood board to establish the visual tone and style.",
  },
  {
    icon: <Palette className="h-5 w-5 text-brand-neon" />,
    title: "3. Concept Development",
    description:
      "We develop initial design concepts for your logo and brand identity, exploring different creative avenues.",
  },
  {
    icon: <PenTool className="h-5 w-5 text-brand-neon" />,
    title: "4. Design & Refinement",
    description:
      "Based on your feedback, we refine the chosen concept, perfecting every detail from color to typography.",
  },
  {
    icon: <CheckCircle className="h-5 w-5 text-brand-neon" />,
    title: "5. Finalization & Delivery",
    description:
      "Once you're thrilled with the result, we prepare and deliver all the final files and brand assets in various formats.",
  },
];

const BrandingProcessSection = () => {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-semibold mb-4 text-foreground">
        Our Creative Process
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
        We follow a collaborative and strategic process to ensure your brand identity is both beautiful and effective.
      </p>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-5 top-0 h-full w-0.5 bg-border -translate-x-1/2" />
        <div className="space-y-12">
          {processSteps.map((step, index) => (
            <div key={index} className="relative flex items-start">
              <div className="z-10 flex-shrink-0 w-10 h-10 bg-background border-2 border-brand-neon rounded-full flex items-center justify-center">
                {step.icon}
              </div>
              <div className="ml-6 text-left">
                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandingProcessSection;