"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Search,
  Users,
  MessageSquare,
  Palette,
  Settings,
  CalendarDays,
  BarChart,
} from "lucide-react";

const processSteps = [
  {
    icon: <Search className="h-8 w-8 text-brand-neon" />,
    title: "Business Discovery",
    description:
      "We start by reviewing your company information to understand what makes your brand unique.",
  },
  {
    icon: <Users className="h-8 w-8 text-brand-neon" />,
    title: "Market & Audience Research",
    description:
      "We analyze your industry, products or services, and ideal audience to identify growth opportunities.",
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-brand-neon" />,
    title: "Client Consultation",
    description:
      "We discuss your specific goals, expectations, and desired results to ensure our strategy aligns with your vision.",
  },
  {
    icon: <Palette className="h-8 w-8 text-brand-neon" />,
    title: "Brand Evaluation",
    description:
      "We assess your existing graphics, logo, color palette, and overall brand identity to maintain consistency and professionalism.",
  },
  {
    icon: <Settings className="h-8 w-8 text-brand-neon" />,
    title: "Setup & Access",
    description:
      "We create or organize your social accounts, handle admin access, and ensure everything is ready for management.",
  },
  {
    icon: <CalendarDays className="h-8 w-8 text-brand-neon" />,
    title: "Branding & Content Planning",
    description:
      "We design branded visuals, set up page themes, and prepare your social media calendar for consistent posting.",
  },
  {
    icon: <BarChart className="h-8 w-8 text-brand-neon" />,
    title: "Execution & Reporting",
    description:
      "Our team handles posting, engagement, and ads while sending you weekly progress reports summarizing what’s done and what’s next.",
  },
];

const ProcessSection = () => {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-semibold mb-4 text-foreground">
        What Happens Next
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
        Once you’ve chosen your package, our team gets to work. We follow a
        simple but powerful process designed to understand your brand and
        deliver real growth results.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {processSteps.map((step, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader className="flex-row items-center gap-4 space-y-0">
              {step.icon}
              <CardTitle>{step.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-12">
        With Camsnett, you’re not just getting social media management — you’re
        gaining a dedicated digital partner focused on making your brand grow.
      </p>
    </section>
  );
};

export default ProcessSection;