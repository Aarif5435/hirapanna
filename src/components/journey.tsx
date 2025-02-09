"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";


export default function CheckoutSteps() {
  const [activeStep, setActiveStep] = useState("cart");
  const pathname = usePathname();


  console.log('pathname', pathname.includes('cart'))

  const steps = [
    { id: "cart", label: "Cart" },
    { id: "checkout", label: "Checkout" },
    { id: "complete", label: "Order Complete" },
  ];

  return (
    <div className="flex justify-around px-80 p-20">
      {steps.map((step) => (
        <Link
          href={step.id}
          key={step.id + activeStep}
          className={`flex-1 text-center cursor-pointer text-3xl p-4 ${
            pathname.includes(step.id) ? "text-black font-medium" : "text-gray-400"
          } ${
            step.id === "complete" ? "pointer-events-none text-gray-300" : ""
          }`}
          onClick={(e) => {
            if (step.id === "complete") {
              e.preventDefault();
            } else {
              setActiveStep(step.id);
            }
          }}
        >
          {step.label}
        </Link>
      ))}
    </div>
  );
}
