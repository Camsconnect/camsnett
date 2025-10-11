"use client";

import React from "react";
import {
  Lightbulb,
  ClipboardList,
  Camera,
  Scissors,
  CheckCircle,
  Upload,
} from "lucide-react";

const processSteps = [
  {
    icon: <Lightbulb className="h-5 w-5 text-brand-neon" />,
    title: "1. Concept & Strategy",
    description:
      "We collaborate with you to develop a creative concept, define the story, and write a compelling script that aligns with your goals.",
  },
  {
    icon: <ClipboardList className="h-5 w-5 text-brand-neon" />,
    title: "2. Pre-Production",
    description:
      "This is the planning phase where we handle storyboarding, location scouting, casting, and scheduling to ensure a smooth shoot.",
  },
  {
    icon: <Camera className="h-5 w-5 text-brand-neon" />,
    title: "3. Production",
    description:
      "Our professional crew captures high-quality footage using state-of-the-art equipment, bringing the script and storyboard to life.",
  },
  {
    icon: <Scissors className="h-5 w-5 text-brand-neon" />,
    title: "4. Post-Production",
    description:
      "Our editors assemble the footage, add graphics, create custom sound design, and apply color grading to craft the final narrative.",
  },
  {
    icon: <CheckCircle className="h-5 w-5 text-brand-neon" />,
    title: "5. Review & Approval",
    description:
      "We share a draft of the video for your feedback. We'll work through any revisions to ensure the final product is perfect.",
  },
  {
    icon: <Upload className="h-5 w-5 text-brand-neon" />,
    title: "6. Final Delivery",
    description:
      "Once approved, we deliver the final video files, optimized for all your required platforms—from social media to the big screen.",
  },
];

const VideographyProcessSection = () => {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-semibold mb-4 text-foreground">
        Our Video Production Process
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
        We guide you through every step of the creative process to produce a video that captivates your audience and delivers your message effectively.
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

export default VideographyProcessSection;