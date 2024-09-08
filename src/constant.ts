import WebSVG from '../public/svg/web.svg';
import ManageGearSVG from '../public/svg/manage-gear.svg';
import ChooseThemeSVG from '../public/svg/choose-theme.svg';
import CalendarSVG from '../public/svg/calendar.svg';
import HourSVG from '../public/svg/24hour.svg';
// import CustomWebsiteSVG from '../public/svg/custom-website.svg';
// import TimeCalendarSVG from '../public/svg/time-calendar.svg';
// import EverytimeSVG from '../public/svg/everytime.svg';
// import AnalyticsReportSVG from '../public/svg/analytics.svg';
import TrendSVG from './app/components/icons/TrendSVG';
import TimeSavingSVG from './app/components/icons/TimeSavingSVG';
import CustomerSatisfactionSVG from './app/components/icons/CustomerSatisfactionSVG';
import CustomWebsiteSVG from './app/components/icons/CustomWebsiteSVG';
import EverytimeSVG from './app/components/icons/EverytimeSVG';
import TimeCalendarSVG from './app/components/icons/TimeCalendar';
import AnalyticsReportSVG from './app/components/icons/AnalyticsReportSVG';


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
];

export const FOR_YOU_CONTENT = [
  {
    name: "Website Pribadi - Tanpa Koding",
    description: "Buat website profesional yang dapat dikustomisasi untuk reservasi, tanpa perlu koding. Berikan pelanggan pengalaman VIP sejak klik pertama!",
    icon: CustomWebsiteSVG,
  },
  {
    name: "Reservasi 24/7 – Bahkan Saat Anda Sedang Tidur",
    description: "Dengan Neema, pelanggan dapat reservasi kapan saja tanpa telepon atau konfirmasi. Bisnis Anda selalu terbuka, bahkan saat Anda tidur!",
    icon: EverytimeSVG,
  },
  {
    name: "Pelacakan Reservasi Secara Real-Time",
    description: "Neema memperbarui reservasi real-time, menghindari double booking dan janji yang terlewat. Lacak dan atur jadwal dengan mudah.",
    icon: TimeCalendarSVG,
  },
  {
    name: "Keputusan Berdasarkan Data dengan Laporan Bulanan",
    description: "Analitik Neema membantu Anda memahami bisnis, memberikan wawasan untuk keputusan cerdas dan pertumbuhan yang lebih baik.",
    icon: AnalyticsReportSVG,
  },
];

export const WHY_US_CONTENT = [
  {
    name: 'Tingkatkan Penjualan Anda',
    description: 'Dapatkan lebih banyak reservasi dengan lebih sedikit usaha. Neema menawarkan pengalaman reservasi yang mendorong pelanggan untuk memesan tanpa ragu atau penundaan.',
    icon: TrendSVG,
  },
  {
    name: 'Hemat Waktu, Bebas Repot',
    description: 'Reservasi manual sudah ketinggalan zaman. Otomatiskan seluruh proses reservasi Anda, sehingga Anda bisa fokus pada hal yang benar-benar penting.',
    icon: TimeSavingSVG,
  },
  {
    name: 'Tingkatkan Kepuasan Pelanggan',
    description: 'Pelanggan menyukai kenyamanan, dan Neema mewujudkannya. Biarkan mereka melakukan reservasi dengan cepat dan mudah melalui website Anda tanpa repot.',
    icon: CustomerSatisfactionSVG,
  },
];
