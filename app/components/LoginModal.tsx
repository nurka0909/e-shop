import React from "react";
import { X } from "lucide-react";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity"
                onClick={onClose}
            />

            {/* Төв цонхны өргөн */}
            <div className="relative bg-white max-w-40px rounded-sm shadow-2xl animate-in fade-in zoom-in duration-300">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute -top-3 -right-3 md:-right-10 text-white hover:opacity-70 transition-opacity"
                >
                    <div className="bg-gray-400/50 rounded-full p-1.5 flex items-center justify-center">
                        <X size={18} strokeWidth={2.5} />
                    </div>
                </button>

                <div className="p-8 md:p-10">
                    {/* LOGIN / SIGNUP tabs */}
                    <div className="flex justify-center gap-8 mb-10 text-[12px] font-bold tracking-[0.2em] uppercase">
                        <span className="cursor-pointer border-b-2 border-black pb-1 text-black">LOGIN</span>
                        <span className="cursor-pointer text-gray-300 hover:text-black transition-colors pb-1">SIGNUP</span>
                    </div>

                    {/* Facebook Button */}
                    <button className="w-full bg-[#4267B2] text-white py-2.5 px-4 text-[10px] font-medium tracking-widest flex items-center justify-center mb-6 hover:bg-[#365899] transition-colors uppercase">
                        facebook-ээр нэвтрэх
                    </button>

                    {/* Divider */}
                    <div className="relative flex py-4 items-center">
                        <div className="grow border-t border-gray-100"></div>
                        <span className="shrink mx-4 text-gray-400 text-[10px] uppercase tracking-[0.3em] font-light">эсвэл</span>
                        <div className="grow border-t border-gray-100"></div>
                    </div>

                    {/* Form */}
                    <div className="mt-6 space-y-4">
                        <input
                            type="email"
                            placeholder="Та И-Мэйл хаягаа оруулна уу"
                            className="w-full border border-gray-200 py-3 px-4 text-[11px] placeholder:text-gray-400 focus:outline-none focus:border-black transition-all bg-white"
                        />
                        <button className="w-full bg-[#262626] text-white py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-black transition-colors">
                            Үргэлжлүүлэх
                        </button>
                    </div>

                    {/* Secured Logo */}
                    <div className="mt-8 flex justify-center">
                        <div className="border border-green-500/30 text-green-600 flex items-center px-4 py-1.5 rounded-sm text-[9px] font-bold gap-2 tracking-tighter uppercase">
                            <span className="bg-green-600 text-white px-1 rounded-sm">S</span> SECURED BY AMKA
                        </div>
                    </div>

                    {/* Checkbox section */}
                    <div className="mt-10 flex items-start gap-3 text-left">
                        <input
                            type="checkbox"
                            className="mt-1 w-4 h-4 accent-black border-gray-300 rounded cursor-pointer"
                            id="terms"
                        />
                        <label htmlFor="terms" className="text-[10px] text-gray-400 leading-relaxed cursor-pointer uppercase tracking-tight select-none">
                            Би манай <span className="text-blue-500 underline">Үйлчилгээний нөхцөл</span> болон<br></br> <span className="text-blue-500 underline">Нууцлалын бодлогыг</span> хүлээн зөвшөөрч байна уу?
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}