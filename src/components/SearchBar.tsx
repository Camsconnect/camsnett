"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const searchQueries = [
  "What are you looking for?",
  "Logo design",
  "Social media management",
  "A new website",
  "Videography services",
];

const SearchBar = () => {
  const [placeholder, setPlaceholder] = useState("");
  const [queryIndex, setQueryIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Effect for the typing animation
  useEffect(() => {
    const currentQuery = searchQueries[queryIndex];
    let timeoutId: NodeJS.Timeout;

    if (isDeleting) {
      // Deleting characters
      if (charIndex > 0) {
        timeoutId = setTimeout(() => {
          setPlaceholder(currentQuery.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 100); // Deleting speed
      } else {
        setIsDeleting(false);
        setQueryIndex((prevIndex) => (prevIndex + 1) % searchQueries.length);
      }
    } else {
      // Typing characters
      if (charIndex < currentQuery.length) {
        timeoutId = setTimeout(() => {
          setPlaceholder(currentQuery.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 150); // Typing speed
      } else {
        // Wait for a bit before deleting
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // Pause before deleting
      }
    }

    return () => clearTimeout(timeoutId);
  }, [charIndex, isDeleting, queryIndex]);

  // Effect for the blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="w-full flex justify-center">
      <div className="container px-4 md:px-6 max-w-[16rem] md:max-w-lg">
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70" />
          <Input
            type="search"
            placeholder={placeholder + (showCursor ? "|" : "")}
            className="w-full rounded-full pl-12 pr-4 py-3 h-14 text-base bg-black/30 backdrop-blur-md border border-white/20 text-white placeholder:text-white/70 focus:ring-white/50 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default SearchBar;