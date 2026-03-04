// src/components/sections/hero/ProfileFrame.tsx
import { motion } from "framer-motion";

export const ProfileFrame = () => {
  return (
    <div className="relative group">
      {/* 1. Outer Border: Abu-abu sangat tipis */}
      <div className="absolute -inset-8 border border-zinc-900/40 rounded-[2.5rem] pointer-events-none" />
      
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-[280px] md:w-[360px] aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#0A0A0A] border border-zinc-900 shadow-2xl"
      >
        {/* 2. Foto: Warna ORI (Grayscale Dihapus) */}
        <img
          src="/profile.webp"
          alt="Akmal Dzakwan"
          className="w-full h-full object-cover brightness-[0.9] contrast-[1.05] scale-105"
          // brightness ditingkatkan sedikit dari sebelumnya agar warna aslinya keluar
        />

        {/* 3. Shimmer: Kilatan cahaya tipis tetap ada untuk kesan premium */}
        <motion.div 
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 7, repeat: Infinity, repeatDelay: 4, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -skew-x-12"
        />

        {/* 4. Vignette: Gelap di bawah agar info teks terbaca */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

        {/* 5. Status Label: Putih murni berdenyut */}
        <div className="absolute bottom-8 left-8">
          <div className="flex items-center gap-3">
            <motion.div 
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.4)]"
            />
            <span className="text-[8px] uppercase tracking-[0.4em] text-zinc-400 font-bold">
              ID // 2026.03
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};