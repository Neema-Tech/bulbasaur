"use server"

import Image from "next/image";
import { RiWhatsappFill } from "react-icons/ri";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { HiOutlineCursorClick } from "react-icons/hi";
import UserEmailForm from "./components/form";
import { PageParams } from "@/types";
import { FaCaretDown, FaWhatsapp } from "react-icons/fa6";
import ChangingText from "./components/ChangingText";
import BadgeSVG from "../../public/images/badge.svg";
import LandingPageSVG from '../../public/images/landingpage1.svg';
import { BiCaretRight } from "react-icons/bi";

interface HomePropsI extends PageParams {
}



export default async function Home(props: HomePropsI) {
  return (
    <main className="w-screen lg:h-full font-nexa">
      <section id="home" className="h-screen mb-5 w-full flex-col">
        <div className="container mx-auto flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:px-10 lg:gap-5">
          <div className="text-center lg:text-left lg:w-full">
            <h2 className="font-bold text-lg flex flex-row items-center justify-center mb-4 lg:justify-normal lg:text-3xl lg:mb-8">1st In Indonesia
              <Image src={BadgeSVG} alt={"1st-badge"} className="object-contain w-9 ml-2" />
            </h2>
            <h1 className="font-bold text-3xl max-w-[400px] lg:text-5xl lg:max-w-full lg:mb-8">Custom Booking Software
              Build For {" "}
              <span id="swap-text" className="inline-flex justify-center items-center text-[#61BBEF]">
                <ChangingText texts={[
                  "Sports",
                  "Kitchen",
                  "Hall",
                  "Photo Studio",
                  "Room",
                  "Tourism",
                  "Private Tutor"
                ]} />.
              </span>
            </h1>
            <p className="mt-5 text-left hidden lg:block lg:text-2xl lg:mb-8">Neema, menghilangkan stress dalam mengelola pemesanan, atur jadwal, terima bayaran, dan pantau transaksi dengan santai lewat platform canggih yang disuguhkan.</p>
            <div className="flex-row items-center gap-4 mt-5 hidden lg:flex">
              <button className="bg-green-500 rounded-full pl-4 pr-5 py-2 flex flex-row justify-center items-center text-white">
                <FaWhatsapp size={24} className="mr-2 text-white text-base font-bold" /> Whatsapp Sales
              </button>
              <button className="bg-blue-600 rounded-full pl-5 pr-3 py-2 flex flex-row justify-center items-center text-white">
                Learn More <BiCaretRight size={24} className="ml-2 text-white text-base font-bold" />
              </button>
            </div>
          </div>
          <div className="flex w-full h-full my-5 max-h-[200px] max-w-[600px] lg:max-h-full lg:max-w-full lg:w-full">
            <Image
              src={LandingPageSVG}
              alt={"1st-badge"}
              className="object-contain w-full"
            />
          </div>
        </div>
        {/* Mobile Mode */}
        <p className="mt-5 text-center px-6 lg:hidden">Neema, menghilangkan stress dalam mengelola pemesanan, atur jadwal, terima bayaran, dan pantau transaksi dengan santai lewat platform canggih yang disuguhkan.</p>

        <div className="flex flex-col justify-center items-center gap-4 mt-5 lg:justify-normal lg:hidden">
          <button className="bg-green-500 rounded-full pl-4 pr-5 py-2 flex flex-row justify-center items-center text-white">
            <FaWhatsapp size={24} className="mr-2 text-white text-base font-bold" /> Whatsapp Sales
          </button>
          <button className="bg-blue-600 rounded-full pl-5 pr-3 py-2 flex flex-row justify-center items-center text-white">
            Learn More <BiCaretRight size={24} className="ml-2 text-white text-base font-bold" />
          </button>
        </div>
      </section>
      <section id="about" className="h-screen">About</section>
      <section id="product" className="h-screen">Prod</section>
      <section id="pricing" className="h-screen">Price</section>

    </main>
  );
}
