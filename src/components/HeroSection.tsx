// src/components/sections/Hero/HeroSection.tsx
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { SocialLinks } from "./hero/SocialLinks";
import { ProfileFrame } from "./hero/ProfileFrame";

const HeroSection = () => {
  // --- KONFIGURASI ANIMASI ---
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden text-white px-4 md:px-6 py-12 md:py-20">
      
      {/* --- DEKORASI LATAR (Glow & Grid) --- */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/5 blur-[80px] md:blur-[120px] pointer-events-none" />
      <div
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10">
        
        {/* --- KONTEN TEKS (Kiri) --- */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="lg:col-span-7 space-y-6 md:space-y-8 order-2 lg:order-1"
        >
          {/* Badge Status Pekerjaan */}
          <motion.div variants={fadeIn} className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 bg-blue-600 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">
              <Sparkles size={12} /> Open for Projects
            </div>
            <div className="h-px w-8 md:w-12 bg-zinc-800" />
          </motion.div>

          {/* Judul Utama & Nama (Responsive Text) */}
          <motion.div variants={fadeIn} className="space-y-2 md:space-y-4">
            <h1 className="text-blue-600 font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">
              // Full-Stack Developer
            </h1>
            <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-[100px] font-black tracking-tighter leading-[0.9] md:leading-[0.85] uppercase italic">
              AKMAL <br />
              <span
                className="text-zinc-900"
                style={{ WebkitTextStroke: "1px #3f3f46" }}
              >
                DZAKWAN.
              </span>
            </h2>
          </motion.div>

          {/* Deskripsi Singkat */}
          <motion.p
            variants={fadeIn}
            className="text-zinc-500 text-base md:text-xl max-w-lg leading-tight uppercase font-medium tracking-tighter"
          >
            Crafting <span className="text-white">high-end digital solutions</span> where speed meets brutalist design aesthetics.
          </motion.p>

          {/* Tombol Aksi & Sosmed */}
          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8 pt-4"
          >
            {/* Tombol CTA Portfolio */}
            <a
              href="#portfolio"
              className="group flex items-center gap-4 md:gap-6 w-full sm:w-auto justify-between sm:justify-start"
            >
              <span className="text-sm font-black uppercase tracking-widest border-b-2 border-blue-600 pb-1 group-hover:pr-4 md:group-hover:pr-8 transition-all">
                View Portfolio
              </span>
              <div className="size-10 md:size-12 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all shrink-0">
                <ArrowRight size={18} className="group-hover:rotate-[-45deg] transition-transform" />
              </div>
            </a>

            {/* Komponen Sosmed (Pisah File) */}
            <SocialLinks className="border-l-0 sm:border-l border-zinc-900 pl-0 sm:pl-8 flex gap-6" />
          </motion.div>
        </motion.div>

        {/* --- AREA VISUAL (Kanan di Desktop, Atas di Mobile) --- */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
          <ProfileFrame />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;