"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import aboutUsImage from "@/assets/about-us-image.jpeg";

const AboutUsSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-10 w-full rounded-xl bg-card p-8 text-foreground border shadow-sm">
      <h2 className="text-4xl font-thin mb-8 text-center">About Us</h2>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <img
            src={aboutUsImage}
            alt="A diverse team of freelancers working in a modern office space"
            className="rounded-lg object-cover w-full h-full shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="space-y-6"
          >
            <div className="text-lg opacity-90 space-y-6 text-left">
              <p>
                Camsnett is a collective of talented freelancers from diverse
                industries, united by a shared passion for innovation and
                excellence. Our team brings together some of the best graphic
                designers, web designers, app developers, videographers,
                photographers, and editors , each an expert in their craft.
              </p>
              <p>
                For over four years, we’ve partnered with both start-ups and
                established companies, helping them build strong digital
                foundations and scale their presence.
              </p>
            </div>

            <CollapsibleContent className="space-y-6 text-lg opacity-90 text-left">
              <p>
                As we’ve grown in size and reach, we’ve gained extensive
                experience in integrating the latest technologies into
                businesses to help them thrive in the modern digital landscape.
              </p>
              <p>
                We specialize in growing the face of a business online,
                expanding its audience, and providing smart tools that make
                service delivery seamless and manageable. From modern websites
                and e-commerce platforms to accounting systems, databases, CRMs,
                and analytic dashboards, we empower businesses with solutions
                that drive growth, efficiency, and long-term success.
              </p>
            </CollapsibleContent>

            <div className="mt-10 text-left">
              <CollapsibleTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-transparent border-lime-neon text-lime-neon hover:bg-lime-neon hover:text-black rounded-full px-6 py-3 text-lg transition-colors duration-300"
                >
                  {isOpen ? "Read Less" : "Read More"}
                </Button>
              </CollapsibleTrigger>
            </div>
          </Collapsible>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;