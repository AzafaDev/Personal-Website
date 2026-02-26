// src/components/sections/About/AboutSection.tsx
import { ArrowUpRight } from "lucide-react";
import toast from "react-hot-toast";
import { categories } from "../data/portoflio";
import { AboutVisual } from "./about/AboutVisual";
import { SkillCard } from "./about/SkillCard";

const AboutSection = () => {
  return (
    <section id="about" className="relative w-full py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- GRID UTAMA (Mobile: 1 kolom, Desktop: 12 kolom) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* SISI KIRI: Headline & Visual Branding */}
          <div className="lg:col-span-5 space-y-8">
            {/* Sub-header dengan aksen garis industrial */}
            <div className="flex items-center gap-4">
               <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em]">01 // Who is Azafa?</span>
               <div className="h-[1px] flex-1 bg-zinc-800" />
            </div>
            
            {/* Headline Utama */}
            <h2 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase">
              Driven by <br />
              <span className="text-blue-600 italic">Curiosity.</span>
            </h2>

            {/* Komponen Visual (Frame Foto & Badge Alumni) */}
            <AboutVisual />
          </div>

          {/* SISI KANAN: Narrative Text & Skill Mapping */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Narasi Profile */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-4xl font-bold leading-tight">
                Self-taught passion meets <span className="text-blue-600">professional expertise.</span>
              </h3>
              
              <div className="space-y-4 text-zinc-400 leading-relaxed text-justify">
                <p>
                  Perjalanan saya dimulai secara <strong>otodidak</strong>, didorong oleh rasa penasaran bagaimana dunia digital bekerja. Untuk memperdalam fundamental, saya mengasah kemampuan secara profesional di <strong>Purwadhika Digital Technology School</strong>.
                </p>
                <p>
                  Saya percaya produk digital yang sukses adalah kombinasi dari <strong>performa, tampilan, dan kode yang bersih</strong>. Tidak ada kompromi pada setiap pixel dan logika yang saya bangun.
                </p>
              </div>
            </div>

            {/* Tech Stack Categories (Mapping dari file data) */}
            <div className="space-y-10">
              {categories.map((cat, idx) => (
                <div key={idx} className="space-y-4">
                  {/* Header Kategori (e.g., Frontend, Backend) */}
                  <div className="flex items-center gap-3">
                    {cat.icon}
                    <span className="text-xs font-black tracking-[0.2em] uppercase text-zinc-400">{cat.title}</span>
                    <div className="h-[1px] flex-1 bg-zinc-900" />
                  </div>

                  {/* Grid Skill Cards */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {cat.skills.map((skill, sIdx) => (
                      <SkillCard key={sIdx} icon={skill.icon} name={skill.name} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action: Download Resume */}
            <div className="pt-4">
               <button 
                 onClick={() => toast.success("Resume coming soon!")}
                 className="group flex items-center gap-6"
               >
                 <span className="text-sm font-black text-white tracking-widest uppercase border-b-2 border-blue-600 pb-1 group-hover:pr-10 transition-all">
                    Download Resume
                 </span>
                 <div className="size-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                    <ArrowUpRight size={20} />
                 </div>
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;