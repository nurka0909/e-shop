import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import { products } from '@/app/data/products';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-[12px] uppercase tracking-[0.4em] text-slate-400 mb-2">Selected Pieces</h2>
          <h3 className="text-3xl font-serif italic">New Arrivals</h3>
          <div className="h-px w-12 bg-black mt-6" />
        </div>

        {/* Барааны Grid - Desktop дээр 4, Mobile дээр 2 багана */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}