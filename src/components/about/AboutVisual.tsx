// src/components/sections/About/about/AboutVisual.tsx
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export const AboutVisual = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="hidden lg:block relative group max-w-sm"
  >
    {/* Minimalist Accent Frame - Border luar tipis */}
    <div className="absolute -inset-4 border border-zinc-900 rounded-2xl pointer-events-none" />

    {/* Main Image Container */}
    <div className="relative aspect-[4/5] bg-zinc-950 rounded-xl overflow-hidden border border-zinc-900 shadow-2xl">
      <img
        src="/workspace.webp"
        alt="Workspace"
        // Grayscale dihapus, brightness disesuaikan agar warna asli keluar tapi tidak mencolok
        className="w-full h-full object-cover brightness-[0.85] contrast-[1.05] group-hover:brightness-100 transition-all duration-1000 ease-in-out"
      />
      
      {/* Soft Vignette Overlay - Menjaga agar bagian bawah tetap gelap untuk estetika */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
    </div>

    {/* Floating Alumni Badge - Tetap monokrom agar elegan */}
    <motion.div 
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -bottom-6 -right-6 bg-[#0A0A0A] border border-zinc-800 p-5 rounded-xl shadow-2xl"
    >
      <div className="flex items-center gap-4">
        <div className="size-8 rounded-lg bg-zinc-900 flex items-center justify-center">
          <GraduationCap className="text-zinc-400" size={18} />
        </div>
        <div className="flex flex-col">
          <span className="text-[9px] font-bold uppercase text-zinc-500 tracking-tighter">
            Alumni
          </span>
          <span className="text-[10px] font-medium uppercase text-white tracking-widest leading-none mt-0.5">
            Purwadhika
          </span>
        </div>
      </div>
    </motion.div>
  </motion.div>
);