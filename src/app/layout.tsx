import type { Metadata } from "next";
import "./globals.css";
import { phoneNumber } from "@/constant";
import { PageParams } from "@/types";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AnimationWrapper } from "./AnimationWrapper";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neema - Aplikasi Reservasi Pribadi",
  description: "Neema adalah platform yang dirancang untuk para pemilik bisnis untuk membuat situs web reservasi khusus untuk bisnis mereka sendiri",
};

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Neema",
  "url": "https://neema.id/",
  // "logo": "https://neema.id/logo.png",
  // "sameAs": [
  // "https://www.facebook.com/your-profile",
  // "https://www.twitter.com/your-profile",
  // "https://www.instagram.com/your-profile"
  // ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": phoneNumber,
    "contactType": "Customer Service"
  }
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
} & PageParams>) {
  return (
    <html className="scroll-smooth">
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body className="transition-all">
        <Header />
        <AnimationWrapper>
          {children}
        </AnimationWrapper>
        <Footer />
      </body>
    </html>
  );
}
