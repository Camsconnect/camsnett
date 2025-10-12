"use client";

import React from "react";
import whyWorkWithUsImage from "@/assets/why-work-with-us-image.png";
import { Lightbulb, Handshake, Search, Rocket, Brain } from "lucide-react";

const points = [
  {
    icon: <Lightbulb className="h-6 w-6 text-brand-neon" />,
    title: "We Think Beyond the Vision",
    description:
      "We don’t just deliver what you ask for; we look deeper to improve, elevate, and push your brand further.",
  },
  {
    icon: <Handshake className="h-6 w-6 text-brand-neon" />,
    title: "We Own What We Do",
    description:
      "Our mindset isn’t just “providing a service.” We take responsibility for results and treat every project like it’s ours.",
  },
  {
    icon: <Search className="h-6 w-6 text-brand-neon" />,
    title: "We Believe in Understanding First",
    description:
      "Before we start, we take time to understand your goals, market, and audience — because great execution starts with insight.",
  },
  {
    icon: <Rocket className="h-6 w-6 text-brand-neon" />,
    title: "We Focus on Impact, Not Just Applause",
    description:
      "Our goal isn’t to please you with pretty designs; it’s to help you generate leads, grow your audience, and build lasting brand awareness.",
  },
  {
    icon: <Brain className="h-6 w-6 text-brand-neon" />,
    title: "We Take Pride in Thinking",
    description:
      "Strategy, creativity, and innovation drive everything we do. We think smart before we act.",
  },
];

const WhyWorkWithUsSection = () => {
  return (
    <section className="w-full">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <h2 className="text-4xl font-light mb-6">Why Work With Us</h2>
          <p className="text-lg text-muted-foreground mb-8">
            At Camsnett, we’re not just another digital agency — we’re a
            collective of passionate, talented freelancers who believe in
            thinking beyond limits. Every project we take on is treated like our
            own, with full dedication, creativity, and accountability.
          </p>
          <p className="text-lg text-muted-foreground mb-8 font-semibold">
            Here’s why businesses love working with us:
          </p>
          <div className="space-y-6">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">{point.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={whyWorkWithUsImage}
            alt="A person smiling while working on a laptop"
            className="w-full max-w-md h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUsSection;