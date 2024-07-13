import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import LangSwitcher from "./LangSwitcher";
import Image from "next/image";
import Dropdown from "./Dropdown";
import LangLink from './LangLink';

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  return (
    <header className="h-20">
      <nav className="relative px-2 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-[150px]">
            <Image
              src="/images/logo-full.png"
              className="h-full w-full object-contain"
              alt="Neema Logo"
              width={150}
              height={60}
            />
          </div>
          Our Language Is {lang} lang
          <div className="flex justify-between items-center md:gap-10">
            <ul className="hidden md:flex space-x-6 font-bold">
              <li><LangLink href="/" lang={lang}>{navigation.home}</LangLink></li>
              <li><LangLink href="/about" lang={lang}>{navigation.about}</LangLink></li>
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
              <li><LangLink href="#" lang={lang}>Pricing</LangLink></li>
              <li><LangLink href="#" lang={lang}>Contact Us</LangLink></li> */}
              <LangSwitcher currLang={lang} />
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
  )
}