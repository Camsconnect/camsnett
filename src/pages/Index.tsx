"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import MenuBar from "@/components/MenuBar";
import HeroSection from "@/components/HeroSection";
import PricingCard from "@/components/PricingCard";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <MenuBar />
      <main className="flex-grow">
        <HeroSection />
        <div className="container mx-auto px-4 py-16">
          <PricingCard />
        </div>
        {/* You can add more sections here later */}
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Index;