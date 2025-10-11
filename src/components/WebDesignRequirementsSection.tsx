"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import {
  FileText,
  Image,
  Globe,
  Server,
  ListChecks,
  BookUser,
} from "lucide-react";
import jsPDF from "jspdf";

const requirements = [
  {
    icon: <FileText className="h-6 w-6 text-brand-neon" />,
    title: "Website Content",
    description:
      "All text, images, and videos for each page of the website.",
  },
  {
    icon: <Image className="h-6 w-6 text-brand-neon" />,
    title: "Brand Assets",
    description: "Your logo in high resolution, brand colors, and fonts.",
  },
  {
    icon: <Globe className="h-6 w-6 text-brand-neon" />,
    title: "Domain Name",
    description:
      "Access to your domain registrar to point the domain to the new site.",
  },
  {
    icon: <Server className="h-6 w-6 text-brand-neon" />,
    title: "Hosting Provider",
    description: "Login credentials for your web hosting account.",
  },
  {
    icon: <ListChecks className="h-6 w-6 text-brand-neon" />,
    title: "Feature List",
    description: "A list of any special features you need (e.g., booking, forms).",
  },
  {
    icon: <BookUser className="h-6 w-6 text-brand-neon" />,
    title: "Contact Information",
    description:
      "Business address, email, phone number, and social media links.",
  },
];

const WebDesignRequirementsSection = () => {
  const handleDownloadPdf = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Web Design Project Requirements", 14, 22);

    doc.setFontSize(11);
    doc.text(
      "To build your website effectively, we'll need the following items from you.",
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

    doc.setTextColor(41, 128, 185);
    doc.textWithLink("Click here to see our packages", 14, y + 7, {
      url: linkUrl,
    });

    doc.save("camsnett-web-design-requirements.pdf");
  };

  return (
    <section className="text-center">
      <h2 className="text-3xl font-semibold mb-4 text-foreground">
        What We'll Need From You
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
        To ensure a smooth and timely process, please gather the following items before we begin.
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

export default WebDesignRequirementsSection;