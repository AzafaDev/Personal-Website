// src/components/sections/Skills/TechSection.tsx
import { technologies } from "../data/portoflio";
import { TechRow } from "./skills/TechRow";

const TechSection = () => {
  return (
    <section className="w-full py-16 md:py-32 bg-black text-white" id="skills">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- [HEADER SECTION] --- */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-blue-600" />
            <span className="text-blue-400 font-mono text-xs tracking-[0.5em] uppercase">
              My Arsenal
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none italic uppercase">
            Tech{" "}
            <span
              className="text-zinc-900"
              style={{ WebkitTextStroke: "1px rgb(113, 113, 122)" }}
            >
              Stack.
            </span>
          </h2>
        </div>

        {/* --- [LIST TEKNOLOGI] --- */}
        <div className="flex flex-col border-t border-zinc-900">
          {technologies.map((group) => (
            <TechRow key={group.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
