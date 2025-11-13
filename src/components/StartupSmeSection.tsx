"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import startupImage from "@/assets/startup-sme-package.jpeg";

const StartupSmeSection = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center py-24"
      style={{ backgroundImage: `url(${startupImage})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Startup for SMEs Package
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Give your new business the strong digital foundation it needs to
            thrive. Our all-in-one package is designed to get you online, build
            your brand, and start attracting customers from day one.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 bg-brand-neon text-primary-foreground hover:bg-brand-neon/90"
          >
            <Link to="/services/startup-sme-package">Read More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StartupSmeSection;