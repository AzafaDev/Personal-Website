import { motion } from "framer-motion";

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  index: number; // Digunakan untuk kalkulasi stagger/delay animasi
}

export const SkillCard = ({ icon, name, index }: SkillCardProps) => (
  <motion.div 
    /* --- ANIMASI FLOATING (IDLE) --- */
    // Membuat kartu seolah melayang pelan secara otomatis
    animate={{ 
      y: [0, -4, 0],
    }}
    transition={{ 
      duration: 4, 
      repeat: Infinity, 
      // Delay dinamis agar gerakan antar kartu bergantian (wave effect)
      delay: index * 0.2, 
      ease: "easeInOut" 
    }}
    className="flex items-center gap-4 p-4 bg-[#080808] border border-zinc-900/50 rounded-xl group hover:border-zinc-700 transition-colors"
  >
    {/* --- ICON CONTAINER --- */}
    <motion.div 
      // Efek bernapas (breathing) pada icon agar UI terasa hidup
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
      className="size-5 flex items-center justify-center text-zinc-400"
    >
      <div className="size-full [&>svg]:size-full [&>svg]:fill-current">
        {icon}
      </div>
    </motion.div>

    {/* --- SKILL NAME --- */}
    <span className="text-[11px] font-medium tracking-tight text-zinc-400 group-hover:text-white transition-colors">
      {name}
    </span>
  </motion.div>
);