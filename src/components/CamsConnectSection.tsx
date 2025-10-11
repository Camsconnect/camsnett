"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import camsConnectCard from "@/assets/cams-connect-card.png";
import { Badge } from "@/components/ui/badge";

const CamsConnectSection = () => {
  return (
    <section className="w-full rounded-xl bg-card text-foreground border shadow-sm overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src={camsConnectCard}
              alt="Cams-Connect NFC Card and packaging"
              className="max-w-md w-full h-auto object-contain"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">Cams-Connect</h2>
            <p className="text-xl text-muted-foreground mb-6">
              Networking reimagined. A frontier in effortless, intelligent
              connections.
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
        </div>
      </div>
    </section>
  );
};

export default CamsConnectSection;