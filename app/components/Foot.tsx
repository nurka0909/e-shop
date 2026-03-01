import React from 'react';
    import { ChevronRight, Home, Zap, Search, Heart, User } from 'lucide-react';

    const FooterSection = () => {
    return (
        <div className="w-full bg-white font-sans">
        {/* БИДНИЙ ТУХАЙ */}
        <section className="py-12 px-8 text-center border-t border-gray-100">
            <h2 className="text-xl font-bold tracking-widest mb-6 uppercase">Бидний тухай</h2>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
            Бид ноос ноолууран сүлжмэл бүтээгдэхүүний үйлдвэрлэл, худалдааны чиглэлээр 2005 онд гэр бүлийн бичил бизнес хэлбэрээр байгуулагдаж байсан билээ...
            </p>
        </section>

        {/* ВИДЕО ХЭСЭГ (Чиний GOYOL_FINALL.mp4-г ашиглав) */}
        <section className="relative w-full h[250px] bg-black overflow-hidden">
            <video 
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover opacity-60"
            >
            <source 
  src="https://cdnshoppy.s3.amazonaws.com/web2/itstore/WEB_Cover_1.mp4" 
  type="video/mp4" 
/>            Таны хөтөч видеог дэмжихгүй байна.
            </video>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
            
            <button className="mt-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border--[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
            </button>
            </div>
        </section>
        {/* МЭДЭЭЛЭЛ АВАХ (NEWSLETTER) ХЭСЭГ */}
      <section className="w-full bg-[#1A1A1A] py-10 px-6 text-center text-white">
        <h3 className="text-sm font-bold tracking-[0.2em] mb-6 uppercase">Мэдээлэл авах</h3>
        <div className="flex max-w-sm mx-auto mb-8 border border-gray-600">
          <input 
            type="email" 
            placeholder="Имэйл хаягаа бичнэ үү" 
            className="flex-1 px-4 py-2 text-black text-sm outline-none"
          />
          <button className="bg-[#4D4D4D] px-4 flex items-center justify-center border-l border-gray-600">
            <Zap size={18} className="text-white" />
          </button>
        </div>
        <div className="flex justify-center gap-8 text-[10px] font-bold tracking-widest uppercase text-gray-400">
          <span className="cursor-pointer hover:text-white">Facebook</span>
          <span className="cursor-pointer hover:text-white">Instagram</span>
          <span className="cursor-pointer hover:text-white">Linkedin</span>
        </div>
      </section>

        {/* ЦЭСНИЙ ЖАГСААЛТ */}
    <section className="w-full">
        {['Компани', 'Үйлчилгээ', 'Холбоо барих'].map((item) => (
          <div key={item} className="flex flex-col border-b border-gray-100">
            {/* Гарчиг хэсэг */}
            <div className="flex justify-between items-center py-5 px-6">
              <span className="text-gray-800 font-medium text-sm">{item}</span>
              <ChevronRight className="w-4 h-4 text-blue-600" />
            </div>

            {/* Дэлгэрэнгүй үгнүүд */}
            <div className="flex flex-col gap-3 pb-5 px-8">
              {item === 'Компани' && (
                <>
                  <span className="text-gray-500 text-xs">Бидний тухай</span>
                  <span className="text-gray-500 text-xs">Нээлттэй ажлын байр</span>
                  <span className="text-gray-500 text-xs">Мэдээ, мэдээлэл</span>
                  <span className="text-gray-500 text-xs">Түгээмэл асуулт хариулт</span>
                  
                </>
              )}
              {item === 'Үйлчилгээ' && (
                <>
                  <span className="text-gray-500 text-xs">Үйлчилгээний нөхцөл</span>
                  <span className="text-gray-500 text-xs">Нууцлалын бодлого</span>
                  <span className="text-gray-500 text-xs">Чанарын бодлого</span>
                  <span className="text-gray-500 text-xs">Буцаалтын журам</span>
                  
                </>
              )}
              {item === 'Холбоо барих' && (
                <>
                <span className="text-gray-500 text-xs">7777-3339</span>
                  <span className="text-gray-500 text-xs">7777-3338</span>
                  <span className="text-gray-500 text-xs">marketing@goyolcashmere.mn</span>
                  <span className="text-gray-500 text-xs">customerservice@goyolcashmere.mn</span>
                  <span className="text-gray-500 text-xs">Хаяг байршил</span>
                  {/* ЛОГО & COPYRIGHT ХЭСЭГ */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between py-6 px-6 border-t border-gray-100 mb-20">
        {/* Зүүн талын лого */}
        <div className="flex items-center mb-4 md:mb-0">
          <img 
            src="/images/goel.png" 
            alt="Goyol Logo" 
            className="h-8 w-auto" 
          />
        </div>

        {/* Баруун талын бичиг болон Cody лого */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <span className="text-[10px] text-gray-400 uppercase tracking-widest">
            © 2022. БҮХ ЭРХ ХУУЛИАР ХАМГААЛАГДСАН.
          </span>
          <img 
            src="/images/cody.svg" 
            alt="Cody Logo" 
            className="h-4 w-auto" 
          />
        </div>
      </section>
                    
                </>
                
              )}
            </div>
          </div>
        ))}
      </section>

        {/* FIXED BOTTOM NAVIGATION */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 flex justify-between items-center z-50">
            <div className="flex flex-col items-center text-green-600"><Home size={20}/><span className="text-[10px]">Нүүр</span></div>
            <div className="flex flex-col items-center text-gray-400"><Zap size={20}/><span className="text-[10px]">Онцлох</span></div>
            <div className="flex flex-col items-center text-gray-400"><Search size={20}/><span className="text-[10px]">Хайлт</span></div>
            <div className="flex flex-col items-center text-gray-400"><Heart size={20}/><span className="text-[10px]">Хадгалсан</span></div>
            <div className="flex flex-col items-center text-gray-400"><User size={20}/><span className="text-[10px]">Профайл</span></div>
        </nav>
        <div className="h-16"></div> {/* Навбарын доорх зай */}
        </div>
    );
    };

    export default FooterSection;

    ///Users/PADA-1-5-09/Documents/e-commerce/public/images/cody.svg
    ///Users/PADA-1-5-09/Documents/e-commerce/public/images/goel.png