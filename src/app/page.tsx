"use server"

import Image from "next/image";
import { PageParams } from "@/types";
import { FaWhatsapp } from "react-icons/fa6";
import ChangingText from "./components/ChangingText";
import BadgeSVG from "../../public/images/badge.svg";
import LandingPageSVG from '../../public/images/landingpage1.svg';
import WebSVG from '../../public/svg/web.svg';
import ManageGearSVG from '../../public/svg/manage-gear.svg';
import ChooseThemeSVG from '../../public/svg/choose-theme.svg';
import CalendarSVG from '../../public/svg/calendar.svg';
import HourSVG from '../../public/svg/24hour.svg';

import { BiCaretRight } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import { FEATURE_SET } from "@/constant";

interface HomePropsI extends PageParams {
}



export default async function Home(props: HomePropsI) {
  return (
    <main className="w-full lg:h-full font-nexa">
      <section id="home" className="justify-center mt-[-60px] min-h-screen h-full mb-5 w-full flex flex-col lg:justify-center lg:h-[600px]">
        <div className="container mx-auto flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:px-10 lg:gap-5">
          <div className="text-center lg:text-left lg:w-full">
            <h2 className="font-bold text-lg flex flex-row items-center justify-center mb-4 lg:justify-normal lg:text-3xl lg:mb-5">Pertama di Indonesia
              <Image src={BadgeSVG} alt={"1st-badge"} className="object-contain w-9 ml-2" />
            </h2>
            <h1 className="font-bold text-3xl max-w-[400px] px-6 lg:px-0 lg:text-5xl lg:max-w-full lg:mb-8 lg:leading-[60px]">Miliki Aplikasi Booking
              Pribadi Untuk {" "}
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
              <Link href="#about" className="bg-blue-600 rounded-full pl-5 pr-3 py-2 flex flex-row justify-center items-center text-white">
                Learn More <BiCaretRight size={24} className="ml-2 text-white text-base font-bold" />
              </Link>
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
      
      <section  id="about" className="min-h-screen w-full py-28 bg-[#F8FBFF]">
        <div className="container mx-auto px-8">
          <h2 className="mb-10 text-3xl  md:text-5xl text-center font-bold">Aplikasi Reservasi Pribadi <br /> untuk operasional bisnis yang lebih efektif</h2>

          <div className="w-full mt-14">
            <div className="flex flex-row flex-wrap gap-7 xl:gap-0 justify-center">
              {FEATURE_SET.map((feature, index) => (
                <div key={index} className="text-center mb-6 w-full flex md:w-[300px] xl:w-[400px] xl:mb-5 h-fit flex-col">
                  <div className="w-full mb-5 h-[70px] md:h-[90px] xl:h-[100px]">
                    <Image src={feature.imgSrc} alt={feature.props.alt} className="w-full h-full" />
                  </div>
                  <h3 className="text-xl font-extrabold mb-3 lg:text-2xl xl:w-[60%] lg:h-16 lg:self-center">{feature.title}</h3>
                  <p className="text-base lg:text-lg lg:w-[80%] lg:self-center">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>
      <section id="product" className="min-h-screen w-full py-28">Price</section>
      <section id="contact-us" className="min-h-screen w-full py-28">Contact Us</section>

    </main>
  );
}
