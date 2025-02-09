import necklaces from "../../public/product-necklaces.webp";
import rings from "../../public/product-ring.webp";
import bracelet from "../../public/bracelet.jpg";
import b1 from "../../public/b1.webp";
import b2 from "../../public/b2.webp";
import b3 from "../../public/b3.webp";
import r1 from "../../public/r1.webp";
import r2 from "../../public/r2.webp";
import r3 from "../../public/r3.webp";
import r4 from "../../public/2ndneckless.webp";
import n1 from "../../public/n1.webp";
import n2 from "../../public/n2.webp";
import n3 from "../../public/n3.webp";
import n4 from "../../public/n4.webp";
import { StaticImageData } from "next/image"; 


export type Product = {
  id: number;
  name: string;
  price: string;
  type: string;
  img: StaticImageData; // Change from StaticImageData to string
  category: string;
};

export type Category = {
  id: number;
  category: string;
  img: StaticImageData; // Image import type
  products: Product[]; // Correct property name (not "productsts")
};


export const jewellryData: Category[] = [
  {
    id: 1,
    category: "Necklaces",
    img: necklaces,
    products: [
      {
        id: 11,
        name: "Exuberant golden Necklace",
        price: "520.00",
        type: "golden - necklaces",
        img: n1,
        category: "Necklaces",
      },
      {
        id: 12,
        name: "Moonrise Golden Necklace",
        price: "369.00",
        type: "golden - necklaces",
        img: n2,
        category: "Necklaces",
      },
      {
        id: 13,
        name: "Portlligat Golden Necklace",
        price: "369.00",
        type: "golden - necklaces",
        img: n3,
        category: "Necklaces",
      },
      {
        id: 14,
        name: "Nighwave Golden Necklace",
        price: "520.00",
        type: "golden - necklaces",
        img: n4,
        category: "Necklaces",
      },
      {
        id: 15,
        name: "Meandres Golden Necklace",
        price: "419.00",
        type: "golden - necklaces",
        img: n1,
        category: "Necklaces",
      },
      {
        id: 16,
        name: "Splash Golden Necklace",
        price: "520.00",
        type: "golden - necklaces",
        img: n3,
        category: "Necklaces",
      },
    ],
  },
  {
    id: 2,
    category: "Rings",
    img: rings,
    products: [
      {
        id: 21,
        name: "Magnolia Golden Ring",
        price: "229.00",
        type: "golden - ring",
        img: r4,
        category: "Rings",
      },
      {
        id: 22,
        name: "Curves Golden Ring",
        price: "229.00",
        type: "golden - ring",
        img: r1,
        category: "Rings",
      },
      {
        id: 23,
        name: "Exuberant Golden Ring",
        price: "259.00",
        type: "golden - ring",
        img: r2,
        category: "Rings",
      },
      {
        id: 24,
        name: "Nighwave Golden ring",
        price: "520.00",
        type: "golden - ring",
        img: r3,
        category: "Rings",
      },
      {
        id: 25,
        name: "Meandres Golden ring",
        price: "419.00",
        type: "golden - ring",
        img: r1,
        category: "Rings",
      },
      {
        id: 26,
        name: "Splash Golden ring",
        price: "520.00",
        type: "golden - ring",
        img: r3,
        category: "Rings",
      },
    ],
  },
  {
    id: 3,
    category: "Bracelets",
    img: bracelet,
    products: [
      {
        id: 31,
        name: "Magnolia Golden bracelet",
        price: "229.00",
        type: "golden - bracelet",
        img: b1,
        category: "Bracelets",
      },
      {
        id: 32,
        name: "Curves Golden bracelet",
        price: "229.00",
        type: "golden - bracelet",
        img: b3,
        category: "Bracelets",
      },
      {
        id: 33,
        name: "Exuberant Golden bracelet",
        price: "259.00",
        type: "golden - bracelet",
        img: b2,
        category: "Bracelets",
      },
      {
        id: 34,
        name: "Nighwave Golden bracelet",
        price: "520.00",
        type: "golden - bracelet",
        img: b2,
        category: "Bracelets",
      },
      {
        id: 35,
        name: "Meandres Golden bracelet",
        price: "419.00",
        type: "golden - bracelet",
        img: b1,
        category: "Bracelets",
      },
      {
        id: 36,
        name: "Splash Golden bracelet",
        price: "520.00",
        type: "golden - bracelet",
        img: b3,
        category: "Bracelets",
      },
    ],
  },
];
