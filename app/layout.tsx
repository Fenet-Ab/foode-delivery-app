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

import Navbar from "@/app/components/Navbar/page";
import { SearchProvider } from "@/app/contexts/SearchContext";
import { CartProvider } from "@/app/contexts/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col pt-20">
        <CartProvider>
          <SearchProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
          </SearchProvider>
        </CartProvider>
      </body>
    </html>
  );
}
