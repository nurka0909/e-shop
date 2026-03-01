"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, User, Heart, ShoppingBag } from "lucide-react";
import LoginModal from "./LoginModal"; 

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 50px-ээс илүү scroll хийвэл хураангуй хэлбэрт шилжүүлнэ
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="w-full font-sans fixed top-0 z-50 transition-all duration-300">
        
        {/* 🔹 1. TOP ANNOUNCEMENT HEADER */}
        <div 
          className={`w-full bg-[#1a1a1a] flex items-center justify-center transition-all duration-500 overflow-hidden ${
            isScrolled ? "h-0 opacity-0" : "h-9 opacity-100"
          }`}
        >
          <p className="text-white text-[10px] tracking-[0.3em] font-light uppercase">
            Amka 2026 ond hiij baina!
          </p>
        </div>

        {/* 🔹 MAIN NAVBAR CONTAINER */}
        <div className={`w-full bg-white transition-all duration-500 shadow-sm`}>
          <div className={`max-w-1440px mx-auto px-6 md:px-10 flex items-center justify-between transition-all duration-500 ${
            isScrolled ? "py-3" : "py-5"
          }`}>

            {/* 1. Search Bar - Зүүн */}
            <div className="flex-1 flex items-center">
              <div className={`relative w-full max-w-280px transition-all duration-500 ${
                isScrolled ? "opacity-0 invisible scale-95 w-0" : "opacity-100 visible scale-100"
              }`}>
                <input
                  type="text"
                  placeholder="Эрэх: Бугуйвч, ээмэг, хүзүүний..."
                  className="w-full border border-[#e5e5e5] py-2 pl-4 pr-10 text-[11px] placeholder:text-gray-400 focus:outline-none focus:border-black"
                />
                <Search
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={16}
                  strokeWidth={1.5}
                />
              </div>
            </div>

            {/* 2. Logo - Төв */}
            <div className={`flex-1 flex justify-center items-center gap-3 transition-transform duration-500 ${
              isScrolled ? "scale-90" : "scale-100"
            }`}>
              <div className="w-9 h-9 border border-black rounded-full flex items-center justify-center font-serif text-lg italic shrink-0">
                G
              </div>
              <div className="flex flex-col leading-tight text-center">
                <span className="text-xl md:text-2xl font-bold tracking-[0.2em] uppercase text-black">
                  GOYOL
                </span>
                <span className={`text-[8px] tracking-[0.3em] uppercase text-gray-400 font-light transition-all duration-500 ${
                  isScrolled ? "h-0 opacity-0 hidden" : "h-auto opacity-100 block"
                }`}>
                  Mongolian Cashmere
                </span>
              </div>
            </div>

            {/* 3. Icons - Баруун */}
            <div className="flex-1 flex justify-end items-center gap-6 text-black">
              {/* Login Button */}
              <button onClick={() => setIsLoginOpen(true)} className="outline-none">
                <User size={19} strokeWidth={1.2} className="hover:opacity-60 transition cursor-pointer" />
              </button>
              
              <Link href="/wishlist">
                <Heart size={19} strokeWidth={1.2} className="hover:opacity-60 transition" />
              </Link>
              <Link href="/cart">
                <ShoppingBag size={19} strokeWidth={1.2} className="hover:opacity-60 transition" />
              </Link>
            </div>
          </div>
          <div>
          </div>

          {/* 🔹 2. NAV LINKS */}
          <nav className={`w-full border-t border-gray-100 transition-all duration-500 overflow-hidden ${
            isScrolled ? "h-0 opacity-0" : "h-auto opacity-100 py-3"
          }`}>
            <ul className="flex justify-center items-center gap-6 px-4 flex-wrap">
              {[
                { name: "Purchase Guide", path: "/guide" },
                { name: "Women's", path: "/category/women" },
                { name: "Men's", path: "/category/men" },
                { name: "Kids", path: "/category/kids" },
                { name: "Accessories", path: "/category/accessories" },
                { name: "Gift Card", path: "/gift-card" },
                { name: "Sustainability", path: "/sustainability" },
                { name: "News", path: "/news" },
                { name: "Wholesale", path: "/wholesale" }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-[10px] uppercase tracking-[0.12em] font-semibold text-gray-800 hover:text-black transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              
              ))}
              
            </ul>
          </nav>
        </div>
      </header>

      {/* 🔹 LOGIN MODAL */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}