export default function NewsPage() {
  const news = [
    { id: 1, title: "Шинэ жилийн онцлох цуглуулга", date: "2026.01.20", img: "/images/news1.jpg" },
    { id: 2, title: "Парисын загварын долоо хоногт Goyol", date: "2025.12.15", img: "/images/news2.jpg" },
    { id: 3, title: "Ноолууран бүтээгдэхүүний арчилгаа", date: "2025.11.05", img: "/images/news3.jpg" },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-serif italic text-center mb-16 uppercase tracking-[0.3em]">Мэдээ, мэдээлэл</h1>
      <div className="grid md:grid-cols-3 gap-10">
        {news.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="aspect-video bg-slate-100 mb-6 overflow-hidden">
              <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={item.title} />
            </div>
            <p className="text-[10px] text-slate-400 font-bold mb-2 uppercase">{item.date}</p>
            <h3 className="text-lg font-serif group-hover:underline decoration-slate-300 underline-offset-4">{item.title}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}