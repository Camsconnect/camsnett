"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
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
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="w-full py-16 bg-white text-gray-900 text-center rounded-3xl border border-gray-100">
      <h2 className="text-4xl font-light mb-12 text-black">Our Tech & Tools</h2>
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-screen-xl mx-auto px-8"
      >
        <CarouselContent className="-ml-4">
          {technologies.map((tech, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
            >
              <div className="flex items-center justify-center h-24 p-4 hover:scale-110 transition-all duration-300">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default TechnologyStackSection;