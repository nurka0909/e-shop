"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white pt-20 px-6">
      <div className="w-full max-w-[400px] space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-serif italic tracking-tight">Бүртгүүлэх</h1>
          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
            Бүртгэл үүсгэж давуу талуудыг эдлээрэй
          </p>
        </div>

        <form className="space-y-6">
          <div className="space-y-4">
            <Input 
              placeholder="ОВОГ НЭР" 
              className="rounded-none border-t-0 border-x-0 border-b border-slate-200 focus-visible:ring-0 focus-visible:border-black px-0 text-[11px] placeholder:text-slate-300"
            />
            <Input 
              type="email" 
              placeholder="И-МЭЙЛ ХАЯГ" 
              className="rounded-none border-t-0 border-x-0 border-b border-slate-200 focus-visible:ring-0 focus-visible:border-black px-0 text-[11px] placeholder:text-slate-300"
            />
            <Input 
              type="password" 
              placeholder="НУУЦ ҮГ ҮҮСГЭХ" 
              className="rounded-none border-t-0 border-x-0 border-b border-slate-200 focus-visible:ring-0 focus-visible:border-black px-0 text-[11px] placeholder:text-slate-300"
            />
          </div>

          <p className="text-[9px] text-slate-400 leading-relaxed uppercase tracking-wider text-center">
            Бүртгүүлснээр та манай <Link href="#" className="underline text-black">Үйлчилгээний нөхцөл</Link>-ийг зөвшөөрч буйд тооцогдоно.
          </p>

          <Button className="w-full h-14 bg-black text-white rounded-none text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-slate-800 transition-all">
            Бүртгэл үүсгэх
          </Button>
        </form>

        <div className="text-center pt-8 border-t border-slate-100">
          <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-4">Бүртгэлтэй юу?</p>
          <Link href="/auth/login" className="text-[11px] font-bold uppercase tracking-widest hover:opacity-60 transition border-b border-black pb-1">
            Нэвтрэх хэсэг рүү буцах
          </Link>
        </div>
      </div>
    </div>
  );
}