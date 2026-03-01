import React from 'react';
import Link from 'next/link';
// Хамгийн дээр нь компонентоо дуудаж оруулна
import FooterSection from '@/components/FooterSection'; 

export default function CartPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. ТАНЫ САГС ХЭСЭГ */}
      <main className="max-w-[1440px] mx-auto px-10 py-20 flex-grow w-full">
        <h1 className="text-2xl font-bold tracking-widest uppercase mb-10 text-center">
          Таны сагс
        </h1>
        <div className="flex flex-col items-center justify-center py-20 border-y border-gray-100">
          <p className="text-gray-400 mb-6 uppercase text-sm tracking-widest">
            Сагс хоосон байна
          </p>
          <Link 
            href="/" 
            className="bg-black text-white px-12 py-4 text-xs uppercase tracking-widest hover:bg-gray-800 transition"
          >
            Үргэлжлүүлэн үзэх
          </Link>
        </div>
      </main>

      {/* 2. ЧИНИЙ ХИЙСЭН FOOTER ХЭСЭГ (Бидний тухай, Видео, Цэс) */}
      <FooterSection />
    </div>
  );
}