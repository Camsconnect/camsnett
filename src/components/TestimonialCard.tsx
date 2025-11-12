"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const TRUNCATE_LENGTH = 150;

interface Testimonial {
  client: string;
  quote: string;
  work: string;
  avatar: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isLongQuote = testimonial.quote.length > TRUNCATE_LENGTH;

  return (
    <Card className="flex flex-col h-full text-left shadow-sm border">
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 mb-4">
          <Avatar>
            <AvatarImage src={testimonial.avatar} alt={testimonial.client} />
            <AvatarFallback>
              {testimonial.client
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-bold text-foreground">{testimonial.client}</p>
            <p className="text-sm text-muted-foreground">{testimonial.work}</p>
          </div>
        </div>

        <div className="flex-grow flex flex-col">
          {isLongQuote ? (
            <Collapsible
              open={isOpen}
              onOpenChange={setIsOpen}
              className="flex-grow flex flex-col"
            >
              <div className="flex-grow">
                <blockquote className="text-base text-muted-foreground leading-relaxed">
                  {testimonial.quote.substring(0, TRUNCATE_LENGTH)}
                  {!isOpen && "..."}
                </blockquote>
                <CollapsibleContent>
                  <blockquote className="text-base text-muted-foreground leading-relaxed">
                    {testimonial.quote.substring(TRUNCATE_LENGTH)}
                  </blockquote>
                </CollapsibleContent>
              </div>
              <CollapsibleTrigger asChild>
                <Button
                  variant="link"
                  className="p-0 h-auto text-brand-neon hover:text-brand-neon/80 justify-start mt-2"
                >
                  {isOpen ? "Read Less" : "Read More"}
                </Button>
              </CollapsibleTrigger>
            </Collapsible>
          ) : (
            <blockquote className="text-base text-muted-foreground leading-relaxed flex-grow">
              {testimonial.quote}
            </blockquote>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;