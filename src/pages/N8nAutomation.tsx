"use client";

import React from "react";
import Layout from "@/components/Layout";
// Using placeholder image
import n8nServiceImage from "@/assets/business-app-service.jpeg";
import { Button } from "@/components/ui/button";
import { Check, Zap, Cpu, Workflow } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-6 w-6 text-brand-neon" />,
    title: "Workflow Automation",
    description: "Automate repetitive tasks and streamline business processes with powerful visual workflows."
  },
  {
    icon: <Cpu className="h-6 w-6 text-brand-neon" />,
    title: "AI Integration",
    description: "Connect your business tools with cutting-edge AI capabilities for smarter automation."
  },
  {
    icon: <Workflow className="h-6 w-6 text-brand-neon" />,
    title: "Custom Solutions",
    description: "Tailored automation setups for agencies and businesses of all sizes."
  }
];

const tiers = [
  {
    name: "Starter Automation",
    price: "$200",
    frequency: "one-time",
    description: "Perfect for small businesses getting started with automation.",
    features: [
      "Basic workflow setup (3 workflows)",
      "Integration with 2 platforms",
      "Email support",
      "Documentation",
      "1 week delivery"
    ],
    cta: "Get Started"
  },
  {
    name: "Agency Package",
    price: "$500",
    frequency: "one-time",
    description: "Comprehensive automation solution for agencies and growing businesses.",
    features: [
      "Everything in Starter, plus:",
      "Up to 10 custom workflows",
      "Integration with 5+ platforms",
      "AI-powered decision nodes",
      "Priority support",
      "2 weeks delivery"
    ],
    cta: "Choose Agency",
    popular: true
  },
  {
    name: "Enterprise Solution",
    price: "Custom",
    frequency: "",
    description: "Full-scale automation for complex business needs.",
    features: [
      "Unlimited workflows",
      "Advanced AI integrations",
      "Custom node development",
      "Dedicated support",
      "Real-time monitoring dashboard",
      "Ongoing maintenance"
    ],
    cta: "Contact Us"
  }
];

const N8nAutomation = () => {
  return (
    <Layout noPaddingTop>
      <section
        className="relative bg-cover bg-center h-64 flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${n8nServiceImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            n8n Automation for Business
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-screen-lg space-y-16">
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-foreground">
            Automate Your Business with n8n
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transform your business operations with powerful workflow automation. Connect your tools, 
            integrate AI capabilities, and streamline processes with our custom n8n solutions.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card border rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-brand-neon/20 p-3 rounded-full">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </section>

        <section id="pricing">
          <h2 className="text-3xl font-semibold text-center mb-4 text-foreground">
            Automation Packages
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Choose the perfect automation solution for your business needs.
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

export default N8nAutomation;