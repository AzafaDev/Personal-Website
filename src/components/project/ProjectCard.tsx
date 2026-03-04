// src/components/sections/Portfolio/project/ProjectCard.tsx
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const ProjectCard = ({
  project,
  index,
}: {
  project: any;
  index: number;
}) => {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="group relative flex flex-col gap-6 cursor-pointer"
    >
      {/* --- WRAPPER GAMBAR --- */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: index * 0.4,
          ease: "easeInOut",
        }}
        /* HOVER EFFECT (DESKTOP ONLY): 
           - Rotate sedikit (skew)
           - Border berubah putih tipis
           - Shadow glow putih transparan
        */
        className="relative aspect-[16/10] overflow-hidden bg-zinc-950 rounded-2xl border border-zinc-900 
                   transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                   md:group-hover:border-zinc-500 md:group-hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)]
                   md:group-hover:-rotate-1 md:group-hover:scale-[1.02]"
      >
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-all duration-1000 ease-in-out
                     brightness-[0.85] 
                     md:brightness-[0.5] md:group-hover:brightness-[1] md:group-hover:scale-110"
        />

        {/* Overlay Overlay Darkening - Biar teks kategori makin kontras pas hover */}
        <div className="absolute inset-0 bg-black/20 md:opacity-0 md:group-hover:opacity-40 transition-opacity duration-700" />

        {/* Floating Arrow Badge - Animasi Slide & Fade */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6 overflow-hidden">
          <motion.div
            className="size-8 md:size-12 rounded-full bg-white md:bg-white/10 backdrop-blur-md flex items-center justify-center 
                       opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500
                       md:-translate-x-4 md:translate-y-4 md:group-hover:translate-x-0 md:group-hover:translate-y-0"
          >
            <ArrowUpRight
              size={16}
              className="text-black md:text-white md:size-5"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* --- INFO PROJECT --- */}
      <div className="flex flex-col gap-4 px-1 transition-transform duration-700 md:group-hover:translate-x-2">
        <div className="flex items-center gap-4">
          <span className="text-[9px] font-medium tracking-[0.4em] uppercase text-zinc-500 md:group-hover:text-white transition-colors duration-500">
            {project.category}
          </span>
          {/* Garis yang memanjang pas hover */}
          <div className="h-[1px] w-8 bg-zinc-900 transition-all duration-700 md:group-hover:w-full md:group-hover:bg-zinc-700" />
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-light tracking-tighter text-white">
            {project.title}
          </h3>
          <p className="text-[11px] md:text-xs text-zinc-500 leading-relaxed font-light line-clamp-2 md:group-hover:text-zinc-400 transition-colors">
            {project.description}
          </p>
        </div>

        {/* Tech Stack - Glow effect on hover */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tech.map((t: string, i: number) => (
            <span
              key={i}
              className="text-[8px] font-medium px-3 py-1.5 rounded-full border border-zinc-900 uppercase tracking-widest transition-all duration-500
                         text-zinc-400 md:text-zinc-600 
                         md:group-hover:border-zinc-500 md:group-hover:text-white md:group-hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};
