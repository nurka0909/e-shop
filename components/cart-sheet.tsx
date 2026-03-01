"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingBag, Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "@/lib/store"; // 🔹 Store-оо импортлох
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CartSheet() {
  const { items, removeItem, addItem, totalPrice } = useCart();
  
  // Нийт барааны тоог тооцоолох
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative p-2 group">
          <ShoppingBag size={20} strokeWidth={1.5} className="group-hover:opacity-60 transition" />
          {totalItems > 0 && (
            <span className="absolute top-1 right-1 bg-black text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full animate-in zoom-in">
              {totalItems}
            </span>
          )}
        </button>
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-md flex flex-col h-full bg-white">
        <SheetHeader className="border-b pb-4">
          <SheetTitle className="text-sm uppercase tracking-widest font-serif italic flex justify-between items-center">
            <span>Таны сагс</span>
            <span className="text-[10px] font-sans not-italic font-light text-slate-400">({totalItems} бараа)</span>
          </SheetTitle>
        </SheetHeader>

        {/* 🔹 CART ITEMS LIST */}
        <div className="flex-1 overflow-y-auto py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-slate-400 space-y-4">
              <ShoppingBag size={48} strokeWidth={1} className="opacity-10" />
              <p className="text-[10px] uppercase tracking-[0.2em]">Таны сагс одоогоор хоосон байна</p>
              <SheetTrigger asChild>
                <Link href="/shop/category/all" className="mt-4 text-[10px] uppercase border-b border-black pb-1 text-black font-bold">
                  Шоппинг хийх
                </Link>
              </SheetTrigger>
            </div>
          ) : (
            <div className="space-y-8">
              {items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex gap-4 animate-in slide-in-from-right duration-300">
                  {/* Product Image */}
                  <div className="w-24 aspect-[3/4] bg-slate-100 overflow-hidden shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div className="space-y-1">
                      <div className="flex justify-between items-start">
                        <h4 className="text-[11px] uppercase font-bold tracking-tight leading-tight pr-4">
                          {item.name}
                        </h4>
                        <button 
                          onClick={() => removeItem(item.id, item.size)}
                          className="text-slate-400 hover:text-red-500 transition"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest">
                        Size: {item.size}
                      </p>
                    </div>

                    <div className="flex justify-between items-end mt-4">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-slate-200 rounded-sm">
                        <button 
                          onClick={() => removeItem(item.id, item.size)} // Энд логикоороо 1-ээр хасах функц нэмж болно
                          className="p-1 hover:bg-slate-50 transition"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-[11px] px-3 font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => addItem(item)} 
                          className="p-1 hover:bg-slate-50 transition"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      
                      <p className="text-[13px] font-bold tracking-tighter">
                        {(item.price * item.quantity).toLocaleString()} ₮
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 🔹 FOOTER: CHECKOUT */}
        {items.length > 0 && (
          <div className="border-t pt-6 space-y-4">
            <div className="flex justify-between items-center px-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">Нийт дүн</span>
              <span className="text-xl font-serif italic text-slate-900">
                {totalPrice().toLocaleString()} ₮
              </span>
            </div>
            <p className="text-[9px] text-slate-400 text-center uppercase tracking-widest px-4">
              Тээвэрлэлтийн зардлыг төлбөр төлөх хэсэгт тооцно
            </p>
            <div className="grid gap-2">
              <Button className="w-full h-14 bg-black text-white rounded-none text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-slate-800 transition-all">
                Захиалах
              </Button>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full h-12 rounded-none text-[10px] uppercase tracking-[0.2em] border-slate-200">
                  Сагс үзэх
                </Button>
              </SheetTrigger>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}