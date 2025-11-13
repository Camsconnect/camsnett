"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import all client logos
import logo1 from "@/assets/clients/1.png";
import logo2 from "@/assets/clients/2.png";
import logo3 from "@/assets/clients/3.png";
import logo4 from "@/assets/clients/4.png";
import logo5 from "@/assets/clients/5.png";
import logo6 from "@/assets/clients/6.png";
import logo7 from "@/assets/clients/7.png";
import logo8 from "@/assets/clients/8.png";
import logo9 from "@/assets/clients/9.png";
import logo10 from "@/assets/clients/10.png";
import logo11 from "@/assets/clients/11.png";
import logo12 from "@/assets/clients/12.png";
import logo13 from "@/assets/clients/13.png";
import logo15 from "@/assets/clients/15.png";
import logo16 from "@/assets/clients/16.png";
import logo17 from "@/assets/clients/17.png";
import logo18 from "@/assets/clients/18.png";
import logo19 from "@/assets/clients/19.png";
import logo20 from "@/assets/clients/20.png";
import logo21 from "@/assets/clients/21.png";
import logo22 from "@/assets/clients/22.png";
import logo23 from "@/assets/clients/23.png";
import logo24 from "@/assets/clients/24.png";
import logo25 from "@/assets/clients/25.png";
import logo26 from "@/assets/clients/26.png";
import logo27 from "@/assets/clients/27.png";
import logo28 from "@/assets/clients/28.png";
import logo29 from "@/assets/clients/29.png";
import logo30 from "@/assets/clients/30.png";
import logo31 from "@/assets/clients/31.png";
import logo32 from "@/assets/clients/32.png";
import logo33 from "@/assets/clients/33.png";
import logo34 from "@/assets/clients/34.png";
import logoSila from "@/assets/clients/Sila Academy Logo.png";

const logos = [
  { name: "Client 1", src: logo1 },
  { name: "Client 2", src: logo2 },
  { name: "Client 3", src: logo3 },
  { name: "Client 4", src: logo4 },
  { name: "Client 5", src: logo5 },
  { name: "Client 6", src: logo6 },
  { name: "Client 7", src: logo7 },
  { name: "Client 8", src: logo8 },
  { name: "Client 9", src: logo9 },
  { name: "Client 10", src: logo10 },
  { name: "Client 11", src: logo11 },
  { name: "Client 12", src: logo12 },
  { name: "Client 13", src: logo13 },
  { name: "Client 15", src: logo15 },
  { name: "Client 16", src: logo16 },
  { name: "Client 17", src: logo17 },
  { name: "Client 18", src: logo18 },
  { name: "Client 19", src: logo19 },
  { name: "Client 20", src: logo20 },
  { name: "Client 21", src: logo21 },
  { name: "Client 22", src: logo22 },
  { name: "Client 23", src: logo23 },
  { name: "Client 24", src: logo24 },
  { name: "Client 25", src: logo25 },
  { name: "Client 26", src: logo26 },
  { name: "Client 27", src: logo27 },
  { name: "Client 28", src: logo28 },
  { name: "Client 29", src: logo29 },
  { name: "Client 30", src: logo30 },
  { name: "Client 31", src: logo31 },
  { name: "Client 32", src: logo32 },
  { name: "Client 33", src: logo33 },
  { name: "Client 34", src: logo34 },
  { name: "Sila Academy", src: logoSila },
];

const ClientLogosSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="w-full text-foreground text-center">
      <h2 className="text-4xl font-light mb-12">
        Join Leading Businesses That Work With Us
      </h2>
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {logos.map((logo, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
            >
              <div className="flex items-center justify-center h-24 p-4">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-full max-w-full object-contain transition-all duration-300"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default ClientLogosSection;