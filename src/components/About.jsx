import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-[Neue_Montreal] text-[4vw] leading-[4.5vw] tracking-tight'>
        Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds,
         sell produts, ex­plain com­plex ideas, and hire great peo­ple.
        </h1>
        <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a2b756]">
            <div className='w-1/2'><h1 className='text-5xl'>Our Approach</h1>
            <button className='flex gap-6 items-center px-10 py-6 bg-zinc-950 rounded-full mt-10 text-white'>Read More
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
            </button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-xl bg-black'></div>
        </div>
    </div>
  )
}

export default About