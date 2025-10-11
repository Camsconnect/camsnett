"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import {
  FileText,
  Image,
  Palette,
  FileVideo,
  ClipboardList,
} from "lucide-react";
import jsPDF from "jspdf";

const requirements = [
  {
    icon: <FileText className="h-6 w-6 text-brand-neon" />,
    title: "Project Brief",
    description:
      "A detailed description of your idea, goals, and the story you want to tell.",
  },
  {
    icon: <Image className="h-6 w-6 text-brand-neon" />,
    title: "Reference Images",
    description: "Sketches, photos, or concept art to guide the visual style.",
  },
  {
    icon: <Palette className="h-6 w-6 text-brand-neon" />,
    title: "Brand Guidelines",
    description: "Your logo, color palettes, and any specific branding to include.",
  },
  {
    icon: <ClipboardList className="h-6 w-6 text-brand-neon" />,
    title: "Technical Specs",
    description: "Required resolution, file formats, and duration for animations.",
  },
  {
    icon: <FileVideo className="h-6 w-6 text-brand-neon" />,
    title: "Script or Storyboard",
    description: "A script for any voice-over and a storyboard for animations.",
  },
];

const ThreeDRequirementsSection = () => {
  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("3D Project Requirements", 14, 22);
    doc.setFontSize(11);
    doc.text(
      "To bring your 3D vision to life, please provide the following materials.",
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

    doc.save("camsnett-3d-requirements.pdf");
  };

  return (
    <section className="text-center">
      <h2 className="text-3xl font-semibold mb-4 text-foreground">
        What We'll Need From You
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
        Clear and detailed information at the start helps us create exactly what you're imagining.
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

export default ThreeDRequirementsSection;