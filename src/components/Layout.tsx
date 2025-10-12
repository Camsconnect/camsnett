"use client";

import React from "react";
import MenuBar from "@/components/MenuBar";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";

interface LayoutProps {
  children: React.ReactNode;
  noPaddingTop?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, noPaddingTop = false }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <MenuBar />
      <main className={`flex-grow ${noPaddingTop ? '' : 'pt-20'}`}>
        {children}
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Layout;