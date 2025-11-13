"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import startupImage from "@/assets/startup-sme-package.jpeg";

const StartupSmeSection = () => {
  return (
    <section className="w-full rounded-xl bg-card text-foreground border shadow-sm overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-light mb-4">Startup for SMEs Package</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Give your new business the strong digital foundation it needs to thrive. Our all-in-one package is designed to get you online, build your brand, and start attracting customers from day one.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 bg-brand-neon text-primary-foreground hover:bg-brand-neon/90"
            >
              <Link to="/services/startup-sme-package">Read More</Link>
            </Button>
          </div>
          <div className="flex justify-center">
            <img
              src={startupImage}
              alt="A young plant growing, symbolizing a startup business"
              className="w-full max-w-lg h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupSmeSection;