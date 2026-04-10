"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is the process for starting a new project with Camsnett?",
    answer:
      "Getting started is easy! First, choose a package that fits your needs from our services pages. Once you've made your choice, you can contact us to schedule a consultation via WhatsApp or email. We'll discuss your goals, gather the necessary information, and outline the project timeline.",
  },
  {
    question: "How long does a typical web design project take?",
    answer:
      "The timeline for a web design project varies depending on the complexity. A starter site can be delivered in as little as 3-7 days, while a business site takes about a week. E-commerce stores or more complex projects can take 2-3 weeks or longer. We'll provide a detailed timeline after our initial consultation.",
  },
  {
    question: "What social media platforms do you manage?",
    answer:
      "Our packages cover a range of platforms. The Basic plan includes Facebook management. Our Standard and Premium plans can include Facebook, Instagram, TikTok, LinkedIn, and others, depending on your target audience and business goals. We tailor our strategy to the platforms where your customers are most active.",
  },
  {
    question: "Can I see examples of your previous work?",
    answer:
      "Absolutely. We have a portfolio of our work that we'd be happy to share with you during our consultation. Send us a message on WhatsApp and we will send relevant examples for your specific industry.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "For most projects, we require a 50% upfront deposit to begin work, with the remaining 50% due upon project completion and before the final assets or website go live. For monthly services like social media management, payment is due at the beginning of each month (before the 10th).",
  },
  {
    question: "How do we communicate during the project?",
    answer:
      "We believe in clear, fast, and consistent communication. We primarily use WhatsApp for day-to-day updates because it's quickest for our clients. We also use email for formal documents. For larger projects, we schedule regular check-in calls to discuss progress and gather feedback.",
  },
];

const FAQSection = () => {
  return (
    <section className="w-full mx-auto">
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-gray-200">
            <AccordionTrigger className="text-left font-serif text-xl hover:text-brand-orange py-6">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-600 font-sans leading-relaxed pb-6">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQSection;