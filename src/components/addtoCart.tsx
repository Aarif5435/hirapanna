"use client"

import { useState } from "react";


export function AddToCart() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-between items-center w-1/4 bg-white border py-4 px-4">
    <button
      onClick={() => {
        if (count !== 0) setCount((pre) => pre - 1);
      }}
      className="text-[#3B4148] text-xl"
    >
      -
    </button>
    <span>{count}</span>
    <button
      onClick={() => setCount((pre) => pre + 1)}
      className="text-[#3B4148] text-xl"
    >
      +
    </button>
  </div>

  )
}