"use client";

import React from "react";
import { 
  Bot, 
  Search, 
  MonitorCheck, 
  Users, 
  Share2, 
  MessageCircle, 
  Sparkles 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const automationFeatures = [
  {
    icon: <Search className="h-6 w-6 text-brand-neon" />,
    title: "Automated SEO",
    description: "AI continuously optimizes your content to keep you ranking high without lifting a finger.",
  },
  {
    icon: <MonitorCheck className="h-6 w-6 text-brand-neon" />,
    title: "Desk Management",
    description: "Streamline internal workflows and task assignments automatically.",
  },
  {
    icon: <Users className="h-6 w-6 text-brand-neon" />,
    title: "Customer Management",
    description: "AI-driven CRM that tracks, engages, and nurtures leads on autopilot.",
  },
  {
    icon: <Share2 className="h-6 w-6 text-brand-neon" />,
    title: "Social Posting",
    description: "Content is generated, scheduled, and posted across platforms automatically.",
  },
];

const AIAutomationSection = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-gray-900 to-black text-white rounded-3xl overflow-hidden relative border border-white/10 shadow-2xl">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-neon/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-brand-neon text-brand-neon bg-brand-neon/10 px-4 py-1 text-sm tracking-wider">
            <Sparkles className="w-3 h-3 mr-2 inline" />
            POWERED BY GEMINI PRO
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            The Future is Automated.
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Forget manual tasks. We design and set up a complete ecosystem where your 
            website, team, and WhatsApp work in perfect harmony—driven by advanced AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {automationFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="mb-4 bg-black/40 w-12 h-12 rounded-lg flex items-center justify-center border border-white/5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-brand-neon/10 border border-brand-neon/30 rounded-2xl p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-4">
            <div className="bg-brand-neon/20 p-3 rounded-full">
              <Bot className="h-8 w-8 text-brand-neon" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold mb-1">Seamless Connectivity</h3>
              <p className="text-gray-300 text-sm">
                Everything connects directly to your Website and WhatsApp for ultimate ease of use.
                We handle the entire setup.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
             <Button className="bg-brand-neon hover:bg-brand-neon/90 text-white font-semibold px-8 py-6 h-auto rounded-xl shadow-lg shadow-brand-neon/20 transition-all hover:scale-105">
               Get Automated Now
             </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAutomationSection;