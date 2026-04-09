"use client";

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#FAF9F6] border-t border-gray-200 py-16 text-gray-900 font-sans">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
          
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-2xl font-serif font-medium tracking-tight hover:text-brand-orange transition-colors">
              Camsnett
            </Link>
            <p className="text-gray-600 max-w-sm">
              Own your data. Control your website. Earn from your investment.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            <div className="flex flex-col gap-3">
              <Link to="/services" className="text-gray-600 hover:text-brand-orange transition-colors">Services</Link>
              <Link to="/pricing" className="text-gray-600 hover:text-brand-orange transition-colors">Pricing</Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link to="/faq" className="text-gray-600 hover:text-brand-orange transition-colors">FAQ</Link>
              <Link to="/blog" className="text-gray-600 hover:text-brand-orange transition-colors">Blog</Link>
            </div>
            <div className="flex flex-col gap-3">
              <a href="mailto:info@camsnett.com" className="text-gray-600 hover:text-brand-orange transition-colors">info@camsnett.com</a>
              <a href="https://wa.me/2763049876" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-orange transition-colors">+27 63 049 8076</a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 text-sm text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2025 Camsnett Creative Minds. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
