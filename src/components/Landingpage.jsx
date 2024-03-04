import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function Landingpage() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.8" className="w-full h-screen border-t-2 bg-zinc-50">
    <div className="textstructure mt-32 px-20">
      {["we create", "eye-opening", "presentation"].map((item, index) => (
        <div className="masker" key={index}>
          <h1 className="uppercase text-[6vw] leading-[5.5vw] tracking-tighter font-[Founders_Grotesk-Semibold] font-medium">
            {item}
          </h1>
        </div>
      ))}
    </div>
      <div className="border-t-[1px] border-zinc-300 mt-32 flex justify-between items-center py-5 px-20">
        {["for public private companies","from the pitch to IPO"].map((item,index)=>(
        <p className="text-md font-light tracking-tight leading-none capitalize">
            {item}
        </p>))}
        <div className="start flex items-center gap-5">
  <div className="px-5 py-2 border-[1px] border-zinc-950 rounded-full text-sm uppercase">
    start the project
  </div>
  <div className="w-9 h-9 border-[1px] border-zinc-950 rounded-full flex items-center justify-center">
 <span className="rotate-[45deg]">
 <FaArrowUpLong className="text-zinc-950" />
 </span>
</div>
</div>

      </div>
    </div>
  );
}

export default Landingpage;
