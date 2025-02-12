"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import discover from "../../public/discover.webp";

export default function Discover() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"], // Triggers effect as you scroll
  });

  // Unfold effect for the image (Right to Left on Scroll Down)
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.5], 
    ["inset(0 100% 0 100%)", "inset(0 0% 0 0%)"] // Image unfolds from right to left
  );

  return (
    <div ref={ref} className="min-h-screen relative flex items-center justify-center">
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
        {/* Background decorative element */}
        <motion.div
          className="absolute bg-[#d3d5d6] w-7/12 h-1/2 -z-20 right-1 bottom-1/3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>

        {/* Image container with unfolding effect (Right to Left) */}
        <motion.div 
          className="w-full lg:w-1/2 pt-20 relative duration-1000 overflow-hidden"
          style={{ clipPath }}
          // transition={{ duration: 0.5 }}
        >
          <div className="relative aspect-[3/4] w-full">
            <Image className="w-8/12 object-cover" src={discover} alt="discover" />
          </div>
        </motion.div>

        {/* Text content (Static) */}
        <div className="w-full lg:w-1/2 space-y-6 mb-28 h-fit text-center lg:text-right">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold tracking-wide">
            <span className="text-[#E6721D]">Perfect</span> Match <br /> for Every Occasion
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl font-medium">
            Coordinate with other pieces from <br /> the <span className="text-[#E6721D]">collection</span> for a classic look.
          </p>
        </div>
      </div>
    </div>
  );
}
