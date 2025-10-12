"use client";

import React from "react";
import { Brain } from "lucide-react";

const ChatPopup = () => {
  const whatsappLink = "https://wa.me/27630498076";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="flex items-center gap-3 rounded-full bg-card p-3 shadow-lg border group-hover:bg-accent transition-colors duration-300">
        <div className="relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            <Brain className="h-6 w-6 text-foreground" />
          </div>
          <span className="absolute bottom-0 right-0 block h-3.5 w-3.5 rounded-full bg-green-500 ring-2 ring-card animate-breathing-dot" />
        </div>
        <div className="pr-2">
          <p className="font-semibold text-foreground">Chat with Camsnett</p>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            Always online • Avg. response: 10s
          </div>
        </div>
      </div>
    </a>
  );
};

export default ChatPopup;