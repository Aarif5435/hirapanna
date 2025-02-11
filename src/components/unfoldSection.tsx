"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import iStock from "../../public/iStock.webp"; // Update with your actual image path

export default function UnfoldSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Image moves in from the left and stops
  const imageX = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

  return (
    <div ref={ref} className="pt-96 relative overflow-hidden flex justify-center">
      {/* Background Box */}
      <motion.div
        className="absolute bg-[#EBE2DD] w-2/3 h-1/2 -z-20 -left-32 bottom-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      <div className="flex items-center justify-around w-11/12">
        {/* Image with Unfold Effect */}
        <motion.div
          className="w-1/2"
          style={{ x: imageX }}
        >
          <Image className="w-8/12 object-cover" src={iStock} alt="iStock" />
        </motion.div>

        {/* Text */}
        <motion.div
          className="-pl-28 font-serif"
          style={{ opacity: textOpacity, y: textY }}
        >
          <h2 className="text-7xl font-semibold tracking-wide mb-6">
           <span className="text-[#E6721D]">Antique</span> <br /> Diamond Necklaces
          </h2>
          <span className="text-3xl font-medium">
            Beautiful <span className="text-[#E6721D]">colors.</span> Excellent quality.
          </span>
        </motion.div>
      </div>
    </div>
  );
}
