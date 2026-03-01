import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar"; 
import Footer from "@/components/footer";
import Hero from "@/components/hero-section";

export const metadata: Metadata = {
  title: "Goyol Cashmere",
  description: "E-commerce project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />  
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  );
}