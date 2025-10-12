"use client";

import React from "react";
import MenuBar from "@/components/MenuBar";
import Footer from "@/components/Footer";

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
    </div>
  );
};

export default Layout;