import { motion } from "framer-motion";

export const ExperienceItem = ({ exp, index }: { exp: any, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    className="relative pl-10 group"
  >
    {/* --- [1] TIMELINE NODE (DOT) --- */}
    {/* Titik indikator pada garis vertikal yang membesar & menyala saat di-hover */}
    <div className="absolute -left-[4.5px] top-2 size-2 rounded-full bg-zinc-800 border border-[#050505] group-hover:bg-white group-hover:scale-150 transition-all duration-500 shadow-[0_0_10px_rgba(255,255,255,0)] group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]" />

    <div className="space-y-5">
      {/* --- [2] HEADER INFO --- */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          {/* Nama Perusahaan dengan prefix komentar (code-style) */}
          <p className="text-zinc-500 text-[10px] font-medium uppercase tracking-[0.2em]">
            // {exp.company}
          </p>
          {/* Nama Jabatan */}
          <h4 className="text-2xl md:text-3xl font-light tracking-tight text-white group-hover:translate-x-2 transition-transform duration-700">
            {exp.title}
          </h4>
        </div>
        
        {/* Periode Waktu */}
        <span className="text-[9px] font-medium text-zinc-500 uppercase tracking-widest border border-zinc-900 px-3 py-1.5 rounded-full">
          {exp.period}
        </span>
      </div>

      {/* --- [3] DESCRIPTION --- */}
      <p className="text-zinc-500 text-sm leading-relaxed font-light max-w-2xl text-justify">
        {exp.desc}
      </p>

      {/* --- [4] TASK TAGS --- */}
      {/* List pencapaian atau teknologi spesifik dalam peran tersebut */}
      <div className="flex flex-wrap gap-2 pt-2">
        {exp.tasks.map((task: string, tIdx: number) => (
          <span 
            key={tIdx} 
            className="text-[8px] font-medium text-zinc-600 border border-zinc-900/50 px-2 py-1 rounded group-hover:border-zinc-800 group-hover:text-zinc-400 transition-colors duration-500"
          >
            {task}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);