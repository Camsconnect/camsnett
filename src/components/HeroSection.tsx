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
import { ChevronRight } from "lucide-react";

const slides = [
  {
    badge: "Camsnett Digital",
    title: "Turn Attention into Sales",
    description:
      "We build your visual identity, shape your personality, and grow your brand presence online with data-driven strategies.",
    primaryCta: "Start Growing",
    secondaryCta: "View Packages",
    image: "/hero-background.jpeg",
  },
  {
    badge: "AI Innovation",
    title: "Drive Growth with Intelligence",
    description:
      "Leverage cutting-edge AI automation to scale your business operations and stay ahead of the competition effortlessly.",
    primaryCta: "Explore Solutions",
    secondaryCta: "Learn More",
    image: "/hero-background-tech.jpeg",
  },
  {
    badge: "Creative Studio",
    title: "Design That Inspires Action",
    description:
      "From stunning 3D visuals to compelling brand stories, we create designs that captivate audiences and convert visitors.",
    primaryCta: "See Our Work",
    secondaryCta: "Get in Touch",
    image: "/hero-background-design.jpeg",
  },
];

const HeroSection = () => {
  return (
    <section className="w-full h-[90vh] min-h-[600px] relative overflow-hidden">
      <Carousel
        className="w-full h-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-full ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="pl-0 h-full">
              <div className="relative w-full h-full">
                {/* Background Image with Scale Animation */}
                <div 
                  className="absolute inset-0 bg-cover bg-center animate-subtle-zoom"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
                />
                
                {/* Modern Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                <div className="relative container mx-auto px-4 md:px-6 h-full flex items-center pt-20">
                  <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <Badge
                      variant="outline"
                      className="bg-brand-neon/10 text-brand-neon border-brand-neon/50 px-4 py-1 text-sm tracking-widest uppercase backdrop-blur-md"
                    >
                      {slide.badge}
                    </Badge>
                    
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                      {slide.title.split(' ').map((word, i) => (
                        <span key={i} className={i === 1 || i === 2 ? "text-gradient-neon" : ""}>
                          {word}{' '}
                        </span>
                      ))}
                    </h1>
                    
                    <p className="text-lg md:text-2xl text-gray-300 font-light max-w-2xl leading-relaxed">
                      {slide.description}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 pt-4">
                      <Button
                        size="lg"
                        className="bg-brand-neon hover:bg-brand-neon/90 text-white px-8 py-6 text-lg rounded-full shadow-glow transition-all hover:scale-105"
                      >
                        {slide.primaryCta}
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="px-8 py-6 text-lg rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm"
                      >
                        {slide.secondaryCta}
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-12 right-12 flex gap-4 z-20">
          <CarouselPrevious className="static translate-y-0 text-white bg-white/5 border-white/10 hover:bg-brand-neon hover:border-brand-neon rounded-full h-12 w-12" />
          <CarouselNext className="static translate-y-0 text-white bg-white/5 border-white/10 hover:bg-brand-neon hover:border-brand-neon rounded-full h-12 w-12" />
        </div>
      </Carousel>
    </section>
  );
};

export default HeroSection;