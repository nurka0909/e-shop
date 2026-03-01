"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AddProductPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card className="border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl font-bold uppercase tracking-tight">Шинэ бараа нэмэх</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Барааны нэр</label>
              <Input placeholder="Жишээ: Ноолууран ороолт" className="rounded-md" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Үнэ (₮)</label>
                <Input type="number" placeholder="0" className="rounded-md" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Ангилал</label>
                <select className="w-full h-10 px-3 rounded-md border border-slate-200 text-sm outline-none">
                  <option>Эрэгтэй</option>
                  <option>Эмэгтэй</option>
                  <option>Аксессуар</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Тайлбар</label>
              <textarea 
                className="w-full min-h-[120px] p-3 rounded-md border border-slate-200 text-sm outline-none focus:ring-1 focus:ring-slate-400"
                placeholder="Барааны дэлгэрэнгүй мэдээллийг энд бичнэ үү..."
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Зураг оруулах (URL)</label>
              <Input placeholder="https://..." className="rounded-md" />
            </div>

            <Button className="w-full bg-slate-900 hover:bg-emerald-800 text-white font-bold h-12 uppercase tracking-widest">
              Барааг хадгалах
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}