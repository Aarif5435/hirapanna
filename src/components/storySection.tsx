"use client"

import { useState, useEffect } from "react";

export function StorySection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen flex flex-col justify-center items-center  overflow-hidden">
      <div
        className="absolute text-[13rem] text-[#e8c6aa] font-serif opacity-60 transition-all duration-900"
        style={{
          right: `calc(70% - ${scrollY * 0.2}px)`,
          top: "20%",
        }}
      >
        jewelry
      </div>

      <div
        className="absolute text-[13rem] text-[#e8c6aa] font-serif opacity-60 transition-all duration-900"
        style={{
          bottom: `20%`,
          right: `calc(0% + ${scrollY * 0.2}px)`,
        }}
      >
        selection
      </div>

      {/* Main Content */}
      <p className="text-[#30373E] font-serif tracking-wider text-4xl w-1/2 z-20 text-center px-8">
        It has always been to produce awesome products for the dynamic urban
        lifestyle of the <span className="text-[#E6721D]">modern woman.</span> 
      </p>

      {/* Center Button
      <div className="mt-6 flex items-center justify-center">
        <div className="w-16 h-16 border-2 border-gray-800 rounded-full flex items-center justify-center text-xs">
          OUR <br /> STORY
        </div>
      </div> */}
    </div>
  );
}
