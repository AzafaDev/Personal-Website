import { ArrowRight } from "lucide-react";
import { techIcons } from "../../data/portoflio";

interface Skill {
  name: string;
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
      {/* INDEX NUMBER */}
      <div className="lg:col-span-1 hidden lg:flex items-center">
        <span className="font-mono text-zinc-500 text-lg group-hover:text-blue-400 transition-colors">
          {group.id}
        </span>
      </div>

      {/* JUDUL KATEGORI & DESKRIPSI */}
      <div className="lg:col-span-5">
        <h3 className="text-2xl md:text-4xl font-bold tracking-tight mb-2 md:group-hover:translate-x-2 transition-transform duration-500 uppercase">
          {group.category}
        </h3>
        <p className="text-zinc-400 text-xs md:text-sm max-w-sm">
          {group.description}
        </p>
      </div>

      {/* GRID ICON TEKNOLOGI */}
      <div className="lg:col-span-5">
        <div className="flex flex-wrap gap-5 md:gap-8 lg:justify-end">
          {group.skills.map((skill, idx) => {
            const iconKey = skill.name
              .toLowerCase()
              .replace(/[.\s-]/g, "") as keyof typeof techIcons;
            const IconSVG = techIcons[iconKey];

            return (
              <div key={idx} className="flex flex-col items-center gap-2">
                {/* CONTAINER SVG */}
                <div
                  className="size-7 md:size-8 transition-all duration-500 
                               fill-zinc-400 opacity-80 
                               md:opacity-30 md:grayscale md:group-hover:opacity-100 md:group-hover:grayscale-0 
                               [&>svg]:w-full [&>svg]:h-full"
                >
                  {IconSVG || <span className="text-[8px] italic">?</span>}
                </div>

                <span className="text-[9px] md:text-[10px] font-mono text-zinc-500 md:text-zinc-400 md:group-hover:text-zinc-400 transition-colors uppercase tracking-widest">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* DEKORASI PANAH */}
      <div className="hidden lg:col-span-1 lg:flex justify-end pr-4">
        <ArrowRight
          className="text-zinc-400 md:text-zinc-400 group-hover:text-blue-400 group-hover:translate-x-2 transition-all duration-500"
          size={24}
        />
      </div>
    </div>

    {/* ANIMASI GARIS BAWAH */}
    <div className="hidden md:block absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-700 group-hover:w-full" />
  </div>
);
