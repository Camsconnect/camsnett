"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import {
  FileText,
  Image,
  MessageCircle,
  Users,
  Music,
  MonitorPlay,
} from "lucide-react";
import jsPDF from "jspdf";

const requirements = [
  {
    icon: <FileText className="h-6 w-6 text-brand-neon" />,
    title: "Project Brief",
    description:
      "A clear outline of the video's purpose, goals, and key message.",
  },
  {
    icon: <Image className="h-6 w-6 text-brand-neon" />,
    title: "Brand Assets",
    description: "Your logo, brand colors, and any required graphics or fonts.",
  },
  {
    icon: <Users className="h-6 w-6 text-brand-neon" />,
    title: "Target Audience",
    description: "Who is this video for? Understanding the audience is key.",
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-brand-neon" />,
    title: "Key Talking Points",
    description: "Any specific information or call-to-action to include.",
  },
  {
    icon: <Music className="h-6 w-6 text-brand-neon" />,
    title: "Style & Tone References",
    description: "Examples of videos you like that can serve as inspiration.",
  },
  {
    icon: <MonitorPlay className="h-6 w-6 text-brand-neon" />,
    title: "Delivery Platforms",
    description:
      "Where will the video be shown? (e.g., YouTube, Instagram, website).",
  },
];

const VideographyRequirementsSection = () => {
  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Videography Project Requirements", 14, 22);
    doc.setFontSize(11);
    doc.text(
      "To produce the best video for your needs, please provide the following.",
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

    doc.save("camsnett-videography-requirements.pdf");
  };

  return (
    <section className="text-center">
      <h2 className="text-3xl font-semibold mb-4 text-foreground">
        What We'll Need From You
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
        Providing these details helps us align our creative vision with your strategic goals from the very beginning.
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

export default VideographyRequirementsSection;