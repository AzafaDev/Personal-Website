// src/components/sections/Experience/ExperienceSection.tsx
import { ArrowUpRight } from "lucide-react";
import { experiences, testimonials } from "../data/portoflio";
import { ExperienceItem } from "./experience/ExperienceItem";
import { TestimonialCard } from "./experience/TestimonialCard";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="w-full py-24 bg-black text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* --- SECTION HEADER --- */}
        <div className="flex items-center gap-4 mb-20">
          <span className="text-blue-400 font-black text-xs uppercase tracking-[0.3em]">
            02 // Experience & Praise
          </span>
          <div className="h-[1px] flex-1 bg-zinc-800" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          {/* --- LEFT COLUMN: WORK HISTORY --- */}
          <div className="lg:col-span-7 space-y-12">
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.8] mb-16">
              Work <br />{" "}
              <span
                className="text-zinc-900"
                style={{ WebkitTextStroke: "1px #3f3f46" }}
              >
                History.
              </span>
            </h3>

            {/* Timeline Wrapper */}
            <div className="relative border-l border-zinc-900 ml-2 space-y-16">
              {experiences.map((exp, idx) => (
                <ExperienceItem key={idx} exp={exp} />
              ))}
            </div>
          </div>

          {/* --- RIGHT COLUMN: SOCIAL PROOF --- */}
          <div className="lg:col-span-5 space-y-12">
            <h3 className="text-4xl font-bold tracking-tighter uppercase mb-16 text-right lg:text-left">
              Social <span className="text-zinc-400">Proof.</span>
            </h3>

            <div className="space-y-8">
              {testimonials.map((testi, idx) => (
                <TestimonialCard key={idx} testi={testi} />
              ))}
            </div>

            {/* External Link */}
            <div className="pt-8 flex justify-end lg:justify-start">
              <a
                href="#"
                className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 hover:text-white transition-colors group"
              >
                View LinkedIn Recommendations
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
