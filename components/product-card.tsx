"use client";

import React from 'react';
import Link from 'next/link';

// Төрлийг тодорхой болгох
export interface ProductProps {
  id: string;      
  name: string;
  price: number;
  image: string;
  category?: string;
  isNew?: boolean;
}

export const ProductCard: React.FC<ProductProps> = ({ 
  id, 
  name, 
  price, 
  image, 
  category, 
  isNew 
}) => {
  return (
    <Link href={`/shop/products/${id}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-slate-100 mb-4">
        {isNew && (
          <span className="absolute top-3 left-3 z-10 bg-black text-white text-[9px] px-2 py-1 uppercase tracking-widest">
            New
          </span>
        )}
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="space-y-1">
        <h3 className="text-[11px] uppercase tracking-wider text-slate-800 group-hover:text-black">
          {name}
        </h3>
        {category && (
          <p className="text-[9px] text-slate-400 uppercase tracking-widest">{category}</p>
        )}
        <p className="text-[12px] font-bold">
          {price.toLocaleString()} ₮
        </p>
      </div>
    </Link>
  );
};