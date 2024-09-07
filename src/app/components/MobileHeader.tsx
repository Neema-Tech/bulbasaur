"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="lg:hidden fixed w-full bg-white z-50">
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
            <li className="py-2 border-b-2 border-white  bg-blue-200 hover:text-white pl-4"><Link onClick={() => setIsOpen(false)} href="/#header" className="block pl-7">Home</Link></li>
            <li className="py-2 border-b-2 border-white  bg-blue-200 hover:text-white pl-4"><Link onClick={() => setIsOpen(false)} href="/#product" className="block pl-7">Our Product</Link></li>
            <li className="py-2 border-b-2 border-white  bg-blue-200 hover:text-white pl-4"><Link onClick={() => setIsOpen(false)} href="/#contact-us" className="block pl-7">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
};


export default MobileHeader;