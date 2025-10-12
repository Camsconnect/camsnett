"use client";

import React from "react";
import Layout from "@/components/Layout";
import AboutUsSection from "@/components/AboutUsSection";
import WhyWorkWithUsSection from "@/components/WhyWorkWithUsSection";
import TechnologyStackSection from "@/components/TechnologyStackSection";
import aboutUsImage from "@/assets/about-us-image.jpeg";

const About = () => {
  return (
    <Layout noPaddingTop>
      <section
        className="relative bg-cover bg-center h-64 flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${aboutUsImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            About Camsnett
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            A collective of talented freelancers united by a passion for innovation and excellence.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-screen-2xl space-y-16">
        <AboutUsSection />
        <WhyWorkWithUsSection />
        <TechnologyStackSection />
      </div>
    </Layout>
  );
};

export default About;