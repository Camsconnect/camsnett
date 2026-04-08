"use client";

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import { Brain, MenuIcon, Search, ShoppingCart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const MenuBar = () => {
  const isMobile = useIsMobile();
  const whatsappLink = "https://wa.me/27630498076";
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-8">
        {/* Left: Logo & Nav */}
        <div className="flex items-center gap-10">
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-serif font-medium tracking-tight text-gray-900 hover:text-brand-orange transition-colors"
          >
            Camsnett
          </Link>

          {!isMobile && (
            <nav className="flex items-center gap-8 text-sm font-sans font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "transition-colors hover:text-brand-orange relative py-1",
                    location.pathname === link.path
                      ? "text-brand-orange"
                      : "text-gray-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          )}
        </div>

        {/* Right: Actions */}
        <div className="ml-auto flex items-center gap-4">
          <Button variant="ghost" size="icon" className="h-9 w-9 text-gray-600 hover:text-brand-orange">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          <Button
            asChild
            size="sm"
            className="hidden md:inline-flex bg-brand-orange text-white hover:bg-[#c26547] rounded-md font-sans font-medium px-5 py-2 shadow-sm"
          >
             <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Chat
             </a>
          </Button>

          {isMobile && (
            <Menubar className="border-none bg-transparent shadow-none p-0 ml-1">
              <MenubarMenu>
                <MenubarTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-9 w-9">
                    <MenuIcon className="h-5 w-5" />
                  </Button>
                </MenubarTrigger>
                <MenubarContent align="end" className="min-w-[200px] mt-2">
                  {navLinks.map((link) => (
                    <MenubarItem key={link.name} asChild>
                      <Link to={link.path} className="w-full py-2 cursor-pointer">
                        {link.name}
                      </Link>
                    </MenubarItem>
                  ))}
                  <MenubarItem asChild className="p-0 mt-2 focus:bg-transparent">
                     <a
                       href={whatsappLink}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="w-full block bg-brand-orange text-white text-center py-2 text-sm font-medium cursor-pointer hover:bg-[#c26547] rounded-md"
                     >
                       Chat With Us
                     </a>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          )}
        </div>
      </div>
    </header>
  );
};

// Helper for the chevron
function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default MenuBar;