"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import camsBusketImage from "@/assets/cams-busket-image.jpeg";
import { Badge } from "@/components/ui/badge";

const CamsBusketSection = () => {
  return (
    <section className="w-full rounded-xl bg-card text-foreground border shadow-sm overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-[29px] font-thin mb-4">Cams-Busket</h2>
            <p className="text-[18px] text-muted-foreground mb-6">
              A new platform for business owners, listing services and delivery
              bikers, much like Uber Eats.
            </p>
            <div className="mb-8 flex justify-center md:justify-start">
              <Badge variant="secondary" className="text-sm font-semibold">
                Coming Soon
              </Badge>
            </div>
            <Button
              size="lg"
              className="rounded-full px-8 bg-brand-neon text-primary-foreground hover:bg-brand-neon/90"
            >
              Explore
            </Button>
          </div>
          <div className="flex justify-center">
            <img
              src={camsBusketImage}
              alt="Illustration of a delivery biker and customers"
              className="w-full max-w-lg h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CamsBusketSection;