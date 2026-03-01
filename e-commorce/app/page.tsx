"use client";

import React from 'react';
import Link from 'next/link';
import { ProductCard } from "@/components/product-card";

// 1. ЖИШЭЭ БАРААНУУД (Data)
const PRODUCTS = [
  {
    id: "cashmere-scarf-01",
    name: "Дээд зэрэглэлийн ноолууран ороолт",
    price: 185000,
    image: "/images/1.webp",
    isNew: true
  },
  {
    id: "wool-sweater-02",
    name: "Эрэгтэй V-хэлбэрийн ноосон цамц",
    price: 380000,
    image: "/images/2.webp",
    isNew: true
  },
  {
    id: "classic-cardigan-03",
    name: "Classic Cashmere Cardigan",
    price: 450000,
    image: "/images/3.webp",
    isNew: false
  },
  {
    id: "kids-hat-04",
    name: "Хүүхдийн ноолууран малгай",
    price: 85000,
    image: "/images/4.webp",
    isNew: false
  }
];
const olympicImages = [
  "/images/5.webp",
  "/images/6.webp",
  "/images/7.webp",
  "/images/8.webp",
]; 
export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* 3. WINTER OLYMPICS SECTION (New) */}
      <section className="w-full bg-white py-24">
        <div className="text-center mb-16 px-4">
          <p className="text-[10px] uppercase tracking-[0.4em] text-slate-400 mb-2">
            TEAM MONGOLIA · MILANO · CORTINA · 2026
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Winter Olympics</h2>
          <Link 
            href="/shop/category/olympics" 
            className="inline-block bg-[#1A1A1A] text-white px-10 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-black transition-all"
          >
            Pre-order is now open
          </Link>
          <p className="text-[9px] uppercase tracking-widest text-slate-400 mt-6 italic">
            SHIPPING FEB 2 2026
          </p>
        </div>

        {/* 4 Image Grid for Olympics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 px-1 max-w-[1600px] mx-auto">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-[3/4] overflow-hidden bg-slate-100">
              <img 
                src={olympicImages[i - 1]}
                alt="Olympic Collection"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2000ms]"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 4. NEW ARRIVALS (Product List) */}
      <section className="max-w-[1440px] mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4">
          <div>
            <h2 className="text-3xl font-serif italic tracking-wide text-slate-900">New Arrivals</h2>
            <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em] mt-2">Шинээр ирсэн загварууд</p>
          </div>
          <Link href="/shop/category/all" className="text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition">
            View All Products
          </Link>
        </div>

        {/* Product Grid - Fixed TypeScript id and key errors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-16">
          {PRODUCTS.map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              isNew={product.isNew}
            />
          ))}
        </div>
      </section>

      {/* 5. BRAND STORY SECTION */}
      <section className="w-full py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-[11px] font-bold tracking-[0.3em] mb-8 uppercase text-slate-400">Since 2005</h3>
          <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-slate-800">
            "Бид ноос ноолууран сүлжмэл бүтээгдэхүүний үйлдвэрлэлээр Монголдоо төдийгүй дэлхийд танигдсан үндэсний брэнд болохын төлөө ажиллаж байна."
          </p>
        </div>
      </section>

    </main>
  );
}