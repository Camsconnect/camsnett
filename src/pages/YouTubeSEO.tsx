"use client";

import React from "react";
import Layout from "@/components/Layout";
import youtubeServiceImage from "@/assets/videography-service.jpeg";
import YouTubeSEOPricingTiersSection from "@/components/YouTubeSEOPricingTiersSection";
import YouTubeSEOAddonsSection from "@/components/YouTubeSEOAddonsSection";
import { Separator } from "@/components/ui/separator";

const YouTubeSEO = () => {
  return (
    <Layout noPaddingTop>
      <section
        className="relative bg-cover bg-center h-64 flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${youtubeServiceImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            YouTube SEO & Growth
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-screen-lg space-y-16">
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-foreground">
            Optimize Your Channel for Maximum Reach
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From foundational setup to aggressive growth strategies, we offer tailored packages to help your YouTube channel get discovered, attract viewers, and grow your audience.
          </p>
        </section>

        <YouTubeSEOPricingTiersSection />

        <Separator />

        <YouTubeSEOAddonsSection />
      </div>
    </Layout>
  );
};

export default YouTubeSEO;