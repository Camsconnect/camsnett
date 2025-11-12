"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Palette, Contact, Newspaper, Nfc } from "lucide-react";

const designServices = [
  {
    icon: <Palette className="h-8 w-8 text-brand-neon" />,
    title: "Logo Design",
    description: "We will design a unique and memorable logo to represent your brand's identity.",
    price: "From $50",
    deliverables: ["1 Day Delivery", "3 Digital Samples"],
  },
  {
    icon: <Contact className="h-8 w-8 text-brand-neon" />,
    title: "Business Card Design",
    description: "We will design a professional business card that makes a lasting impression.",
    price: "From $15",
    deliverables: ["1 Day Delivery", "3 Digital Samples"],
  },
  {
    icon: <Newspaper className="h-8 w-8 text-brand-neon" />,
    title: "Flier Design",
    description: "We will design an eye-catching flier to promote your event, product, or service.",
    price: "From $25",
    deliverables: ["1 Day Delivery", "3 Digital Samples"],
  },
  {
    icon: <Nfc className="h-8 w-8 text-brand-neon" />,
    title: "Digital NFC Cards",
    description: "Modern networking with our smart, tap-to-share digital business cards.",
    price: "From $7 / month",
    deliverables: ["Coming in DEC"],
    comingSoon: true,
  },
];

const GraphicDesignServicesSection = () => {
  return (
    <section className="w-full text-foreground">
      <h2 className="text-4xl font-light text-center mb-4">Graphic Design Services</h2>
      <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
        From logos to business cards, we craft stunning visuals that tell your story and elevate your brand.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {designServices.map((service, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between">
                {service.icon}
                {service.comingSoon && <Badge variant="secondary">Coming Soon</Badge>}
              </div>
              <CardTitle className="pt-4">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
              <div className="mb-4">
                {service.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center text-sm text-muted-foreground mb-1">
                    <Check className="h-4 w-4 mr-2 text-brand-neon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-2xl font-bold mb-6">{service.price}</div>
              <Button variant="outline" className="w-full mt-auto">
                Get Started
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default GraphicDesignServicesSection;