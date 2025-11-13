"use client";

import React from "react";
import Layout from "@/components/Layout";
import startupImage from "@/assets/startup-sme-package.jpeg";

const StartupSmePackage = () => {
  return (
    <Layout noPaddingTop>
      <section
        className="relative bg-cover bg-center h-64 flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${startupImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Startup for SMEs Package
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Your all-in-one solution to launch and grow your business.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-screen-lg space-y-16">
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-foreground">
            Package Details Coming Soon
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are finalizing the details of this exciting new package. Check back soon for more information on pricing, features, and how we can help your business succeed from the start.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default StartupSmePackage;