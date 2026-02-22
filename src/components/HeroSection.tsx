"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ChevronRight } from "lucide-react";

// Importing local assets
import threeDImage from "@/assets/3d-modeling-service.jpeg";
import appImage from "@/assets/business-app-service.jpeg";

const slides = [
  {
    subtitle: "AVAILABLE NOW",
    title: "Turn Attention into Sales",
    description: "We build your visual identity, shape your personality, and grow your brand presence online with data-driven strategies.",
    primaryCta: "GET STARTED",
    secondaryCta: "VIEW PACKAGES",
    image: "/hero-background.jpeg", 
    bgPosition: "center",
  },
  {
    subtitle: "AI INNOVATION",
    title: "Drive Growth with Intelligence",
    description: "Leverage cutting-edge AI automation to scale your business operations and stay ahead of the competition effortlessly.",
    primaryCta: "EXPLORE SOLUTIONS",
    secondaryCta: "LEARN MORE",
    image: "/hero-background-tech.jpeg",
    bgPosition: "center",
  },
  {
    subtitle: "CREATIVE STUDIO",
    title: "Design That Inspires Action",
    description: "From stunning 3D visuals to compelling brand stories, we create designs that captivate audiences and convert visitors.",
    primaryCta: "SEE OUR WORK",
    secondaryCta: "GET IN TOUCH",
    image: threeDImage,
    bgPosition: "center",
  },
  {
    subtitle: "WEB & APP DEVELOPMENT",
    title: "Build Your Digital Empire",
    description: "Robust, scalable, and beautiful web and mobile applications tailored to your specific business needs.",
    primaryCta: "BUILD NOW",
    secondaryCta: "OUR PROCESS",
    image: appImage,
    bgPosition: "center",
  }
];

const HeroSection = () => {
  return (
    <section className="w-full relative bg-black text-white overflow-hidden">
      <Carousel
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="pl-0 relative w-full">
              {/* Container for height */}
              <div className="relative w-full h-[600px] md:h-[700px] flex items-center">
                
                {/* Background Image Layer */}
                <div
                  className="absolute inset-0 bg-cover bg-no-repeat transition-transform duration-1000"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundPosition: slide.bgPosition,
                  }}
                />

                {/* Heavy Gradient Overlay - mimicking the 'cutout' look on the left */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent md:via-black/60" />
                
                {/* Mobile specific overlay for readability */}
                <div className="absolute inset-0 bg-black/40 md:hidden" />

                {/* Content Layer */}
                <div className="relative container mx-auto px-6 md:px-12 lg:px-20 z-10">
                  <div className="max-w-2xl space-y-6 animate-in fade-in slide-in-from-left-8 duration-700">
                    <span className="inline-block bg-[#FFD700] text-black font-extrabold px-2 py-1 text-sm uppercase tracking-wider">
                      {slide.subtitle}
                    </span>
                    
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
                      {slide.title}
                    </h1>
                    
                    <p className="text-lg md:text-xl text-gray-200 font-medium max-w-xl drop-shadow-md leading-relaxed">
                      {slide.description}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 pt-4">
                      <Button
                        className="bg-brand-neon hover:bg-brand-neon/90 text-black font-bold text-base px-8 py-6 rounded-sm uppercase tracking-wide transition-transform hover:scale-105"
                      >
                        {slide.primaryCta} <ChevronRight className="ml-2 h-5 w-5" />
                      </Button>
                      
                      <Button
                        variant="link"
                        className="text-white hover:text-brand-neon font-bold text-base px-4 py-6 uppercase tracking-wide flex items-center gap-2 decoration-0 hover:no-underline"
                      >
                        {slide.secondaryCta} <ChevronRight className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default HeroSection;