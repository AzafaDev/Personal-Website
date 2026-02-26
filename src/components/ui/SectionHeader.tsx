interface SectionHeaderProps {
  number: string;
  title: string;
}

export const SectionHeader = ({ number, title }: SectionHeaderProps) => (
  <div className="flex items-center gap-4 mb-20">
    <span className="text-blue-400 font-black text-xs uppercase tracking-[0.3em]">
      {number} // {title}
    </span>
    <div className="h-[1px] flex-1 bg-zinc-900"></div>
  </div>
);
