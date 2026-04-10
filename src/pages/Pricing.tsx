"use client";

import React from "react";
import Layout from "@/components/Layout";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import PricingTiersSection from "@/components/PricingTiersSection";
import WebDesignPricingTiersSection from "@/components/WebDesignPricingTiersSection";
import BrandingPricingTiersSection from "@/components/BrandingPricingTiersSection";
import BusinessAppPricingTiersSection from "@/components/BusinessAppPricingTiersSection";
import VideographyPricingTiersSection from "@/components/VideographyPricingTiersSection";
import ThreeDPricingTiersSection from "@/components/ThreeDPricingTiersSection";
import YouTubeSEOPricingTiersSection from "@/components/YouTubeSEOPricingTiersSection";
import YouTubeSEOAddonsSection from "@/components/YouTubeSEOAddonsSection";
import N8nAutomationPricingTiersSection from "@/components/N8nAutomationPricingTiersSection";
import ArchitecturalVisualizationPricingTiersSection from "@/components/ArchitecturalVisualizationPricingTiersSection";
import { Separator } from "@/components/ui/separator";

const Pricing = () => {
  return (
    <Layout noPaddingTop>
      {/* HERO SECTION */}
      <section className="relative w-full py-24 md:py-32 overflow-hidden border-b border-gray-200 bg-[#FAF9F6]">
        {/* Decorative SVG */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:block opacity-20 pointer-events-none z-0">
          <svg width="300" height="300" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="50" width="300" height="300" stroke="#DA7756" strokeWidth="2" strokeDasharray="4 12" fill="none"/>
            <rect x="100" y="100" width="200" height="200" stroke="#DA7756" strokeWidth="1" opacity="0.5" fill="none"/>
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center rounded-full border border-brand-orange/30 bg-brand-orange/5 px-3 py-1 text-sm text-brand-orange font-medium mb-6">
            <span className="flex h-2 w-2 rounded-full bg-brand-orange mr-2"></span>
            Transparent Pricing
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6 tracking-tight">
            Our Packages
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-sans leading-relaxed">
            Find the perfect plan to fit your needs. We offer a range of
            packages designed for businesses of all sizes, with no hidden fees.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20 max-w-screen-xl space-y-16">
        <Tabs defaultValue="web-design" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="flex flex-wrap justify-center h-auto bg-gray-100 p-1 rounded-lg gap-1 max-w-full overflow-x-auto">
              <TabsTrigger value="web-design" className="data-[state=active]:bg-white data-[state=active]:text-brand-orange px-4 py-2">Web Design</TabsTrigger>
              <TabsTrigger value="social-media" className="data-[state=active]:bg-white data-[state=active]:text-brand-orange px-4 py-2">Social Media</TabsTrigger>
              <TabsTrigger value="youtube-seo" className="data-[state=active]:bg-white data-[state=active]:text-brand-orange px-4 py-2">YouTube SEO</TabsTrigger>
              <TabsTrigger value="branding" className="data-[state=active]:bg-white data-[state=active]:text-brand-orange px-4 py-2">Branding</TabsTrigger>
              <TabsTrigger value="app-dev" className="data-[state=active]:bg-white data-[state=active]:text-brand-orange px-4 py-2">App Development</TabsTrigger>
              <TabsTrigger value="videography" className="data-[state=active]:bg-white data-[state=active]:text-brand-orange px-4 py-2">Videography</TabsTrigger>
              <TabsTrigger value="n8n-automation" className="data-[state=active]:bg-white data-[state=active]:text-brand-orange px-4 py-2">n8n Automation</TabsTrigger>
              <TabsTrigger value="3d-modeling" className="data-[state=active]:bg-white data-[state=active]:text-brand-orange px-4 py-2">3D & Arch Viz</TabsTrigger>
            </TabsList>
          </div>
          
          <div className="pt-4">
            <TabsContent value="web-design" className="animate-in fade-in duration-500">
              <WebDesignPricingTiersSection />
            </TabsContent>
            <TabsContent value="social-media" className="animate-in fade-in duration-500">
              <PricingTiersSection />
            </TabsContent>
            <TabsContent value="youtube-seo" className="animate-in fade-in duration-500">
              <div className="space-y-16">
                <YouTubeSEOPricingTiersSection />
                <Separator className="bg-gray-200" />
                <YouTubeSEOAddonsSection />
              </div>
            </TabsContent>
            <TabsContent value="branding" className="animate-in fade-in duration-500">
              <BrandingPricingTiersSection />
            </TabsContent>
            <TabsContent value="app-dev" className="animate-in fade-in duration-500">
              <BusinessAppPricingTiersSection />
            </TabsContent>
            <TabsContent value="videography" className="animate-in fade-in duration-500">
              <VideographyPricingTiersSection />
            </TabsContent>
            <TabsContent value="n8n-automation" className="animate-in fade-in duration-500">
              <N8nAutomationPricingTiersSection />
            </TabsContent>
            <TabsContent value="3d-modeling" className="space-y-16 animate-in fade-in duration-500">
              <ThreeDPricingTiersSection />
              <Separator className="bg-gray-200" />
              <ArchitecturalVisualizationPricingTiersSection />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Pricing;