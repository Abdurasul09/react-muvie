import React from "react";

const Hero = () => {
  return (
		<div className="hero">
    <div className="container mx-auto px-9">
      <div className="flex items-center justify-start h-[40rem]">
        <div>
          <span className="text-[#e2d703] text-2xl font-bold">Filmlane</span>
          <h1 className="text-white font-bold text-[4rem] sm:text-[3rem]">
            Unlimited <span className="text-[#e2d703] ">Movie</span>,<br/> TVs Shows, & More.
          </h1>
          <button className="border-2 rounded-3xl border-[#e2d703] px-4  py-2 bg-gray-700 transition duration-150 ease-out text-white font-bold hover:bg-[#e2d703] text-[1rem] uppercase mt-4">
            Wotch now
          </button>

        </div>
      </div>
    </div>
		</div>
  );
};

export default Hero;
