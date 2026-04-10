"use client";

import React from "react";
import Layout from "@/components/Layout";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

// Placeholder blog data relevant to a digital agency
const blogPosts = [
  {
    id: 1,
    title: "Why Your Business Needs to Own Its AI Data",
    excerpt: "Off-the-shelf AI tools are great, but relying on them means your proprietary data trains someone else's model. Learn why private, localized AI is the future.",
    category: "AI & Tech",
    date: "Oct 12, 2023",
    author: "Camsnett Team",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "The Ultimate Guide to YouTube SEO in 2024",
    excerpt: "Uploading a video is only half the battle. Discover the strategies we use to push our clients' videos to the top of YouTube search results.",
    category: "Marketing",
    date: "Sep 28, 2023",
    author: "Camsnett Team",
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Renting vs. Owning Your Website: What You Need to Know",
    excerpt: "Many agencies lock you into monthly retainers for a website you never actually own. Here is why we believe in 100% client ownership.",
    category: "Web Design",
    date: "Sep 15, 2023",
    author: "Camsnett Team",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Automating Your Workflows with n8n",
    excerpt: "Stop doing repetitive manual tasks. We break down how n8n can connect your CRMs, emails, and internal tools to save you hundreds of hours.",
    category: "Automation",
    date: "Aug 30, 2023",
    author: "Camsnett Team",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "Brand Consistency: The Silent Salesperson",
    excerpt: "Your logo, colors, and tone of voice do more selling than you think. Learn how to audit your own brand for consistency.",
    category: "Branding",
    date: "Aug 14, 2023",
    author: "Camsnett Team",
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    title: "How to Maximize Your SME Start-up Package",
    excerpt: "A behind-the-scenes look at how small businesses are leveraging our all-in-one starter package to hit the ground running.",
    category: "Business",
    date: "Jul 22, 2023",
    author: "Camsnett Team",
    imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=800",
  },
];

const Blog = () => {
  return (
    <Layout noPaddingTop>
      {/* HERO SECTION */}
      <section className="relative w-full py-24 md:py-32 overflow-hidden border-b border-gray-200 bg-[#FAF9F6]">
        {/* Decorative SVG */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block opacity-20 pointer-events-none z-0">
          <svg width="300" height="300" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 200 Q200 50 350 200 T50 200" stroke="#DA7756" strokeWidth="2" fill="none" strokeDasharray="4 12"/>
            <circle cx="200" cy="200" r="100" stroke="#DA7756" strokeWidth="1" opacity="0.5" fill="none"/>
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center rounded-full border border-brand-orange/30 bg-brand-orange/5 px-3 py-1 text-sm text-brand-orange font-medium mb-6">
            <span className="flex h-2 w-2 rounded-full bg-brand-orange mr-2"></span>
            Insights & Ideas
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6 tracking-tight">
            The Camsnett Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-sans leading-relaxed">
            Expert insights on web design, artificial intelligence, digital marketing, and scaling your business in the modern era.
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="group flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-brand-orange/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative h-60 overflow-hidden bg-gray-100">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-semibold text-gray-900 shadow-sm uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Container */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-sans">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {post.author}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif text-gray-900 mb-4 leading-snug group-hover:text-brand-orange transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 font-sans text-sm leading-relaxed mb-8 flex-grow">
                    {post.excerpt}
                  </p>

                  <Button
                    variant="ghost"
                    className="mt-auto w-fit p-0 hover:bg-transparent text-brand-orange hover:text-[#c26547] font-sans font-medium group/btn"
                  >
                    Read Article 
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 px-8 py-6 text-base font-medium rounded-md">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;