"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const technologies = [
  "OpenAI",
  "Canva",
  "Adobe Illustrator",
  "Photoshop",
  "Blender",
  "Unreal Engine 5",
  "React",
  "Python",
];

const TechnologyStackSection = () => {
  return (
    <section className="w-full text-foreground text-center">
      <h2 className="text-4xl font-light mb-12">Our Tech & Tools</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {technologies.map((tech) => (
          <Card
            key={tech}
            className="flex items-center justify-center p-6 bg-card border shadow-sm"
          >
            <CardContent className="p-0">
              <p className="text-lg font-semibold text-foreground">{tech}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TechnologyStackSection;