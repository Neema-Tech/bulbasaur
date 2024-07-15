import LangSwitcher from "./LangSwitcher";
import Image from "next/image";
import Dropdown from "./Dropdown";
import Link from "next/link";
import { useState } from "react";
import MobileHeader from "./MobileHeader";

export default async function Header() {

  return (
    <header id="header" className="relative h-20 w-full flex justify-center">
      <nav className="fixed w-full h-20 hidden bg-white md:block">
        <div className="container mx-auto w-full h-full flex justify-between items-center px-10">
          <Link href="#header" scroll={true} className="w-[150px] h-full">
            <Image
              src="/images/logo-full.png"
              className="h-full w-full object-contain"
              alt="Neema Logo"
              width={100}
              height={60}
            />
          </Link>
          <div className="flex justify-between items-center h-full">
            <ul className="hidden md:flex space-x-16 font-bold tracking-wide h-full">
              <li className="hover:borderb-2 h-full justify-center items-center flex"><Link href="#header" scroll={true}>Home</Link></li>
              <li className="hover:borderb-2 h-full justify-center items-center flex"><Link href="#about" scroll={true}>About Us</Link></li>
              <li className="hover:borderb-2 h-full justify-center items-center flex"><Link href="#product" scroll={true}>Our Product</Link></li>
              <li className="hover:borderb-2 h-full justify-center items-center flex"><Link href="#pricing" scroll={true}>Pricing</Link></li>
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