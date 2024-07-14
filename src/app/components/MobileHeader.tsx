"use client"

import { useState } from "react";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button className="md:hidden absolute top-4 right-0" onClick={() => setIsOpen(open => !open)}>
        <i className="bg-red-200 w-6 h-6 flex justify-center items-center">=</i>
      </button>
      <div className={`md:hidden flex justify-center mt-3 w-full ${isOpen ? 'open-menu' : 'close-menu'}`}>
        <div className="absolute top-23 w-full">
          <ul className="bg-white shadow-lg leading-9 font-bold h-screen">
            <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4"><a href="/" className="block pl-7">Home</a></li>
            <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4"><a href="#" className="block pl-7">News</a></li>
            <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4"><a href="#" className="block pl-7">About</a></li>
            <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4"><a href="#" className="block pl-7">Contact</a></li>
          </ul>
        </div>
      </div>
    </>
  )
};


export default MobileHeader;