"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, User, Heart, X, LogIn, UserPlus, Settings } from "lucide-react";
import { CartSheet } from "@/components/cart-sheet";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { useWishlist } from "@/lib/wishlist-store";

export default function Navbar() {
    const router = useRouter();
    const { wishlist } = useWishlist(); // 🔹 Функц дотор дуудав
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    // Хайлт хийх функц
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/shop/search?q=${encodeURIComponent(searchQuery)}`);
            setIsSearchOpen(false);
            setSearchQuery("");
        }
    };

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* 🔹 1. FULL SCREEN SEARCH OVERLAY */}
            {isSearchOpen && (
                <div className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-start pt-32 animate-in fade-in zoom-in duration-300">
                    <button
                        onClick={() => setIsSearchOpen(false)}
                        className="absolute top-10 right-10 p-3 hover:bg-slate-100 rounded-full transition-all"
                    >
                        <X size={32} strokeWidth={1} />
                    </button>

                    <div className="w-full max-w-3xl px-6">
                        <h2 className="text-[11px] uppercase tracking-[0.5em] text-slate-400 mb-12 text-center font-bold">Бүтээгдэхүүн хайх</h2>
                        
                        <form onSubmit={handleSearch} className="relative border-b border-black pb-6">
                            <input
                                autoFocus
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Юу хайж байна вэ?..."
                                className="w-full bg-transparent text-4xl md:text-6xl font-serif italic outline-none placeholder:text-slate-100"
                            />
                            <button type="submit" className="absolute right-0 top-4 text-slate-300 hover:text-black transition">
                                <Search size={32} strokeWidth={1} />
                            </button>
                        </form>

                        {/* Quick Links */}
                        <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-4">
                            <span className="text-[10px] uppercase tracking-widest text-slate-300">Түгээмэл:</span>
                            {["Ороолт", "Ноолууран цамц", "Малгай", "Gifts"].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => {
                                        router.push(`/shop/search?q=${item}`);
                                        setIsSearchOpen(false);
                                    }}
                                    className="text-[11px] uppercase tracking-widest font-bold hover:text-slate-400 transition"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <header className="w-full font-sans fixed top-0 z-50 transition-all duration-300">
                {/* TOP ANNOUNCEMENT */}
                <div className={`w-full bg-[#1a1a1a] flex items-center justify-center transition-all duration-500 overflow-hidden ${isScrolled ? "h-0 opacity-0" : "h-9 opacity-100"}`}>
                    <p className="text-white text-[10px] tracking-[0.3em] font-light uppercase">TEAM2 2026 ond hiij baina!</p>
                </div>

                <div className="w-full bg-white shadow-sm border-b border-gray-50">
                    <div className={`max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between transition-all duration-500 ${isScrolled ? "py-3" : "py-6"}`}>

                        {/* LEFT: SEARCH ICON */}
                        <div className="flex-1 flex items-center">
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="flex items-center gap-3 group transition-all"
                            >
                                <Search size={20} strokeWidth={1.2} />
                                {!isScrolled && (
                                    <span className="text-[10px] uppercase tracking-widest text-slate-400 group-hover:text-black transition">Хайх</span>
                                )}
                            </button>
                        </div>

                        {/* CENTER: LOGO */}
                        <Link href="/" className={`flex-1 flex justify-center items-center gap-3 transition-transform duration-500 ${isScrolled ? "scale-90" : "scale-100"}`}>
                            <div className="w-9 h-9 border border-black rounded-full flex items-center justify-center font-serif text-lg italic shrink-0 bg-white">G</div>
                            <div className="flex flex-col leading-tight text-center">
                                <span className="text-xl md:text-2xl font-bold tracking-[0.2em] uppercase">GOYOL</span>
                                {!isScrolled && <span className="text-[8px] tracking-[0.3em] uppercase text-gray-400 font-light">Mongolian Cashmere</span>}
                            </div>
                        </Link>

                        {/* RIGHT: ICONS */}
                        <div className="flex-1 flex justify-end items-center gap-5 text-black">

                            {/* 🔹 USER DROPDOWN MENU */}
                            <DropdownMenu>
                                <DropdownMenuTrigger className="outline-none">
                                    <User size={20} strokeWidth={1.2} className="hover:opacity-50 transition cursor-pointer" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-56 mt-4 rounded-none border-slate-100 p-2 bg-white shadow-xl z-[101]">
                                    <DropdownMenuLabel className="text-[10px] uppercase tracking-widest text-slate-400 py-2 px-2">
                                        Миний бүртгэл
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />

                                    <DropdownMenuItem asChild>
                                        <Link href="/auth/login" className="flex items-center w-full px-2 py-3 text-[11px] uppercase tracking-widest cursor-pointer hover:bg-slate-50 transition-colors">
                                            <LogIn className="mr-3 h-4 w-4" strokeWidth={1.5} />
                                            Нэвтрэх
                                        </Link>
                                    </DropdownMenuItem>

                                    <DropdownMenuItem asChild>
                                        <Link href="/auth/register" className="flex items-center w-full px-2 py-3 text-[11px] uppercase tracking-widest cursor-pointer hover:bg-slate-50 transition-colors">
                                            <UserPlus className="mr-3 h-4 w-4" strokeWidth={1.5} />
                                            Бүртгүүлэх
                                        </Link>
                                    </DropdownMenuItem>

                                    <DropdownMenuSeparator />

                                    <DropdownMenuItem asChild>
                                        <Link href="/settings" className="flex items-center w-full px-2 py-3 text-[11px] uppercase tracking-widest cursor-pointer text-slate-400 hover:text-black hover:bg-slate-50 transition-colors">
                                            <Settings className="mr-3 h-4 w-4" strokeWidth={1.5} />
                                            Тохиргоо
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            {/* 🔹 WISHLIST ICON WITH COUNTER */}
                            <Link href="/wishlist" className="p-1 hover:opacity-50 transition relative">
                                <Heart 
                                    size={20} 
                                    strokeWidth={1.2} 
                                    className={wishlist.length > 0 ? "fill-red-500 text-red-500" : ""} 
                                />
                                {wishlist.length > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[7px] w-3.5 h-3.5 flex items-center justify-center rounded-full font-bold">
                                        {wishlist.length}
                                    </span>
                                )}
                            </Link>

                            <CartSheet />
                        </div>
                    </div>

                    {/* NAV LINKS */}
                    <nav className={`w-full border-t border-gray-100 transition-all duration-500 overflow-hidden ${isScrolled ? "h-0 opacity-0" : "h-auto opacity-100 py-4"}`}>
                        <ul className="flex justify-center items-center gap-8 px-4 flex-wrap text-[10px] uppercase tracking-[0.15em] font-bold text-gray-800">
                            {["Purchase Guide", "Women's", "Men's", "Kids", "Accessories", "Gift Card", "Sustainability", "News"].map((name) => (
                                <li key={name}>
                                    <Link href={`/shop/category/${name.toLowerCase().replace("'s", "").replace(" ", "-")}`} className="hover:text-black transition">
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}