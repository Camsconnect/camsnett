"use client";

import React from "react";
import MenuBar from "@/components/MenuBar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ServicesGrid from "@/components/ServicesGrid";
import ClientLogosSection from "@/components/ClientLogosSection";
import ServiceScroller from "@/components/ServiceScroller";
import SubBrandsSection from "@/components/SubBrandsSection";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <div className="min-h-screen bg-transparent font-sans text-gray-900">
      <MenuBar />
      
      <main>
        {/* HERO SECTION */}
        <section className="relative w-full py-24 md:py-32 overflow-hidden border-b border-gray-200 bg-[#FAF9F6]">
          {/* Decorative SVG */}
          <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:block opacity-20 pointer-events-none z-0">
            <svg width="300" height="300" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="200" r="199" stroke="#DA7756" strokeWidth="2" strokeDasharray="4 12"/>
              <circle cx="200" cy="200" r="140" stroke="#DA7756" strokeWidth="1" opacity="0.5"/>
              <circle cx="200" cy="200" r="4" fill="#DA7756"/>
            </svg>
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center rounded-full border border-brand-orange/30 bg-brand-orange/5 px-3 py-1 text-sm text-brand-orange font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand-orange mr-2"></span>
              Comprehensive Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6 tracking-tight">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-sans leading-relaxed">
              We provide end-to-end digital solutions to help you scale, automate, and dominate your market. From bespoke web design to private AI integration.
            </p>
          </div>
        </section>

        {/* TICKER */}
        <ServiceScroller />

        {/* MAIN GRID */}
        <ServicesGrid />

        {/* ECOSYSTEM / SUB-BRANDS */}
        <div className="border-t border-gray-200 bg-[#FAF9F6]">
          <SubBrandsSection />
        </div>

        {/* CLIENT LOGOS */}
        <div className="border-t border-gray-200">
           <ClientLogosSection />
        </div>

        {/* FINAL CTA */}
        <section className="py-24 bg-brand-orange text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 tracking-tight text-white">Not sure where to start?</h2>
            <p className="text-xl font-light mb-10 text-white/90">Let's discuss your business goals and find the perfect solution.</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-brand-orange px-8 py-6 text-lg font-medium transition-colors">
                <a href="https://wa.me/2763049876" target="_blank" rel="noopener noreferrer">Chat with an expert</a>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-brand-orange px-8 py-6 text-lg font-medium transition-colors">
                <a href="/pricing">View Pricing</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Services;