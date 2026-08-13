import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JJGM & CO | Wholesale Distributor of Almonds, Snacks & Confectionery",
  description: "Official website of JJGM & CO. Founder Gredy D'costa. Office: 105 Myrtle Road, Hounslow TW3 1QE. Contact: 07404548779, gredyd'costa1975@gmail.com.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0d0c0a] text-white min-h-screen flex flex-col justify-between selection:bg-amber-500 selection:text-black`}>
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
