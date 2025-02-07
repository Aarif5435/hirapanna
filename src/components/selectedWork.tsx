import Image from "next/image";
import neckless from "../../public/1stpendent.webp";
import ring from "../../public/2ndneckless.webp";
import ears from "../../public/3earsrings.webp";
import bracelet from "../../public/4nosering.webp";
import UnfoldSection from "./unfoldSection";
import Discover from "./discover";

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
      <section className="px-28 z-30">
        <h1 className="text-2xl text-black font-semibold tracking-wider">
          Selected works:
        </h1>
        <div className="flex">
          {selected.map((select, ind) => (
            <div key={ind} className="w-1/2 cursor-pointer">
              <Image
                className="w-10/12 z-30 hover:scale-90 duration-200"
                src={select.img}
                alt={"image"}
              />
              <p className="font-semibold pt-2 flex justify-between w-64">
                <span className="w-44">{select?.name}</span>
                <span>{select.price}</span>
              </p>
              <span className="font-normal text-sm">{select.type}</span>
            </div>
          ))}
        </div>

      </section>
        <UnfoldSection />
        <Discover/>
    </>
  );
}
