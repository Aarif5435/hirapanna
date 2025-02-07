"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import discover from "../../public/discover.webp";

export default function Discover() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"], // Stops in the center
  });

  // Unfold effect: Image moves in from the right
  const imageX = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

  return (
    <div ref={ref} className="pt-96 relative pl-10">
      {/* Background Box */}
      <motion.div
        className="absolute bg-[#E9F4F8] w-7/12 h-1/2 -z-20 right-3 bottom-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      <div className="flex items-center text-right  w-11/12">
        {/* Text */}
        <motion.div
          className="pl-20 font-serif"
          style={{ opacity: textOpacity, y: textY }}
        >
          <h2 className="text-7xl font-semibold tracking-wide mb-6">
            Perfect Match <br /> for Every Occasion
          </h2>
          <span className="text-3xl font-medium">
            Coordinate with other pieces from <br /> the collection for a classic look.
          </span>
        </motion.div>

        {/* Image with Unfold Effect */}
        <motion.div className="w-1/2 flex justify-end" style={{ x: imageX }}>
          <Image className="w-8/12 object-cover" src={discover} alt="discover" />
        </motion.div>
      </div>
    </div>
  );
}
