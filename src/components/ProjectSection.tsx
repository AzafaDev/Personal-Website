// src/components/sections/Portfolio/ProjectSection.tsx
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portoflio";
import { ProjectCard } from "./project/ProjectCard";

const ProjectSection = () => {
  return (
    <section
      id="portfolio"
      className="w-full py-24 md:py-40 bg-[#050505] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* --- [1] HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24 md:mb-32">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="h-px w-10 bg-zinc-800" />
              <span className="text-[#98989F] font-medium text-[10px] tracking-[0.5em] uppercase">
                Selected Works
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-9xl font-light tracking-tighter leading-none uppercase"
            >
              Proven <br />
              <span
                className="italic font-extralight text-zinc-800"
                style={{ WebkitTextStroke: "1px #27272a" }}
              >
                Solutions.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="max-w-xs border-l border-zinc-900 pl-8 hidden md:block"
          >
            <p className="text-[11px] text-[#98989F] leading-relaxed uppercase tracking-[0.2em] font-light">
              Membangun solusi digital yang mengutamakan{" "}
              <span className="text-white italic">clean architecture</span> dan
              performa tanpa kompromi.
            </p>
          </motion.div>
        </div>

        {/* --- [2] PROJECT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-24">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} index={index} />
          ))}
        </div>

        {/* --- [3] BOTTOM CTA --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 border-t border-zinc-900/50 pt-12 flex justify-center"
        >
          <button className="group flex items-center gap-6 text-[10px] font-medium tracking-[0.4em] uppercase text-[#98989F] hover:text-white transition-all">
            Explore All Projects
            <div className="size-10 rounded-full border border-zinc-900 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
              <ArrowUpRight
                size={14}
                className="group-hover:text-black transition-colors"
              />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
