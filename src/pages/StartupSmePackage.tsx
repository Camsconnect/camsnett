"use client";

import React from "react";
import Layout from "@/components/Layout";
import startupImage from "@/assets/startup-sme-package.jpeg";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Mail,
  Palette,
  Share2,
  DollarSign,
  Users,
  Brain,
} from "lucide-react";
import SmeWebsiteSection from "@/components/SmeWebsiteSection";
import SmeEmailsSection from "@/components/SmeEmailsSection";

const StartupSmePackage = () => {
  const features = [
    { icon: <Globe className="h-6 w-6 text-white/80" />, name: "Web" },
    { icon: <Mail className="h-6 w-6 text-white/80" />, name: "Email" },
    { icon: <Palette className="h-6 w-6 text-white/80" />, name: "Design" },
    { icon: <Share2 className="h-6 w-6 text-white/80" />, name: "Socials" },
    { icon: <DollarSign className="h-6 w-6 text-white/80" />, name: "Sales" },
    { icon: <Users className="h-6 w-6 text-white/80" />, name: "Customers" },
  ];

  return (
    <Layout noPaddingTop>
      <section
        className="relative bg-cover bg-center flex items-center text-white pt-40 pb-20"
        style={{ backgroundImage: `url(${startupImage})` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <div className="relative container mx-auto px-4 w-full">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 lg:col-span-3">
              <div className="w-full aspect-[3/4] bg-black/20 border border-white/20 rounded-lg flex flex-col items-center justify-center p-6 text-center mb-6 shadow-lg max-w-sm mx-auto md:max-w-full">
                <Brain className="h-16 w-16 text-brand-neon mb-4" />
                <h3 className="text-xl font-semibold text-white">
                  All-In-One Package
                </h3>
                <p className="text-sm text-white/70 mt-1">
                  Everything you need to launch.
                </p>
              </div>
              <Button
                size="lg"
                className="w-full bg-brand-neon text-primary-foreground hover:bg-brand-neon/90 text-lg h-14 max-w-sm mx-auto md:max-w-full block"
              >
                Get The Package for $750
              </Button>
            </div>

            <div className="md:col-span-8 lg:col-span-9 md:pl-8 text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-thin tracking-wider uppercase">
                SME Start-up Pack
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl font-light mx-auto md:mx-0">
                Your complete digital foundation. We handle the setup, so you
                can focus on your business.
              </p>
              <div className="mt-8 grid grid-cols-3 sm:grid-cols-6 gap-4 max-w-xl mx-auto md:mx-0">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="aspect-square bg-white/10 border border-white/20 rounded-md flex flex-col items-center justify-center p-2 hover:bg-white/20 transition-colors"
                  >
                    {feature.icon}
                    <span className="text-xs mt-2 text-white/90">
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SmeWebsiteSection />
      <SmeEmailsSection />
    </Layout>
  );
};

export default StartupSmePackage;