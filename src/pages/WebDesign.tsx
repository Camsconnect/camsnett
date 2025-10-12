"use client";

import React from "react";
import Layout from "@/components/Layout";
import webDesignServiceImage from "@/assets/web-design-service.jpeg";
import WebDesignProcessSection from "@/components/WebDesignProcessSection";
import WebDesignRequirementsSection from "@/components/WebDesignRequirementsSection";
import WebDesignPricingTiersSection from "@/components/WebDesignPricingTiersSection";

const WebDesign = () => {
  return (
    <Layout noPaddingTop>
      <section
        className="relative bg-cover bg-center h-64 flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${webDesignServiceImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Web Design & Development
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-screen-lg space-y-16">
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-foreground">
            Crafting Your Digital Presence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We build modern, responsive websites that capture your brand and convert visitors into customers. Explore our packages to find the perfect fit for your business.
          </p>
        </section>

        <WebDesignPricingTiersSection />

        <WebDesignProcessSection />

        <WebDesignRequirementsSection />
      </div>
    </Layout>
  );
};

export default WebDesign;