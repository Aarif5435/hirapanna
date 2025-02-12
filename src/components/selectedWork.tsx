import Image from "next/image";
import neckless from "../../public/1stpendent.webp";
import ring from "../../public/2ndneckless.webp";
import ears from "../../public/3earsrings.webp";
import bracelet from "../../public/4nosering.webp";
import UnfoldSection from "./unfoldSection";
import Discover from "./discover";
import Link from "next/link";

const selected = [
  {
    name: "SPLASH GOLDEN NECKLACE",
    price: "$369",
    type: "golder necklaces",
    img: neckless,
  },
  {
    name: "MONOCHROME RING",
    price: "$229",
    type: "golden ring",
    img: ring,
  },
  {
    name: "PORTLLIGAT GOLDEN EARRINGS",
    price: "$119",
    type: "earrings golden",
    img: ears,
  },
  {
    name: "MIRO JEWELERY GOLDEN BRACELETE",
    price: "$219",
    type: "bracelet golden",
    img: bracelet,
  },
];

export function SelectedWork() {
  return (
    <>
      <section className="px-52 z-30">
        <h1 className="text-2xl text-black font-semibold tracking-wider border-b-[#E6721D] border-b-4 w-fit pb-1">
          Selected <span className="text-[#E6721D]">works:</span> 
        </h1>
        <div className="flex pt-4">
          {selected.map((select, ind) => (
            <Link href="/products/11" key={ind} className="w-1/2 cursor-pointer">
              <Image
                className="w-10/12 z-30 hover:scale-90 duration-200"
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

      </section>
        <UnfoldSection />
        <Discover/>
    </>
  );
}
