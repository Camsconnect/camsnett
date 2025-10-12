"use client";

import React from "react";
import Layout from "@/components/Layout";
import videographyServiceImage from "@/assets/videography-service.jpeg";
import VideographyProcessSection from "@/components/VideographyProcessSection";
import VideographyRequirementsSection from "@/components/VideographyRequirementsSection";
import VideographyPricingTiersSection from "@/components/VideographyPricingTiersSection";
import WeddingEventsPricingSection from "@/components/WeddingEventsPricingSection";
import { Separator } from "@/components/ui/separator";

const Videography = () => {
  return (
    <Layout noPaddingTop>
      <section
        className="relative bg-cover bg-center h-64 flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${videographyServiceImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Videography & Production
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-screen-lg space-y-16">
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-foreground">
            Bringing Your Vision to Life Through Video
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From social media reels to cinematic commercials, we create compelling visual stories that engage, inspire, and drive action.
          </p>
        </section>

        <VideographyPricingTiersSection />

        <Separator />

        <WeddingEventsPricingSection />

        <VideographyProcessSection />

        <VideographyRequirementsSection />
      </div>
    </Layout>
  );
};

export default Videography;