"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import iStock from "../../public/iStock.webp";
import Image from "next/image";

const UnfoldSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  // Create a clip-path transform for the unfolding effect
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );

  // Smooth text animations
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const textX = useTransform(scrollYProgress, [0.2, 0.5], [50, 0]);

  return (
    <div ref={containerRef} className="min-h-screen relative flex items-center justify-center">
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Background decorative element */}
        <motion.div
        className="absolute bg-[#F0D6BF] w-2/3 h-1/2 -z-20 left-1 bottom-1/3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

        {/* Image container with unfolding effect */}
        <motion.div 
          className="w-full lg:w-1/2 pt-20 relative duration-1000"
          style={{ clipPath }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative aspect-[3/4] w-full">
          <Image className="w-8/12 object-cover" src={iStock} alt="iStock" />
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          className="w-full lg:w-1/2 space-y-6 mb-28 h-fit text-center lg:text-left"
          style={{
            opacity: textOpacity,
            x: textX
          }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold tracking-wide">
            <span className="text-[#E6721D]">Antique</span>
            <br />
            Diamond Necklaces
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl font-medium">
            Beautiful <span className="text-[#E6721D]">colors.</span>
            <br />
            Excellent quality.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default UnfoldSection;

