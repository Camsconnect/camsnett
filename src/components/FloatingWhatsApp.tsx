"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/2763049876"
      target="_blank"
      rel="noopener noreferrer"
      className="md:hidden fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all hover:scale-105 flex items-center justify-center"
      aria-label="WhatsApp Us"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
};

export default FloatingWhatsApp;
