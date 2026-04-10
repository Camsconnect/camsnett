"use client";

import React from "react";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface PricingCardProps {
  name: string;
  price: string;
  frequency?: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  highlight?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  frequency,
  description,
  features,
  cta,
  popular,
  highlight,
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col bg-white rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl",
        popular
          ? "border-brand-orange shadow-md md:scale-[1.03] z-10"
          : "border-gray-200 hover:border-brand-orange/30",
        highlight
          ? "border-purple-300 shadow-purple-100 shadow-xl md:scale-[1.03] z-10"
          : "",
        "h-full"
      )}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm whitespace-nowrap">
          Most Popular
        </div>
      )}
      {highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1 whitespace-nowrap">
          <Sparkles className="w-3 h-3" /> AI Powered
        </div>
      )}

      <div className="mb-6 mt-2">
        <h3 className="text-2xl font-serif text-gray-900 mb-3">{name}</h3>
        <p className="text-gray-500 text-sm font-sans min-h-[40px] leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mb-8 flex items-baseline gap-1 border-b border-gray-100 pb-8">
        <span className="text-4xl font-sans font-bold text-gray-900">
          {price}
        </span>
        {frequency && (
          <span className="text-gray-500 font-sans text-sm font-medium">
            {frequency}
          </span>
        )}
      </div>

      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <Check
              className={cn(
                "h-5 w-5 mr-3 shrink-0",
                highlight ? "text-purple-500" : "text-brand-orange"
              )}
            />
            <span className="text-gray-600 font-sans text-sm leading-relaxed">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        className={cn(
          "w-full mt-auto font-sans font-medium text-base py-6 transition-all",
          popular
            ? "bg-brand-orange hover:bg-[#c26547] text-white shadow-md"
            : highlight
            ? "bg-purple-600 hover:bg-purple-700 text-white shadow-md"
            : "bg-white border-2 border-gray-200 text-gray-900 hover:border-brand-orange hover:bg-brand-orange/5"
        )}
        variant={popular || highlight ? "default" : "outline"}
      >
        <a
          href="https://wa.me/2763049876"
          target="_blank"
          rel="noopener noreferrer"
        >
          {cta}
        </a>
      </Button>
    </div>
  );
};

export default PricingCard;