"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const AboutUsSection = () => {
  return (
    <div className="relative z-10 w-full rounded-xl bg-menubar/10 p-8 text-center text-white shadow-outer-glass backdrop-blur-3xl border border-menubar-border/15 shadow-inner-glass-bottom shadow-inner-glass-stroke supports-[backdrop-filter]:bg-menubar/10">
      <h2 className="text-4xl font-thin mb-8">About Us</h2>
      <div className="text-lg opacity-90 space-y-6 text-left max-w-3xl mx-auto">
        <p>
          Camsnett is a collective of talented freelancers from diverse
          industries, united by a shared passion for innovation and excellence.
          Our team brings together some of the best graphic designers, web
          designers, app developers, videographers, photographers, and editors ,
          each an expert in their craft.
        </p>
        <p>
          For over four years, we’ve partnered with both start-ups and
          established companies, helping them build strong digital foundations
          and scale their presence.
        </p>
        <p>
          As we’ve grown in size and reach, we’ve gained extensive experience in
          integrating the latest technologies into businesses to help them
          thrive in the modern digital landscape.
        </p>
        <p>
          We specialize in growing the face of a business online, expanding its
          audience, and providing smart tools that make service delivery
          seamless and manageable. From modern websites and e-commerce
          platforms to accounting systems, databases, CRMs, and analytic
          dashboards, we empower businesses with solutions that drive growth,
          efficiency, and long-term success.
        </p>
      </div>
      <div className="mt-10">
        <Button
          variant="outline"
          className="bg-transparent border-lime-neon text-lime-neon hover:bg-lime-neon hover:text-black rounded-full px-8 py-3 text-lg transition-colors duration-300"
        >
          Read More
        </Button>
      </div>
    </div>
  );
};

export default AboutUsSection;