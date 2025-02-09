"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { jewellryData } from "@/utils/db";


export default function Collections() {
  return (
    <>
      <section>
        {jewellryData.map((prod) => (
          <div key={prod.id}>
            <div className="relative flex justify-center items-center mt-52">
              <div className="w-1/2 bg-[#E8EBE3] h-80 border flex justify-center items-center relative">
                <motion.div
                  initial={{ x: -200, opacity: 0 }} // Start off-screen to the left
                  animate={{ x: 0, opacity: 1 }} // Move to center with fade-in
                  transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
                  className="w-1/2"
                >
                  <Image src={prod.img} alt="necklace" className="w-full" />
                </motion.div>
              </div>
            </div>
            <div className="px-20 pt-56">
              <h1 className="font-serif text-7xl text-[#051F34] text-center">
                {prod.category}
              </h1>
              <div className="grid grid-cols-3 gap-8 pt-24">
                {prod.products.map((select, ind) => (
                  <a href={`products/${select.id}`} key={ind} className="w-full cursor-pointer">
                    <Image
                      className="w-10/12 mx-auto z-30 hover:scale-90 duration-500"
                      src={select.img}
                      alt="image"
                    />
                    <div className="px-10">
                      <p className="font-semibold pt-2 flex justify-between mx-auto w-full">
                        <span className="w-44">{select?.name}</span>
                        <span>{select.price}</span>
                      </p>
                      <span className="font-normal text-sm">{select.type}</span>
                    </div>
                  </a>
                ))}
              </div>
              <div className="flex justify-center pt-20">
                <button className="p-2 px-8 tracking-widest bg-white font-semibold text-xs relative flex items-center before:content-[''] before:w-[12px] hover:before:w-[20px] hover:bg-[#090909f8] hover:text-white hover:before:bg-white before:h-[1px] before:bg-black before:absolute hover:before:left-1 before:left-4 before:top-1/2 before:-translate-y-1/2 before:transition-all before:duration-300">
                  View all
                </button>{" "}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
