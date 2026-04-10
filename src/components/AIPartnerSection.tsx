"use client";

import React from "react";
import aiImage from "@/assets/ai-partner.png";

const AIPartnerSection = () => {
  return (
    <section className="relative w-full py-32 md:py-48 overflow-hidden">
      {/* Background Image with Parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${aiImage})`, 
          backgroundAttachment: "fixed" 
        }}
      />
      
      {/* Gradient Overlay - Dark on the left to ensure text readability, fading out so the right side (where the subjects are) remains visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/90 to-transparent md:w-3/4" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl text-white">
          <div className="inline-flex items-center rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3 py-1 text-sm text-brand-orange font-medium mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-brand-orange mr-2 animate-pulse"></span>
            Our Philosophy
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-6">
            A Partner in Progress. <br />
            <span className="text-brand-orange italic font-light">Not a Replacement.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-200 font-sans leading-relaxed mb-6">
            We don't view Artificial Intelligence as a tool to replace human creativity or your workforce. We see it as the ultimate collaborator.
          </p>
          
          <div className="border-l-2 border-brand-orange pl-6 py-2">
            <p className="text-lg text-gray-300 font-sans leading-relaxed">
              When properly integrated, AI amplifies what your team can achieve—automating the repetitive, surfacing the insights, and freeing up human minds to do what they do best: <span className="text-white font-medium">Innovate, connect, and lead.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPartnerSection;