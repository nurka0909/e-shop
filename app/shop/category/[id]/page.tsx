"use client";

import React, { use } from "react";
import { ProductCard } from "@/components/product-card";

// 1. Дата хэсэг (Зургийн замыг өөрийнхөөрөө солиорой)
const DUMMY_PRODUCTS = [
  { id: "1", name: "ЮБКА", price: 478000, category: "women", image: "/p1.jpg", description: "Fall Winter 2025/26" },
  { id: "2", name: "ЦЭЭЖИВЧ", price: 248000, category: "women", image: "/p2.jpg", description: "2025 New Year collection" },
  { id: "3", name: "КАРДИГАН", price: 478000, category: "women", image: "/p3.jpg", description: "CASHMERE CARDIGAN" },
  { id: "4", name: "ӨМД", price: 350000, category: "women", image: "/p4.jpg", description: "CASHMERE PANTS" },
  { id: "5", name: "ЦАМЦ", price: 210000, category: "women", image: "/p5.jpg", description: "CASHMERE SHIRT" },
  { id: "6", name: "ПАЛЬТО", price: 1250000, category: "women", image: "/p6.jpg", description: "WINTER COAT" },
];

export default function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  // params-ийг задлах (Next.js 15-д заавал ингэж бичнэ)
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  // Ангиллаар нь шүүх
  const filteredProducts = DUMMY_PRODUCTS.filter(p => p.category === id);

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Дээд талын хэсэг: Гарчиг болон Сортлох */}
      <div className="mb-12 border-b pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-medium uppercase tracking-wider text-slate-900">
            {id === "women" ? "Эмэгтэй" : id === "men" ? "Эрэгтэй" : id}
            <span className="text-sm text-slate-400 ml-4 normal-case font-normal">
              {filteredProducts.length} бүтээгдэхүүн
            </span>
          </h1>
        </div>
        
        <select className="border p-2 text-sm outline-none bg-white cursor-pointer">
          <option>Default</option>
          <option>Үнэ: Өсөхөөр</option>
          <option>Үнэ: Буурахаар</option>
        </select>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* SIDEBAR - Шүүлтүүр хэсэг */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="mb-8">
            <h3 className="font-bold uppercase text-xs mb-4 tracking-widest border-b pb-2">Category</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="hover:text-black cursor-pointer">Цамц</li>
              <li className="hover:text-black cursor-pointer font-bold text-black border-l-2 border-black pl-2">Эмэгтэй</li>
              <li className="pl-6 space-y-2 mt-2">
                <p className="hover:text-black cursor-pointer text-slate-500 text-xs">Даашинз</p>
                <p className="hover:text-black cursor-pointer text-slate-500 text-xs">Өмд</p>
                <p className="hover:text-black cursor-pointer text-slate-500 text-xs">Пальто</p>
                <p className="hover:text-black cursor-pointer text-slate-500 text-xs">Юбка</p>
              </li>
              <li className="hover:text-black cursor-pointer">Эрэгтэй</li>
              <li className="hover:text-black cursor-pointer">Хүүхэд</li>
            </ul>
          </div>

          <div className="mb-8 pt-4 border-t">
            <h3 className="font-bold uppercase text-xs mb-4 tracking-widest text-slate-800 flex justify-between items-center">
              Хэмжээ <span className="text-[10px]">▼</span>
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {["S", "M", "L", "XL", "F", "2XL"].map((size) => (
                <label key={size} className="flex items-center gap-2 text-xs cursor-pointer hover:bg-slate-50 p-1">
                  <input type="checkbox" className="w-3 h-3 accent-black" />
                  <span className="text-slate-600 uppercase">{size}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* PRODUCTS GRID - Бараануудын хэсэг */}
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {filteredProducts.map((product) => (
                <ProductCard
                  id={product.id}
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  category={product.category}
                  image={product.image}
                />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center text-slate-400 italic">
              Энэ ангилалд одоогоор бүтээгдэхүүн байхгүй байна.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}