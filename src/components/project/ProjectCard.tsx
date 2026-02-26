// src/components/sections/Portfolio/ProjectCard.tsx
import { ArrowUpRight } from "lucide-react";

// Definisikan interface agar data project jelas strukturnya
interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  tech: string[];
}

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col gap-6 cursor-pointer"
    >
      {/* --- WRAPPER GAMBAR --- */}
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900 border border-zinc-800">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-all duration-700 
                     grayscale-0 opacity-100
                     md:grayscale md:opacity-50 md:group-hover:grayscale-0 md:group-hover:opacity-100 md:group-hover:scale-105"
          loading="lazy"
          decoding="async"
          width={600}
          height={375}
        />

        {/* Floating Arrow Badge (Desktop Only) */}
        <div className="absolute top-4 right-4 flex gap-2">
          <div className="hidden md:flex size-10 items-center justify-center rounded-full bg-black/50 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight size={20} className="text-white" />
          </div>
        </div>
      </div>

      {/* --- INFO PROJECT --- */}
      <div className="flex flex-col gap-3">
        {/* Category Tag & Line Decor */}
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-black tracking-[0.3em] uppercase text-blue-400">
            {project.category}
          </span>
          <div className="h-px flex-1 bg-zinc-900"></div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold tracking-tighter uppercase group-hover:text-blue-400 transition-colors text-white">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-zinc-400 leading-relaxed max-w-[90%]">
          {project.description}
        </p>

        {/* Tech Stack List */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-[9px] font-mono px-2 py-1 border border-zinc-800 text-zinc-400 uppercase tracking-widest"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};
