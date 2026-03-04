// src/components/sections/About/about/SkillCard.tsx
import { motion } from "framer-motion";

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  index: number; // Tambahkan index untuk variasi delay animasi
}

export const SkillCard = ({ icon, name, index }: SkillCardProps) => (
  <motion.div 
    // Animasi Melayang Pelan Otomatis
    animate={{ 
      y: [0, -4, 0],
    }}
    transition={{ 
      duration: 4, 
      repeat: Infinity, 
      delay: index * 0.2, // Tiap card bergerak di waktu berbeda
      ease: "easeInOut" 
    }}
    className="flex items-center gap-4 p-4 bg-[#080808] border border-zinc-900/50 rounded-xl group"
  >
    <motion.div 
      // Icon berkedip sangat tipis (breathing effect)
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
      className="size-5 flex items-center justify-center text-zinc-400 grayscale-0"
    >
      <div className="size-full [&>svg]:size-full [&>svg]:fill-current">
        {icon}
      </div>
    </motion.div>

    <span className="text-[11px] font-medium tracking-tight text-zinc-400">
      {name}
    </span>
  </motion.div>
);