import Image from "next/image";
import LogoFull from "../../public/logo-full.png";
import BookingIllustration from "../../public/booking-illustration.png";
import BookingIllustrationBg from "../../public/booking-illustration-bg.png";
import { RiWhatsappFill } from "react-icons/ri";
import { FaGear } from "react-icons/fa6";
import { BsGear } from "react-icons/bs";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";
import UserEmailForm from "./form";

export default function Home() {
  return (
    <main className="w-screen h-screen md:h-full font-nexa">
      <section className="flex flex-col w-full h-full flex-column items-center pt-10">
        <div className="w-full max-w-[200px] mb-5 md:w-[300px]">
          <Image
            src={LogoFull.src}
            className="h-full w-full object-contain"
            alt="Neema Logo"
            width={300}
            height={150}
          />
        </div>
        <p className="text-3xl font-bold text-center px-7 py-9 pb-8 md:pt-16 md:text-5xl md:leading-[86px] lg:text-[70px] lg:leading-[86px]">
          Mau punya aplikasi <br /> reservasi pribadi?
        </p>
        <div
          className="flex flex-col justify-center items-center mt-5 w-full h-full bg-no-repeat bg-cover bg-center pb-16 md:h-[600px]"
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
              href="https://api.whatsapp.com/send/?phone=62087880335189&text='Hi Neema!, Saya ingin bertanya. '"
              target="_blank"
              className="bg-green-500 rounded-full text-white py-2 px-3 mt-4 flex flex-row justify-center items-center gap-2 border-white border-8 md:w-[300px] md:m-0"
            >
              <RiWhatsappFill className="text-lg" />
              <span className="text-base leading-4">Whatsapp Kami</span>
            </a>
          </div>
        </div>
      </section>

      <section>
        <p className="text-3xl font-bold text-center px-7 py-9 pb-8 md:pt-16 md:text-5xl md:leading-[86px] lg:text-[70px] lg:leading-[86px]">
          Punyai website reservasi anda hanya dengan 3 langkah.
        </p>
        <div className="grid grid-cols-1 px-2 py-4 gap-10">
          <div className="flex flex-col justify-center items-center text-center px-10">
            <span>
              <BsGear className="text-6xl" />
            </span>
            <p className="text-xl mb-2 mt-5 font-bold">
              Pilih & Kustomisasi Tema
            </p>
            <p className="text-base">
              Sesuaikan desain situs booking Anda dengan berbagai pilihan tema.
              Tidak perlu pengalaman desain atau keterampilan pemrograman.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center px-10">
            <span>
              <MdOutlineCalendarMonth className="text-6xl" />
            </span>
            <p className="text-xl mb-2 mt-5 font-bold">
              Tambahkan Jadwal Lapangan
            </p>
            <p className="text-base">
              Tambahkan jadwal lapangan Anda. Tampilkan dengan foto terbaik,
              harga, dan deskripsi.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center px-10">
            <span>
              <GrMoney className="text-6xl" />
            </span>
            <p className="text-xl mb-2 mt-5 font-bold">Mulai Terima Booking</p>
            <p className="text-base">
              Atur metode pembayaran dan mulai terima booking.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
