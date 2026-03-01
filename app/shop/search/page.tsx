"use client";

import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { Suspense } from "react";

// Жишээ дата
const ALL_PRODUCTS = [
  { id: "1", name: "Ноолууран ороолт", price: 185000, image: "/images/1.webp", category: "women" },
  { id: "2", name: "Ноосон цамц", price: 380000, image: "/images/2.webp", category: "men" },
  // ... бусад бараанууд
];

// 1. Хайлтын логикийг тусад нь компонент болгоно
function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  // Хайлтаар шүүх
  const filteredProducts = ALL_PRODUCTS.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-12">
        <h1 className="text-2xl font-serif italic">
          Хайлтын үр дүн: <span className="text-slate-400">"{query}"</span>
        </h1>
        <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-2">
          Нийт {filteredProducts.length} бараа олдлоо
        </p>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-slate-400 italic font-serif text-lg">Уучлаарай, илэрц олдсонгүй.</p>
        </div>
      )}
    </div>
  );
}

// 2. Үндсэн хуудас (Энд Suspense ашигласнаар Build алдаа арилна)
export default function SearchPage() {
  return (
    <main>
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-[400px]">
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 animate-pulse">
            Хайж байна...
          </p>
        </div>
      }>
        <SearchContent />
      </Suspense>
    </main>
  );
}