import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Bereket – Developer & Creative Writer",
    template: "%s | Bereket",
  },
  description:
    "Bereket is a software developer and creative writer crafting clean, user-focused digital experiences.",

  keywords: ["Bereket", "Software Developer", "Creative Writer", "Portfolio"],

  authors: [{ name: "Bereket" }],
  creator: "Bereket",

  openGraph: {
    title: "Bereket – Developer & Creative Writer",
    description:
      "Developer and creative writer building meaningful digital products through code, design, and storytelling.",
    url: "https://bek-dev.vercel.app",
    siteName: "Bereket A.",
    images: [
      {
        url: "/bek-preview.png", // 1200x630 recommended
        width: 1200,
        height: 630,
        alt: "Bereket – Developer & Creative Writer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bereket – Developer & Creative Writer",
    description:
      "Developer and creative writer building meaningful digital products through code, design, and storytelling.",
    images: "[/bek-preview.png]",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  metadataBase: new URL("https://bek-dev.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
