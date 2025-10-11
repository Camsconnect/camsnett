"use client";

import React from "react";
import {
  Lightbulb,
  Cube,
  Paintbrush,
  Film,
  Sun,
  Layers,
} from "lucide-react";

const processSteps = [
  {
    icon: <Lightbulb className="h-5 w-5 text-brand-neon" />,
    title: "1. Concept & Storyboarding",
    description:
      "We start by understanding your vision, developing the concept, and creating storyboards or sketches to outline the project.",
  },
  {
    icon: <Cube className="h-5 w-5 text-brand-neon" />,
    title: "2. 3D Modeling",
    description:
      "Our artists create the 3D assets, whether it's a product, character, or environment, focusing on detail and accuracy.",
  },
  {
    icon: <Paintbrush className="h-5 w-5 text-brand-neon" />,
    title: "3. Texturing & Rigging",
    description:
      "We apply high-quality textures for realism and, for animated projects, create a digital skeleton (rig) to control movement.",
  },
  {
    icon: <Film className="h-5 w-5 text-brand-neon" />,
    title: "4. Animation",
    description:
      "The models are brought to life through animation, carefully crafting motion that is fluid, believable, and engaging.",
  },
  {
    icon: <Sun className="h-5 w-5 text-brand-neon" />,
    title: "5. Lighting & Rendering",
    description:
      "We set up virtual lighting to create the mood and atmosphere, then render the final images or video frames at high resolution.",
  },
  {
    icon: <Layers className="h-5 w-5 text-brand-neon" />,
    title: "6. Compositing & Final Delivery",
    description:
      "The rendered elements are combined, color-corrected, and polished. We then deliver the final product in your desired format.",
  },
];

const ThreeDProcessSection = () => {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-semibold mb-4 text-foreground">
        Our 3D Production Pipeline
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
        We follow a meticulous, industry-standard pipeline to ensure every detail is perfect, from initial concept to final render.
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

export default ThreeDProcessSection;