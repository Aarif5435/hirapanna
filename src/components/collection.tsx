"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import hand from "../../public/hand.webp";
import necklaces from "../../public/product-necklaces.webp";
import rings from "../../public/product-ring.webp";
import earrings from "../../public/product-earrings.jpg";

const productsTypes = [
  {
    name: "Nacklaces",
    img: necklaces,
  },
  {
    name: "Rings",
    img: rings,
  },
  {
    name: "Earrings",
    img: earrings,
  },
];

export default function Collection() {
  return (
    <>
      <section className="flex flex-col relative justify-center items-center pt-28 px-20">
        <div className="relative flex justify-center items-center">
          {/* Large Text */}
          <h1 className="text-[15rem] tracking-wider font-serif text-[#D6B59F]">
            collections
          </h1>

          {/* Hand Image Animation */}
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 60, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false }}
            className="absolute top-0 left-[37%] transform -translate-x-1/3"
          >
            <Image src={hand} alt="hand" className="w-44" />
          </motion.div>
        </div>
        <p className="font-serif text-4xl mt-52 text-[#30373E] text-center">
          <span className="text-[#E6721D]">Inspired</span> by our multi-ethnic life, <br />
          we create fine jewelry to share our wonderful tales…
        </p>
        <div className="flex w-full">
          {productsTypes.map((product, ind) => (
            <motion.div key={ind} className="relative w-full flex mt-10">
              <div className="relative w-11/12">
                <Image
                  className="object-cover w-full h-full hover:scale-110 duration-300"
                  src={product.img}
                  alt="products"
                />
                <h3 className="absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 font-semibold text-white text-4xl text-center">
                  {product.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
        <a href="/collections" className="relative">
          <h1 className="text-[12rem] hover:scale-90 cursor-pointer font-bold text-white bg-gradient-to-b from-white to-[#E6721D] bg-[length:100%_200%] bg-clip-text transition-all font-serif duration-1000 ease-in-out hover:text-transparent hover:bg-[-100%_80%]">
            E
          </h1>
          <p className="text-xs text-center absolute top-1/2 left-3 font-serif">
            EXPLORE <br />
            COLLECTIONS
          </p>
        </a>
      </section>
    </>
  );
}
