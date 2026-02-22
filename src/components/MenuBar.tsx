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
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border/40">
      <div className="container mx-auto flex h-14 items-center px-4 md:px-6">
        {/* Left: Logo & Nav */}
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity"
          >
            <Brain className="h-6 w-6 text-brand-neon" />
            <span className="hidden sm:inline-block">Camsnett</span>
          </Link>

          {!isMobile && (
            <nav className="flex items-center gap-6 text-sm font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "transition-colors hover:text-brand-neon relative py-1",
                    location.pathname === link.path 
                      ? "text-foreground after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-neon" 
                      : "text-foreground/70"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          )}
        </div>

        {/* Right: Actions */}
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden md:flex gap-2 text-sm font-medium">
             <span>All Microsoft</span>
             <ChevronDownIcon className="h-3 w-3 opacity-50" />
          </Button>
          
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>

          <Button variant="ghost" size="icon" className="h-9 w-9 hidden sm:flex">
             <ShoppingCart className="h-4 w-4" />
             <span className="sr-only">Cart</span>
          </Button>

          <Button
            asChild
            size="sm"
            className="hidden md:inline-flex bg-brand-neon text-white hover:bg-brand-neon/90 rounded-sm font-semibold px-4 ml-2"
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
                       className="w-full block bg-brand-neon text-white text-center py-2 text-sm font-medium cursor-pointer hover:bg-brand-neon/90"
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