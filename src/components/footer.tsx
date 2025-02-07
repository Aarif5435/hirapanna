import Image from "next/image";
import logo from "../../public/svgexport-1.svg"


export default function Footer() {
  return (
    <footer className="py-12">
       <div className="w-fit mb-10 mx-auto">
          <Image src={logo} alt={"logo"} />
        </div>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 gap-10 text-[#1F2937] text-sm">
        
        {/* About Section */}
        <div className="flex flex-col items-center">
          <h3 className="font-bold tracking-wider text-[#1F2937]">ABOUT</h3>
          <ul className="mt-3 space-y-2 text-center">
            <li><a href="#" className="hover:underline">our story</a></li>
            <li><a href="#" className="hover:underline">journal</a></li>
            <li><a href="#" className="hover:underline">our materials</a></li>
            <li><a href="#" className="hover:underline">contact us</a></li>
          </ul>
        </div>

        {/* Logo & Store Section */}
        <div className="flex flex-col items-center">
          <h2 className="font-bold tracking-wider text-[#1F2937]">STORE</h2>
          <ul className="mt-3 space-y-2 text-center">
            <li><a href="#" className="hover:underline">collections</a></li>
            <li><a href="#" className="hover:underline">gift cards</a></li>
            <li><a href="#" className="hover:underline">customer reviews</a></li>
            <li><a href="#" className="hover:underline">retail store</a></li>
            <li><a href="#" className="hover:underline">etsy shop</a></li>
          </ul>
        </div>

        {/* Care Section */}
        <div className="flex flex-col items-center">
          <h3 className="font-bold tracking-wider text-[#1F2937]">CARE</h3>
          <ul className="mt-3 space-y-2 text-center">
            <li><a href="#" className="hover:underline">delivery</a></li>
            <li><a href="#" className="hover:underline">return & cancellations</a></li>
            <li className="flex justify-center items-center space-x-2">
              <a href="#" className="hover:underline ">faq</a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
