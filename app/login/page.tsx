import React from 'react';

export default function LoginPage() {
  return (
    <main className="max-w-[400px] mx-auto px-6 py-20">
      <h1 className="text-2xl font-bold tracking-widest uppercase text-center mb-8">Нэвтрэх</h1>
      <form className="flex flex-col gap-4">
        <input 
          type="email" 
          placeholder="И-мейл хаяг" 
          className="w-full border border-gray-300 py-3 px-4 text-sm focus:outline-none focus:border-black"
        />
        <input 
          type="password" 
          placeholder="Нууц үг" 
          className="w-full border border-gray-300 py-3 px-4 text-sm focus:outline-none focus:border-black"
        />
        <button className="w-full bg-black text-white py-3 text-sm uppercase tracking-widest hover:bg-gray-800 transition">
          Нэвтрэх
        </button>
      </form>
      <div className="mt-6 text-center text-xs text-gray-500 uppercase tracking-tighter">
        <a href="#" className="hover:underline">Нууц үг мартсан?</a>
        <span className="mx-2">|</span>
        <a href="#" className="hover:underline">Бүртгүүлэх</a>
      </div>
    </main>
  );
}