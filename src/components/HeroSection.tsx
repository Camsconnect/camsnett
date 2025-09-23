"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-48 bg-gradient-to-r from-emerald-600 to-green-800 text-white flex items-center justify-center">
      <div className="container text-center px-4 md:px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
          Welcome to Your Awesome App
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 opacity-90">
          Discover innovative solutions and streamline your workflow with our cutting-edge platform.
          Join us and experience the future today!
        </p>
        <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100 hover:text-emerald-800 text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;