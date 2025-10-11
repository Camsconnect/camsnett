"use client";

import React from "react";
import { Link } from "react-router-dom";
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

const MenuBar = () => {
  const isMobile = useIsMobile();
  const whatsappLink = "https://wa.me/27630498076";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
    { name: "FAQ", path: "/faq" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full flex justify-center py-4">
      <div className="container relative mx-auto max-w-screen-md flex h-14 items-center justify-between rounded-full bg-background/80 backdrop-blur-sm border border-border px-6 shadow-sm">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-light text-foreground"
        >
          <Brain className="h-5 w-5" />
          Camsnett
        </Link>
        {isMobile ? (
          <Menubar className="border-none bg-transparent">
            <MenubarMenu>
              <MenubarTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground"
                >
                  <MenuIcon className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </MenubarTrigger>
              <MenubarContent
                align="end"
                className="bg-background text-foreground border"
              >
                {navLinks.map((link) => (
                  <MenubarItem key={link.name} asChild>
                    <Link to={link.path} className="font-light">
                      {link.name}
                    </Link>
                  </MenubarItem>
                ))}
                <MenubarItem
                  onSelect={() => window.open(whatsappLink, '_blank')}
                  className="p-0 focus:bg-transparent"
                >
                  <div className="w-full bg-brand-neon text-primary-foreground hover:bg-brand-neon/90 rounded-none shadow-cta-inner-glow font-normal px-2 py-1.5 text-sm text-center cursor-pointer">
                    Chat With Us
                  </div>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        ) : (
          <nav className="flex items-center space-x-4">
            {navLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                asChild
                className="text-foreground hover:bg-accent font-light"
              >
                <Link to={link.path}>{link.name}</Link>
              </Button>
            ))}
            <Button
              asChild
              className="bg-brand-neon text-primary-foreground hover:bg-brand-neon/90 rounded-full px-4 py-2 shadow-cta-inner-glow font-normal"
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