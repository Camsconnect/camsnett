"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    client: "SueGuard Risk & Management",
    quote:
      "“We thank you so much — you’ll be gifted with so much from us in the future.”",
    work: "We helped SueGuard enhance their brand image and online consistency, building trust and visibility across digital platforms.",
  },
  {
    client: "EC Cricket Academy",
    quote:
      "“Camsnett has been an incredible partner in helping us grow our academy’s online presence and celebrate every milestone with our players and community.”",
    work: "Our collaboration brought their academy’s spirit to life through engaging visuals, videos, and social storytelling.",
  },
  {
    client: "MyDrive Car Rentals",
    quote: "“We love your videos — they have that international feel to them.”",
    work: "Camsnett’s creative direction gave MyDrive a polished, global look that matched their premium brand experience.",
  },
  {
    client: "SVS Cosmetics",
    quote:
      "“We loved your logo and cover page design! It’s too bad our store sign was already up — we could have used your service.”",
    work: "Their feedback speaks to our strength in branding that blends beauty and professionalism.",
  },
  {
    client: "Purple Celebrations",
    quote: "“We love your designs.”",
    work: "Camsnett continues to bring elegance and creativity to their event setups through clean, captivating visuals.",
  },
  {
    client: "The Laundry Pipo",
    quote: "“We love your designs and videos so much.”",
    work: "Our team keeps their brand fresh, relatable, and customer-focused through consistent visual storytelling.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="w-full text-foreground text-center">
      <h2 className="text-4xl font-light mb-12">What Our Clients Say</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <Card className="flex flex-col h-full text-left shadow-sm border">
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <blockquote className="text-lg font-semibold leading-snug mb-4 flex-grow">
                      {testimonial.quote}
                    </blockquote>
                    <p className="font-bold text-foreground mb-2">
                      {testimonial.client}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.work}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </section>
  );
};

export default TestimonialsSection;