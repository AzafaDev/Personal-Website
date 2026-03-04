// src/components/sections/About/AboutSection.tsx
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import toast from "react-hot-toast";
import { categories } from "../data/portoflio";
import { AboutVisual } from "./about/AboutVisual";
import { SkillCard } from "./about/SkillCard";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative w-full py-32 bg-[#050505] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-12">
          {/* --- KIRI: HEADLINE & VISUAL --- */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <span className="text-zinc-500 font-medium text-[10px] uppercase tracking-[0.4em]">
                01 // Perspective
              </span>
              <div className="h-[1px] w-12 bg-zinc-800" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-6xl md:text-7xl font-light leading-[1.1] tracking-tighter"
            >
              Driven by <br />
              <motion.span
                // Animasi warna teks yang mengalir pelan
                animate={{ color: ["#3f3f46", "#fafafa", "#3f3f46"] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="italic font-extralight text-5xl md:text-6xl"
              >
                Curiosity.
              </motion.span>
            </motion.h2>

            <AboutVisual />
          </div>

          {/* --- KANAN: NARRATIVE & SKILLS --- */}
          <div className="lg:col-span-7 space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <h3 className="text-2xl md:text-3xl font-light leading-relaxed text-zinc-300">
                Self-taught passion meets{" "}
                <span className="text-white border-b border-zinc-800">
                  professional expertise.
                </span>
              </h3>

              <div className="space-y-6 text-zinc-400 font-light leading-relaxed text-lg max-w-2xl">
                <p>
                  Perjalanan saya di industri IT dimulai sebagai seorang{" "}
                  <span className="text-zinc-200">Fresh Graduate</span> yang
                  belajar secara <span className="text-zinc-200">otodidak</span>
                  . Didorong oleh rasa penasaran mendalam, saya kemudian
                  memantapkan fundamental dan profesionalisme saya melalui
                  program intensif di{" "}
                  <span className="text-zinc-200 italic">
                    Purwadhika Digital Technology School
                  </span>
                  .
                </p>

                <p>
                  Sebagai seorang{" "}
                  <span className="text-white">Full-stack Web Developer</span>,
                  fokus utama saya adalah menciptakan keseimbangan antara{" "}
                  <span className="italic">clean code</span>, performa yang
                  efisien, dan antarmuka yang intuitif. Saya percaya bahwa
                  setiap baris kode harus memberikan nilai nyata dan pengalaman
                  digital yang luar biasa bagi penggunanya.
                </p>
              </div>
            </motion.div>

            {/* Tech Stack Categories dengan Auto-Reveal */}
            <div className="space-y-12">
              {categories.map((cat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * idx, duration: 0.8 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-zinc-600">
                      {cat.title}
                    </span>
                    <div className="h-[1px] flex-1 bg-zinc-900/50" />
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {cat.skills.map((skill, sIdx) => (
                      // Tambahkan index total agar delay tiap card unik
                      <SkillCard
                        key={sIdx}
                        icon={skill.icon}
                        name={skill.name}
                        index={sIdx + idx * 4}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Resume Button dengan Subtle Bounce */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <button
                onClick={() => toast.success("Resume coming soon!")}
                className="group flex items-center gap-8 py-4 border-t border-zinc-900 w-full"
              >
                <span className="text-xs font-medium text-zinc-500 tracking-[0.3em] uppercase">
                  Download Full CV
                </span>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="ml-auto size-10 rounded-full border border-zinc-800 flex items-center justify-center"
                >
                  <ArrowUpRight size={16} className="text-zinc-500" />
                </motion.div>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
