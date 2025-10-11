"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import {
  FileText,
  Image,
  ListChecks,
  KeyRound,
  Users,
  FileJson,
} from "lucide-react";
import jsPDF from "jspdf";

const requirements = [
  {
    icon: <FileText className="h-6 w-6 text-brand-neon" />,
    title: "Project Brief",
    description:
      "A detailed description of your app idea, its purpose, and goals.",
  },
  {
    icon: <Image className="h-6 w-6 text-brand-neon" />,
    title: "Brand Assets",
    description: "Your logo, brand colors, and any other visual guidelines.",
  },
  {
    icon: <Users className="h-6 w-6 text-brand-neon" />,
    title: "Target Audience",
    description: "Information about the users you want to reach with your app.",
  },
  {
    icon: <ListChecks className="h-6 w-6 text-brand-neon" />,
    title: "Feature List",
    description: "A list of all the features and functionalities you envision.",
  },
  {
    icon: <KeyRound className="h-6 w-6 text-brand-neon" />,
    title: "Developer Accounts",
    description: "Access to your Apple Developer and Google Play Console accounts.",
  },
  {
    icon: <FileJson className="h-6 w-6 text-brand-neon" />,
    title: "API & Data",
    description:
      "Any third-party APIs, data sources, or backend systems we need to integrate with.",
  },
];

const BusinessAppRequirementsSection = () => {
  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Business App Project Requirements", 14, 22);
    doc.setFontSize(11);
    doc.text(
      "To build your app effectively, we'll need the following items from you.",
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

    doc.save("camsnett-app-requirements.pdf");
  };

  return (
    <section className="text-center">
      <h2 className="text-3xl font-semibold mb-4 text-foreground">
        What We'll Need From You
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
        Gathering these details upfront helps us build a better product, faster.
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

export default BusinessAppRequirementsSection;