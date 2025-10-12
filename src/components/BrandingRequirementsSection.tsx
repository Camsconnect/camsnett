"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import {
  FileText,
  Users,
  Palette,
  MessageSquare,
  Image,
} from "lucide-react";
import jsPDF from "jspdf";

const requirements = [
  {
    icon: <FileText className="h-6 w-6 text-brand-neon" />,
    title: "Business Information",
    description:
      "Your company name, tagline, and a brief description of what you do.",
  },
  {
    icon: <Users className="h-6 w-6 text-brand-neon" />,
    title: "Target Audience",
    description: "A profile of your ideal customer or client.",
  },
  {
    icon: <Palette className="h-6 w-6 text-brand-neon" />,
    title: "Design Preferences",
    description: "Any ideas on colors, styles, or fonts you prefer (or dislike).",
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-brand-neon" />,
    title: "Brand Voice & Tone",
    description: "Words that describe your brand's personality (e.g., playful, professional).",
  },
  {
    icon: <Image className="h-6 w-6 text-brand-neon" />,
    title: "Inspiration",
    description:
      "Examples of logos or brands you admire to help us understand your taste.",
  },
];

const BrandingRequirementsSection = () => {
  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Branding Project Requirements", 14, 22);
    doc.setFontSize(11);
    doc.text(
      "To create a brand you'll love, we'll need the following information.",
      14,
      32
    );

    let y = 45;
    requirements.forEach((req) => {
      doc.setFontSize(12).setFont(undefined, "bold");
      doc.text(`- ${req.title}`, 14, y);
      y += 6;
      doc.setFontSize(10).setFont(undefined, "normal");
      const splitDescription = doc.splitTextToSize(req.description, 170);
      doc.text(splitDescription, 20, y);
      y += splitDescription.length * 5 + 4;
    });

    doc.save("camsnett-branding-requirements.pdf");
  };

  return (
    <section className="text-center">
      <h2 className="text-3xl font-semibold mb-4 text-foreground">
        What We'll Need From You
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
        Your input is the most important ingredient in crafting a successful brand identity.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {requirements.map((req, index) => (
          <Card key={index}>
            <CardHeader className="flex-row items-center gap-4 space-y-0 pb-2">
              {req.icon}
              <CardTitle className="text-xl">{req.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{req.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12">
        <Button
          onClick={handleDownloadPdf}
          className="animate-breathing-glow"
        >
          <Download className="mr-2 h-4 w-4" />
          Download Requirements PDF
        </Button>
      </div>
    </section>
  );
};

export default BrandingRequirementsSection;