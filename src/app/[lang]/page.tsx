"use server"

import Image from "next/image";
import { RiWhatsappFill } from "react-icons/ri";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { HiOutlineCursorClick } from "react-icons/hi";
import UserEmailForm from "./components/form";
import { PageParams } from "@/types";
import { getDictionary } from "@/lib/dictionary";
import { i18n } from "@/i18n.config";

interface HomePropsI extends PageParams{
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default async function Home({ params: { lang }}: HomePropsI) {
  const { page } = await getDictionary(lang);
  return (
    <main className="w-screen h-screen md:h-full font-nexa">

      <section className="flex flex-col w-full h-full flex-column items-center pt-10 mt-10">
        <div className="w-full max-w-[200px] mb-5 md:w-[300px]">
          <Image
            src={"/images/logo-full.png"}
            className="h-full w-full object-contain"
            alt="Neema Logo"
            width={300}
            height={150}
          />
        </div>
        <h1>{page.home.title}</h1>
        <h1 className="text-3xl font-bold text-center px-7 py-9 pb-8 md:pt-16 md:text-5xl md:leading-[75px] lg:text-[70px] lg:leading-[86px]">
          Mau punya aplikasi <br /> reservasi pribadi?
        </h1>
        <div
          className="flex flex-col justify-center items-center w-full h-full bg-no-repeat bg-cover bg-center pb-24 md:h-[600px]"
          style={{ backgroundImage: `url("/images/booking-illustration-bg.png")` }}
        >
          <div className="w-full h-full max-w-[550px] relative flex justify-center items-center md:max-w-[800px]">
            <Image
              className="w-full h-full object-contain absolute right-4 bottom-11 md:bottom-[20%]"
              src="/images/booking-illustration.png"
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
