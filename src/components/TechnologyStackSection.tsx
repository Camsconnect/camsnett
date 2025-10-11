"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

import openAiLogo from "@/assets/openai-logo.png";
import canvaLogo from "@/assets/canva-logo.png";
import illustratorLogo from "@/assets/illustrator-logo.png";
import blenderLogo from "@/assets/blender-logo.png";
import unrealEngineLogo from "@/assets/unreal-engine-logo.png";
import reactLogo from "@/assets/react-logo.png";
import pythonLogo from "@/assets/python-logo.png";

const technologies = [
  { name: "OpenAI", logo: openAiLogo },
  { name: "Canva", logo: canvaLogo },
  { name: "Adobe Illustrator", logo: illustratorLogo },
  { name: "Blender", logo: blenderLogo },
  { name: "Unreal Engine 5", logo: unrealEngineLogo },
  { name: "React", logo: reactLogo },
  { name: "Python", logo: pythonLogo },
];

const TechnologyStackSection = () => {
  return (
    <section className="w-full text-foreground text-center">
      <h2 className="text-4xl font-light mb-12">Our Tech & Tools</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {technologies.map((tech) => (
          <Card
            key={tech.name}
            className="flex items-center justify-center p-6 bg-card border shadow-sm aspect-video"
          >
            <CardContent className="p-0">
              <img
                src={tech.logo}
                alt={tech.name}
                className="max-h-16 w-auto object-contain"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TechnologyStackSection;