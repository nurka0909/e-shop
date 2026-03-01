import React from 'react';

// 1. Барааны өгөгдөл
const products = [
  {
    id: 1,
    name: "ЮБКА",
    price: "478,000 ₮",
    category: "women",
    image: "",
  },
  {
    id: 102,
    name: "ШИНЭ КАРДИГАН",
    price: "478,000 ₮",
    category: "Women",
    image: "https://cdnp.cody.mn/spree/images/3311332/large/2.2.jpg",
  }
];

export default async function WomenPage({ params }: { params: Promise<{ id: string }> }) {
  // Next.js 15-ийн Promise алдааг засах хэсэг
  await params; 

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 font-sans">
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold tracking-widest uppercase text-black">Women</h1>
        <p className="mt-4 text-gray-600">Шинэ загварын ноолууран хувцаснууд</p>
      </div>

      {/* Бараанууд харагдах хэсэг */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-sm">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-80 object-cover mb-4" 
            />
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-gray-700">{product.price}</p>
            <button className="mt-4 w-full bg-black text-white py-2 rounded">
              Сагсанд нэмэх
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}