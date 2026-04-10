"use client";

import React from "react";
import whyWorkWithUsImage from "@/assets/why-work-with-us-image.png";
import { Lightbulb, Handshake, Search, Rocket, Brain } from "lucide-react";

const points = [
  {
    icon: <Lightbulb className="h-6 w-6 text-brand-orange" />,
    title: "We Think Beyond the Vision",
    description:
      "We don’t just deliver what you ask for; we look deeper to improve, elevate, and push your brand further.",
  },
  {
    icon: <Handshake className="h-6 w-6 text-brand-orange" />,
    title: "We Own What We Do",
    description:
      "Our mindset isn’t just “providing a service.” We take responsibility for results and treat every project like it’s ours.",
  },
  {
    icon: <Search className="h-6 w-6 text-brand-orange" />,
    title: "Understanding First",
    description:
      "Before we start, we take time to understand your goals, market, and audience — because great execution starts with insight.",
  },
  {
    icon: <Rocket className="h-6 w-6 text-brand-orange" />,
    title: "Focus on Impact",
    description:
      "Our goal isn’t to please you with pretty designs; it’s to help you generate leads, grow your audience, and build lasting awareness.",
  },
  {
    icon: <Brain className="h-6 w-6 text-brand-orange" />,
    title: "We Take Pride in Thinking",
    description:
      "Strategy, creativity, and innovation drive everything we do. We think smart before we act.",
  },
];

const WhyWorkWithUsSection = () => {
  return (
    <section className="w-full">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-serif text-gray-900 mb-6 tracking-tight">Why Work With Us</h2>
        <p className="text-lg text-gray-600 font-sans leading-relaxed">
          At Camsnett, we’re not just another digital agency — we’re a
          collective of passionate, talented freelancers who believe in
          thinking beyond limits. Every project we take on is treated like our
          own, with full dedication, creativity, and accountability.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Left: Image (Spans 5 cols) */}
        <div className="lg:col-span-5 flex justify-center lg:sticky lg:top-32">
          <div className="relative w-full max-w-md">
             <div className="absolute inset-0 bg-brand-orange/5 blur-3xl rounded-full" />
             <img
              src={whyWorkWithUsImage}
              alt="A person smiling while working on a laptop"
              className="w-full h-auto object-contain relative z-10 mix-blend-multiply"
             />
          </div>
        </div>

        {/* Right: Grid of Points (Spans 7 cols) */}
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
          {points.map((point, index) => (
            <div 
              key={index} 
              className={`bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:border-brand-orange/30 hover:shadow-md ${index === 4 ? 'sm:col-span-2' : ''}`}
            >
              <div className="flex-shrink-0 bg-brand-orange/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                {point.icon}
              </div>
              <h3 className="font-serif font-medium text-xl text-gray-900 mb-3">
                {point.title}
              </h3>
              <p className="text-sm text-gray-600 font-sans leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUsSection;