"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, use } from "react";
import { ChevronLeft, Share2, Heart } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/lib/store"; // 🔹 Zustand store импортлох
import { toast } from "sonner";      // 🔹 Мэдэгдэл харуулахад (npm i sonner)

const DUMMY_PRODUCTS = [
  {
    id: "cashmere-scarf-01",
    name: "Дээд зэрэглэлийн ноолууран ороолт",
    price: 185000,
    description: "Монгол ямааны 100% цэвэр ноолуураар хийгдсэн, биед маш зөөлөн, дулаан мэдрэмж төрүүлнэ. Өдөр тутмын хэрэглээнд тохиромжтой.",
    sizes: ["One Size"],
    material: "100% Cashmere",
    care: "Dry Clean Only",
    images: ["https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=1000"]
  },
  {
    id: "wool-sweater-02",
    name: "Эрэгтэй V-хэлбэрийн ноосон цамц",
    price: 380000,
    description: "Нарийн ноосон утсаар сүлжсэн, биед эвтэйхэн загвар.",
    sizes: ["M", "L", "XL", "XXL"],
    material: "100% Wool",
    care: "Hand Wash",
    images: ["https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?q=80&w=1000"]
  }
];

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [selectedSize, setSelectedSize] = useState("");
  const addItem = useCart((state) => state.addItem); // 🔹 Zustand-аас функц авах
  
  const product = DUMMY_PRODUCTS.find(p => p.id === id) || DUMMY_PRODUCTS[0];

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0]);
    }
  }, [product]);

  // 🔹 Сагсанд нэмэх үйлдэл
  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Хэмжээгээ сонгоно уу");
      return;
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      quantity: 1,
    });

    toast.success(`${product.name} сагсанд нэмэгдлээ!`, {
      description: `Хэмжээ: ${selectedSize}`,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
      <Link href="/" className="inline-flex items-center text-[10px] uppercase tracking-widest text-slate-400 hover:text-black mb-10 transition-colors">
        <ChevronLeft size={14} className="mr-1" /> Back to Collection
      </Link>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
        {/* LEFT: IMAGE GALLERY */}
        <div className="space-y-4">
          <div className="aspect-[3/4] bg-slate-50 overflow-hidden">
            <img 
              src={product.images[0]} 
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* RIGHT: PRODUCT INFO */}
        <div className="flex flex-col">
          <div className="border-b border-slate-100 pb-8 mb-8">
            <div className="flex justify-between items-start mb-4">
              <Badge variant="outline" className="rounded-none border-slate-200 text-[9px] uppercase tracking-widest px-3 py-1">Premium Quality</Badge>
              <div className="flex gap-4 text-slate-400">
                <Share2 size={18} className="cursor-pointer hover:text-black transition" />
                <Heart size={18} className="cursor-pointer hover:text-black transition" />
              </div>
            </div>
            <h1 className="text-4xl font-serif italic text-slate-900 mb-4">{product.name}</h1>
            <p className="text-2xl font-light tracking-tight text-slate-900">{product.price.toLocaleString()} ₮</p>
          </div>

          <div className="space-y-8 mb-10">
            <p className="text-slate-500 text-sm leading-[1.8] italic">{product.description}</p>

            {/* Size Selection */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-900">Select Size:</p>
                <button className="text-[9px] text-slate-400 underline uppercase tracking-widest">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[50px] h-12 px-4 flex items-center justify-center border text-[11px] transition-all duration-300 ${
                      selectedSize === size 
                      ? "border-black bg-black text-white" 
                      : "border-slate-200 text-slate-500 hover:border-slate-900"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 mb-12">
            <Button 
              onClick={handleAddToCart} // 🔹 Функц холбосон
              className="w-full h-14 bg-slate-900 hover:bg-black text-white rounded-none text-[11px] font-bold uppercase tracking-[0.2em] active:scale-[0.98] transition-all"
            >
              Add to Shopping Bag
            </Button>
            <Button variant="outline" className="w-full h-14 rounded-none text-[11px] uppercase tracking-[0.2em] border-slate-200 hover:bg-slate-50 transition-colors">
              Check availability in Store
            </Button>
          </div>

          {/* Details & Care */}
          <div className="border-t border-slate-100 pt-10 grid grid-cols-2 gap-y-4">
            <div>
              <h5 className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1">Material</h5>
              <p className="text-[11px] text-slate-900 uppercase">{product.material}</p>
            </div>
            <div>
              <h5 className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1">Care</h5>
              <p className="text-[11px] text-slate-900 uppercase">{product.care}</p>
            </div>
            <div>
              <h5 className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1">Product Code</h5>
              <p className="text-[11px] text-slate-900 uppercase">{id}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}