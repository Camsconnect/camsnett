"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

const slides = [
  {
    badge: "Camsnett",
    title: "Turn Attention into Sales",
    description:
      "We build your visual identity, shape your personality, and grow your brand presence online.",
    primaryCta: "Grow My Sales",
    secondaryCta: "View Packages",
    image: "/hero-background.jpeg",
  },
  {
    badge: "Innovation",
    title: "Drive Growth with Technology",
    description:
      "Leverage cutting-edge solutions to scale your business and stay ahead of the competition.",
    primaryCta: "Explore Solutions",
    secondaryCta: "Learn More",
    image: "/hero-background-tech.jpeg",
  },
  {
    badge: "Creativity",
    title: "Design That Inspires Action",
    description:
      "From stunning visuals to compelling brand stories, we create designs that captivate and convert.",
    primaryCta: "See Our Work",
    secondaryCta: "Get in Touch",
    image: "/hero-background-design.jpeg",
  },
];

const HeroSection = () => {
  return (
    <section className="w-full">
      <Carousel
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div
                className="relative w-full h-[70vh] min-h-[500px] flex bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative container mx-auto px-4 md:px-6 max-w-screen-2xl pt-48">
                  <div className="max-w-2xl text-left text-white">
                    <Badge
                      variant="secondary"
                      className="bg-white/20 text-white border-none mb-4 font-light"
                    >
                      {slide.badge}
                    </Badge>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                      {slide.title}
                    </h1>
                    <p className="mt-4 max-w-[600px] text-white/90 md:text-xl font-light">
                      {slide.description}
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <Button
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 text-lg rounded-md"
                      >
                        {slide.primaryCta}
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="px-6 text-lg rounded-md bg-white/10 border-white text-white hover:bg-white/20 hover:text-white"
                      >
                        {slide.secondaryCta}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <CarouselPrevious className="static translate-y-0 text-white bg-white/20 hover:bg-white/30 border-white/50" />
          <CarouselNext className="static translate-y-0 text-white bg-white/20 hover:bg-white/30 border-white/50" />
        </div>
      </Carousel>
    </section>
  );
};

export default HeroSection;