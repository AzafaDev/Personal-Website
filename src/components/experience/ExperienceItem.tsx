// src/components/sections/Experience/ExperienceItem.tsx
interface ExperienceProps {
  exp: {
    title: string;
    period: string;
    company: string;
    desc: string;
    tasks: string[];
  };
}

export const ExperienceItem = ({ exp }: ExperienceProps) => (
  <div className="relative pl-8 group">
    {/* Dot Indicator di Garis Timeline */}
    <div className="absolute -left-[5px] top-2 size-2 bg-zinc-800 border border-black group-hover:bg-blue-600 transition-colors" />

    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
        <p className="text-2xl font-bold uppercase tracking-tight group-hover:text-blue-400 transition-colors italic">
          {exp.title}
        </p>
        <span className="text-[10px] font-mono text-white uppercase tracking-widest bg-zinc-950 px-2 py-1 border border-zinc-900">
          {exp.period}
        </span>
      </div>

      <p className="text-blue-400 text-xs font-black uppercase tracking-widest">
        // {exp.company}
      </p>

      <p className="text-white text-sm leading-relaxed text-justify max-w-2xl">
        {exp.desc}
      </p>

      {/* Task List / Tags */}
      <div className="flex flex-wrap gap-3 pt-2">
        {exp.tasks.map((task, tIdx) => (
          <span
            key={tIdx}
            className="text-[9px] font-mono text-white uppercase"
          >
            [{task}]
          </span>
        ))}
      </div>
    </div>
  </div>
);
