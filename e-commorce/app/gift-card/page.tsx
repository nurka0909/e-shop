import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function GiftCardPage() {
  const amounts = [100000, 200000, 500000, 1000000];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Зүүн тал: Зургийн хэсэг */}
        <div className="aspect-[16/10] bg-slate-100 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="/images/gift-card-design.jpg" // Public/images дотор зургаа хийгээрэй
            alt="Goyol Gift Card"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Баруун тал: Сонголт */}
        <div className="space-y-8">
          <h1 className="text-4xl font-serif italic text-slate-900 uppercase">Gift Card</h1>
          <p className="text-slate-500 leading-relaxed">
            Хайртай дотны хүндээ ноолууран дулаан бэлэг барих хамгийн шилдэг сонголт. 
            Та өөрийн хүссэн дүнгээр бэлгийн карт сонгох боломжтой.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {amounts.map((amount) => (
              <Button 
                key={amount} 
                variant="outline" 
                className="h-16 rounded-xl border-slate-200 hover:border-emerald-500 font-bold text-lg"
              >
                {amount.toLocaleString()} ₮
              </Button>
            ))}
          </div>

          <Button className="w-full h-14 bg-slate-900 text-white rounded-xl font-black uppercase tracking-widest hover:bg-emerald-800 transition-colors">
            Сагсанд нэмэх
          </Button>
        </div>
      </div>
    </div>
  );
}