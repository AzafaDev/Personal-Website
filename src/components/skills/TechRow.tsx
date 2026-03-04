// src/components/sections/Skills/skills/TechRow.tsx
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { techIcons } from "../../data/portoflio";

export const TechRow = ({ group, index }: { group: any, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    className="group relative border-b border-zinc-900/50 py-10 md:py-16 transition-all duration-700 md:hover:bg-zinc-900/10"
  >
    <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-0">
      
      {/* INDEX - Tetap sembunyi di mobile biar ga penuh */}
      <div className="lg:col-span-1 hidden lg:flex">
        <span className="font-light text-zinc-700 text-sm group-hover:text-white transition-colors duration-500">
          0{index + 1}
        </span>
      </div>

      {/* KATEGORI & DESKRIPSI */}
      <div className="lg:col-span-4">
        <h3 className="text-2xl md:text-4xl font-light tracking-tight mb-2 md:group-hover:translate-x-3 transition-transform duration-700 uppercase">
          {group.category}
        </h3>
        <p className="text-zinc-500 text-[10px] md:text-sm max-w-xs font-light tracking-wide leading-relaxed">
          {group.description}
        </p>
      </div>

      {/* ICON GRID - Adaptive for Mobile */}
      <div className="lg:col-span-6 mt-4 md:mt-0">
        <div className="flex flex-wrap gap-5 md:gap-10 lg:justify-end">
          {group.skills.map((skill: any, idx: number) => {
            const iconKey = skill.name.toLowerCase().replace(/[.\s-]/g, "") as keyof typeof techIcons;
            const IconSVG = techIcons[iconKey];

            return (
              <motion.div 
                key={idx}
                animate={{ y: [0, -5, 0] }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: idx * 0.2, 
                  ease: "easeInOut" 
                }}
                className="flex flex-col items-center gap-3"
              >
                {/* DI SINI KUNCINYA: 
                   Mobile: opacity-80 & grayscale-0 (langsung nyala)
                   Desktop: opacity-30 & grayscale (nunggu hover)
                */}
                <div className="size-6 md:size-7 transition-all duration-700 
                  opacity-80 grayscale-0 
                  md:opacity-30 md:grayscale md:group-hover:opacity-100 md:group-hover:grayscale-0 md:group-hover:scale-110"
                >
                  <div className="size-full fill-zinc-400 md:fill-zinc-500 md:group-hover:fill-white transition-colors duration-700">
                    {IconSVG || <span className="text-[8px]">?</span>}
                  </div>
                </div>

                {/* Teks Nama: Di mobile kita buat muncul tapi agak transparan */}
                <span className="text-[8px] font-medium uppercase tracking-[0.2em] 
                  text-zinc-500 opacity-60
                  md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-700"
                >
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ARROW - Sembunyi di mobile biar ga menu-menuhin layar */}
      <div className="hidden lg:col-span-1 lg:flex justify-end pr-4">
        <div className="size-10 rounded-full border border-zinc-900 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-zinc-700 transition-all duration-700">
          <ArrowRight className="text-zinc-500 group-hover:text-white -rotate-45 group-hover:rotate-0 transition-transform duration-700" size={16} />
        </div>
      </div>
    </div>

    {/* ANIMASI GARIS BAWAH - Tetap ada di hover desktop */}
    <div className="hidden md:block absolute bottom-0 left-0 h-[1px] w-0 bg-zinc-500 transition-all duration-1000 ease-out group-hover:w-full" />
  </motion.div>
);