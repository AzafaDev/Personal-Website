// src/components/sections/Experience/experience/TestimonialCard.tsx
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export const TestimonialCard = ({ testi, index }: { testi: any, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ 
      opacity: 1, 
      y: [20, -5, 0] // Keyframes: muncul dari bawah lalu mulai melayang
    }}
    viewport={{ once: true }}
    transition={{ 
      opacity: { duration: 0.8, delay: index * 0.2 },
      y: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse", // Naik turun dengan halus
        ease: "easeInOut",
        delay: index * 0.3
      }
    }}
    className="relative p-8 bg-zinc-900/20 border border-zinc-900/50 rounded-2xl group transition-all duration-700 md:hover:bg-zinc-900/40 md:hover:border-zinc-700"
  >
    <Quote className="absolute top-6 right-8 size-6 text-zinc-900 group-hover:text-zinc-800 transition-colors" />

    <p className="text-zinc-400 text-sm leading-relaxed mb-10 font-light italic relative z-10 group-hover:text-zinc-300 transition-colors">
      "{testi.text}"
    </p>

    <div className="flex items-center gap-4 pt-6 border-t border-zinc-900/50">
      <div className="size-10 rounded-full bg-zinc-900 overflow-hidden border border-zinc-800 grayscale group-hover:grayscale-0 transition-all duration-700">
        <img src={testi.img} alt={testi.name} className="w-full h-full object-cover" />
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-white">
          {testi.name}
        </p>
        <p className="text-[9px] font-medium text-zinc-600 uppercase tracking-widest mt-0.5">
          {testi.role}
        </p>
      </div>
    </div>
  </motion.div>
);