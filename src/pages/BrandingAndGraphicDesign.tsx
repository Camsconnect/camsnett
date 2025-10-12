"use client";

import React from "react";
import Layout from "@/components/Layout";
import brandingGraphicsImage from "@/assets/branding-graphics-service.png";
import BrandingProcessSection from "@/components/BrandingProcessSection";
import BrandingRequirementsSection from "@/components/BrandingRequirementsSection";
import BrandingPricingTiersSection from "@/components/BrandingPricingTiersSection";

const BrandingAndGraphicDesign = () => {
  return (
    <Layout noPaddingTop>
      <section
        className="relative bg-cover bg-center h-64 flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${brandingGraphicsImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Branding & Graphic Design
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-screen-lg space-y-16">
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-foreground">
            Crafting a Memorable Brand Identity
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We build powerful brand identities that tell your story and connect with your audience. From logos to complete corporate kits, we provide everything you need to make a lasting impression.
          </p>
        </section>

        <BrandingPricingTiersSection />

        <BrandingProcessSection />

        <BrandingRequirementsSection />
      </div>
    </Layout>
  );
};

export default BrandingAndGraphicDesign;