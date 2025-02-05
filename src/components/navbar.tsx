import logo from "../../public/svgexport-1.svg";
import Image from "next/image";
import { IoBagOutline } from "react-icons/io5";
import { HiBars2 } from "react-icons/hi2";

export function Navbar() {
  return (
    <>
      <nav className="flex justify-between py-4 px-4 items-center  bg-opacity-50 backdrop-blur-md">
        <ul className="hidden lg:flex justify-around  text-black text-xs font-semibold w-1/4">
          <li className="flex ">
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT US</a>
          </li>
          <li>
            <a href="#">COLLECTIONS</a>
          </li>
        </ul>

        <div className="w-28">
          <Image src={logo} alt={"logo"} />
        </div>
        <div className="flex gap-3 w-20 ml-20">
          <IoBagOutline size={22} />
          <HiBars2 size={25}/>
        </div>
      </nav>
    </>
  );
}
