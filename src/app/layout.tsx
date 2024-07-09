import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neema - Aplikasi Reservasi Pribadi",
  description: "Mau punya aplikasi reservasi pribadi? Daftar beta sekarang dengan Neema! Neema membantu pemilik bisnis di Indonesia mengelola pemesanan reservasi dengan mudah. Buat situs reservasi Anda sendiri dalam tiga langkah sederhana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>

        <meta name="keywords" content="Neema, aplikasi reservasi, pemesanan lapangan, bisnis Indonesia, situs reservasi, booking management, booking, aplikasi booking, booking app, booking solution, website booking, website reservasi, bikin website" />
        <meta name="author" content="Neema" />
        <meta property="og:title" content={metadata.title as string} />
        <meta property="og:description" content={metadata.description as string} />
        <meta property="og:image" content="/logo-full.png" />
        <meta property="og:url" content="http://neema.id/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title as string} />
        <meta name="twitter:description" content={metadata.description as string} />
        <meta name="twitter:image" content="/logo-full.png" />
        <link rel="canonical" href="https://neema.id/" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
