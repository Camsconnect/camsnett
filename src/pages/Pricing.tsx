"use client";

import React from "react";
import Layout from "@/components/Layout";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import PricingTiersSection from "@/components/PricingTiersSection";
import WebDesignPricingTiersSection from "@/components/WebDesignPricingTiersSection";
import BrandingPricingTiersSection from "@/components/BrandingPricingTiersSection";
import BusinessAppPricingTiersSection from "@/components/BusinessAppPricingTiersSection";
import VideographyPricingTiersSection from "@/components/VideographyPricingTiersSection";
import ThreeDPricingTiersSection from "@/components/ThreeDPricingTiersSection";
import YouTubeSEOPricingTiersSection from "@/components/YouTubeSEOPricingTiersSection";
import YouTubeSEOAddonsSection from "@/components/YouTubeSEOAddonsSection";
import { Separator } from "@/components/ui/separator";

const Pricing = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-screen-lg space-y-16">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Packages
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Find the perfect plan to fit your needs. We offer a range of
            packages designed for businesses of all sizes.
          </p>
        </section>

        <Tabs defaultValue="social-media" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 h-auto">
            <TabsTrigger value="social-media">Social Media</TabsTrigger>
            <TabsTrigger value="youtube-seo">YouTube SEO</TabsTrigger>
            <TabsTrigger value="web-design">Web Design</TabsTrigger>
            <TabsTrigger value="branding">Branding</TabsTrigger>
            <TabsTrigger value="app-dev">App Development</TabsTrigger>
            <TabsTrigger value="videography">Videography</TabsTrigger>
            <TabsTrigger value="3d-modeling">3D Modeling</TabsTrigger>
          </TabsList>
          <div className="pt-8">
            <TabsContent value="social-media">
              <PricingTiersSection />
            </TabsContent>
            <TabsContent value="youtube-seo">
              <div className="space-y-16">
                <YouTubeSEOPricingTiersSection />
                <Separator />
                <YouTubeSEOAddonsSection />
              </div>
            </TabsContent>
            <TabsContent value="web-design">
              <WebDesignPricingTiersSection />
            </TabsContent>
            <TabsContent value="branding">
              <BrandingPricingTiersSection />
            </TabsContent>
            <TabsContent value="app-dev">
              <BusinessAppPricingTiersSection />
            </TabsContent>
            <TabsContent value="videography">
              <VideographyPricingTiersSection />
            </TabsContent>
            <TabsContent value="3d-modeling">
              <ThreeDPricingTiersSection />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Pricing;