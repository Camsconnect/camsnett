"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <section className="w-full flex justify-center">
      <div className="container px-4 md:px-6 max-w-lg">
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="What are you looking for?"
            className="w-full rounded-full pl-12 pr-4 py-3 h-14 text-base border-border"
          />
        </div>
      </div>
    </section>
  );
};

export default SearchBar;