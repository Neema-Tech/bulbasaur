import Image from "next/image";
import LogoFull from "../../public/logo-full.png";
import BookingIllustration from '../../public/booking-illustration.png';
import BookingIllustrationBg from "../../public/booking-illustration-bg.png";

export default function Home() {
  return (
    <main className="w-screen font-nexa">
      <section className="flex flex-col w-full h-full flex-column items-center mt-20">
        <div className="w-1/2 mb-5 lg:w-10">
          <Image src={LogoFull.src} className="h-full w-full" alt="Neema Logo" width={300} height={150} />
        </div>
        <p className="text-4xl font-bold text-center my-5">Mau punya aplikasi reservasi pribadi?</p>
        <div className="flex justify-center items-center mt-5 w-full h-72 relative" style={{ backgroundImage: `url(${BookingIllustrationBg.src})` }}>
          <Image className="w-10/12 h-full object-contain absolute bottom-12 left-0 right-0" src={BookingIllustration.src} width={400} height={400} alt={"booking-illustration"} />
        </div>
      </section>
    </main>
  );
}
