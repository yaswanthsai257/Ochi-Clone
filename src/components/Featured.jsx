import React from 'react'

function Featured() {
  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-200 pb-10'>
            <h1 className='text-6xl font-["Neue Montreal"] tracking-tight'>Featured Projects</h1>
        </div>
        <div className='px-20'>
        <div className="cards w-full flex gap-10 mt-10">
            <div className='cardcontainer relative w-1/2 h-[75vh]'>
                <h1 className='absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] -pb-20 leading-none tracking-tighter text-6xl'>
                {"FYDE".split("").map((item,index)=>{
                        <span>{item}</span>
                    })}
                </h1>
                <div className='card w-full h-full xl overflow-hidden'>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
                </div>
            </div>
            <div className='cardcontainer relative w-1/2 h-[75vh] bg-black'>
                <div className='card w-full h-full xl overflow-hidden'>
                <h1 className='absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] -pb-20 leading-none tracking-tighter text-6xl'>
                    {"VISE".split("").map((item,index)=>{
                        <span>{item}</span>
                    })}
                </h1>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Featured