"use client";

import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SubBrandsSection from "@/components/SubBrandsSection";
import ServicesSection from "@/components/ServicesSection";
import SearchBar from "@/components/SearchBar";
import TechnologyStackSection from "@/components/TechnologyStackSection";
import CamsConnectSection from "@/components/CamsConnectSection";
import CamsBusketSection from "@/components/CamsBusketSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServiceScroller from "@/components/ServiceScroller";
import WhyWorkWithUsSection from "@/components/WhyWorkWithUsSection";
import GraphicDesignServicesSection from "@/components/GraphicDesignServicesSection";
import ClientLogosSection from "@/components/ClientLogosSection";

const Index = () => {
  return (
    <Layout noPaddingTop>
      <div className="relative">
        <HeroSection />
        <div className="absolute top-0 left-0 right-0 pt-28 w-full z-10">
          <SearchBar />
        </div>
      </div>
      <ServiceScroller />
      <div className="container mx-auto px-4 py-16 max-w-screen-2xl space-y-16">
        <ServicesSection />
        <WhyWorkWithUsSection />
        <ClientLogosSection />
        <TechnologyStackSection />
        <CamsConnectSection />
        <SubBrandsSection />
        <CamsBusketSection />
        <TestimonialsSection />
        <GraphicDesignServicesSection />
      </div>
    </Layout>
  );
};

export default Index;