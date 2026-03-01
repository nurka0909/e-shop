export default function WholesalePage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20">
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-3xl font-serif italic uppercase tracking-widest">Бөөний худалдаа</h1>
        <p className="text-slate-500 text-sm italic">Бид дэлхийн өнцөг булан бүрт байгаа түншүүдтэй хамтран ажиллахад нээлттэй.</p>
      </div>

      <form className="space-y-6 bg-slate-50 p-8 rounded-sm">
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" placeholder="Байгууллагын нэр" className="w-full p-3 border-b border-slate-200 bg-transparent outline-none focus:border-slate-900" />
          <input type="text" placeholder="Холбоо барих нэр" className="w-full p-3 border-b border-slate-200 bg-transparent outline-none focus:border-slate-900" />
        </div>
        <input type="email" placeholder="Имэйл хаяг" className="w-full p-3 border-b border-slate-200 bg-transparent outline-none focus:border-slate-900" />
        <textarea placeholder="Хамтран ажиллах хүсэлт болон тоо хэмжээ" rows={5} className="w-full p-3 border-b border-slate-200 bg-transparent outline-none focus:border-slate-900 resize-none"></textarea>
        <button className="w-full py-4 bg-slate-900 text-white font-bold uppercase tracking-[0.2em] hover:bg-emerald-900 transition-colors">Хүсэлт илгээх</button>
      </form>
    </main>
  );
}