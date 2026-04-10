"use client";

import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SessionProvider } from "@/contexts/SessionContext";
import ProtectedRoute from "@/components/ProtectedRoute";

// Page Imports
import Index from "./pages/Index";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Policy from "./pages/Policy";
import Blog from "./pages/Blog";

// Service Page Imports
import WebDesign from "./pages/WebDesign";
import SocialMediaManagement from "./pages/SocialMediaManagement";
import BrandingAndGraphicDesign from "./pages/BrandingAndGraphicDesign";
import BusinessAppDevelopment from "./pages/BusinessAppDevelopment";
import Videography from "./pages/Videography";
import StartupSmePackage from "./pages/StartupSmePackage";
import YouTubeSEO from "./pages/YouTubeSEO";
import N8nAutomation from "./pages/N8nAutomation";
import ArchitecturalVisualization from "./pages/ArchitecturalVisualization";
import ThreeDModeling from "./pages/ThreeDModeling";

// Auth & Dashboard Imports
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SessionProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/blog" element={<Blog />} />
            
            {/* Service Pages */}
            <Route path="/services/web-design" element={<WebDesign />} />
            <Route path="/services/social-media-management" element={<SocialMediaManagement />} />
            <Route path="/services/branding-and-graphic-design" element={<BrandingAndGraphicDesign />} />
            <Route path="/services/business-app-development" element={<BusinessAppDevelopment />} />
            <Route path="/services/videography" element={<Videography />} />
            <Route path="/services/startup-sme-package" element={<StartupSmePackage />} />
            <Route path="/services/youtube-seo" element={<YouTubeSEO />} />
            <Route path="/services/n8n-automation" element={<N8nAutomation />} />
            <Route path="/services/architectural-visualization" element={<ArchitecturalVisualization />} />
            <Route path="/services/3d-modeling" element={<ThreeDModeling />} />
            
            {/* Auth & Admin */}
            <Route path="/login" element={<Login />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            
            {/* 404 Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </SessionProvider>
  </QueryClientProvider>
);

export default App;