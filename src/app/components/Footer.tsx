import Image from "next/image";
import Link from "next/link";

export default async function Footer() {
  return (
    <footer className="min-h-96 h-full w-full bg-[#172331] text-white flex flex-col justify-between">
      <div className="container mx-auto pt-12 flex flex-col h-full w-full">
        <div className="h-full flex flex-col justify-between px-8 pb-8">
          <div>
            <div className="w-[200px] mb-5">
              <Image
                src="/svg/logo-white.svg"
                className="h-full w-full object-contain"
                alt="Neema Logo"
                width={100}
                height={60}
              />
            </div>
            <div className="flex flex-col md:flex-row md:flex-wrap">
              <div className="flex flex-col md:w-2/3">
                <h2 className="text-3xl font-bold">Berhubung dengan kami!</h2>
                <p className="mt-2 mb-5">
                  Temui kami dari platform sosial media kami, kami merespon dalam 1-2 hari kerja.
                </p>
                <a href="https://www.instagram.com/appify.solution" className="w-12 h-12 bg-white rounded-full p-1 mb-5">
                  <Image
                    src="/svg/instagram.svg"
                    className="h-full w-full object-contain"
                    alt="neema-instagram"
                    width={20}
                    height={20}
                  />
                </a>
              </div>
              <ul className="flex flex-grow flex-col gap-4 text-center">
                <Link href="/#header" scroll={true}>
                  <li className="bg-slate-700 hover:bg-slate-500 rounded p-2">
                    Home
                  </li>
                </Link>
                <Link href="/#product" scroll={true}>
                  <li className="bg-slate-700 hover:bg-slate-500 rounded p-2">
                    Product
                  </li>
                </Link>
                <Link href="/#contact-us" scroll={true}>
                  <li className="bg-slate-700 hover:bg-slate-500 rounded p-2">
                    Contact Us
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>

      </div>
      <div className="text-sm p-5 border-t-2 text-center">
        Copyright © <span>{new Date().getFullYear()} - </span>Neema
      </div>
    </footer>
  );
}
