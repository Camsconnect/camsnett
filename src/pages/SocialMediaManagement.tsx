"use client";

import React from "react";
import MenuBar from "@/components/MenuBar";
import { MadeWithDyad } from "@/components/made-with-dyad";
import socialMediaServiceImage from "@/assets/social-media-service.jpeg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import ProcessSection from "@/components/ProcessSection";
import RequirementsSection from "@/components/RequirementsSection";

const SocialMediaManagement = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <MenuBar />
      <main className="flex-grow pt-20">
        <section
          className="relative bg-cover bg-center h-64 flex items-center justify-center text-white"
          style={{ backgroundImage: `url(${socialMediaServiceImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Social Media Management
            </h1>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16 max-w-screen-lg space-y-16">
          <section className="text-center">
            <h2 className="text-3xl font-semibold mb-4 text-foreground">
              How to Get Started
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Getting started is simple — just choose a package that fits your
              business size, goals, and budget. We offer three flexible plans
              designed for different needs and industries.
            </p>
          </section>

          <section>
            <Card className="border-green-500 border-2 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-foreground">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                  Basic Package
                </CardTitle>
                <CardDescription className="text-lg pt-2">
                  Perfect for small businesses that need a consistent online
                  presence.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Includes:</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Facebook management and regular posting</li>
                    <li>Professionally designed graphics</li>
                    <li>A few promotional videos per month</li>
                    <li>Monthly subscription, easy to renew</li>
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground italic pt-2">
                  Ideal for schools, construction companies, and other small
                  brands looking to stay visible and connected with their
                  audience.
                </p>
              </CardContent>
            </Card>
          </section>

          <ProcessSection />

          <RequirementsSection />
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default SocialMediaManagement;