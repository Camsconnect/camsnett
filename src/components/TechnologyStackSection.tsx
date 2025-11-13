"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="w-full text-foreground text-center">
      <h2 className="text-4xl font-light mb-12">Our Tech & Tools</h2>
      <div className="w-full max-w-3xl mx-auto">
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {technologies.map((tech, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="p-1 h-full">
                  <Card className="shadow-lg h-full">
                    <CardContent className="flex aspect-square items-center justify-center p-6 bg-white rounded-lg">
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="h-20 object-contain"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default TechnologyStackSection;