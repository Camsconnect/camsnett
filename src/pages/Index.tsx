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
import StartupSmeSection from "@/components/StartupSmeSection";
import GraphicDesignServicesSection from "@/components/GraphicDesignServicesSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import AIAutomationSection from "@/components/AIAutomationSection";

const Index = () => {
  return (
    <Layout noPaddingTop>
      {/* Anti-gravity background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-neon/10 rounded-full blur-[120px] animate-float-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute top-[40%] left-[30%] w-[20%] h-[20%] bg-blue-500/10 rounded-full blur-[100px] animate-pulse-glow" />
      </div>

      <div className="relative">
        <HeroSection />
        <div className="absolute top-0 left-0 right-0 pt-28 w-full z-10">
          <SearchBar />
        </div>
      </div>
      
      <div className="relative z-10 bg-background/50 backdrop-blur-sm border-b border-white/5">
        <ServiceScroller />
      </div>

      <div className="container mx-auto px-4 py-20 max-w-screen-2xl space-y-24">
        <ServicesSection />
        <StartupSmeSection />
        <AIAutomationSection />
        <TechnologyStackSection />
        <CamsConnectSection />
        <SubBrandsSection />
        <CamsBusketSection />
        <TestimonialsSection />
        <GraphicDesignServicesSection />
        <ClientLogosSection />
      </div>
    </Layout>
  );
};

export default Index;