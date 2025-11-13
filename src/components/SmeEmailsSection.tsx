"use client";

import React from "react";
import { CheckCircle, AtSign } from "lucide-react";
import smeEmailsImage from "@/assets/sme-professional-emails.jpeg";

const benefits = [
  {
    name: "Builds Credibility",
    description: "A professional email address inspires trust with customers.",
  },
  {
    name: "Enhances Brand Recognition",
    description: "Reinforce your brand name with every message you send.",
  },
  {
    name: "Improves Security",
    description: "Benefit from enhanced security features over free email providers.",
  },
  {
    name: "Keeps You Organized",
    description: "Separate your personal and business communications effectively.",
  },
];

const SmeEmailsSection = () => {
  return (
    <section className="bg-gray-900 py-16 md:py-24 px-4 sm:px-8 md:px-12">
      <div className="bg-black/20 border border-white/10 rounded-xl overflow-hidden grid md:grid-cols-2 text-white">
        <div className="relative min-h-[300px] md:min-h-0 order-1 md:order-1">
          <img
            src={smeEmailsImage}
            alt="Professional working with email icons"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="p-8 md:p-12 order-2 md:order-2">
          <h2 className="text-3xl font-semibold mb-4">
            Look Professional with Custom Email
          </h2>
          <p className="text-lg text-gray-400 mb-6">
            Build trust and brand recognition with every email you send. Our
            package includes up to 15 custom email addresses linked to your
            domain.
          </p>
          <div className="bg-white/10 border border-white/20 rounded-md p-4 flex items-center gap-3 mb-8">
            <AtSign className="h-6 w-6 text-brand-neon flex-shrink-0" />
            <p className="text-lg font-mono tracking-wider">
              your.name@yourdomain.com
            </p>
          </div>
          <ul className="space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit.name} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-brand-neon mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">{benefit.name}</h4>
                  <p className="text-sm text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SmeEmailsSection;