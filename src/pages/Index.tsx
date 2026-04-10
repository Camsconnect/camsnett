"use client";

import React from "react";
import MenuBar from "@/components/MenuBar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Globe, TrendingUp, Cpu, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import PlatformSliderSection from "@/components/PlatformSliderSection";
import OfficeBannerSection from "@/components/OfficeBannerSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  return (
    <div className="min-h-screen bg-transparent font-sans text-gray-900">
      <MenuBar />
      <main>
        <HeroSection />
        
        {/* SECTION 2 — THREE SERVICE PILLARS */}
        <section className="py-20 container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="#web-packages" className="group bg-white p-8 rounded-lg border border-gray-200 hover:border-brand-orange/40 transition-all flex flex-col items-start shadow-sm hover:shadow-md">
              <Globe className="h-8 w-8 text-brand-orange mb-6" />
              <h3 className="text-xl font-serif font-medium mb-3 group-hover:text-brand-orange transition-colors">Web Design</h3>
              <p className="text-gray-600 mb-6 flex-grow">Your website, built and fully owned by you.</p>
              <span className="text-sm font-semibold text-gray-900 mt-auto">From R3,500</span>
            </a>

            <a href="#marketing-packages" className="group bg-white p-8 rounded-lg border border-gray-200 hover:border-brand-orange/40 transition-all flex flex-col items-start shadow-sm hover:shadow-md">
              <TrendingUp className="h-8 w-8 text-brand-orange mb-6" />
              <h3 className="text-xl font-serif font-medium mb-3 group-hover:text-brand-orange transition-colors">Digital Marketing</h3>
              <p className="text-gray-600 mb-6 flex-grow">Your brand, growing every month.</p>
              <span className="text-sm font-semibold text-gray-900 mt-auto">From R2,500/month</span>
            </a>

            <a href="#ai-integration" className="group bg-white p-8 rounded-lg border border-gray-200 hover:border-brand-orange/40 transition-all flex flex-col items-start shadow-sm hover:shadow-md">
              <Cpu className="h-8 w-8 text-brand-orange mb-6" />
              <h3 className="text-xl font-serif font-medium mb-3 group-hover:text-brand-orange transition-colors">AI Integration</h3>
              <p className="text-gray-600 mb-6 flex-grow">Your own private AI, running on your network.</p>
              <span className="text-sm font-semibold text-gray-900 mt-auto">From R30,000</span>
            </a>
          </div>
        </section>

        {/* PLATFORMS SLIDER */}
        <PlatformSliderSection />

        {/* OFFICE BANNER (Break section) */}
        <OfficeBannerSection />

        {/* SECTION 3 — WEB DESIGN PACKAGES */}
        <section id="web-packages" className="py-20 bg-[#FAF9F6] border-t border-gray-200">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-gray-900 mb-4 tracking-tight">Web Design Packages</h2>
              <p className="text-lg text-gray-600">Global domain extensions included — .com, .net, .org</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic */}
              <div className="bg-[#FAF9F6] p-8 rounded-lg border border-gray-200 flex flex-col">
                <h3 className="text-2xl font-serif mb-2">Basic</h3>
                <div className="text-3xl font-sans font-semibold mb-6">R3,500 <span className="text-sm font-normal text-gray-500">once-off</span></div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">Up to 5 pages</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">Mobile responsive design</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">Free business email</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">Global domain included</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">7-day delivery</span></li>
                </ul>
                <Button asChild className="w-full bg-brand-orange hover:bg-[#c26547] text-white">
                  <a href="https://wa.me/2763049876" target="_blank" rel="noopener noreferrer">WhatsApp to start</a>
                </Button>
              </div>

              {/* Medium */}
              <div className="bg-[#FAF9F6] p-8 rounded-lg border border-gray-200 flex flex-col">
                <h3 className="text-2xl font-serif mb-2">Medium</h3>
                <div className="text-3xl font-sans font-semibold mb-6">R6,000 <span className="text-sm font-normal text-gray-500">once-off</span></div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">Unlimited pages</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">Mobile responsive design</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">Free business email</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">Global domain included</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">Company profile design & copywriting included</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">7–10 day delivery</span></li>
                </ul>
                <Button asChild className="w-full bg-brand-orange hover:bg-[#c26547] text-white">
                  <a href="https://wa.me/2763049876" target="_blank" rel="noopener noreferrer">WhatsApp to start</a>
                </Button>
              </div>

              {/* Full Control */}
              <div className="bg-white p-8 rounded-lg border-2 border-brand-orange shadow-md flex flex-col relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-white px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                  Most Popular
                </div>
                <h3 className="text-2xl font-serif mb-2">Full Control</h3>
                <div className="text-3xl font-sans font-semibold mb-6">R9,500+ <span className="text-sm font-normal text-gray-500">once-off</span></div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">Everything in Medium</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">Full e-commerce store</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">Own server & hosting</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">100% website ownership</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">Product & inventory management</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">10–14 day delivery</span></li>
                </ul>
                <Button asChild className="w-full bg-brand-orange hover:bg-[#c26547] text-white">
                  <a href="https://wa.me/2763049876" target="_blank" rel="noopener noreferrer">WhatsApp to start</a>
                </Button>
              </div>
            </div>
            
            <p className="text-center text-sm text-gray-500 mt-12 max-w-2xl mx-auto">
              All packages include a once-off setup. 50% deposit to begin, 50% before go-live. Global domains only (.com, .net, .org).
            </p>
          </div>
        </section>

        {/* SECTION 4 — DIGITAL MARKETING PACKAGES */}
        <section id="marketing-packages" className="py-20 bg-white border-t border-gray-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-gray-900 mb-4 tracking-tight">Digital Marketing</h2>
              <p className="text-lg text-gray-600">3-month minimum commitment. Payment before the 10th of every month.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Silver */}
              <div className="bg-white p-8 rounded-lg border border-gray-200 flex flex-col">
                <h3 className="text-2xl font-serif mb-2">Silver</h3>
                <div className="text-3xl font-sans font-semibold mb-2">R2,500 <span className="text-sm font-normal text-gray-500">/month</span></div>
                <p className="text-sm text-brand-orange font-medium mb-6">Once-off onboarding: R2,500</p>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">Social media platform management</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">Content calendar planning</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">Graphics design for posts</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">Basic follower growth ads</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">Awareness & reach campaigns</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">Monthly performance report</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">Up to 2 platforms (Facebook + Instagram)</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">12 posts per month</span></li>
                </ul>
                <Button asChild className="w-full bg-brand-orange hover:bg-[#c26547] text-white">
                  <a href="https://wa.me/2763049876" target="_blank" rel="noopener noreferrer">WhatsApp to start</a>
                </Button>
              </div>

              {/* Gold */}
              <div className="bg-white p-8 rounded-lg border-2 border-brand-orange shadow-md flex flex-col relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-white px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                  Most Popular
                </div>
                <h3 className="text-2xl font-serif mb-2">Gold</h3>
                <div className="text-3xl font-sans font-semibold mb-2">R6,500 <span className="text-sm font-normal text-gray-500">/month</span></div>
                <p className="text-sm text-brand-orange font-medium mb-6">Once-off onboarding: R2,500</p>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-900 font-medium">Everything in Silver, plus:</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">Full ad campaign management</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">Lead generation & retargeting ads</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">Video editing & reels</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">Advanced strategy & campaign planning</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">Community & inbox management</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">Up to 4 platforms</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">20+ posts per month</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">Bi-weekly performance reviews</span></li>
                  <li className="flex items-start"><Check className="h-5 w-5 text-brand-orange mr-3 shrink-0" /><span className="text-gray-600">Dedicated account manager</span></li>
                </ul>
                <Button asChild className="w-full bg-brand-orange hover:bg-[#c26547] text-white">
                  <a href="https://wa.me/2763049876" target="_blank" rel="noopener noreferrer">WhatsApp to start</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 — AI BUSINESS INTEGRATION */}
        <section id="ai-integration" className="py-20 bg-[#FAF9F6] border-t border-gray-200">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="mb-16">
              <h2 className="text-4xl font-serif text-gray-900 mb-4 tracking-tight">Your Own Private AI</h2>
              <p className="text-lg text-gray-600">No subscriptions. No data leaving your building. Yours completely.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-sans">
                <p>
                  We assess your business needs, source and build the
                  hardware, then install a private AI model directly onto
                  your local network. Your team accesses it from their own
                  devices — securely and privately.
                </p>
                <p>
                  Connect it to a dedicated WhatsApp number so your staff
                  interact with it naturally. Configured around your exact
                  workflows — customer queries, internal documents,
                  quoting, HR, inventory and more.
                </p>
                <p className="font-medium text-gray-900">
                  You own the hardware. You own the model. No monthly fees.
                </p>
                
                <div className="pt-6">
                  <p className="text-xl font-serif text-brand-orange mb-6">Projects start from R30,000 — scoped individually.</p>
                  <Button asChild className="bg-brand-orange hover:bg-[#c26547] text-white px-8 py-6 text-base">
                    <a href="https://wa.me/2763049876" target="_blank" rel="noopener noreferrer">Book your assessment</a>
                  </Button>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
                <ul className="space-y-5">
                  {[
                    "Business scope & use case assessment",
                    "Hardware spec, sourcing & full setup",
                    "Local AI model installation on your LAN",
                    "Secure access for all team devices",
                    "Optional WhatsApp number integration",
                    "Use case configuration & team training",
                    "Handover & ongoing support available"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-6 w-6 text-brand-orange mr-4 shrink-0" />
                      <span className="text-gray-800 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — HOW IT WORKS */}
        <section className="py-20 bg-white border-t border-gray-200">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-4xl font-serif text-gray-900 mb-16 text-center tracking-tight">How it works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="relative">
                <div className="text-6xl font-serif text-brand-orange/20 absolute -top-8 -left-4 z-0">1</div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-serif mb-4 text-gray-900">Tell us what you need</h3>
                  <p className="text-gray-600 leading-relaxed">
                    WhatsApp us and we'll ask the right questions.
                    No forms, no waiting — just a conversation.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="text-6xl font-serif text-brand-orange/20 absolute -top-8 -left-4 z-0">2</div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-serif mb-4 text-gray-900">We build it</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We handle everything — design, copy, setup and
                    configuration. You get updates throughout the process.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="text-6xl font-serif text-brand-orange/20 absolute -top-8 -left-4 z-0">3</div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-serif mb-4 text-gray-900">You own it</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your website, your AI, your growth — fully handed over.
                    No lock-ins. No ongoing dependency unless you want it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 — FAQ */}
        <section className="py-20 bg-[#FAF9F6] border-t border-gray-200">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-4xl font-serif text-gray-900 mb-12 text-center tracking-tight">Common questions</h2>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-white border border-gray-200 rounded-lg px-6 shadow-sm">
                <AccordionTrigger className="text-left font-serif text-lg hover:no-underline hover:text-brand-orange py-6">
                  How long does a website take?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6 leading-relaxed">
                  Most websites are ready within 5–7 working days from
                  when we receive your content. We keep you updated throughout.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white border border-gray-200 rounded-lg px-6 shadow-sm">
                <AccordionTrigger className="text-left font-serif text-lg hover:no-underline hover:text-brand-orange py-6">
                  Do I get my own hosting and domain?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6 leading-relaxed">
                  Yes. Your site lives on its own hosting with a global
                  domain (.com, .net or .org). It's yours — we manage it
                  throughout the year.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-white border border-gray-200 rounded-lg px-6 shadow-sm">
                <AccordionTrigger className="text-left font-serif text-lg hover:no-underline hover:text-brand-orange py-6">
                  Do you offer .co.za domains?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6 leading-relaxed">
                  We currently offer global extensions only — .com, .net
                  and .org. A .com builds stronger credibility with both
                  local and international clients.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-white border border-gray-200 rounded-lg px-6 shadow-sm">
                <AccordionTrigger className="text-left font-serif text-lg hover:no-underline hover:text-brand-orange py-6">
                  Do you take full payment upfront?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6 leading-relaxed">
                  We work on a 50% deposit to get started and the
                  remaining 50% before your site goes live.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="bg-white border border-gray-200 rounded-lg px-6 shadow-sm">
                <AccordionTrigger className="text-left font-serif text-lg hover:no-underline hover:text-brand-orange py-6">
                  Can I see your work before committing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6 leading-relaxed">
                  Absolutely. WhatsApp us and we'll send portfolio
                  examples straight away — no commitment needed.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* SECTION 8 — FINAL CTA BANNER */}
        <section className="py-24 bg-brand-orange text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 tracking-tight text-white">Ready to own your digital presence?</h2>
            <p className="text-xl font-light mb-10 text-white/90">No commitment — just a conversation.</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-brand-orange px-8 py-6 text-lg font-medium transition-colors">
                <a href="https://wa.me/2763049876" target="_blank" rel="noopener noreferrer">WhatsApp us now</a>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-brand-orange px-8 py-6 text-lg font-medium transition-colors">
                <a href="mailto:info@camsnett.com">Email us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;