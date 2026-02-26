// src/components/sections/Portfolio/ProjectSection.tsx
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portoflio";
import { ProjectCard } from "./project/ProjectCard";

const ProjectSection = () => {
  return (
    <section id="portfolio" className="w-full py-20 md:py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-32">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="size-2 bg-blue-600 rounded-full animate-pulse"></div>
              <span className="text-xs font-black tracking-[0.5em] uppercase text-zinc-500">
                Selected Works
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase">
              Proven <br />{" "}
              <span
                className="text-zinc-900"
                style={{ WebkitTextStroke: "1px #3f3f46" }}
              >
                Solutions.
              </span>
            </h2>
          </div>

          {/* Sub-description (Hanya muncul di desktop) */}
          <div className="max-w-xs border-l border-zinc-800 pl-6 hidden md:block">
            <p className="text-xs text-zinc-500 leading-relaxed uppercase tracking-wider">
              Membangun aplikasi yang tidak hanya indah secara visual, tapi juga memiliki performa yang kencang.
            </p>
          </div>
        </div>

        {/* --- GRID PROJECT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>

        {/* --- BOTTOM CALL TO ACTION --- */}
        <div className="mt-32 border-t border-zinc-900 pt-10 flex justify-center">
          <button className="group flex items-center gap-4 text-xs font-black tracking-[0.5em] uppercase hover:text-blue-600 transition-colors">
            Explore All Projects
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProjectSection;