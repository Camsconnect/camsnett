"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import camsConnectLogo from "@/assets/cams-connect-logo.png";
import camsnettCoLogo from "@/assets/camsnett-co-logo.png";
import camsnettListingsLogo from "@/assets/camsnett-listings-logo.png";

const subBrands = [
  {
    name: "Cams-Connect",
    logo: camsConnectLogo,
    description: "Seamless communication solutions for your business.",
  },
  {
    name: "Camsnett Co Creative Minds",
    logo: camsnettCoLogo,
    description: "Innovative design and marketing strategies.",
  },
  {
    name: "Camsnett Listings",
    logo: camsnettListingsLogo,
    description: "Get listed, get leads, get sales with our powerful listings.",
  },
];

const SubBrandsSection = () => {
  return (
    <section className="w-full py-16 bg-transparent text-gray-900 text-center">
      <h2 className="text-4xl font-serif text-gray-900 text-center mb-12 tracking-tight">
        Our Ecosystem
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-screen-xl mx-auto">
        {subBrands.map((brand) => (
          <div
            key={brand.name}
            className="relative z-10 flex flex-col items-center p-4 text-gray-900 text-center"
          >
            <div className="w-full h-48 mb-6 flex items-center justify-center p-6 bg-white rounded-xl shadow-sm">
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </div>
            <h3 className="text-2xl font-serif text-gray-900 mb-2">{brand.name}</h3>
            <p className="text-base text-gray-600 mb-6 flex-grow font-sans">
              {brand.description}
            </p>
            <Button
              variant="outline"
              className="mt-auto border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900 w-full font-sans font-medium rounded-md shadow-sm"
            >
              Find out more
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SubBrandsSection;