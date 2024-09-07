import Image from "next/image";
import { PageParams } from "@/types";
import { FaWhatsapp } from "react-icons/fa6";
import ChangingText from "./components/ChangingText";
import BadgeSVG from "../../public/images/badge.svg";
import LandingPageSVG from '../../public/images/landingpage1.svg';
import { BiCaretRight } from "react-icons/bi";
import Link from "next/link";
import { FEATURE_SET, FOR_YOU_CONTENT, whatsappLink } from "@/constant";
import ContactUsForm from "./components/ContactUsForm";
import { div } from "framer-motion/client";

interface HomePropsI extends PageParams {
}



export default async function Home(props: HomePropsI) {
  const whatsappText = "?text=Halo Neema, saya ingin membuat website booking saya!";
  return (
    <main className="w-full lg:h-full font-nexa">
      <section id="home" className="justify-center mt-[-60px] min-h-screen h-full mb-5 w-full flex flex-col lg:justify-center lg:h-[600px]">
        <div className="container mx-auto flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:px-10 lg:gap-5">
          <div className="text-center lg:text-left lg:w-full">
            <h2 className="font-bold text-lg flex flex-row items-center justify-center mb-4 lg:justify-normal lg:text-3xl lg:mb-5">Pertama di Indonesia
              <Image src={BadgeSVG} alt={"1st-badge"} className="object-contain w-9 ml-2" />
            </h2>
            <h1 className="font-bold text-3xl max-w-[400px] px-6 lg:px-0 lg:text-5xl lg:max-w-full lg:mb-8 lg:leading-[60px]">Solusi Reservasi Terbaik untuk Bisnis Anda</h1>
            <p className="mt-5 text-left hidden lg:block lg:text-2xl lg:mb-8">
              Apakah Anda lelah menerima telepon, double booking, atau harus mengonfirmasi reservasi pelanggan secara manual? Jika Anda belum menggunakan Neema, Anda kehilangan lebih dari sekedar kenyamanan—Anda kehilangan penjualan, membuang waktu, dan memberi keunggulan pada pesaing Anda.
            </p>
            <div className="flex-row items-center gap-4 mt-5 hidden lg:flex">
              <Link className="bg-green-500 rounded-full pl-4 pr-5 py-2 flex flex-row justify-center items-center text-white" href={whatsappLink + whatsappText} rel="noopener noreferrer" target="_blank">
                <FaWhatsapp size={24} className="mr-2 text-white text-base font-bold" /> Demo Gratis
              </Link>
              <Link href="#product" className="bg-blue-600 rounded-full pl-5 pr-3 py-2 flex flex-row justify-center items-center text-white">
                Pelajari Lebih <BiCaretRight size={24} className="ml-2 text-white text-base font-bold" />
              </Link>
            </div>
          </div>
          <div
            className="hidden lg:flex w-full h-full my-5 max-h-[200px] max-w-[600px] lg:max-h-[500px] lg:max-w-full lg:w-full">
            <Image
              src={LandingPageSVG}
              alt={"1st-badge"}
              className="object-contain w-full"
            />
          </div>
        </div>
        {/* Mobile Mode */}
        <p className="mt-5 md:w-[80%] self-center text-center px-6 lg:hidden">Apakah Anda lelah menerima telepon, double booking, atau harus mengonfirmasi reservasi pelanggan secara manual? Jika Anda belum menggunakan Neema, Anda kehilangan lebih dari sekedar kenyamanan—Anda kehilangan penjualan, membuang waktu, dan memberi keunggulan pada pesaing Anda.</p>

        <div className="flex flex-col justify-center items-center gap-4 mt-5 lg:justify-normal lg:hidden">
          <a href={whatsappLink + whatsappText} rel="noopener noreferrer" target="_blank" className="bg-green-500 rounded-full pl-4 pr-5 py-2 flex flex-row justify-center items-center text-white">
            <FaWhatsapp size={24} className="mr-2 text-white text-base font-bold" /> Coba Sekarang
          </a>
          <button className="bg-blue-600 rounded-full pl-5 pr-3 py-2 flex flex-row justify-center items-center text-white">
            Pelajari <BiCaretRight size={24} className="ml-2 text-white text-base font-bold" />
          </button>
        </div>
      </section>

      <section id="product" className="min-h-screen w-full py-28 bg-[#F8FBFF]">
        <div className="container mx-auto px-8">
          <h1 className="mb-10 text-3xl  md:text-5xl text-center font-bold">Aplikasi Reservasi Pribadi <br /> untuk operasional bisnis yang lebih efektif</h1>

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

      <section id="for-you" className="min-h-screen w-full bg-[#F8FBFF]">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl lg:text-center">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
                Apa yang <span className="text-blue-600">Neema</span> Bisa Lakukan untuk Anda?
              </p>
            </div>
            <div className="mx-auto mt-8 max-w-2xl sm:mt-12 lg:mt-16 lg:max-w-4xl">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {FOR_YOU_CONTENT.map((feature) => (
                  <div key={feature.name} className="flex flex-col shadow-lg rounded-lg p-5 border-2">
                    <div className="flex flex-row items-center text-base font-semibold leading-7 text-gray-900 min-h-20">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 mr-2 flex-shrink-0">
                        <div aria-hidden="true" className="h-8 w-8 text-white">
                          <Image src={feature.icon} alt={feature.name} className="w-full h-full" />
                        </div>
                      </div>
                      {feature.name}
                    </div>
                    <hr className="h-px my-2 bg-gray-300 border-0"></hr>
                    <dd className="text-base leading-7 text-gray-600">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

      </section>
      {/* <section id="product" className="min-h-screen w-full py-28">Price</section> */}
      <section id="contact-us" className="min-h-screen w-full py-28 flex items-center">
        <div className="container mx-auto lg:px-4">
          <ContactUsForm />
        </div>
      </section>

    </main>
  );
}
