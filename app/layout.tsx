import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Veraluz Interiors | Specialists in Lighting",
  description:
    "Transform your space with Veraluz Interiors. Expert lighting design, premium acoustic panels, and curated interior solutions for residential and commercial projects.",
  keywords:
    "lighting design, interior design, acoustic panels, luxury lighting, lighting consultation, residential lighting, commercial lighting, lighting products, interior design services",
  authors: [{ name: "Veraluz Interiors" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Veraluz Interiors | Luxury Lighting & Interior Design Solutions",
    description:
      "Transform your space with Veraluz Interiors. Expert lighting design, premium acoustic panels, and curated interior solutions.",
    type: "website",
    url: "https://veraluzinteriors.com",
    siteName: "Veraluz Interiors",
    images: [
      {
        url: "/logo.png",
        width: 768,
        height: 768,
        alt: "Veraluz Interiors Logo",
      },
    ],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
