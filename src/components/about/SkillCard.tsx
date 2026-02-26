interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
}

export const SkillCard = ({ icon, name }: SkillCardProps) => (
  <div
    className="flex items-center gap-3 p-3 bg-zinc-950 border border-zinc-900 rounded-lg transition-all group cursor-default 
                  /* Hover hanya aktif di layar Desktop (md ke atas) */
                  md:hover:border-blue-600/50"
  >
    <div
      className="size-5 flex items-center justify-center text-zinc-400 transition-all
                    /* Warna icon berubah hanya di desktop hover */
                    md:group-hover:text-white md:group-hover:grayscale-0 md:grayscale"
    >
      <div className="size-full [&>svg]:size-full [&>svg]:fill-current">
        {icon}
      </div>
    </div>

    <span
      className="text-xs font-bold text-zinc-400 transition-colors
                     /* Teks berubah putih hanya di desktop hover */
                     md:group-hover:text-white"
    >
      {name}
    </span>
  </div>
);
