"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import MenuBar from "@/components/MenuBar";
import HeroSection from "@/components/HeroSection";
import PricingCard from "@/components/PricingCard";
import SubBrandsSection from "@/components/SubBrandsSection";
import AboutUsSection from "@/components/AboutUsSection";
import ServicesSection from "@/components/ServicesSection";
import SearchBar from "@/components/SearchBar";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <MenuBar />
      <main className="flex-grow pt-28">
        <SearchBar />
        <HeroSection />
        <div className="container mx-auto px-4 py-16 max-w-screen-2xl space-y-16">
          <AboutUsSection />
          <ServicesSection />
          <PricingCard />
        </div>
        <SubBrandsSection />
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Index;