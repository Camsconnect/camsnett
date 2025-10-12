"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Megaphone, Palette } from "lucide-react";
import SearchBar from "./SearchBar";

const services = [
  {
    icon: <Palette className="h-8 w-8 text-blue-500" />,
    title: "Branding & Design",
    description:
      "Crafting unique visual identities that tell your story and resonate with your audience.",
  },
  {
    icon: <Megaphone className="h-8 w-8 text-green-500" />,
    title: "Digital Marketing",
    description:
      "Driving growth through strategic online campaigns, SEO, and social media engagement.",
  },
  {
    icon: <Code className="h-8 w-8 text-purple-500" />,
    title: "Web Development",
    description:
      "Building responsive, high-performance websites that deliver exceptional user experiences.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-12 md:py-24 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6 max-w-screen-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            We offer a comprehensive suite of services to elevate your brand and
            business.
          </p>
        </div>

        <div className="mb-12">
          <SearchBar />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-muted p-3 rounded-full">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg">
            View All Services <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;