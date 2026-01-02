"use client";

import React from "react";
import Layout from "@/components/Layout";
import archVizImage from "@/assets/architectural-visualization-service.jpeg";
import { Button } from "@/components/ui/button";
import { Check, Home, Building, Eye, Zap } from "lucide-react";

const features = [
  {
    icon: <Home className="h-6 w-6 text-brand-neon" />,
    title: "Interior Design Visualization",
    description: "Bring interior concepts to life with photorealistic renders and immersive walkthroughs."
  },
  {
    icon: <Building className="h-6 w-6 text-brand-neon" />,
    title: "Exterior & Architectural Design",
    description: "Visualize building exteriors and landscapes with stunning detail and accuracy."
  },
  {
    icon: <Eye className="h-6 w-6 text-brand-neon" />,
    title: "VR Interactive Experiences",
    description: "Step into your designs with Unreal Engine-powered virtual reality experiences."
  },
  {
    icon: <Zap className="h-6 w-6 text-brand-neon" />,
    title: "Real-time Rendering",
    description: "Make instant changes and see results immediately with cutting-edge technology."
  }
];

const tiers = [
  {
    name: "Interior Visualization",
    price: "$800",
    frequency: "per room",
    description: "Photorealistic interior design visualization.",
    features: [
      "3D modeling of room layout",
      "Material and lighting design",
      "5 high-quality renders",
      "360° panorama view",
      "1 week delivery"
    ],
    cta: "Visualize Interior"
  },
  {
    name: "Architectural Exterior",
    price: "$2,500",
    frequency: "per building",
    description: "Complete exterior architectural visualization.",
    features: [
      "Full 3D building modeling",
      "Landscape integration",
      "Day and night renders",
      "4K resolution images",
      "Surrounding environment",
      "2 weeks delivery"
    ],
    cta: "Visualize Exterior",
    popular: true
  },
  {
    name: "VR Interactive Design",
    price: "$5,000+",
    frequency: "per project",
    description: "Immersive VR experience with Unreal Engine.",
    features: [
      "Full 3D environment modeling",
      "Real-time VR walkthrough",
      "Interactive design elements",
      "Multi-platform support (VR/AR/Desktop)",
      "Custom UI/UX integration",
      "Ongoing support and updates"
    ],
    cta: "Experience VR"
  }
];

const ArchitecturalVisualization = () => {
  return (
    <Layout noPaddingTop>
      <section
        className="relative bg-cover bg-center h-64 flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${archVizImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Architectural Visualization
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-screen-lg space-y-16">
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-foreground">
            Visualize Your Architectural Dreams
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transform your architectural concepts into stunning visual experiences. From interior design 
            to full-scale exterior visualization, we bring your projects to life with cutting-edge 3D technology.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-card border rounded-lg">
              <div className="bg-brand-neon/20 p-2 rounded-full flex-shrink-0 mt-1">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </section>

        <section id="pricing">
          <h2 className="text-3xl font-semibold text-center mb-4 text-foreground">
            Visualization Packages
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Choose the perfect visualization solution for your architectural project.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div 
                key={tier.name} 
                className={`flex flex-col border rounded-lg p-6 ${tier.popular ? "border-brand-neon border-2 shadow-lg" : ""}`}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-2">{tier.name}</h3>
                  <p className="text-muted-foreground mb-4">{tier.description}</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                    {tier.frequency && (
                      <span className="ml-1 text-xl font-semibold text-muted-foreground">{tier.frequency}</span>
                    )}
                  </div>
                </div>
                
                <ul className="space-y-3 text-muted-foreground flex-grow mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-brand-neon mr-2 flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${tier.popular ? "bg-brand-neon hover:bg-brand-neon/90 text-primary-foreground" : ""}`}
                  variant={tier.popular ? "default" : "outline"}
                >
                  {tier.cta}
                </Button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ArchitecturalVisualization;