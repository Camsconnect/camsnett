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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import testimonialAvatar1 from "@/assets/avatars/testimonial-1.png";
import testimonialAvatar2 from "@/assets/avatars/testimonial-2.png";
import testimonialAvatar3 from "@/assets/avatars/testimonial-3.png";

const testimonials = [
  {
    client: "SueGuard Risk & Management",
    quote:
      "“We thank you so much — you’ll be gifted with so much from us in the future.”",
    work: "Enhanced brand image and online consistency.",
    avatar: testimonialAvatar1,
  },
  {
    client: "EC Cricket Academy",
    quote:
      "“Camsnett has been an incredible partner in helping us grow our academy’s online presence and celebrate every milestone with our players and community.”",
    work: "Brought academy's spirit to life online.",
    avatar: testimonialAvatar2,
  },
  {
    client: "MyDrive Car Rentals",
    quote: "“We love your videos — they have that international feel to them.”",
    work: "Gave MyDrive a polished, global look.",
    avatar: testimonialAvatar3,
  },
  {
    client: "SVS Cosmetics",
    quote:
      "“We loved your logo and cover page design! It’s too bad our store sign was already up — we could have used your service.”",
    work: "Branding that blends beauty and professionalism.",
    avatar: testimonialAvatar1,
  },
  {
    client: "Purple Celebrations",
    quote: "“We love your designs.”",
    work: "Brought elegance and creativity to their events.",
    avatar: testimonialAvatar2,
  },
  {
    client: "The Laundry Pipo",
    quote: "“We love your designs and videos so much.”",
    work: "Kept their brand fresh and customer-focused.",
    avatar: testimonialAvatar3,
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
                    <div className="flex items-center justify-end gap-3 mt-auto">
                      <div className="text-right">
                        <p className="font-bold text-foreground">
                          {testimonial.client}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.work}
                        </p>
                      </div>
                      <Avatar>
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.client}
                        />
                        <AvatarFallback>
                          {testimonial.client
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </div>
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