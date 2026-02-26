// src/components/sections/About/about/AboutVisual.tsx
import { GraduationCap } from "lucide-react";

export const AboutVisual = () => (
  <div className="hidden lg:block relative group max-w-sm">
    {/* Dekorasi Bingkai Biru (Offset Border) */}
    <div className="absolute inset-0 border-2 border-blue-600 translate-x-4 translate-y-4" />

    {/* Kontainer Gambar Utama */}
    <div className="relative aspect-[4/5] bg-zinc-900 overflow-hidden border border-zinc-800">
      <img
        src="/workspace.webp"
        alt="Azafa Workspace"
        className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 transition-all duration-700"
        fetchPriority="high"
        width={400}
        height={400}
      />
    </div>

    {/* Floating Badge (Status Alumni) */}
    <div className="absolute -bottom-6 -right-6 bg-zinc-900 border border-white/10 p-4 shadow-2xl">
      <div className="flex items-center gap-3">
        <GraduationCap className="text-blue-600" size={24} />
        <div className="flex flex-col">
          <span className="text-[10px] font-black uppercase text-zinc-500">
            Purwadhika
          </span>
          <span className="text-[10px] font-black uppercase text-white tracking-widest leading-none mt-1">
            Alumni
          </span>
        </div>
      </div>
    </div>
  </div>
);
