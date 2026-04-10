"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#F2F2F2] pt-12 pb-6 text-[#616161] font-sans text-[13px]">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Column 1 */}
          <div>
            <h4 className="font-semibold text-[#616161] mb-4 text-[15px]">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services/web-design" className="hover:underline">Web Design</Link></li>
              <li><Link to="/services/social-media-management" className="hover:underline">Digital Marketing</Link></li>
              <li><Link to="/services/youtube-seo" className="hover:underline">YouTube SEO</Link></li>
              <li><Link to="/services/business-app-development" className="hover:underline">App Development</Link></li>
              <li><Link to="/services/videography" className="hover:underline">Videography</Link></li>
              <li><Link to="/services/3d-modeling" className="hover:underline">3D Modeling</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold text-[#616161] mb-4 text-[15px]">Packages</h4>
            <ul className="space-y-4">
              <li><Link to="/services/startup-sme-package" className="hover:underline">SME Start-up Pack</Link></li>
              <li><Link to="/pricing#social-media" className="hover:underline">Social Media Plans</Link></li>
              <li><Link to="/pricing#web-design" className="hover:underline">Web Packages</Link></li>
              <li><Link to="/pricing#branding" className="hover:underline">Branding Kits</Link></li>
              <li><Link to="/pricing#videography" className="hover:underline">Video Production</Link></li>
              <li><Link to="/pricing#n8n-automation" className="hover:underline">n8n Automation</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold text-[#616161] mb-4 text-[15px]">Ecosystem</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:underline">Cams-Connect</a></li>
              <li><a href="#" className="hover:underline">Camsnett Co</a></li>
              <li><a href="#" className="hover:underline">Camsnett Listings</a></li>
              <li><a href="#" className="hover:underline">Sila Academy</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold text-[#616161] mb-4 text-[15px]">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/blog" className="hover:underline">Blog</Link></li>
              <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h4 className="font-semibold text-[#616161] mb-4 text-[15px]">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/policy" className="hover:underline">Company Policies</Link></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Refund Policy</a></li>
            </ul>
          </div>

          {/* Column 6 */}
          <div>
            <h4 className="font-semibold text-[#616161] mb-4 text-[15px]">Contact</h4>
            <ul className="space-y-4">
              <li><a href="https://wa.me/2763049876" target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp Us</a></li>
              <li><a href="mailto:info@camsnett.com" className="hover:underline">info@camsnett.com</a></li>
              <li><a href="tel:+27630498076" className="hover:underline">+27 63 049 8076</a></li>
              <li><span className="text-gray-500">Cape Town, South Africa</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pt-6 gap-6">
          <div className="flex flex-wrap items-center gap-6">
            <button className="flex items-center gap-2 hover:underline text-[#616161]">
              <Globe size={18} />
              English (South Africa)
            </button>
            <button className="hover:underline flex items-center gap-2 text-[#616161]">
              <svg width="34" height="16" viewBox="0 0 34 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                <rect width="34" height="16" rx="8" fill="#0067B8"/>
                <circle cx="8" cy="8" r="6" fill="white"/>
                <path d="M5 8L7 10L11 5" stroke="#0067B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 6L28 10M28 6L24 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Your Privacy Choices
            </button>
            <button className="hover:underline text-[#616161]">
              Consumer Health Privacy
            </button>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 lg:ml-auto">
            <a href="mailto:info@camsnett.com" className="hover:underline">Contact Camsnett</a>
            <Link to="/policy" className="hover:underline">Privacy</Link>
            <Link to="/policy" className="hover:underline">Terms of use</Link>
            <a href="#" className="hover:underline">Trademarks</a>
            <a href="#" className="hover:underline">About our ads</a>
            <span>© Camsnett {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;