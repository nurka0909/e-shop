"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner"; // Мэдэгдэл харуулахад

export default function AddProductPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      await addDoc(collection(db, "products"), {
        name: formData.get("name"),
        price: Number(formData.get("price")),
        category: formData.get("category"),
        description: formData.get("description"),
        image: formData.get("image"),
        createdAt: new Date(),
      });
      
      toast.success("Бараа амжилттай нэмэгдлээ!");
      (e.target as HTMLFormElement).reset(); // Формыг цэвэрлэх
    } catch (error) {
      toast.error("Алдаа гарлаа. Дахин оролдоно уу.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10 space-y-6">
      <Card className="border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl font-bold uppercase tracking-tight">Шинэ бараа нэмэх</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Барааны нэр</label>
              <Input name="name" required placeholder="Жишээ: Ноолууран ороолт" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Үнэ (₮)</label>
                <Input name="price" type="number" required placeholder="0" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Ангилал</label>
                <select name="category" className="w-full h-10 px-3 rounded-md border border-slate-200 text-sm outline-none">
                  <option value="women">Эмэгтэй</option>
                  <option value="men">Эрэгтэй</option>
                  <option value="accessories">Аксессуар</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Тайлбар</label>
              <textarea 
                name="description"
                className="w-full min-h-[120px] p-3 rounded-md border border-slate-200 text-sm outline-none focus:ring-1 focus:ring-slate-400"
                placeholder="Барааны дэлгэрэнгүй мэдээллийг энд бичнэ үү..."
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Зураг оруулах (URL)</label>
              <Input name="image" required placeholder="https://..." />
            </div>

            <Button 
              type="submit" 
              disabled={loading}
              className="w-full bg-slate-900 hover:bg-emerald-800 text-white font-bold h-12 uppercase tracking-widest"
            >
              {loading ? "Хадгалж байна..." : "Барааг хадгалах"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}