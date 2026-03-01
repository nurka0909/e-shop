"use client";

import React from 'react';
import { ChevronRight, Home, Zap, Search, Heart, User } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-white font-sans border-t border-gray-100">
      
      {/* 1. БИДНИЙ ТУХАЙ - Цэвэрхэн загвар */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-[11px] font-bold tracking-[0.3em] mb-8 uppercase text-black">Бидний тухай</h2>
        <p className="text-gray-500 text-[12px] leading-[1.8] max-w-2xl mx-auto italic">
          Бид ноос ноолууран сүлжмэл бүтээгдэхүүний үйлдвэрлэл, худалдааны чиглэлээр 2005 онд гэр бүлийн бичил бизнес хэлбэрээр байгуулагдаж байсан билээ...
        </p>
      </section>

      {/* 2. ВИДЕО ХЭСЭГ - Хэвээрээ үлдсэн */}
      <section className="relative w-full h-[300px] bg-black overflow-hidden">
        <video autoPlay muted loop className="w-full h-full object-cover opacity-70">
          <source src="https://cdnshoppy.s3.amazonaws.com/web2/itstore/WEB_Cover_1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <button className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/30 hover:bg-white/20 transition">
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
          </button>
        </div>
      </section>

      {/* 3. МЭДЭЭЛЭЛ АВАХ - Goyol стиль */}
      <section className="w-full py-16 px-6 text-center border-b border-gray-50">
        <h3 className="text-[11px] font-bold tracking-[0.3em] mb-8 uppercase">Мэдээлэл авах</h3>
        <div className="flex max-w-md mx-auto mb-10 border-b border-black pb-2">
          <input 
            type="email" 
            placeholder="Имэйл хаягаа бичнэ үү" 
            className="flex-1 bg-transparent px-2 py-1 text-[12px] outline-none italic"
          />
          <button className="px-4">
            <Zap size={16} className="text-black" />
          </button>
        </div>
        <div className="flex justify-center gap-10 text-[10px] font-bold tracking-[0.2em] uppercase">
          <Link href="#" className="hover:opacity-50">Facebook</Link>
          <Link href="#" className="hover:opacity-50">Instagram</Link>
          <Link href="#" className="hover:opacity-50">Linkedin</Link>
        </div>
      </section>

      {/* 4. ЦЭСНИЙ ЖАГСААЛТ - Accordion логикийг хадгалав */}
      <section className="max-w-[1440px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Компани */}
        <div className="space-y-4">
          <h4 className="text-[11px] font-bold uppercase tracking-widest border-b border-gray-100 pb-2">Компани</h4>
          <div className="flex flex-col gap-2 text-[11px] text-gray-500 uppercase tracking-wider">
            <Link href="/about" className="hover:text-black">Бидний тухай</Link>
            <Link href="/career" className="hover:text-black">Нээлттэй ажлын байр</Link>
            <Link href="/news" className="hover:text-black">Мэдээ, мэдээлэл</Link>
          </div>
        </div>
        {/* Үйлчилгээ */}
        <div className="space-y-4">
          <h4 className="text-[11px] font-bold uppercase tracking-widest border-b border-gray-100 pb-2">Үйлчилгээ</h4>
          <div className="flex flex-col gap-2 text-[11px] text-gray-500 uppercase tracking-wider">
            <Link href="/terms" className="hover:text-black">Үйлчилгээний нөхцөл</Link>
            <Link href="/privacy" className="hover:text-black">Нууцлалын бодлого</Link>
            <Link href="/return" className="hover:text-black">Буцаалтын журам</Link>
          </div>
        </div>
        {/* Холбоо барих */}
        <div className="space-y-4">
          <h4 className="text-[11px] font-bold uppercase tracking-widest border-b border-gray-100 pb-2">Холбоо барих</h4>
          <div className="flex flex-col gap-2 text-[11px] text-gray-500 uppercase tracking-wider">
            <span>7777-3339</span>
            <span className="lowercase">marketing@goyolcashmere.mn</span>
            <span>Хаяг байршил</span>
          </div>
        </div>
      </section>

      {/* 5. ЛОГО & COPYRIGHT */}
      <section className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between py-10 px-6 border-t border-gray-100 mb-16">
        <div className="flex items-center gap-3 mb-6 md:mb-0">
          <div className="w-8 h-8 border border-black rounded-full flex items-center justify-center font-serif text-sm italic">G</div>
          <span className="text-lg font-bold tracking-[0.2em] uppercase">GOYOL</span>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          <span className="text-[9px] text-gray-400 uppercase tracking-[0.2em]">
            © 2026. БҮХ ЭРХ ХУУЛИАР ХАМГААЛАГДСАН.
          </span>
          <div className="flex items-center gap-1 opacity-30 grayscale">
             <span className="text-[8px] uppercase">Powered by</span>
             <img src="/images/cody.svg" alt="Cody Logo" className="h-3 w-auto" />
          </div>
        </div>
      </section>

      {/* 6. FIXED BOTTOM NAVIGATION - Хэвээрээ үлдсэн */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-100 px-6 py-3 flex justify-between items-center z-50 md:hidden">
        <div className="flex flex-col items-center text-black"><Home size={18} strokeWidth={1.5}/><span className="text-[9px] mt-1 font-medium">Нүүр</span></div>
        <div className="flex flex-col items-center text-gray-400"><Zap size={18} strokeWidth={1.5}/><span className="text-[9px] mt-1">Онцлох</span></div>
        <div className="flex flex-col items-center text-gray-400"><Search size={18} strokeWidth={1.5}/><span className="text-[9px] mt-1">Хайлт</span></div>
        <div className="flex flex-col items-center text-gray-400"><Heart size={18} strokeWidth={1.5}/><span className="text-[9px] mt-1">Хадгалсан</span></div>
        <div className="flex flex-col items-center text-gray-400"><User size={18} strokeWidth={1.5}/><span className="text-[9px] mt-1">Профайл</span></div>
      </nav>
      
    </footer>
  );
};

export default Footer;