"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-center overflow-hidden border-b border-gray-200">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50 pointer-events-none z-0" />

      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block opacity-30 pointer-events-none z-0">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="199" stroke="#DA7756" strokeWidth="2" strokeDasharray="4 12"/>
          <circle cx="200" cy="200" r="140" stroke="#DA7756" strokeWidth="1" opacity="0.5"/>
          <path d="M200 0V400" stroke="#DA7756" strokeWidth="1" opacity="0.3"/>
          <path d="M0 200H400" stroke="#DA7756" strokeWidth="1" opacity="0.3"/>
          <circle cx="200" cy="200" r="4" fill="#DA7756"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 relative z-10">
        <div className="max-w-4xl space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          
          <div className="inline-flex items-center rounded-full border border-brand-orange/30 bg-brand-orange/5 px-3 py-1 text-sm text-brand-orange font-medium">
            <span className="flex h-2 w-2 rounded-full bg-brand-orange mr-2"></span>
            Cape Town's Full-Service Digital Agency
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-gray-900 leading-[1.1] tracking-tight">
            Own your AI data. <br />
            <span className="italic font-light text-brand-orange">Control your website.</span> <br />
            Earn from your investment.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 font-sans max-w-2xl leading-relaxed">
            Web design, digital marketing and private AI solutions —
            built for businesses that want results, not rentals.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-8">
            <Button
              asChild
              className="bg-brand-orange hover:bg-[#c26547] text-white font-sans text-base px-8 py-6 rounded-md transition-all shadow-sm"
            >
              <a href="https://wa.me/2763049876" target="_blank" rel="noopener noreferrer">
                WhatsApp us now
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-brand-orange text-brand-orange hover:bg-brand-orange/5 font-sans text-base px-8 py-6 rounded-md transition-all"
            >
              <a href="#web-packages">
                See our packages
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;