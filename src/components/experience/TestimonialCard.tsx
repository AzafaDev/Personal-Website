// src/components/sections/Experience/TestimonialCard.tsx
import { Quote, Star } from "lucide-react";

interface TestimonialProps {
  testi: {
    text: string;
    img: string;
    name: string;
    role: string;
  };
}

export const TestimonialCard = ({ testi }: TestimonialProps) => (
  <div className="relative p-8 bg-zinc-950 border border-zinc-900 group hover:border-blue-600/30 transition-all duration-500">
    <Quote className="absolute top-4 right-4 size-8 text-zinc-900 group-hover:text-blue-900/30 transition-colors" />

    <p className="text-zinc-400 text-sm leading-relaxed mb-8 italic relative z-10">
      "{testi.text}"
    </p>

    <div className="flex items-center gap-4 border-t border-zinc-900 pt-6">
      <div className="relative size-10 bg-zinc-900 overflow-hidden border border-zinc-800">
        <img
          src={testi.img}
          alt={testi.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
        />
      </div>
      <div>
        <h5 className="text-sm font-bold uppercase tracking-tight text-white">
          {testi.name}
        </h5>
        <p className="text-[10px] font-mono text-blue-600 uppercase tracking-widest">
          {testi.role}
        </p>
      </div>
      <div className="ml-auto flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="size-2 fill-blue-600 text-blue-600" />
        ))}
      </div>
    </div>
  </div>
);