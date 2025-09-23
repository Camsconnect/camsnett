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
import { MenuIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const MenuBar = () => {
  const isMobile = useIsMobile();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
    { name: "FAQ", path: "/faq" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full flex justify-center py-4">
      {/* Soft purple backlight */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-[#7B2CFF] to-[#4429B9] rounded-full opacity-50 blur-3xl" style={{ transform: 'translate(20%, -20%)' }}></div>
      </div>

      <div className="container relative mx-auto max-w-screen-md flex h-14 items-center justify-between rounded-full bg-menubar/10 px-6 shadow-outer-glass backdrop-blur-3xl border border-menubar-border/15 shadow-inner-glass-bottom shadow-inner-glass-stroke supports-[backdrop-filter]:bg-menubar/10">
        <Link to="/" className="text-lg font-bold text-white">
          My App
        </Link>
        {isMobile ? (
          <Menubar className="border-none bg-transparent">
            <MenubarMenu>
              <MenubarTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <MenuIcon className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </MenubarTrigger>
              <MenubarContent align="end" className="bg-menubar/80 text-white border border-menubar-border/15 backdrop-blur-xl">
                {navLinks.map((link) => (
                  <MenubarItem key={link.name} asChild>
                    <Link to={link.path}>{link.name}</Link>
                  </MenubarItem>
                ))}
                <MenubarItem asChild className="p-0">
                  <Button className="w-full bg-lime-neon text-black hover:bg-lime-neon/90 rounded-none shadow-cta-inner-glow">
                    Chat With Us
                  </Button>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        ) : (
          <nav className="flex items-center space-x-4">
            {navLinks.map((link) => (
              <Button key={link.name} variant="ghost" asChild className="text-white hover:bg-menubar-border/10">
                <Link to={link.path}>{link.name}</Link>
              </Button>
            ))}
            <Button className="bg-lime-neon text-black hover:bg-lime-neon/90 rounded-full px-6 py-2 shadow-cta-inner-glow">
              Chat With Us
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default MenuBar;