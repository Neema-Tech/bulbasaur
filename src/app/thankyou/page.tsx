import { PageParams } from "@/types";

interface ThankyouPropsI extends PageParams {

}
export default async function Thankyou(props: ThankyouPropsI) {
  return (
    <section className='w-full h-screen mt-[-60px] flex justify-center items-center flex-col'>
      <div className="p-5 text-center md:w-[60%]">
        <h1 className='text-3xl font-bold lg:text-4xl'>Terima kasih</h1>
        <h3 className='text-xl font-bold lg:text-2xl'>Pesan Anda berhasil terkirim!</h3>
        <p className='text-gray-500 mt-4 lg:text-xl'>Kami akan balas anda dalam 3x24 jam! jika ada hal penting bisa langsung hubungi kami melalui Whatsapp/Social Media kami ya! Terima kasih</p>
      </div>
    </section>
  )
}