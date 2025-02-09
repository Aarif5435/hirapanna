export function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center lg:justify-start overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <div
        className="absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out lg:scale-100 scale-125"
        style={{
          backgroundImage: "url('/hero-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Text Container - Moves Right on Small Screens */}
      <div className="relative z-10 text-black px-5 sm:px-10 md:px-20 transition-all duration-500 ease-in-out lg:w-auto w-full lg:text-left text-center lg:ml-24">
        <h1 className="font-sortSMillGoudy text-9xl">
          finest <br /> jewelry,
        </h1>
        <h3 className="font-sortSMillGoudy text-3xl tracking-widest text-black mt-3">
          inspired by our life.
        </h3>

        {/* Button - Moves Along with Text */}
        <div className="mt-5 lg:ml-0 ml-auto lg:inline-block flex justify-center">
          <a  href="/collections" className="p-2 px-8 tracking-widest bg-white font-semibold text-xs relative flex items-center before:content-[''] before:w-[12px] hover:before:w-[20px] hover:bg-[#090909f8] hover:text-white hover:before:bg-white before:h-[1px] before:bg-black before:absolute hover:before:left-1 before:left-4 before:top-1/2 before:-translate-y-1/2 before:transition-all before:duration-300">
            Explore Now
          </a>
        </div>
      </div>
    </section>
  );
}
