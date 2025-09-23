"use client";

import React from "react";
import MenuBar from "@/components/MenuBar";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MenuBar />
      <main className="flex-grow flex items-center justify-center p-4">
        <h1 className="text-4xl font-bold">Pricing Page</h1>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Pricing;