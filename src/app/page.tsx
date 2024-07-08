import Image from "next/image";
import LogoFull from "../../public/logo-full.png";
import BookingIllustration from '../../public/booking-illustration.png';
import BookingIllustrationBg from "../../public/booking-illustration-bg.png";
import { RiWhatsappFill } from "react-icons/ri";

export default function Home() {
  return (
    <main className="w-screen h-screen font-nexa">
      <section className="flex flex-col w-full h-full flex-column items-center pt-10">
        <div className="w-1/2 mb-5 lg:w-10">
          <Image src={LogoFull.src} className="h-full w-full" alt="Neema Logo" width={300} height={150} />
        </div>
        <p className="text-3xl font-bold text-center my-5 mb-8">Mau punya aplikasi reservasi pribadi?</p>
        <div className="flex justify-center items-end mt-5 w-full h-full relative bg-no-repeat bg-cover bg-center pb-16" style={{ backgroundImage: `url(${BookingIllustrationBg.src})` }}>
          <Image className="w-10/12 h-full object-contain absolute left-0 right-0" src={BookingIllustration.src} width={400} height={400} alt={"booking-illustration"} style={{ bottom: '120px' }} />
          <div className="flex flex-col w-full px-6">
            <form action="#" method="post" className="flex justify-between w-full bg-white pl-3 py-2 pr-2 rounded-full overflow-hidden">
              <input type="email" name="email" placeholder="Ketik email anda..." className="flex flex-1 mr-2" />
              <button type="submit" className="bg-black rounded-full text-white py-1 px-3">Daftar Beta</button>
            </form>
            <button type="submit" className="bg-green-500 rounded-full text-white py-2 px-3 mt-4 flex flex-row justify-center items-center gap-2 border-white border-8">
              <RiWhatsappFill className="text-lg" />
              Whatsapp Sales
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
