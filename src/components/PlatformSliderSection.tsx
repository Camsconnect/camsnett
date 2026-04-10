"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { 
  AppWindow, 
  Heart, 
  Globe, 
  CheckSquare, 
  GraduationCap, 
  Building2, 
  Wrench, 
  Users 
} from "lucide-react";

const platforms = [
  {
    title: "Web & Mobile Apps",
    description: "Custom-built, high-performance applications designed for iOS, Android, and modern web browsers.",
    icon: <AppWindow className="h-6 w-6 text-brand-orange" />
  },
  {
    title: "Business Websites",
    description: "Sleek, professional, and SEO-optimized websites built to convert visitors into loyal customers.",
    icon: <Globe className="h-6 w-6 text-brand-orange" />
  },
  {
    title: "Wedding & Event Platforms",
    description: "Beautifully crafted digital invites, RSVP management, and custom event websites.",
    icon: <Heart className="h-6 w-6 text-brand-orange" />
  },
  {
    title: "Learning Platforms (LMS)",
    description: "Comprehensive e-learning systems for online courses, employee training, and education.",
    icon: <GraduationCap className="h-6 w-6 text-brand-orange" />
  },
  {
    title: "Company Management",
    description: "Secure internal portals, ERPs, and complete business management dashboards.",
    icon: <Building2 className="h-6 w-6 text-brand-orange" />
  },
  {
    title: "Client Systems (CRM)",
    description: "Tailored customer relationship management tools to track leads, sales, and interactions.",
    icon: <Users className="h-6 w-6 text-brand-orange" />
  },
  {
    title: "Personalized POS Systems",
    description: "Custom Point of Sale and inventory systems engineered for trades like plumbing, retail, or hospitality.",
    icon: <Wrench className="h-6 w-6 text-brand-orange" />
  },
  {
    title: "Voting Platforms",
    description: "Secure, reliable, and user-friendly digital voting systems for organizations and competitions.",
    icon: <CheckSquare className="h-6 w-6 text-brand-orange" />
  }
];

const PlatformSliderSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="py-20 bg-transparent border-t border-gray-200">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-gray-900 mb-4 tracking-tight">What We Build</h2>
          <p className="text-lg text-gray-600 font-sans max-w-2xl mx-auto">
            From bespoke business applications to specialized trade systems, we engineer platforms tailored to your exact operational needs.
          </p>
        </div>

        <div className="relative">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {platforms.map((platform, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="bg-white p-6 rounded-lg border border-gray-200 h-full flex flex-col hover:border-brand-orange/40 transition-colors shadow-sm">
                    <div className="bg-[#FAF9F6] w-12 h-12 rounded-md flex items-center justify-center mb-6 border border-gray-100">
                      {platform.icon}
                    </div>
                    <h3 className="text-xl font-serif text-gray-900 mb-3">{platform.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-sans">
                      {platform.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 border-gray-200 hover:text-brand-orange hover:border-brand-orange/50" />
              <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 border-gray-200 hover:text-brand-orange hover:border-brand-orange/50" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PlatformSliderSection;