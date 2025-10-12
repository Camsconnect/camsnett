"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Brain, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card text-foreground border-t">
      <div className="container mx-auto px-4 py-12 max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-xl font-light mb-4">
              <Brain className="h-6 w-6" />
              Camsnett
            </Link>
            <p className="text-muted-foreground text-sm">
              Turn Attention into Sales. We build your visual identity, shape your personality, and grow your brand presence online.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-foreground">Home</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link></li>
              <li><Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/social-media-management" className="text-sm text-muted-foreground hover:text-foreground">Social Media</Link></li>
              <li><Link to="/services/web-design" className="text-sm text-muted-foreground hover:text-foreground">Web Design</Link></li>
              <li><Link to="/services/videography" className="text-sm text-muted-foreground hover:text-foreground">Videography</Link></li>
              <li><Link to="/services/3d-modeling" className="text-sm text-muted-foreground hover:text-foreground">3D Modeling</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground"><Facebook size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground"><Twitter size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground"><Instagram size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Camsnett. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;