"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import MenuBar from "@/components/MenuBar";
import HeroSection from "@/components/HeroSection";
import PricingCard from "@/components/PricingCard";
import SubBrandsSection from "@/components/SubBrandsSection"; // Import the new component

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <MenuBar />
      <main className="flex-grow">
        <HeroSection />
        <div className="container mx-auto px-4 py-16 max-w-5xl">
          <PricingCard />
        </div>
        <SubBrandsSection /> {/* Render the new sub-brands section */}
        {/* You can add more sections here later */}
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Index;