"use client";

import React from "react";
import MenuBar from "@/components/MenuBar";
import HeroSection from "@/components/HeroSection";
import TechnologyStackSection from "@/components/TechnologyStackSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import SubBrandsSection from "@/components/SubBrandsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <MenuBar />
      <main>
        <HeroSection />
        
        <div className="container mx-auto px-4 py-16 space-y-24">
          <SubBrandsSection />
          <TechnologyStackSection />
          <ClientLogosSection />
        </div>
      </main>
      
      <footer className="bg-black text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Camsnett. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;