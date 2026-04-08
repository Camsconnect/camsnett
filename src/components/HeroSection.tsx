"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    badge: "Intelligence Meets Design",
    title: (
      <>
        Your digital presence, <br className="hidden md:block" />
        <span className="italic font-light text-brand-orange">reimagined.</span>
      </>
    ),
    description: "We build your visual identity, shape your personality, and grow your brand online with data-driven strategies and AI automation.",
    primaryCta: "Explore Services",
    primaryLink: "/services",
    secondaryCta: "Read our story",
    secondaryLink: "/about",
  },
  {
    badge: "Cinematic & AI-Enhanced",
    title: (
      <>
        Storytelling that <br className="hidden md:block" />
        <span className="italic font-light text-brand-orange">captivates.</span>
      </>
    ),
    description: "Professional, world-class video editing blending human artistry with AI precision to tell your brand's unique story and leave a lasting impact.",
    primaryCta: "View Portfolio",
    primaryLink: "/services",
    secondaryCta: "Start a project",
    secondaryLink: "/contact",
  },
  {
    badge: "Performance Marketing",
    title: (
      <>
        Campaigns that actually <br className="hidden md:block" />
        <span className="italic font-light text-brand-orange">convert.</span>
      </>
    ),
    description: "Stop paying for empty traffic. Our Google and Social Media ad strategies are engineered to attract the exact right audience and drive measurable revenue.",
    primaryCta: "Maximize ROI",
    primaryLink: "/services",
    secondaryCta: "See Case Studies",
    secondaryLink: "/about",
  }
];

const HeroSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-center overflow-hidden border-b border-gray-200">
      {/* Background gradient fade to ensure text readability against the math grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50 pointer-events-none z-0" />

      {/* Abstract decorative elements giving that research/technical vibe (kept static in background) */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block opacity-30 pointer-events-none z-0">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="199" stroke="#DA7756" strokeWidth="2" strokeDasharray="4 12"/>
          <circle cx="200" cy="200" r="140" stroke="#DA7756" strokeWidth="1" opacity="0.5"/>
          <path d="M200 0V400" stroke="#DA7756" strokeWidth="1" opacity="0.3"/>
          <path d="M0 200H400" stroke="#DA7756" strokeWidth="1" opacity="0.3"/>
          <circle cx="200" cy="200" r="4" fill="#DA7756"/>
        </svg>
      </div>

      <Carousel
        plugins={[plugin.current]}
        className="w-full relative z-10"
        opts={{ loop: true }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 min-h-[60vh] flex items-center">
                <div className="max-w-4xl space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                  
                  <div className="inline-flex items-center rounded-full border border-brand-orange/30 bg-brand-orange/5 px-3 py-1 text-sm text-brand-orange font-medium">
                    <span className="flex h-2 w-2 rounded-full bg-brand-orange mr-2"></span>
                    {slide.badge}
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-gray-900 leading-[1.1] tracking-tight">
                    {slide.title}
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-gray-600 font-sans max-w-2xl leading-relaxed">
                    {slide.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-8">
                    <Button
                      asChild
                      className="bg-brand-orange hover:bg-[#c26547] text-white font-sans text-base px-8 py-6 rounded-md transition-all shadow-sm"
                    >
                      <Link to={slide.primaryLink}>
                        {slide.primaryCta} <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    
                    <Button
                      asChild
                      variant="outline"
                      className="bg-transparent border-gray-300 text-gray-700 hover:bg-white hover:text-gray-900 font-sans text-base px-8 py-6 rounded-md transition-all"
                    >
                      <Link to={slide.secondaryLink}>
                        {slide.secondaryCta}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Minimalist Carousel Controls positioned at the bottom right */}
        <div className="absolute bottom-10 right-6 md:right-12 lg:right-20 flex gap-3 z-20">
          <CarouselPrevious className="static translate-y-0 h-12 w-12 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 hover:bg-white hover:text-brand-orange hover:border-brand-orange/50 shadow-sm transition-all rounded-full" />
          <CarouselNext className="static translate-y-0 h-12 w-12 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 hover:bg-white hover:text-brand-orange hover:border-brand-orange/50 shadow-sm transition-all rounded-full" />
        </div>
      </Carousel>
    </section>
  );
};

export default HeroSection;