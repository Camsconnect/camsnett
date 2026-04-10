"use client";

import React from "react";
import whyWorkWithUsImage from "@/assets/why-work-with-us-image.png";
import { Lightbulb, Handshake, Search, Rocket, Brain } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    title: "We Believe in Understanding First",
    description:
      "Before we start, we take time to understand your goals, market, and audience — because great execution starts with insight.",
  },
  {
    icon: <Rocket className="h-6 w-6 text-brand-orange" />,
    title: "We Focus on Impact, Not Just Applause",
    description:
      "Our goal isn’t to please you with pretty designs; it’s to help you generate leads, grow your audience, and build lasting brand awareness.",
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
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="text-left">
          <h2 className="text-4xl font-serif text-gray-900 mb-6 tracking-tight">Why Work With Us</h2>
          <p className="text-lg text-gray-600 font-sans mb-8 leading-relaxed">
            At Camsnett, we’re not just another digital agency — we’re a
            collective of passionate, talented freelancers who believe in
            thinking beyond limits. Every project we take on is treated like our
            own, with full dedication, creativity, and accountability.
          </p>
          <p className="text-lg text-gray-900 mb-6 font-medium font-sans">
            Here’s why businesses love working with us:
          </p>
          <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
            {points.map((point, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-gray-200">
                <AccordionTrigger className="text-left hover:no-underline hover:text-brand-orange py-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 bg-brand-orange/10 p-2 rounded-md">{point.icon}</div>
                    <h3 className="font-serif font-medium text-xl">{point.title}</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-16 text-base text-gray-600 font-sans leading-relaxed pb-4">
                  {point.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="flex justify-center">
          <div className="relative">
             <div className="absolute inset-0 bg-brand-orange/5 blur-3xl rounded-full" />
             <img
              src={whyWorkWithUsImage}
              alt="A person smiling while working on a laptop"
              className="w-full max-w-md h-auto object-contain relative z-10 mix-blend-multiply"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUsSection;