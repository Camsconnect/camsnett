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
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="text-lg font-bold">
          My App
        </Link>
        {isMobile ? (
          <Menubar className="border-none">
            <MenubarMenu>
              <MenubarTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </MenubarTrigger>
              <MenubarContent align="end">
                {navLinks.map((link) => (
                  <MenubarItem key={link.name} asChild>
                    <Link to={link.path}>{link.name}</Link>
                  </MenubarItem>
                ))}
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        ) : (
          <nav className="flex items-center space-x-4">
            {navLinks.map((link) => (
              <Button key={link.name} variant="ghost" asChild>
                <Link to={link.path}>{link.name}</Link>
              </Button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default MenuBar;