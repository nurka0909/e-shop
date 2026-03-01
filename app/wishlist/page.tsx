import React from 'react';
import Link from 'next/link';

export default function WishlistPage() {
  return (
    <main className="max-w-1440px mx-auto px-10 py-20 text-center">
      <h1 className="text-2xl font-bold tracking-widest uppercase mb-4">Миний хүсэлтийн жагсаалт</h1>
      <div className="py-20 border-t border-gray-100 mt-10">
        <p className="text-gray-500 mb-8 font-light">Таны хүсэлтийн жагсаалт одоогоор хоосон байна.</p>
        <Link 
          href="/" 
          className="inline-block border border-black px-10 py-3 text-xs uppercase tracking-widest hover:bg-black hover:text-white transition"
        >
          Дэлгүүр хэсэх
        </Link>
      </div>
    </main>
  );
}