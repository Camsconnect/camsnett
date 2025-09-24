"use client";

import React, { useState, useEffect } from "react";

const InteractiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0C12] to-[#000000]"></div>

      {/* Soft violet glow (bottom left) */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-[#6B2EFF] to-transparent rounded-full opacity-20 blur-3xl transform translate-x-[-20%] translate-y-[20%]"></div>

      {/* Cool cyan/blue glow (top right) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-[#1E90FF] to-transparent rounded-full opacity-20 blur-3xl transform translate-x-[20%] translate-y-[-20%]"></div>

      {/* Mouse-reactive radial glow */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-radial from-white/10 to-transparent opacity-10 blur-3xl pointer-events-none"
        style={{
          left: mousePosition.x - 200, // Center the glow on the cursor
          top: mousePosition.y - 200, // Center the glow on the cursor
          transition: 'transform 0.1s ease-out', // Smooth movement
        }}
      ></div>
    </div>
  );
};

export default InteractiveBackground;