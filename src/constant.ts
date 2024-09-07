import WebSVG from '../public/svg/web.svg';
import ManageGearSVG from '../public/svg/manage-gear.svg';
import ChooseThemeSVG from '../public/svg/choose-theme.svg';
import CalendarSVG from '../public/svg/calendar.svg';
import HourSVG from '../public/svg/24hour.svg';
import CustomWebsiteSVG from '../public/svg/one.svg';
import AnalyticsReportSVG from '../public/svg/two.svg';
import TimeSVG from '../public/svg/three.svg';
import EveryTimeSVG from '../public/svg/four.svg';


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
    name: "Website dengan Brand Anda Sendiri",
    description: "Buat bisnis Anda lebih menonjol dengan website profesional yang dapat dikustomisasi untuk reservasi. Tanpa perlu koding, tanpa merek pihak ketiga—hanya bisnis Anda, dengan gaya Anda. Berikan pelanggan Anda pengalaman VIP sejak klik pertama!",
    icon: CustomWebsiteSVG,
  },
  {
    name: "Reservasi 24/7 – Bahkan Saat Anda Sedang Tidur",
    description: "Jangan pernah melewatkan reservasi lagi! Dengan Neema, pelanggan dapat membuat reservasi kapan saja—tanpa perlu telepon, pesan, atau konfirmasi bolak-balik. Bisnis Anda selalu terbuka untuk reservasi, bahkan saat Anda tidak bekerja. Bayangkan bangun pagi dengan jadwal penuh tanpa perlu usaha ekstra!",
    icon: EveryTimeSVG,
  },
  {
    name: "Pelacakan Reservasi Secara Real-Time",
    description: "Lelah dengan double booking, janji yang terlewat, atau kesalahan input? Neema memperbarui reservasi Anda secara real-time, memastikan semuanya berjalan lancar. Lacak reservasi, atur jadwal, dan dapatkan pengingat otomatis agar tetap terorganisir dengan mudah.",
    icon: TimeSVG,
  },
  {
    name: "Keputusan Berdasarkan Data dengan Laporan Bulanan",
    description: "Ingin tahu kapan bisnis Anda paling sibuk? Layanan apa yang paling populer? Analitik Neema memberikan wawasan tentang bisnis Anda, memungkinkan Anda membuat keputusan cerdas yang membantu Anda berkembang.",
    icon: AnalyticsReportSVG,
  },
];

export const WHY_US_CONTENT = [
  {
    name: 'Meningkatkan Penjualan Anda',
    desciption: 'Lebih banyak reservasi, lebih sedikit usaha. Pengalaman reservasi Neema yang mulus dan mudah mendorong pelanggan untuk memesan tanpa ragu atau penundaan.',
  },
  {
    name: 'Hemat Waktu, Bebas dari Masalah',
    desciption: 'Reservasi manual sudah ketinggalan zaman. Otomatiskan seluruh proses reservasi Anda dan luangkan waktu untuk fokus pada hal yang benar-benar penting—memberikan layanan luar biasa.',
  },
  {
    name: 'Meningkatkan Kepuasan Pelanggan',
    desciption: 'Pelanggan menyukai kenyamanan, dan Neema memberikan itu. Biarkan mereka memesan dengan cepat dan mudah dari website Anda, dengan konfirmasi instan tanpa repot.',
  },
];
