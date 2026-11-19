import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/json-ld";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "D’nest | Homemade Artisan Chocolates & Dessert Delights",
    template: "%s | D’nest Chocolates",
  },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: "D'nest" }],
  creator: "D'nest",
  publisher: "D'nest",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/favicon.ico",
  },
  verification: {
    google: "googlea848b50d3091f05b",
  },
  openGraph: {
    title: "D’nest | Homemade Artisan Chocolates & Dessert Delights",
    description: site.description,
    url: site.url,
    siteName: "D'nest Chocolates",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/logo-lockup.png",
        width: 1200,
        height: 630,
        alt: "D'nest Homemade Chocolates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "D’nest | Homemade Artisan Chocolates",
    description: site.description,
    images: ["/images/logo-lockup.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${instrumentSans.variable} antialiased scroll-smooth`}>
      <body className="flex min-h-screen flex-col bg-[#F6F3EE] text-[#3B2218] font-sans">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
