"use client";

import { ProductCard } from "@/components/product-card";

// Түр зуурын дата (Дараа нь Firebase-ээс шүүж авна)
const DUMMY_PRODUCTS = [
  { id: "1", name: "Ноолууран цамц", price: 285000, category: "women", image: "/images/product1.jpg" },
  { id: "2", name: "Эрэгтэй ороолт", price: 120000, category: "men", image: "/images/product2.jpg" },
];

export default function CategoryPage({ params }: { params: { id: string } }) {
  // Зөвхөн тухайн ангиллын барааг шүүж байна
  const filteredProducts = DUMMY_PRODUCTS.filter(p => p.category === params.id);

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-serif italic uppercase tracking-[0.3em] text-slate-900">
          {params.id === "women" ? "Эмэгтэй" : params.id === "men" ? "Эрэгтэй" : params.id}
        </h1>
        <p className="text-slate-500 text-sm mt-2 uppercase tracking-widest">
          Нийт {filteredProducts.length} бүтээгдэхүүн
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
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
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-20 text-slate-400">
          Энэ ангилалд одоогоор бараа байхгүй байна.
        </div>
      )}
    </main>
  );
}