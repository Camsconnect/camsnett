"use client";

import React from "react";
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
    icon: <Search className="h-5 w-5 text-brand-neon" />,
    title: "Business Discovery",
    description:
      "We start by reviewing your company information to understand what makes your brand unique.",
  },
  {
    icon: <Users className="h-5 w-5 text-brand-neon" />,
    title: "Market & Audience Research",
    description:
      "We analyze your industry, products or services, and ideal audience to identify growth opportunities.",
  },
  {
    icon: <MessageSquare className="h-5 w-5 text-brand-neon" />,
    title: "Client Consultation",
    description:
      "We discuss your specific goals, expectations, and desired results to ensure our strategy aligns with your vision.",
  },
  {
    icon: <Palette className="h-5 w-5 text-brand-neon" />,
    title: "Brand Evaluation",
    description:
      "We assess your existing graphics, logo, color palette, and overall brand identity to maintain consistency and professionalism.",
  },
  {
    icon: <Settings className="h-5 w-5 text-brand-neon" />,
    title: "Setup & Access",
    description:
      "We create or organize your social accounts, handle admin access, and ensure everything is ready for management.",
  },
  {
    icon: <CalendarDays className="h-5 w-5 text-brand-neon" />,
    title: "Branding & Content Planning",
    description:
      "We design branded visuals, set up page themes, and prepare your social media calendar for consistent posting.",
  },
  {
    icon: <BarChart className="h-5 w-5 text-brand-neon" />,
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
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-5 top-0 h-full w-0.5 bg-border -translate-x-1/2" />
        <div className="space-y-12">
          {processSteps.map((step, index) => (
            <div key={index} className="relative flex items-start">
              <div className="z-10 flex-shrink-0 w-10 h-10 bg-background border-2 border-brand-neon rounded-full flex items-center justify-center">
                {step.icon}
              </div>
              <div className="ml-6 text-left">
                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-12">
        With Camsnett, you’re not just getting social media management — you’re
        gaining a dedicated digital partner focused on making your brand grow.
      </p>
    </section>
  );
};

export default ProcessSection;