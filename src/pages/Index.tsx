"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import MenuBar from "@/components/MenuBar";
import HeroSection from "@/components/HeroSection";
import PricingCard from "@/components/PricingCard"; // Import the new PricingCard

const Index = () => {
  return (
    <div className="flex flex-col">
      <MenuBar />
      <main className="flex-grow">
        <HeroSection />
        <div className="container mx-auto px-4 py-16"> {/* Added a container for the card */}
          <PricingCard />
        </div>
        {/* You can add more sections here later */}
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Index;