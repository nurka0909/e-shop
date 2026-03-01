"use client";
import React, { useState } from 'react';
import { Product } from '@/app/types';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/product/${product.id}`} className="group cursor-pointer">
      <div 
        className="relative aspect-3/4 overflow-hidden bg-slate-100"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Үндсэн зураг */}
        <img
          src={product.image}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        
        {/* Hover хийхэд харагдах зураг */}
        <img
          src={product.hoverImage}
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Quick Add товчлуур (Goyol загвар) */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full bg-white/90 backdrop-blur-sm py-3 text-[10px] uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-colors">
            Quick Add
          </button>
        </div>
      </div>

      {/* Барааны мэдээлэл */}
      <div className="mt-4 space-y-1 text-center">
        <h3 className="text-[13px] font-medium text-slate-800 uppercase tracking-tight">
          {product.name}
        </h3>
        <p className="text-[14px] font-serif italic text-slate-500">
          {product.price.toLocaleString()} ₮
        </p>
      </div>
    </Link>
  );
}