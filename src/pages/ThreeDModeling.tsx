"use client";

import React from "react";
import Layout from "@/components/Layout";
import threeDModelingImage from "@/assets/3d-modeling-service.jpeg";
import ThreeDProcessSection from "@/components/ThreeDProcessSection";
import ThreeDRequirementsSection from "@/components/ThreeDRequirementsSection";
import ThreeDPricingTiersSection from "@/components/ThreeDPricingTiersSection";

const ThreeDModeling = () => {
  return (
    <Layout noPaddingTop>
      <section
        className="relative bg-cover bg-center h-64 flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${threeDModelingImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            3D Modeling & Animation
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-screen-lg space-y-16">
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-foreground">
            Bringing Your Ideas to Life in 3D
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From stunning product visualizations to immersive animations, we create 3D assets that captivate and communicate your vision with precision.
          </p>
        </section>

        <ThreeDPricingTiersSection />

        <ThreeDProcessSection />

        <ThreeDRequirementsSection />
      </div>
    </Layout>
  );
};

export default ThreeDModeling;