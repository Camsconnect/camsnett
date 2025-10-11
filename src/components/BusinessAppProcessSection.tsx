"use client";

import React from "react";
import {
  Search,
  Palette,
  Code,
  Rocket,
  LifeBuoy,
  ClipboardCheck,
} from "lucide-react";

const processSteps = [
  {
    icon: <Search className="h-5 w-5 text-brand-neon" />,
    title: "1. Discovery & Planning",
    description:
      "We work with you to define the app's purpose, features, target audience, and overall strategy.",
  },
  {
    icon: <Palette className="h-5 w-5 text-brand-neon" />,
    title: "2. UI/UX Design & Prototyping",
    description:
      "Our designers create intuitive interfaces and interactive prototypes to visualize the user experience before development begins.",
  },
  {
    icon: <Code className="h-5 w-5 text-brand-neon" />,
    title: "3. Agile Development",
    description:
      "We build the application in sprints, allowing for flexibility and regular feedback to ensure the final product meets your expectations.",
  },
  {
    icon: <ClipboardCheck className="h-5 w-5 text-brand-neon" />,
    title: "4. Quality Assurance & Testing",
    description:
      "Rigorous testing is conducted across multiple devices to ensure the app is bug-free, secure, and performs flawlessly.",
  },
  {
    icon: <Rocket className="h-5 w-5 text-brand-neon" />,
    title: "5. Deployment & Launch",
    description:
      "We handle the entire submission process for the Apple App Store and Google Play Store.",
  },
  {
    icon: <LifeBuoy className="h-5 w-5 text-brand-neon" />,
    title: "6. Post-Launch Support",
    description:
      "We offer ongoing maintenance and support packages to keep your app updated and running smoothly.",
  },
];

const BusinessAppProcessSection = () => {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-semibold mb-4 text-foreground">
        Our App Development Process
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
        From idea to launch, we follow a proven methodology to build high-quality mobile applications that deliver results.
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

export default BusinessAppProcessSection;