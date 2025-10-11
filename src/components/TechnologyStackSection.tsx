"use client";

import React from "react";
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
      <div
        className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      >
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
          {technologies.map((tech) => (
            <li key={tech.name}>
              <img
                src={tech.logo}
                alt={tech.name}
                className="max-h-80 w-auto object-contain"
              />
            </li>
          ))}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll"
          aria-hidden="true"
        >
          {technologies.map((tech) => (
            <li key={tech.name}>
              <img
                src={tech.logo}
                alt={tech.name}
                className="max-h-80 w-auto object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TechnologyStackSection;