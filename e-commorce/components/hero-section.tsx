import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-[60vh] overflow-hidden bg-black">
      {/* Видео тоглуулагч */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
      >
        <source src="/GOYOL_FINALL.mp4" type="video/mp4" />
        Таны хөтөч видеог дэмжихгүй байна.
      </video>

      {/* Видеон дээрх бичиг болон Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h2 className="text-[10px] md:text-[12px] uppercase tracking-[0.5em] mb-4 font-light animate-fade-in">
          Winter Collection 2026
        </h2>
        <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-[0.2em] mb-8 font-serif italic">
          Soft as a Cloud
        </h1>
        <button className="group relative border border-white px-10 py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 ease-in-out">
          Shop the Collection
        </button>
      </div>

    </section>
  );
};

export default Hero;