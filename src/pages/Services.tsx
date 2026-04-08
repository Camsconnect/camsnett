"use client";

import React from "react";
import MenuBar from "@/components/MenuBar";
import ServicesGrid from "@/components/ServicesGrid";
import ClientLogosSection from "@/components/ClientLogosSection";

const Services = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <MenuBar />
      <div className="pt-0">
        <div className="bg-[#FAF9F6] border-b border-gray-200 py-24 text-center">
          <div className="container mx-auto px-6">
             <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6 tracking-tight">
               Our Services
             </h1>
             <p className="text-xl text-gray-600 max-w-2xl mx-auto font-sans">
               We provide end-to-end digital solutions to help you scale, automate, and dominate your market.
             </p>
          </div>
        </div>
        <ServicesGrid />
        <div className="py-10">
           <ClientLogosSection />
        </div>
      </div>
    </div>
  );
};

export default Services;