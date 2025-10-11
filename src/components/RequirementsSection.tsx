"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import {
  FileText,
  Image,
  Users,
  KeyRound,
  Package,
  FolderArchive,
} from "lucide-react";
import jsPDF from "jspdf";

const requirements = [
  {
    icon: <FileText className="h-6 w-6 text-brand-neon" />,
    title: "Business Information",
    description:
      "Your company's mission, values, and unique selling points.",
  },
  {
    icon: <Image className="h-6 w-6 text-brand-neon" />,
    title: "Brand Assets",
    description: "Your logo, brand guidelines, color palettes, and fonts.",
  },
  {
    icon: <Users className="h-6 w-6 text-brand-neon" />,
    title: "Target Audience Profile",
    description:
      "Details about your ideal customers (demographics, interests, etc.).",
  },
  {
    icon: <KeyRound className="h-6 w-6 text-brand-neon" />,
    title: "Social Media Access",
    description: "Admin or editor access to your existing social media pages.",
  },
  {
    icon: <Package className="h-6 w-6 text-brand-neon" />,
    title: "Product/Service Details",
    description: "Information about the products or services you offer.",
  },
  {
    icon: <FolderArchive className="h-6 w-6 text-brand-neon" />,
    title: "Existing Content",
    description:
      "Any photos, videos, or marketing materials you already have.",
  },
];

const RequirementsSection = () => {
  const handleDownloadPdf = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("What We'll Need From You", 14, 22);

    doc.setFontSize(11);
    doc.text(
      "To ensure we create the best strategy for your brand, we'll need a few things to get started.",
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

    y += 5;
    doc.setFontSize(12);
    doc.text("View our packages online:", 14, y);

    const url = new URL(window.location.href);
    url.hash = "pricing";
    const linkUrl = url.toString();

    doc.setTextColor(41, 128, 185); // Blue color for the link
    doc.textWithLink("Click here to see our packages", 14, y + 7, {
      url: linkUrl,
    });

    doc.save("camsnett-requirements.pdf");
  };

  return (
    <section className="text-center">
      <h2 className="text-3xl font-semibold mb-4 text-foreground">
        What We'll Need From You
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
        To ensure we create the best strategy for your brand, we'll need a few
        things to get started.
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

export default RequirementsSection;