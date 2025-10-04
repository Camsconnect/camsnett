"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen pt-[88px] text-foreground flex flex-col items-center justify-center overflow-hidden">
      <div className="container relative z-10 text-center px-4 md:px-6 flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin tracking-tight leading-tight mb-6 drop-shadow-lg">
          Your Online business success starts here
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 opacity-90 drop-shadow-md font-thin">
          From modern website design to business apps, SEO, social media growth
          and management, marketing strategies, and graphic design, we help
          businesses stand out. We create professional branding that gives your
          business a unique image, builds trust, and generates quality leads.
        </p>
        <Button
          size="lg"
          className="bg-blue-600 text-white hover:bg-blue-700 text-lg px-6 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;