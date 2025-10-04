"use client";

import React, { useState } from "react";
import { Users, PlusCircle } from "lucide-react";
import socialMediaImage from "@/assets/social-media-service.jpeg";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const ServicesSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full text-white">
      <h2 className="text-4xl font-thin text-center mb-12">Our Services</h2>
      
      <div className="w-full mb-12">
        <img
          src={socialMediaImage}
          alt="Social media marketing collage"
          className="rounded-lg object-cover w-full h-auto max-h-[400px] shadow-lg mx-auto"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Service Card 1: Social Media */}
        <div className="relative z-10 w-full rounded-xl bg-menubar/10 p-6 text-left shadow-outer-glass backdrop-blur-3xl border border-menubar-border/15 shadow-inner-glass-bottom shadow-inner-glass-stroke supports-[backdrop-filter]:bg-menubar/10 flex flex-col">
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="flex flex-col flex-grow"
          >
            <div className="flex-grow space-y-6">
              <div className="flex flex-col items-start">
                <Users className="h-10 w-10 text-lime-neon mb-4" />
                <h3 className="text-2xl font-semibold mb-3">
                  Social Media Growth, Management & Marketing
                </h3>
                <div className="space-y-4 text-base opacity-80 font-thin leading-relaxed">
                  <p>
                    We help businesses grow and stand out online through strategic
                    content, consistent branding, and performance-driven
                    marketing.
                  </p>
                </div>
              </div>

              <CollapsibleContent className="space-y-4 text-base opacity-80 font-thin leading-relaxed">
                <p>Our service includes:</p>
                <ul className="list-none space-y-2">
                  <li>
                    🎨 Professional Graphics Design – Eye-catching visuals that
                    reflect your brand.
                  </li>
                  <li>
                    📅 Social Media Management – Consistent posting schedules
                    tailored for growth.
                  </li>
                  <li>
                    🧠 Branding & Strategy – Building a strong, recognizable
                    presence.
                  </li>
                  <li>
                    📝 Consultancy – Expert guidance to sharpen your online voice.
                  </li>
                  <li>
                    📢 Targeted Ads – Smart campaigns designed to maximize ROI and
                    outperform competitors.
                  </li>
                </ul>
                <p>
                  When you come to us, we don’t just execute — we listen, analyze
                  your current position, and craft strategies that go beyond your
                  expectations. Our priority is to connect your brand with its
                  audience, build lasting relationships, and turn engagement into
                  real leads and sales.
                </p>
              </CollapsibleContent>
            </div>

            <div className="mt-auto pt-6 text-left">
              <CollapsibleTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-transparent border-lime-neon text-lime-neon hover:bg-lime-neon hover:text-black rounded-full px-8 py-3 text-lg transition-colors duration-300"
                >
                  {isOpen ? "Read Less" : "Read More"}
                </Button>
              </CollapsibleTrigger>
            </div>
          </Collapsible>
        </div>

        {/* Placeholder Cards */}
        {[...Array(3)].map((_, i) => (
          <div 
            key={i} 
            className="relative z-10 w-full rounded-xl bg-menubar/10 p-6 text-white shadow-outer-glass backdrop-blur-3xl border border-menubar-border/15 shadow-inner-glass-bottom shadow-inner-glass-stroke supports-[backdrop-filter]:bg-menubar/10 flex flex-col items-center justify-center text-center min-h-[300px] opacity-60"
          >
            <PlusCircle className="h-12 w-12 text-lime-neon mb-4" />
            <h3 className="text-xl font-semibold mb-2">New Service</h3>
            <p className="opacity-70 font-thin">Coming Soon</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;