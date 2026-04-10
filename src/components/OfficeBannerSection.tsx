"use client";

import React from "react";
import officeImage from "@/assets/modern-office-ct.png";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const OfficeBannerSection = () => {
  return (
    <section className="relative w-full py-32 md:py-48 overflow-hidden">
      {/* Background Image with Parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${officeImage})`, 
          backgroundAttachment: "fixed" 
        }}
      />
      
      {/* Gradient Overlay - Dark on the left, fading to transparent on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 md:via-gray-900/60 to-transparent" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm text-white font-medium mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-brand-orange mr-2"></span>
            Crafted in Cape Town
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-6">
            Engineered for Growth. <br />
            <span className="text-brand-orange italic font-light">Driven by Innovation.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-200 font-sans leading-relaxed mb-8">
            From our desks to screens around the world. We blend world-class engineering with creative strategy to build digital ecosystems that don't just look good—they dominate the market.
          </p>
          
          <Link to="/about" className="inline-flex items-center text-brand-orange hover:text-white font-medium transition-colors group text-lg">
            Discover how we work
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OfficeBannerSection;