import React, { useEffect, useState } from 'react';

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mousex = e.clientX;
      const mousey = e.clientY;

      const deltax = mousex - window.innerWidth / 2;
      const deltay = mousey - window.innerHeight / 2;

      const angle = Math.atan2(deltay, deltax) * (180 / Math.PI);
      setRotate(angle);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      <div className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
        <div className='absolute flex gap-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <div className='flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-white'>
            <div className='relative w-2/3 h-2/3 rounded-full bg-black'>
              <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-white'></div>
              <div className='w-10 h-10 rounded-full'></div>
            </div>
          </div>
          <div className='flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-white'>
            <div className='relative w-2/3 h-2/3 rounded-full bg-black'>
              <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-white'></div>
              <div className='w-10 h-10 rounded-full'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
