// import React from 'react';
// // import Elipse1 from './images/Elipse1.png'; // Import the image with the correct path

// function Header() {
//     return (
//       <div>
//                   <header className='bg-rose-300 h-20 flex items-center relative'>
//                   <div className='relative'>
//             <a href="/" className='text-pink-600 text-lg font-medium ml-96'>Plonk</a>
//             <img src="images/Elipse1.png" className='w-12 h-12 border rounded-full' alt="" />
//             <div className='text-black text-lg not-italic flex ml-96 font-medium '>My Friends</div>
//             <div className='text-black text-lg not-italic flex  ml-97 font-medium '>My Gallery</div>
//           </div>
//           </header>
//           </div>
//     );
// }

// export default Header;

import React from "react";
function Header() {
  return (
    <div>
      <div className="h-14 pr-40 flex bg-red-300 items-center justify-evenly">
        <a href="#">
          <div className="pr-[125px]">
            <img className="h-8" src="/images/Plonk.png" />
          </div>
        </a>
        <div className="flex">
          <div className="flex items-center">
            <img
              className="space-x-10 h-10 w-10 ml-4 rounded-full"
              src="./images/Elipse1.png"
              alt="Profile Picture"
            />

            <ul className=" ml-8 space-x-12 flex text-center text-black ">
              <li className="">
                <a className="font-medium text-sm" href="#">
                  My Friends
                </a>
              </li>
              <li className="">
                <a className="-ml-6 font-medium text-sm" href="#">
                  My Gallery
                </a>
              </li>
            </ul>
          </div>

          <div className="mr-[60px] flex items-center outline-none">
            <div className=" ml-32 text-black outline-none">
              <input
                type="text"
                placeholder="Search"
                className="placeholder-black text-black font-normal text-sm outline-none bg-red-300"
              />
              <div className=" border-b-2 w-60 border-black" />
            </div>
            <img
              className="-ml-6 mb-1 h-3"
              src="./images/Vector.png"
              alt="Search Icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
