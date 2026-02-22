"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Brain, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="relative bg-gray-50 backdrop-blur-xl border-t border-gray-200 pt-20 pb-10 overflow-hidden text-foreground">
      {/* Glow effect - keeping it subtle or removing */}
      <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-brand-neon to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 max-w-screen-2xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 text-2xl font-light text-foreground">
              <div className="bg-brand-neon/20 p-2 rounded-full">
                <Brain className="h-6 w-6 text-brand-neon" />
              </div>
              Camsnett
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We build your visual identity, shape your personality, and grow your brand presence online with cutting-edge AI and design.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="bg-gray-200 p-2 rounded-full text-muted-foreground hover:text-brand-neon hover:bg-gray-300 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Pricing", path: "/pricing" },
                { label: "Blog", path: "/blog" },
                { label: "Policy", path: "/policy" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-brand-neon transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                { label: "Social Media", path: "/services/social-media-management" },
                { label: "YouTube SEO", path: "/services/youtube-seo" },
                { label: "Web & AI Design", path: "/services/web-design" },
                { label: "Branding", path: "/services/branding-and-graphic-design" },
                { label: "Videography", path: "/services/videography" },
                { label: "3D Modeling", path: "/services/3d-modeling" },
                { label: "n8n Automation", path: "/services/n8n-automation" },
                { label: "Architectural Viz", path: "/services/architectural-visualization" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-brand-neon transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
             <h3 className="font-semibold text-foreground mb-6">Stay Updated</h3>
             <p className="text-sm text-muted-foreground mb-4">
               Subscribe to get the latest AI trends and design insights.
             </p>
             <div className="flex gap-2">
               <input 
                 type="email" 
                 placeholder="Enter your email" 
                 className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-brand-neon/50 text-foreground placeholder:text-muted-foreground"
               />
               <Button className="bg-brand-neon hover:bg-brand-neon/90 text-white">
                 Join
               </Button>
             </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Camsnett. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <Link to="/policy" className="hover:text-foreground">Privacy Policy</Link>
             <Link to="/policy" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;