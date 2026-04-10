"use client";

import React from "react";
import Layout from "@/components/Layout";
import BrandingProcessSection from "@/components/BrandingProcessSection";
import BrandingRequirementsSection from "@/components/BrandingRequirementsSection";
import BrandingPricingTiersSection from "@/components/BrandingPricingTiersSection";

const BrandingAndGraphicDesign = () => {
  return (
    <Layout noPaddingTop>
      <section className="relative w-full py-24 md:py-32 overflow-hidden border-b border-gray-200 bg-[#FAF9F6]">
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block opacity-20 pointer-events-none z-0">
          <svg width="300" height="300" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="200,10 390,390 10,390" stroke="#DA7756" strokeWidth="2" strokeDasharray="4 12" fill="none"/>
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center rounded-full border border-brand-orange/30 bg-brand-orange/5 px-3 py-1 text-sm text-brand-orange font-medium mb-6">
            <span className="flex h-2 w-2 rounded-full bg-brand-orange mr-2"></span>
            Visual Identity
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6 tracking-tight">
            Branding & Graphic Design
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-sans leading-relaxed">
            We build powerful brand identities that tell your story and connect with your audience. From logos to complete corporate kits, we provide everything you need to make a lasting impression.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20 max-w-screen-xl space-y-24">
        <BrandingPricingTiersSection />
        <BrandingProcessSection />
        <BrandingRequirementsSection />
      </div>
    </Layout>
  );
};

export default BrandingAndGraphicDesign;