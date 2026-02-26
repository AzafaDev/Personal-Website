// src/components/sections/hero/ProfileFrame.tsx
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export const ProfileFrame = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="relative z-10 w-full max-w-[320px] sm:max-w-[400px]" 
  >
    {/* Frame Container (Square di mobile, Rectangular di desktop) */}
    <div className="relative aspect-square sm:aspect-[4/5] w-full">
      
      {/* Dekorasi Bingkai Biru (Offset Border) */}
      <div className="absolute inset-0 border-2 border-blue-600 translate-x-3 translate-y-3 sm:translate-x-6 sm:translate-y-6" />

      {/* Wadah Gambar Profil */}
      <div className="absolute inset-0 bg-zinc-900 overflow-hidden border border-zinc-800 z-10">
        <img
          src="/profile.webp"
          alt="Akmal Dzakwan"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
          onError={(e) => {
            // Placeholder jika gambar gagal dimuat
            e.currentTarget.src = "https://via.placeholder.com/400x500/111111/444444?text=Profile+Photo";
          }}
        />
      </div>

      {/* Badge "3+ Years" (Hanya muncul di Desktop) */}
      <div className="absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 bg-white p-4 sm:p-6 hidden sm:block border border-zinc-200 z-20 shadow-xl">
        <div className="flex flex-col">
          <span className="text-4xl sm:text-6xl font-black text-black leading-none tracking-tighter italic">3+</span>
          <span className="text-[8px] sm:text-[10px] font-black text-zinc-400 uppercase tracking-widest mt-1 sm:mt-2">
            Years of <br /> Excellence
          </span>
        </div>
      </div>

      {/* Ikon Dekoratif (Pojok Kanan Atas) */}
      <div className="absolute top-0 right-0 bg-blue-600 p-3 sm:p-4 translate-x-1/2 -translate-y-1/2 z-30 shadow-lg">
        <Code2 className="text-white size-5 sm:size-6" />
      </div>
    </div>
  </motion.div>
);