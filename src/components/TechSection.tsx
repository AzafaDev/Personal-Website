// src/components/sections/Skills/TechSection.tsx
import { motion } from "framer-motion";
import { technologies } from "../data/portoflio";
import { TechRow } from "./skills/TechRow";

const TechSection = () => {
  return (
    <section className="w-full py-24 md:py-40 bg-[#050505] text-white overflow-hidden" id="skills">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- [HEADER SECTION] --- */}
        <div className="mb-20 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-10 bg-zinc-800" />
            <span className="text-zinc-500 font-medium text-[10px] tracking-[0.5em] uppercase">
              Technical Arsenal
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-9xl font-light tracking-tighter leading-none uppercase"
          >
            Tech{" "}
            <span
              className="italic font-extralight text-zinc-800"
              style={{ WebkitTextStroke: "1px #27272a" }} // Zinc-800 stroke
            >
              Stack.
            </span>
          </motion.h2>
        </div>

        {/* --- [LIST TEKNOLOGI] --- */}
        <div className="flex flex-col border-t border-zinc-900/50">
          {technologies.map((group, index) => (
            <TechRow key={group.id} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;