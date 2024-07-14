import LangSwitcher from "./LangSwitcher";
import Image from "next/image";
import Dropdown from "./Dropdown";
import Link from "next/link";
import { useState } from "react";
import MobileHeader from "./MobileHeader";

export default async function Header() {

  return (
    <header className="relative h-20 w-full flex justify-center">
      <nav className="container fixed w-full h-20 hidden bg-white md:block">
        <div className="w-full h-full flex justify-between items-center px-10">
          <div className="w-[150px] h-full">
            <Image
              src="/images/logo-full.png"
              className="h-full w-full object-contain"
              alt="Neema Logo"
              width={100}
              height={60}
            />
          </div>
          <div className="flex justify-between items-center h-full">
            <ul className="hidden md:flex space-x-16 font-bold tracking-wide">
              <li><Link href="#" scroll={false}>Home</Link></li>
              <li><Link href="#about" scroll={true}>About Us</Link></li>
              <li><Link href="#product" scroll={true}>Our Product</Link></li>
              <li><Link href="#pricing" scroll={true}>Pricing</Link></li>
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
          </div>
        </div>

      </nav>
      <MobileHeader />
    </header>
  )
}