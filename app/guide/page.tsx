import React from "react";

export default function GuidePage() {
  const steps = [
    { title: "Бараа сонгох", desc: "Өөрт таалагдсан загвар, өнгө, хэмжээг сонгож сагсанд нэмнэ." },
    { title: "Захиалга баталгаажуулах", desc: "Сагс хэсэг рүү орж, 'Захиалах' товчийг дарж мэдээллээ оруулна." },
    { title: "Төлбөр төлөх", desc: "QR код эсвэл дансаар шилжүүлэг хийснээр таны захиалга баталгаажна." },
    { title: "Хүргэлт", desc: "Бид таны захиалгыг 24-48 цагийн дотор хүргэж өгөх болно." },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-serif italic text-center mb-12 uppercase tracking-widest">Худалдан авалтын заавар</h1>
      <div className="space-y-12">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-6 border-l-2 border-slate-100 pl-8 relative">
            <span className="absolute -left-[11px] top-0 w-5 h-5 bg-white border-2 border-slate-900 rounded-full flex items-center justify-center text-[10px] font-bold">
              {index + 1}
            </span>
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wide mb-2">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}