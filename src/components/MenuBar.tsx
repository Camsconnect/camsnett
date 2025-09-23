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
      <div className="container mx-auto max-w-screen-md flex h-14 items-center justify-between rounded-full bg-menubar px-6 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-menubar/60">
        <Link to="/" className="text-lg font-bold text-menubar-foreground">
          My App
        </Link>
        {isMobile ? (
          <Menubar className="border-none bg-transparent">
            <MenubarMenu>
              <MenubarTrigger asChild>
                <Button variant="ghost" size="icon" className="text-menubar-foreground">
                  <MenuIcon className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </MenubarTrigger>
              <MenubarContent align="end" className="bg-menubar text-menubar-foreground border-menubar">
                {navLinks.map((link) => (
                  <MenubarItem key={link.name} asChild>
                    <Link to={link.path}>{link.name}</Link>
                  </MenubarItem>
                ))}
                <MenubarItem asChild className="p-0">
                  <Button className="w-full bg-lime-500 text-black hover:bg-lime-600 rounded-none">
                    Chat With Us
                  </Button>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        ) : (
          <nav className="flex items-center space-x-4">
            {navLinks.map((link) => (
              <Button key={link.name} variant="ghost" asChild className="text-menubar-foreground hover:bg-menubar/20">
                <Link to={link.path}>{link.name}</Link>
              </Button>
            ))}
            <Button className="bg-lime-500 text-black hover:bg-lime-600 rounded-full px-6 py-2">
              Chat With Us
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default MenuBar;