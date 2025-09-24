"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-screen pt-[88px] text-white flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0C12] to-[#000000]"></div>

      {/* Soft violet glow (bottom left) */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-[#5B2EFF] to-transparent rounded-full opacity-20 blur-3xl transform translate-x-[-20%] translate-y-[20%]"></div>

      {/* Faint cyan/blue highlight (top right) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-[#1E90FF] to-transparent rounded-full opacity-20 blur-3xl transform translate-x-[20%] translate-y-[-20%]"></div>

      {/* Very soft radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/10 to-black/30"></div>

      <div className="container relative z-10 text-center px-4 md:px-6 flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin tracking-tight leading-tight mb-6 drop-shadow-lg">
          Your Online business success starts here
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 opacity-90 drop-shadow-md font-thin">
          From Modern website design to Business Apps, SEO, Social media growth and management and marketing creating sales and graphics design for content and marketing
        </p>
        <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100 hover:text-emerald-800 text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;