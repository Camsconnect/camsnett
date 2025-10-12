"use client";

import React from "react";
import Layout from "@/components/Layout";
import FAQSection from "@/components/FAQSection";

const FAQ = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-screen-lg space-y-12">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us directly.
          </p>
        </section>
        <FAQSection />
      </div>
    </Layout>
  );
};

export default FAQ;