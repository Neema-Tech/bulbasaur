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
import { FaCheck } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

interface HomePropsI extends PageParams {
}



export default async function Home(props: HomePropsI) {
  return (
    <main className="w-screen lg:h-full font-nexa">
      <section id="home" className="h-screen mb-5 w-full flex flex-col lg:justify-center lg:h-[600px]">
        <div className="container mx-auto flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:px-10 lg:gap-5">
          <div className="text-center lg:text-left lg:w-full">
            <h2 className="font-bold text-lg flex flex-row items-center justify-center mb-4 lg:justify-normal lg:text-3xl lg:mb-8">Pertama di Indonesia
              <Image src={BadgeSVG} alt={"1st-badge"} className="object-contain w-9 ml-2" />
            </h2>
            <h1 className="font-bold text-3xl max-w-[400px] px-6 lg:px-0 lg:text-5xl lg:max-w-full lg:mb-8 lg:leading-[60px]">Miliki Aplikasi Booking
              Untuk Bisnis {" "}
              <span id="swap-text" className="inline-flex justify-center items-center text-[#61BBEF]">
                <ChangingText texts={[
                  "Lapangan",
                  "Les Privat",
                  "Sewa Hall",
                  "Photo Studio",
                  "Sewa Kamar",
                  "Sewa Tour",
                  "Sewa Penjemputan",
                  "Sewa Kantor"
                ]} />.
              </span>
            </h1>
            <p className="mt-5 text-left hidden lg:block lg:text-2xl lg:mb-8">Neema, menghilangkan stress dalam mengelola pemesanan, atur jadwal, terima bayaran, dan pantau transaksi dengan santai lewat platform canggih yang disuguhkan.</p>
            <div className="flex-row items-center gap-4 mt-5 hidden lg:flex">
              <Link className="bg-green-500 rounded-full pl-4 pr-5 py-2 flex flex-row justify-center items-center text-white" href="https://wa.me/62087880335189" target="_blank">
                <FaWhatsapp size={24} className="mr-2 text-white text-base font-bold" /> Whatsapp Sales
              </Link>
              <button className="bg-blue-600 rounded-full pl-5 pr-3 py-2 flex flex-row justify-center items-center text-white">
                Learn More <BiCaretRight size={24} className="ml-2 text-white text-base font-bold" />
              </button>
            </div>
          </div>
          <div className="hidden lg:flex w-full h-full my-5 max-h-[200px] max-w-[600px] lg:max-h-[500px] lg:max-w-full lg:w-full">
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
            <FaWhatsapp size={24} className="mr-2 text-white text-base font-bold" /> Coba Sekarang
          </button>
          <button className="bg-blue-600 rounded-full pl-5 pr-3 py-2 flex flex-row justify-center items-center text-white">
            Pelajari <BiCaretRight size={24} className="ml-2 text-white text-base font-bold" />
          </button>
        </div>
      </section>
      <section id="about" className="h-screen">
      <ul>
                <li className="flex flex-row items-center mb-2"><FaCheckCircle size={18} className="mr-2" color="#61BBEF" />Website Pribadi & Kostumisasi Tema</li>
                <li className="flex flex-row items-center mb-2"><FaCheckCircle size={18} className="mr-2" color="#61BBEF" />Payment Gateway</li>
                <li className="flex flex-row items-center mb-2"><FaCheckCircle size={18} className="mr-2" color="#61BBEF" />Administrasi Otomatis</li>
                <li className="flex flex-row items-center mb-2"><FaCheckCircle size={18} className="mr-2" color="#61BBEF" />Cegah potensi human-error dan tingkatkan transparansi proses bisnis</li>
                <li className="flex flex-row items-center mb-2"><FaCheckCircle size={18} className="mr-2" color="#61BBEF" />Kemudahan Penggunaan</li>
              </ul>

      </section>
      <section id="product" className="h-screen">Prod</section>
      <section id="pricing" className="h-screen">Price</section>

    </main>
  );
}
