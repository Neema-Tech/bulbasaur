import Image from "next/image";
import LogoFull from "../../public/logo-full.png";
import BookingIllustration from "../../public/booking-illustration.png";
import BookingIllustrationBg from "../../public/booking-illustration-bg.png";
import { RiWhatsappFill } from "react-icons/ri";
import { addUserEmail } from "@/service/firebase.service";
import UserEmailForm from "./form";

export default function Home() {
  return (
    <main className="w-screen h-screen font-nexa">
      <section className="flex flex-col w-full h-full flex-column items-center pt-10">
        <div className="w-[200px] mb-5 md:w-[300px]">
          <Image
            src={LogoFull.src}
            className="h-full w-full"
            alt="Neema Logo"
            width={300}
            height={150}
          />
        </div>
        <p className="text-3xl font-bold text-center py-5 pb-8 md:text-[70px] md:leading-[80px]">
          Mau punya aplikasi reservasi pribadi?
        </p>
        <div
          className="flex flex-col justify-center items-center mt-5 w-full h-full bg-no-repeat bg-cover bg-center pb-16"
          style={{ backgroundImage: `url(${BookingIllustrationBg.src})` }}
        >
          <div className="w-full h-full max-h-[280px] relative flex justify-center items-center md:max-h-[500px]">
            <Image
              className="w-full h-full object-contain absolute right-4 bottom-11 md:bottom-[80px]"
              src={BookingIllustration.src}
              width={400}
              height={400}
              alt={"booking-illustration"}
            />
          </div>
          <div className="flex flex-col w-full px-6">
            <UserEmailForm />
            <button
              type="submit"
              className="bg-green-500 rounded-full text-white py-2 px-3 mt-4 flex flex-row justify-center items-center gap-2 border-white border-8"
            >
              <RiWhatsappFill className="text-lg" />
              Whatsapp Sales
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
