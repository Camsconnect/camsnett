"use client";

import React from "react";
import Layout from "@/components/Layout";
import socialMediaServiceImage from "@/assets/social-media-service.jpeg";
import ProcessSection from "@/components/ProcessSection";
import RequirementsSection from "@/components/RequirementsSection";
import PricingTiersSection from "@/components/PricingTiersSection";

const SocialMediaManagement = () => {
  return (
    <Layout noPaddingTop>
      <section
        className="relative bg-cover bg-center h-64 flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${socialMediaServiceImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Social Media Management
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-screen-lg space-y-16">
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-foreground">
            How to Get Started
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Getting started is simple — just choose a package that fits your
            business size, goals, and budget. We offer three flexible plans
            designed for different needs and industries.
          </p>
        </section>

        <PricingTiersSection />

        <ProcessSection />

        <RequirementsSection />
      </div>
    </Layout>
  );
};

export default SocialMediaManagement;