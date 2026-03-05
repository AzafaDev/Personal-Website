import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export const AboutVisual = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="hidden lg:block relative group max-w-sm"
  >
    {/* --- LAYER 1: ACCENT FRAME --- */}
    {/* Garis tepi tipis di luar kontainer utama untuk efek kedalaman */}
    <div className="absolute -inset-4 border border-zinc-900 rounded-2xl pointer-events-none" />

    {/* --- LAYER 2: IMAGE CONTAINER --- */}
    <div className="relative aspect-4/5 bg-zinc-950 rounded-xl overflow-hidden border border-zinc-900 shadow-2xl">
      <img
        src="/workspace.webp"
        alt="Workspace"
        // Warna asli dipertahankan dengan brightness yang seimbang
        className="w-full h-full object-cover brightness-[0.85] contrast-[1.05] group-hover:brightness-100 transition-all duration-1000 ease-in-out"
      />
      
      {/* Overlay gradasi gelap (Vignette) di bagian bawah */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-90" />
    </div>

    {/* --- LAYER 3: FLOATING BADGE (Purwadhika) --- */}
    {/* Elemen melayang dengan animasi y-axis yang halus */}
    <motion.div 
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -bottom-6 -right-6 bg-[#0A0A0A] border border-zinc-800 p-5 rounded-xl shadow-2xl"
    >
      <div className="flex items-center gap-4">
        {/* Ikon Graduation */}
        <div className="size-8 rounded-lg bg-zinc-900 flex items-center justify-center">
          <GraduationCap className="text-zinc-400" size={18} />
        </div>
        
        {/* Detail Teks Alumni */}
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