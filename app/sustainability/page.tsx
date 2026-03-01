export default function SustainabilityPage() {
  return (
    <main className="w-full">
      <section className="h-[60vh] bg-slate-100 flex items-center justify-center relative overflow-hidden">
        <img src="/images/nature.jpg" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Nature" />
        <div className="relative text-center z-10 px-6">
          <h1 className="text-4xl md:text-5xl font-serif italic mb-4">Тогтвортой хөгжил</h1>
          <p className="max-w-xl mx-auto text-slate-700 tracking-wide">Бид байгаль дэлхий болон малчдын хөдөлмөрийг дээдэлж, ирээдүйд өвлүүлэн үлдээх үнэ цэнийг бүтээдэг.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
        <div className="space-y-6">
          <h2 className="text-2xl font-serif italic border-b pb-4">Байгальд ээлтэй үйлдвэрлэл</h2>
          <p className="text-slate-600 leading-loose text-sm">Goyol Cashmere нь усны хэмнэлттэй технологи болон хоргүй будагч бодисуудыг ашиглан үйлдвэрлэлээ явуулдаг. Бид хог хаягдлыг 0-д хүргэх зорилт тавин ажиллаж байна.</p>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-serif italic border-b pb-4">Малчдын дэмжлэг</h2>
          <p className="text-slate-600 leading-loose text-sm">Бид Монгол орны өнцөг булан бүрт байгаа малчидтайгаа шууд хамтран ажиллаж, түүхий эдийг шударга үнэлэмжээр худалдан авдаг.</p>
        </div>
      </section>
    </main>
  );
}