import { ArrowRight } from "lucide-react";

interface Skill {
  name: string;
  img: string;
}

interface TechGroup {
  id: string;
  category: string;
  description: string;
  skills: Skill[];
}

export const TechRow = ({ group }: { group: TechGroup }) => (
  <div className="group relative border-b border-zinc-900 py-10 md:py-12 transition-all duration-500 hover:bg-zinc-950/50 active:bg-zinc-900 md:active:bg-transparent">
    <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-0">
      
      {/* INDEX NUMBER (DESKTOP ONLY) */}
      <div className="lg:col-span-1 hidden lg:flex items-center">
        <span className="font-mono text-zinc-700 text-lg group-hover:text-blue-600 transition-colors">
          {group.id}
        </span>
      </div>

      {/* JUDUL KATEGORI & DESKRIPSI */}
      <div className="lg:col-span-5">
        <h3 className="text-2xl md:text-4xl font-bold tracking-tight mb-2 md:group-hover:translate-x-2 transition-transform duration-500 uppercase">
          {group.category}
        </h3>
        <p className="text-zinc-500 text-xs md:text-sm max-w-sm">
          {group.description}
        </p>
      </div>

      {/* GRID ICON TEKNOLOGI */}
      <div className="lg:col-span-5">
        <div className="flex flex-wrap gap-5 md:gap-8 lg:justify-end">
          {group.skills.map((skill, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2">
              <img
                src={skill.img}
                alt={skill.name}
                className="size-7 md:size-8 object-contain transition-all duration-500 
                           opacity-80 grayscale-0 
                           md:opacity-30 md:grayscale md:group-hover:opacity-100 md:group-hover:grayscale-0"
              />
              <span className="text-[9px] md:text-[10px] font-mono text-zinc-600 md:text-zinc-800 md:group-hover:text-zinc-500 transition-colors uppercase tracking-widest">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* DEKORASI PANAH (DESKTOP ONLY) */}
      <div className="hidden lg:col-span-1 lg:flex justify-end pr-4">
        <ArrowRight
          className="text-zinc-800 group-hover:text-blue-600 group-hover:translate-x-2 transition-all duration-500"
          size={24}
        />
      </div>
    </div>

    {/* ANIMASI GARIS BAWAH (HOVER EFFECT) */}
    <div className="hidden md:block absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-700 group-hover:w-full" />
  </div>
);