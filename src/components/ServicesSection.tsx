"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  Megaphone,
  Palette,
  Smartphone,
  Video,
  Cube,
} from "lucide-react";
import SearchBar from "./SearchBar";

const services = [
  {
    icon: <Megaphone className="h-8 w-8 text-green-500" />,
    title: "Social Media Management",
    description:
      "Engaging your audience and growing your online presence across all major platforms.",
    link: "/services/social-media-management",
  },
  {
    icon: <Code className="h-8 w-8 text-purple-500" />,
    title: "Web Design",
    description:
      "Building responsive, high-performance websites that deliver exceptional user experiences.",
    link: "/services/web-design",
  },
  {
    icon: <Palette className="h-8 w-8 text-blue-500" />,
    title: "Branding & Graphic Design",
    description:
      "Crafting unique visual identities that tell your story and resonate with your audience.",
    link: "/services/branding-and-graphic-design",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-red-500" />,
    title: "Business App Development",
    description:
      "Creating custom mobile apps to streamline operations and connect with your customers.",
    link: "/services/business-app-development",
  },
  {
    icon: <Video className="h-8 w-8 text-orange-500" />,
    title: "Videography",
    description:
      "Producing compelling video content that captures attention and tells your brand's story.",
    link: "/services/videography",
  },
  {
    icon: <Cube className="h-8 w-8 text-yellow-500" />,
    title: "3D Modeling & Animation",
    description:
      "Bringing your ideas to life with stunning 3D models and captivating animations.",
    link: "/services/3d-modeling",
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
            <Link to={service.link} key={index} className="group">
              <Card className="bg-card border h-full transition-all duration-300 group-hover:border-primary group-hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-muted p-3 rounded-full">
                      {service.icon}
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link to="/pricing">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;