"use client";

import React from "react";
import aboutUsImage from "@/assets/about-us-image.jpeg";

const AboutUsSection = () => {
  return (
    <div className="relative z-10 w-full bg-white rounded-2xl border border-gray-200 p-8 md:p-16 shadow-sm">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <div className="relative group">
          <div className="absolute inset-0 bg-brand-orange/10 transform translate-x-4 translate-y-4 rounded-xl -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />
          <div className="relative rounded-xl overflow-hidden border border-gray-100 shadow-md">
            <img
              src={aboutUsImage}
              alt="A diverse team of freelancers working in a modern office space"
              className="object-cover w-full h-[500px] hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Right: Editorial Text */}
        <div className="space-y-8 text-left">
          <div>
            <h2 className="text-4xl font-serif text-gray-900 tracking-tight mb-6">Who We Are</h2>
            <p className="text-xl font-serif italic text-brand-orange leading-relaxed">
              Camsnett is a collective of talented freelancers from diverse
              industries, united by a shared passion for innovation and
              excellence.
            </p>
          </div>

          <div className="space-y-6 text-gray-600 font-sans text-base leading-relaxed">
            <p>
              Our team brings together some of the best graphic
              designers, web designers, app developers, videographers,
              photographers, and editors, each an expert in their craft.
              For over four years, we’ve partnered with both start-ups and
              established companies, helping them build strong digital
              foundations and scale their presence.
            </p>
            <p>
              As we’ve grown in size and reach, we’ve gained extensive
              experience in integrating the latest technologies into
              businesses to help them thrive in the modern digital landscape.
            </p>
            <p>
              We specialize in growing the face of a business online,
              expanding its audience, and providing smart tools that make
              service delivery seamless and manageable. From modern websites
              and e-commerce platforms to accounting systems, databases, CRMs,
              and analytic dashboards, we empower businesses with solutions
              that drive growth, efficiency, and long-term success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;