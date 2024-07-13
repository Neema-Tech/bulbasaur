import Image from "next/image";
import LogoFull from "../../public/logo-full.png";
import BookingIllustration from "../../public/booking-illustration.png";
import BookingIllustrationBg from "../../public/booking-illustration-bg.png";
import { RiWhatsappFill } from "react-icons/ri";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { HiOutlineCursorClick } from "react-icons/hi";
import UserEmailForm from "./form";
import Link from "next/link";
import Dropdown from "@/components/Dropdown";

export default function Home() {
  return (
    <main className="w-screen h-screen md:h-full font-nexa">
      <header className="h-20">
        <nav className="relative px-2 py-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="w-[150px]">
              <Image
                src={LogoFull.src}
                className="h-full w-full object-contain"
                alt="Neema Logo"
                width={150}
                height={60}
              />
            </div>

            <div className="flex justify-between items-center md:gap-10">
              <ul className="hidden md:flex space-x-6 font-bold">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <Dropdown name="Our Products" contents={[
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
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>

              <a href="#" className="bg-red-400 py-2 rounded-3xl hover:bg-red-500 text-white hidden md:flex" role="button">Sign In</a>
            </div>

            <button id="mobile-icon" className="md:hidden">
              <i className="">=</i>
            </button>

          </div>

          <div className="md:hidden flex justify-center mt-3 w-full">
            <div id="mobile-menu" className="mobile-menu absolute top-23 w-full">
              <ul className="bg-gray-100 shadow-lg leading-9 font-bold h-screen">
                <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4"><a href="https://google.com" className="block pl-7">Home</a></li>
                <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4"><a href="#" className="block pl-7">News</a></li>
                <li className="border-b-2 border-white hover:bg-red-400 hover:text-white">
                  <a href="#" className="block pl-11">Services <i className="fa-solid fa-chevron-down fa-2xs pt-4"></i></a>

                  <ul className="bg-white text-gray-800 w-full">
                    <li className="text-sm leading-8 font-normal hover:bg-slate-200"><a className="block pl-16" href="#">Webdesign</a></li>
                    <li className="text-sm leading-8 font-normal hover:bg-slate-200"><a className="block pl-16" href="#">Digital marketing</a></li>
                    <li className="text-sm leading-8 font-normal hover:bg-slate-200"><a className="block pl-16" href="#">SEO</a></li>
                    <li className="text-sm leading-8 font-normal hover:bg-slate-200"><a className="block pl-16" href="#">Ad campaigns</a></li>
                    <li className="text-sm leading-8 font-normal hover:bg-slate-200"><a className="block pl-16" href="#">UX Design</a></li>
                  </ul>
                </li>
                <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4"><a href="#" className="block pl-7">About</a></li>
                <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4"><a href="#" className="block pl-7">Contact</a></li>
              </ul>
            </div>
          </div>

        </nav>
      </header>


      <section className="flex flex-col w-full h-full flex-column items-center pt-10 mt-10">
        <div className="w-full max-w-[200px] mb-5 md:w-[300px]">
          <Image
            src={LogoFull.src}
            className="h-full w-full object-contain"
            alt="Neema Logo"
            width={300}
            height={150}
          />
        </div>
        <h1 className="text-3xl font-bold text-center px-7 py-9 pb-8 md:pt-16 md:text-5xl md:leading-[75px] lg:text-[70px] lg:leading-[86px]">
          Mau punya aplikasi <br /> reservasi pribadi?
        </h1>
        <div
          className="flex flex-col justify-center items-center w-full h-full bg-no-repeat bg-cover bg-center pb-24 md:h-[600px]"
          style={{ backgroundImage: `url(${BookingIllustrationBg.src})` }}
        >
          <div className="w-full h-full max-w-[550px] relative flex justify-center items-center md:max-w-[800px]">
            <Image
              className="w-full h-full object-contain absolute right-4 bottom-11 md:bottom-[20%]"
              src={BookingIllustration.src}
              width={400}
              height={400}
              alt={"booking-illustration"}
            />
          </div>
          <div className="flex flex-col w-full px-6 md:flex-row md:justify-center md:items-center md:gap-3 md:max-w-[900px]">
            <UserEmailForm />
            <a
              href="https://api.whatsapp.com/send/?phone=62087880335189&text=Hi Neema!, Saya ingin bertanya, "
              target="_blank"
              className="bg-green-500 rounded-full text-white py-2 px-3 mt-4 flex flex-row justify-center items-center gap-2 border-white border-8 md:w-[300px] md:m-0"
            >
              <RiWhatsappFill className="text-lg" />
              <span className="text-base leading-4">Whatsapp Kami</span>
            </a>
          </div>
        </div>
      </section>

      <section className="w-full mb-[150px] md:px-[50px] lg:px-[100px] xl:px-[200px]">
        <h2 className="text-3xl font-bold text-center px-7 py-9 pb-11 md:pt-16 md:text-5xl md:leading-[75px] lg:text-[70px] lg:leading-[86px]">
          Punyai website pribadi untuk reservasi hanya dengan 3 langkah.
        </h2>
        <div className="grid grid-cols-1 py-4 px-5 gap-10 md:px-0 md:grid-cols-3 md:grid-row-3">
          <div className="flex flex-col items-left">
            <span className="w-full h-16"><HiOutlineCursorClick className="text-6xl" /></span>
            <p className="w-full text-xl mb-2 mt-5 font-bold">① Registrasi & Kustomisasi Tema</p>
            <p className="text-base">Sesuaikan desain situs reservasi Anda dengan berbagai pilihan tema. <br /> Tidak perlu pengalaman desain atau keterampilan pemrograman.</p>
          </div>
          <div className="flex flex-col items-left">
            <span className="w-full h-16"><MdOutlineCalendarMonth className="text-6xl" /></span>
            <p className="w-full text-xl mb-2 mt-5 font-bold">② Tambahkan Jadwal</p>
            <p className="text-base">Tambahkan jadwal yang anda punya. <br /> Tampilkan dengan <b>foto terbaik, harga, dan deskripsi</b>.</p>
          </div>
          <div className="flex flex-col items-left">
            <span className="w-full h-16"><GrMoney className="text-6xl" /></span>
            <p className="w-full text-xl mb-2 mt-5 font-bold">③ Mulai Terima Reservasi</p>
            <p className="text-base">Atur metode pembayaran dan mulai terima booking.</p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-slate-400 mt-5"></div>
        <div className="flex flex-col justify-center items-center px-20 min-h-96 md:px-52">
          <p className="text-xl text-center font-bold mb-5">“Neema selalu mendengarkan pelanggannya dan berusaha melakukan segala kemungkinan untuk membantu mereka mencapai kebutuhan mereka.”</p>
          <a
            href="https://api.whatsapp.com/send/?phone=62087880335189&text=Hi Neema!, Saya ingin memberikan feedback. Menurut saya.."
            target="_blank"
            className="bg-green-500 rounded-full text-white py-3 px-3 flex flex-row justify-center items-center gap-2 md:w-[300px] md:m-0"
          >
            <RiWhatsappFill className="text-lg" />
            <span className="text-base leading-4">Hubungi Kami</span>
          </a>
        </div>


      </section>

    </main>
  );
}
