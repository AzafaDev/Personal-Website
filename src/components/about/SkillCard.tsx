// src/components/sections/About/about/SkillCard.tsx
interface SkillCardProps {
  icon: string;
  name: string;
}

export const SkillCard = ({ icon, name }: SkillCardProps) => (
  <div className="flex items-center gap-3 p-3 bg-zinc-950 border border-zinc-900 hover:border-blue-600/50 transition-all rounded-lg group">
    {/* Icon dengan auto-grayscale filter */}
    <img 
      src={icon} 
      alt={name} 
      className="size-5 object-contain grayscale group-hover:grayscale-0 transition-all" 
    />
    <span className="text-xs font-bold text-zinc-400 group-hover:text-white transition-colors">
      {name}
    </span>
  </div>
);