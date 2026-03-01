"use client";
import { useWishlist } from "@/lib/wishlist-store";
import { ProductCard } from "@/components/product-card";
import Link from "next/link";

export default function WishlistPage() {
  const { wishlist } = useWishlist();

  return (
    <main className="max-w-7xl mx-auto px-6 py-24 min-h-[70vh]">
      <h1 className="text-3xl font-serif italic mb-10 text-center uppercase tracking-widest">Хүсэлтийн жагсаалт</h1>

      {wishlist.length === 0 ? (
        <div className="text-center py-20 space-y-6">
          <p className="text-slate-400 font-serif italic">Таны хүсэлтийн жагсаалт хоосон байна.</p>
          <Link href="/shop/category/all" className="inline-block border-b border-black pb-1 text-[11px] uppercase tracking-widest font-bold">
            Шоппинг хийх
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </main>
  );
}