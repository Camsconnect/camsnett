"use client";

import React from "react";
import Layout from "@/components/Layout";
import startupImage from "@/assets/startup-sme-package.jpeg";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Mail,
  Palette,
  Share2,
  DollarSign,
  Users,
  Brain,
  Download,
} from "lucide-react";
import SmeWebsiteSection from "@/components/SmeWebsiteSection";
import SmeEmailsSection from "@/components/SmeEmailsSection";
import SmeDesignSection from "@/components/SmeDesignSection";
import SmeSocialsSection from "@/components/SmeSocialsSection";
import SmeSalesSection from "@/components/SmeSalesSection";
import SmeCustomersSection from "@/components/SmeCustomersSection";
import jsPDF from "jspdf";
import camsnettLogo from "@/assets/camsnett-co-logo.png";
import { showError } from "@/utils/toast";

const StartupSmePackage = () => {
  const features = [
    { icon: <Globe className="h-6 w-6 text-white/80" />, name: "Web" },
    { icon: <Mail className="h-6 w-6 text-white/80" />, name: "Email" },
    { icon: <Palette className="h-6 w-6 text-white/80" />, name: "Design" },
    { icon: <Share2 className="h-6 w-6 text-white/80" />, name: "Socials" },
    { icon: <DollarSign className="h-6 w-6 text-white/80" />, name: "Sales" },
    { icon: <Users className="h-6 w-6 text-white/80" />, name: "Customers" },
  ];

  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    const img = new Image();
    img.src = camsnettLogo;

    img.onload = () => {
      // --- Page 1: Title ---
      const logoWidth = 40;
      const logoAspectRatio = img.width / img.height;
      const logoHeight = logoWidth / logoAspectRatio;
      doc.addImage(img, 'PNG', doc.internal.pageSize.getWidth() / 2 - logoWidth / 2, 40, logoWidth, logoHeight);

      doc.setFontSize(26);
      doc.setFont(undefined, 'bold');
      doc.text("SME Start-up Pack Proposal", doc.internal.pageSize.getWidth() / 2, 100, { align: 'center' });

      doc.setFontSize(14);
      doc.setFont(undefined, 'normal');
      doc.text("Your Complete Digital Foundation", doc.internal.pageSize.getWidth() / 2, 110, { align: 'center' });

      doc.setFontSize(12);
      doc.text(`Date: ${new Date().toLocaleDateString()}`, doc.internal.pageSize.getWidth() / 2, 130, { align: 'center' });

      doc.setFontSize(11);
      doc.text("Prepared by Camsnett", 14, 270);
      doc.setTextColor(41, 128, 185);
      doc.textWithLink("www.camsnett.com", 14, 277, { url: "https://www.camsnett.com" });
      doc.setTextColor(0);

      doc.addPage();

      // --- Page 2 onwards: Content ---
      let y = 20;
      const leftMargin = 14;
      const contentWidth = doc.internal.pageSize.getWidth() - (leftMargin * 2);

      const addTitle = (title: string) => {
        if (y > 250) { doc.addPage(); y = 20; }
        doc.setFontSize(18);
        doc.setFont(undefined, 'bold');
        doc.text(title, leftMargin, y);
        y += 10;
      };

      const addHeading = (heading: string) => {
        if (y > 260) { doc.addPage(); y = 20; }
        doc.setFontSize(14);
        doc.setFont(undefined, 'bold');
        doc.text(heading, leftMargin, y);
        y += 8;
      };

      const addParagraph = (text: string) => {
        if (y > 260) { doc.addPage(); y = 20; }
        doc.setFontSize(11);
        doc.setFont(undefined, 'normal');
        const splitText = doc.splitTextToSize(text, contentWidth);
        doc.text(splitText, leftMargin, y);
        y += (splitText.length * 5) + 5;
      };

      const addFeatureList = (features: { name: string; description: string }[]) => {
        features.forEach(feature => {
          if (y > 270) { doc.addPage(); y = 20; }
          doc.setFontSize(11);
          doc.setFont(undefined, 'bold');
          doc.text(`• ${feature.name}`, leftMargin + 5, y);
          y += 5;
          doc.setFont(undefined, 'normal');
          const splitDesc = doc.splitTextToSize(feature.description, contentWidth - 5);
          doc.text(splitDesc, leftMargin + 5, y);
          y += (splitDesc.length * 5) + 4;
        });
      };

      // --- Content Sections ---
      addTitle("Package Overview");
      addParagraph("This proposal outlines the comprehensive 'SME Start-up Pack' designed by Camsnett to provide new and growing businesses with a strong digital foundation. Our all-in-one package is designed to get you online, build your brand, and start attracting customers from day one.");
      
      addHeading("Total Investment");
      addParagraph("One-time package price: $750");

      addTitle("What's Included");

      addHeading("1. Professional Website");
      addFeatureList([
          { name: "Blazing-Fast Performance", description: "Built with modern tech for rapid load times that keep visitors engaged." },
          { name: "AI-Powered SEO", description: "Optimized with Google AI to maximize your search visibility and attract organic traffic." },
          { name: "Analytics Dashboard", description: "Includes a custom dashboard to track analytics and manage updates." },
          { name: "Full Ownership & Control", description: "Get full control to manage your site content without needing a developer." },
          { name: "Seamless Integrations", description: "Connect your social media and WhatsApp for direct customer engagement." },
      ]);

      addHeading("2. Custom Business Emails");
      addFeatureList([
          { name: "Up to 15 Custom Emails", description: "Create professional emails like 'your.name@yourdomain.com'." },
          { name: "Builds Credibility", description: "A professional email address inspires trust with customers." },
          { name: "Enhances Brand Recognition", description: "Reinforce your brand name with every message you send." },
          { name: "Improves Security", description: "Benefit from enhanced security features over free email providers." },
      ]);

      addHeading("3. Brand Identity Design");
      addFeatureList([
          { name: "Custom Logo Design", description: "A unique logo that captures the essence of your brand." },
          { name: "Business Card & Letterhead", description: "Professional stationery to make a lasting impression." },
          { name: "Social Media Kit", description: "Branded profile pictures and banners for your social channels." },
          { name: "Brand Style Guide", description: "A document outlining your colors, fonts, and logo usage." },
      ]);

      addHeading("4. Social Media Presence");
      addFeatureList([
          { name: "Facebook & Instagram Setup", description: "We create and optimize your profiles on the most vital platforms." },
          { name: "Professionally Designed Banners", description: "Custom cover photos and banners that align with your brand." },
          { name: "Consistent Branding", description: "Ensure your brand looks cohesive across all social channels." },
          { name: "Initial Content Strategy", description: "A starter plan with content ideas to get you posting." },
      ]);

      addHeading("5. Sales Enablement Tools");
      addFeatureList([
          { name: "Custom Invoice & Quote Templates", description: "Branded templates for professional financial communications." },
          { name: "Digital Business Card Setup", description: "A modern, shareable digital card for easy networking." },
          { name: "Service & Pricing Flier Design", description: "A beautifully designed flier to showcase what you offer." },
          { name: "Payment Gateway Consultation", description: "Guidance on setting up online payments for your services." },
      ]);

      addHeading("6. Client Management System");
      addFeatureList([
          { name: "Client Management Dashboard", description: "A simple system to keep track of your clients and projects." },
          { name: "Invoice & Payment Tracking", description: "Easily see who has paid and who is overdue." },
          { name: "Task Management", description: "Organize your to-do list for each client to stay on track." },
          { name: "Performance Reporting", description: "Generate simple reports to see your progress." },
      ]);

      if (y > 240) { doc.addPage(); y = 20; }
      addTitle("Next Steps");
      addParagraph("Ready to build your digital foundation? Contact us today to get started with the SME Start-up Pack. We look forward to partnering with you.");
      addParagraph("Email: info@camsnett.com");

      doc.save("Camsnett-SME-Startup-Pack-Proposal.pdf");
    };
    img.onerror = () => {
      showError("Error: Could not load assets to generate PDF proposal.");
    };
  };

  return (
    <Layout noPaddingTop>
      <section
        className="relative bg-cover bg-center flex items-center text-white pt-40 pb-20"
        style={{ backgroundImage: `url(${startupImage})` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <div className="relative container mx-auto px-4 w-full">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 lg:col-span-3">
              <div className="w-full aspect-[3/4] bg-black/20 border border-white/20 rounded-lg flex flex-col items-center justify-center p-6 text-center mb-6 shadow-lg max-w-sm mx-auto md:max-w-full">
                <Brain className="h-16 w-16 text-brand-neon mb-4" />
                <h3 className="text-xl font-semibold text-white">
                  All-In-One Package
                </h3>
                <p className="text-sm text-white/70 mt-1">
                  Everything you need to launch.
                </p>
              </div>
              <Button
                size="lg"
                className="w-full bg-brand-neon text-primary-foreground hover:bg-brand-neon/90 text-lg h-14 max-w-sm mx-auto md:max-w-full block"
              >
                Get The Package for $750
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full mt-2 bg-transparent border-white/50 text-white hover:bg-white/10 hover:text-white text-lg h-14 max-w-sm mx-auto md:max-w-full block"
                onClick={handleDownloadPdf}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Proposal
              </Button>
            </div>

            <div className="md:col-span-8 lg:col-span-9 md:pl-8 text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-thin tracking-wider uppercase">
                SME Start-up Pack
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl font-light mx-auto md:mx-0">
                Your complete digital foundation. We handle the setup, so you
                can focus on your business.
              </p>
              <div className="mt-8 grid grid-cols-3 sm:grid-cols-6 gap-4 max-w-xl mx-auto md:mx-0">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="aspect-square bg-white/10 border border-white/20 rounded-md flex flex-col items-center justify-center p-2 hover:bg-white/20 transition-colors"
                  >
                    {feature.icon}
                    <span className="text-xs mt-2 text-white/90">
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SmeWebsiteSection />
      <SmeEmailsSection />
      <SmeDesignSection />
      <SmeSocialsSection />
      <SmeSalesSection />
      <SmeCustomersSection />
    </Layout>
  );
};

export default StartupSmePackage;