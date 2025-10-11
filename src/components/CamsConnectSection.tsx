"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import camsConnectCard from "@/assets/cams-connect-card.png";
import { Badge } from "@/components/ui/badge";

const CamsConnectSection = () => {
  return (
    <section
      className="relative w-full rounded-xl border shadow-sm overflow-hidden bg-cover bg-center min-h-[400px] flex items-center"
      style={{ backgroundImage: `url(${camsConnectCard})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="relative z-10 w-full grid md:grid-cols-2 items-center">
        <div /> {/* Spacer column */}
        <div className="p-8 md:p-12 text-center md:text-left text-white">
          <h2 className="text-4xl font-bold mb-4">Cams-Connect</h2>
          <p className="text-xl text-white/90 mb-6">
            Networking reimagined. A frontier in effortless, intelligent
            connections.
          </p>
          <div className="mb-8 flex justify-center md:justify-start">
            <Badge
              variant="secondary"
              className="text-sm font-semibold bg-white/20 text-white border-none"
            >
              Coming Soon
            </Badge>
          </div>
          <Button
            size="lg"
            className="rounded-full px-8 bg-white text-primary hover:bg-white/90"
          >
            Explore
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CamsConnectSection;