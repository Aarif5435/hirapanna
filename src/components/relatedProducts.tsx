"use client";

import { Product } from "@/utils/db";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function RelatedProduct({ fourProducts }: {fourProducts: Product[] | undefined}) {
  // Inside your component:
  const pathname = usePathname();
  const basePath = pathname.split("/").slice(0, -1).join("/");

  return (
    <div className="flex">
      {fourProducts?.map((select: Product, ind: number) => (
        <Link
          href={`${basePath}/${select.id}`}
          key={ind}
          className="w-1/2 cursor-pointer"
        >
          <Image
            className="w-10/12 z-30 hover:scale-90 duration-500"
            src={select.img}
            alt={"image"}
          />
          <p className="font-semibold pt-2 flex justify-between w-64">
            <span className="w-44">{select?.name}</span>
            <span className="text-[#E6721D]">{select.price}</span>
          </p>
          <span className="font-normal text-sm">{select.type}</span>
        </Link>
      ))}
    </div>
  );
}
