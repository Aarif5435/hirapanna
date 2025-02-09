import type { Metadata } from "next";
import CheckoutSteps from "@/components/journey";




export const metadata: Metadata = {
  title: "checkout",
  description: "Checkout page",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
         <CheckoutSteps/>
      {children}
    </div>
  );
}
