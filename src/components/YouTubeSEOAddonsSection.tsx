"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const addons = [
  {
    name: "Thumbnail Design Only",
    price: "$25 - $50 / image",
  },
  {
    name: "YouTube Shorts Optimization",
    price: "$20 / Short",
  },
  {
    name: "Closed Captions (SRT File)",
    price: "$2 / minute of video",
  },
  {
    name: "Content Plan (20 Video Ideas)",
    price: "$150 one-time",
  },
];

const YouTubeSEOAddonsSection = () => {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-semibold mb-4 text-foreground">
        A La Carte Services
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
        Need something specific? Add any of these services to your package or order them individually.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
        {addons.map((addon, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-xl">{addon.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-brand-neon">{addon.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default YouTubeSEOAddonsSection;