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

  return (
    <Card className="flex flex-col h-full text-left shadow-sm border">
      <CardContent className="p-6 flex flex-col flex-grow">
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="flex flex-col flex-grow"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-bold text-foreground">{testimonial.client}</p>
              <p className="text-sm text-muted-foreground">
                {testimonial.work}
              </p>
            </div>
            <Avatar>
              <AvatarImage src={testimonial.avatar} alt={testimonial.client} />
              <AvatarFallback>
                {testimonial.client
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="flex-grow mt-4">
            <CollapsibleContent>
              <blockquote className="text-base text-muted-foreground leading-relaxed border-l-2 pl-4 italic">
                {testimonial.quote}
              </blockquote>
            </CollapsibleContent>
          </div>

          <CollapsibleTrigger asChild className="mt-auto pt-2">
            <Button
              variant="link"
              className="p-0 h-auto text-brand-neon hover:text-brand-neon/80 justify-start"
            >
              {isOpen ? "Hide Quote" : "Read Quote"}
            </Button>
          </CollapsibleTrigger>
        </Collapsible>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;