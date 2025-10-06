"use client";

import React from "react";
import camsConnectLogo from "@/assets/cams-connect-logo.png";
import camsnettCoLogo from "@/assets/camsnett-co-logo.png";
import camsnettListingsLogo from "@/assets/camsnett-listings-logo.png";

const subBrands = [
  {
    name: "CAMS-CONNECT",
    logo: camsConnectLogo,
    description: "Seamless communication solutions for your business.",
  },
  {
    name: "CAMSNETT CO CREATIVE MINDS",
    logo: camsnettCoLogo,
    description: "Innovative design and marketing strategies.",
  },
  {
    name: "camsnett listings",
    logo: camsnettListingsLogo,
    description: "Get listed, get leads, get sales with our powerful listings.",
  },
];

const SubBrandsSection = () => {
  return (
    <section>
      <h2 className="text-4xl font-light text-foreground text-center mb-12">
        Our Ecosystem
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {subBrands.map((brand) => (
          <div
            key={brand.name}
            className="relative z-10 flex flex-col items-center p-8 rounded-xl bg-card text-foreground border shadow-sm text-center"
          >
            <img
              src={brand.logo}
              alt={`${brand.name} logo`}
              className="w-full h-48 object-cover rounded-md mb-6"
            />
            <h3 className="text-2xl font-semibold mb-2">{brand.name}</h3>
            <p className="text-lg opacity-90">{brand.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SubBrandsSection;