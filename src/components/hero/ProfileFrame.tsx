import { motion } from "framer-motion";

export const ProfileFrame = () => {
  return (
    <div className="relative group">
      {/* --- LAYER 1: OUTER DECORATION --- */}
      {/* Border luar yang memberikan kesan "Frame" tambahan */}
      <div className="absolute -inset-8 border border-zinc-900/40 rounded-[2.5rem] pointer-events-none" />

      {/* --- LAYER 2: MAIN FRAME CONTAINER --- */}
      {/* Menggunakan animasi 'floating' naik-turun secara halus */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-70 md:w-90 aspect-4/5 rounded-4xl overflow-hidden bg-[#0A0A0A] border border-zinc-900 shadow-2xl"
      >
        {/* --- LAYER 3: PROFILE IMAGE --- */}
        {/* Kontras dan brightness disesuaikan untuk mempertahankan warna asli */}
        <img
          src="/WhatsApp Image 2026-03-09 at 21.07.07.jpeg"
          alt="Akmal Dzakwan"
          className="w-full h-full object-cover grayscale brightness-[0.9] contrast-[1.05] scale-105"
        />

        {/* --- LAYER 4: PREMIUM SHIMMER EFFECT --- */}
        {/* Efek kilatan cahaya tipis yang lewat secara berkala */}
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "linear",
          }}
          className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -skew-x-12"
        />

        {/* --- LAYER 5: VIGNETTE OVERLAY --- */}
        {/* Gradasi gelap di bagian bawah agar elemen teks tetap kontras */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-90" />

        {/* --- LAYER 6: SYSTEM STATUS / ID LABEL --- */}
        {/* Detail kecil berupa dot berdenyut (pulsing) dan timestamp sistem */}
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
