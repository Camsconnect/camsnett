"use client";

import React from "react";
import MenuBar from "@/components/MenuBar";
import { MadeWithDyad } from "@/components/made-with-dyad";
import businessAppServiceImage from "@/assets/business-app-service.jpeg";
import BusinessAppProcessSection from "@/components/BusinessAppProcessSection";
import BusinessAppRequirementsSection from "@/components/BusinessAppRequirementsSection";
import BusinessAppPricingTiersSection from "@/components/BusinessAppPricingTiersSection";

const BusinessAppDevelopment = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <MenuBar />
      <main className="flex-grow pt-20">
        <section
          className="relative bg-cover bg-center h-64 flex items-center justify-center text-white"
          style={{ backgroundImage: `url(${businessAppServiceImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Business App Development
            </h1>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16 max-w-screen-lg space-y-16">
          <section className="text-center">
            <h2 className="text-3xl font-semibold mb-4 text-foreground">
              Powering Your Business with a Custom App
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We design and develop custom mobile applications that streamline operations, engage customers, and drive growth.
            </p>
          </section>

          <BusinessAppPricingTiersSection />

          <BusinessAppProcessSection />

          <BusinessAppRequirementsSection />
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default BusinessAppDevelopment;