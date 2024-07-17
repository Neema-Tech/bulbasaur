"use client"

import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="lg:hidden fixed w-full bg-white">
      <div className="flex flex-row justify-between items-center py-5 px-3">
        <div className="w-[180px] h-full">
          <Image
            src="/images/logo-full.png"
            className="h-full w-full object-contain"
            alt="Neema Logo"
            width={180}
            height={30}
          />
        </div>
        <button className="top-3 right-2 p-2 flex justify-center items-center" onClick={() => setIsOpen(open => !open)}>
          <GiHamburgerMenu className="flex justify-center items-center text-black w-full h-full" size={24} />
        </button>
      </div>
      <div className={`w-full lg:hidden flex justify-center ${isOpen ? 'open-menu' : 'close-menu pointer-events-none'}`}>
        <div className="absolute w-full">
          <ul className="bg-white shadow-lg leading-9 font-bold h-screen">
            <li className="py-2 border-b-2 border-white  bg-blue-400 hover:text-white pl-4"><a href="/" className="block pl-7">Home</a></li>
            <li className="py-2 border-b-2 border-white  bg-blue-400 hover:text-white pl-4"><a href="#" className="block pl-7">About Us</a></li>
            <li className="py-2 border-b-2 border-white  bg-blue-400 hover:text-white pl-4"><a href="#" className="block pl-7">Our Product</a></li>
            <li className="py-2 border-b-2 border-white  bg-blue-400 hover:text-white pl-4"><a href="#" className="block pl-7">Pricing</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
};


export default MobileHeader;