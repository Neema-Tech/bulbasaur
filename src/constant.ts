import WebSVG from '../public/svg/web.svg';
import ManageGearSVG from '../public/svg/manage-gear.svg';
import ChooseThemeSVG from '../public/svg/choose-theme.svg';
import CalendarSVG from '../public/svg/calendar.svg';
import HourSVG from '../public/svg/24hour.svg';


export const phoneNumber = '+62859106662562';
export const whatsappLink = "https://wa.me/62859106662562";
export const socialMedia = {
  INSTAGRAM: "https://www.instagram.com/neema.tech/",
}

export const FEATURE_SET = [
  {
    title: "Tema Website Pilihan",
    desc: "Pilih dari berbagai tema menarik yang sesuai dengan brand anda.",
    imgSrc: ChooseThemeSVG,
    props: {
      alt: 'tema-website-pilihan',
    }
  },
  {
    title: "Manajemen Booking",
    desc: "Kelola semua booking dengan mudah melalui sistem yang diakses kapanpun",
    imgSrc: ManageGearSVG,
    props: {
      alt: 'manajemen-booking',
    }
  },
  {
    title: "Integrasi Website Keseluruhan",
    desc: "Dapatkan website khusus untuk bisnis anda dengan URL unik, lengkap, dengan semua fitur yang anda butuhkan.",
    imgSrc: WebSVG,
    props: {
      alt: 'integrasi-website-keseluruhan',
    }
  },
  {
    title: "Kalender Terpusat",
    desc: "Semua penjadwalan terpusat di satu kalender, memudahkan anda melacak dan mengatur jadwal",
    imgSrc: CalendarSVG,
    props: {
      alt: 'kalender-terpusat',
    }
  },
  {
    title: "Terima Booking 24/7",
    desc: "Pelanggan anda bisa melakukan reservasi kapan saja dan dimana saja tanpa batasan waktu.",
    imgSrc: HourSVG,
    props: {
      alt: 'terima-booking-24jam',
    }
  }
]