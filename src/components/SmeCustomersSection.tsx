"use client";

import React from "react";
import { CheckCircle, Users } from "lucide-react";
import smeCustomersImage from "@/assets/sme-customers-package.png";

const features = [
  {
    name: "Client Management Dashboard",
    description: "A simple system to keep track of your clients and projects.",
  },
  {
    name: "Invoice & Payment Tracking",
    description: "Easily see who has paid and who is overdue.",
  },
  {
    name: "Task Management",
    description: "Organize your to-do list for each client to stay on track.",
  },
  {
    name: "Performance Reporting",
    description: "Generate simple reports to see your progress.",
  },
];

const SmeCustomersSection = () => {
  return (
    <section className="bg-gray-900 py-16 md:py-24 px-4 sm:px-8 md:px-12">
      <div className="bg-black/20 border border-white/10 rounded-xl overflow-hidden grid md:grid-cols-2 text-white">
        <div className="relative min-h-[300px] md:min-h-0 order-1 md:order-2">
          <img
            src={smeCustomersImage}
            alt="Customer relationship management dashboard"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="p-8 md:p-12 order-2 md:order-1">
          <Users className="h-10 w-10 text-brand-neon mb-4" />
          <h2 className="text-3xl font-semibold mb-4">
            Manage Customers with Ease
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Our package includes access to our client dashboard, providing a
            simple, effective system to keep track of your clients and projects.
          </p>
          <ul className="space-y-4">
            {features.map((feature) => (
              <li key={feature.name} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-brand-neon mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">{feature.name}</h4>
                  <p className="text-sm text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SmeCustomersSection;