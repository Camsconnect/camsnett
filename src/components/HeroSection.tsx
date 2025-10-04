"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.png";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="w-full flex items-center py-12">
      <div className="container px-4 md:px-6 grid gap-10 lg:grid-cols-5 lg:gap-16 items-center max-w-screen-2xl">
        <div className="lg:col-span-2 flex flex-col justify-center space-y-6 text-left order-2 lg:order-1">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Your Online business success starts here
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl font-light">
            From modern website design to business apps, SEO, social media growth
            and management, marketing strategies, and graphic design, we help
            businesses stand out. We create professional branding that gives your
            business a unique image, builds trust, and generates quality leads.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 px-6 text-lg rounded-full"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-6 text-lg rounded-full"
            >
              Learn More
            </Button>
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground font-light text-sm">
                Follow us
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="h-8 w-8 rounded-full border border-muted-foreground flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="h-8 w-8 rounded-full border border-muted-foreground flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="h-8 w-8 rounded-full border border-muted-foreground flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 flex items-center justify-center order-1 lg:order-2">
          <img
            alt="Hero"
            className="rounded-xl object-cover w-full"
            src={heroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;