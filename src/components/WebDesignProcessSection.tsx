"use client";

import React from "react";
import {
  Search,
  Palette,
  Code,
  Rocket,
  LifeBuoy,
} from "lucide-react";

const processSteps = [
  {
    icon: <Search className="h-5 w-5 text-brand-neon" />,
    title: "1. Discovery & Strategy",
    description:
      "We begin by understanding your business, goals, target audience, and project scope to create a clear roadmap for your website.",
  },
  {
    icon: <Palette className="h-5 w-5 text-brand-neon" />,
    title: "2. UI/UX Design",
    description:
      "Our team designs wireframes and high-fidelity mockups, focusing on a user-friendly experience and a visual design that reflects your brand.",
  },
  {
    icon: <Code className="h-5 w-5 text-brand-neon" />,
    title: "3. Development",
    description:
      "We bring the designs to life with clean, efficient code, ensuring your website is responsive, fast, and functional across all devices.",
  },
  {
    icon: <Rocket className="h-5 w-5 text-brand-neon" />,
    title: "4. Testing & Launch",
    description:
      "Before going live, we conduct thorough testing to fix any bugs. Once approved, we deploy the website to your hosting server.",
  },
  {
    icon: <LifeBuoy className="h-5 w-5 text-brand-neon" />,
    title: "5. Handover & Support",
    description:
      "We provide you with all the necessary credentials and a guide to manage your new site. Ongoing support packages are also available.",
  },
];

const WebDesignProcessSection = () => {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-semibold mb-4 text-foreground">
        Our Web Design Process
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
        We follow a structured process to ensure your project is a success from start to finish, delivering a website that meets your vision and business needs.
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

export default WebDesignProcessSection;