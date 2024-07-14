import LangSwitcher from "./LangSwitcher";
import Image from "next/image";
import Dropdown from "./Dropdown";
import Link from "next/link";
import { useState } from "react";
import MobileHeader from "./MobileHeader";

export default async function Header() {

  return (
    <header className="h-20">
      <nav className="relative px-2 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-[150px]">
            <Image
              src="/images/logo-full.png"
              className="h-full w-full object-contain"
              alt="Neema Logo"
              width={150}
              height={60}
            />
          </div>
          <div className="flex justify-between items-center md:gap-10">
            <ul className="hidden md:flex space-x-6 font-bold">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              {/* <Dropdown name="Our Products" contents={[
                {
                  name: 'Software Reservation',
                  href: '#',
                },
                {
                  name: 'Custom Website Integration',
                  href: '#',
                }
              ]}
                href={"#"}
              />
              <li><Link href="#" lang={lang}>Pricing</Link></li>
              <li><Link href="#" lang={lang}>Contact Us</Link></li> */}
            </ul>

            <a href="#" className="bg-red-400 py-2 rounded-3xl hover:bg-red-500 text-white hidden md:flex" role="button">Sign In</a>
          </div>
        </div>
        <MobileHeader />

      </nav>
    </header>
  )
}