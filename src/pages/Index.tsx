"use client";

import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SubBrandsSection from "@/components/SubBrandsSection";
import AboutUsSection from "@/components/AboutUsSection";
import ServicesSection from "@/components/ServicesSection";
import TechnologyStackSection from "@/components/TechnologyStackSection";
import CamsConnectSection from "@/components/CamsConnectSection";
import CamsBusketSection from "@/components/CamsBusketSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServiceScroller from "@/components/ServiceScroller";

const Index = () => {
  return (
    <Layout noPaddingTop>
      <HeroSection />
      <ServiceScroller />
      <div className="container mx-auto px-4 py-16 max-w-screen-2xl space-y-16">
        <AboutUsSection />
        <ServicesSection />
        <TechnologyStackSection />
        <CamsConnectSection />
        <SubBrandsSection />
        <CamsBusketSection />
        <TestimonialsSection />
      </div>
    </Layout>
  );
};

export default Index;