import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './components/Foot';
import FooterSection from "@/components/FooterSection";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Goyol Store",
  description: "Your favorite online store",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">

        <div className="relative flex bg-red flex-col min-h-screen">
          <main className="grow">
            <Navbar />
            {children}
            <Footer />
            <FooterSection />
          </main>
        </div>
      </body>
    </html>
  );
}