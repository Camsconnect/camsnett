"use client";

import React from "react";
import MenuBar from "@/components/MenuBar";
import { MadeWithDyad } from "@/components/made-with-dyad";
import socialMediaServiceImage from "@/assets/social-media-service.jpeg";

const SocialMediaManagement = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <MenuBar />
      <main className="flex-grow pt-20">
        <section
          className="relative bg-cover bg-center h-64 flex items-center justify-center text-white"
          style={{ backgroundImage: `url(${socialMediaServiceImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Social Media Management
            </h1>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16 max-w-screen-lg">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Grow Your Brand, Engage Your Audience
          </h2>
          <p className="text-lg text-muted-foreground text-center">
            Detailed information about our packages, strategies, and success
            stories is coming soon. Please check back later!
          </p>
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default SocialMediaManagement;