// src/components/sections/Experience/ExperienceSection.tsx
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { experiences, testimonials } from "../data/portoflio";
import { ExperienceItem } from "./experience/ExperienceItem";
import { TestimonialCard } from "./experience/TestimonialCard";

const ExperienceSection = () => {
  return (
    <section id="experience" className="w-full py-24 md:py-40 bg-[#050505] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- SECTION HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-24"
        >
          <span className="text-zinc-500 font-medium text-[10px] uppercase tracking-[0.5em]">
            02 // Journey & Trust
          </span>
          <div className="h-[1px] flex-1 bg-zinc-900/50" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          
          {/* --- LEFT: WORK HISTORY (7 Kolom) --- */}
          <div className="lg:col-span-7 space-y-20">
            <motion.h3 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-light tracking-tighter uppercase leading-none"
            >
              Work <br />
              <span className="italic font-extralight text-zinc-800" style={{ WebkitTextStroke: "1px #27272a" }}>
                History.
              </span>
            </motion.h3>

            <div className="relative border-l border-zinc-900/50 ml-2 space-y-20">
              {experiences.map((exp, idx) => (
                <ExperienceItem key={idx} exp={exp} index={idx} />
              ))}
            </div>
          </div>

          {/* --- RIGHT: SOCIAL PROOF (Mulai dari Kolom 9, Lebar 4 Kolom) --- */}
          <div className="lg:col-start-9 lg:col-span-4 space-y-16">
             <motion.h3 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-light tracking-tight uppercase border-b border-zinc-900 pb-6 text-right lg:text-left"
            >
              Social <span className="italic text-zinc-500">Proof.</span>
            </motion.h3>

            <div className="space-y-10">
              {testimonials.map((testi, idx) => (
                <TestimonialCard key={idx} testi={testi} index={idx} />
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <a href="#" className="group flex items-center justify-between py-5 border-t border-zinc-900">
                <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-zinc-500 group-hover:text-white transition-colors">
                  LinkedIn Recommendations
                </span>
                <ArrowUpRight size={14} className="text-zinc-700 group-hover:text-white transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;