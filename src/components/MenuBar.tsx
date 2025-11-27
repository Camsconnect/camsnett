"use client";

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import { Brain, MenuIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const MenuBar = () => {
  const isMobile = useIsMobile();
  const whatsappLink = "https://wa.me/27630498076";
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
    { name: "FAQ", path: "/faq" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 w-full flex justify-center py-4 transition-all duration-300",
      scrolled ? "py-2" : "py-6"
    )}>
      <div className={cn(
        "container relative mx-auto flex items-center justify-between rounded-full transition-all duration-300",
        scrolled 
          ? "bg-background/70 backdrop-blur-xl border border-white/10 shadow-lg max-w-screen-lg h-14 px-6" 
          : "bg-background/40 backdrop-blur-md border border-white/5 max-w-screen-xl h-16 px-8"
      )}>
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-normal tracking-wide text-foreground hover:text-brand-neon transition-colors"
        >
          <div className="bg-brand-neon/20 p-1.5 rounded-full">
             <Brain className="h-5 w-5 text-brand-neon" />
          </div>
          <span className="font-medium">Camsnett</span>
        </Link>

        {isMobile ? (
          <Menubar className="border-none bg-transparent">
            <MenubarMenu>
              <MenubarTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground hover:bg-white/10"
                >
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </MenubarTrigger>
              <MenubarContent
                align="end"
                className="bg-background/95 backdrop-blur-xl border-white/10 text-foreground min-w-[200px]"
              >
                {navLinks.map((link) => (
                  <MenubarItem key={link.name} asChild className="focus:bg-white/10 focus:text-brand-neon">
                    <Link to={link.path} className="w-full py-2">
                      {link.name}
                    </Link>
                  </MenubarItem>
                ))}
                <MenubarItem
                  onSelect={() => window.open(whatsappLink, '_blank')}
                  className="p-2 mt-2 focus:bg-transparent"
                >
                  <div className="w-full bg-brand-neon text-white hover:bg-brand-neon/90 hover:shadow-glow transition-all rounded-md px-4 py-2 text-center cursor-pointer font-medium">
                    Chat With Us
                  </div>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        ) : (
          <nav className="flex items-center space-x-1">
            {navLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                asChild
                className={cn(
                  "text-sm font-medium transition-all hover:bg-white/5 hover:text-brand-neon rounded-full px-4",
                  location.pathname === link.path ? "text-brand-neon bg-white/5" : "text-muted-foreground"
                )}
              >
                <Link to={link.path}>{link.name}</Link>
              </Button>
            ))}
            <div className="w-px h-6 bg-white/10 mx-2" />
            <Button
              asChild
              className="bg-brand-neon text-white hover:bg-brand-neon/80 hover:shadow-glow transition-all duration-300 rounded-full px-6 font-medium"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Chat With Us
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default MenuBar;