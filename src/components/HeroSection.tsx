import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ProfileFrame } from "./hero/ProfileFrame";
import { SocialLinks } from "./hero/SocialLinks";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#050505] flex items-center justify-center overflow-hidden px-6 md:px-16 text-white text-center lg:text-left pt-8 lg:pt-0">
      {/* --- BACKGROUND AMBIENCE --- */}
      {/* Efek cahaya redup statis untuk kedalaman visual */}
      <motion.div
        animate={{ opacity: [0.01, 0.03, 0.01] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-5%] w-150 h-150 bg-white blur-[150px] rounded-full pointer-events-none"
      />

      {/* --- MAIN CONTENT GRID --- */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        {/* Kolom Teks & Intro */}
        <div className="space-y-12">
          <div className="space-y-6">
            {/* Label Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="flex items-center justify-center lg:justify-start gap-4 text-white tracking-[0.4em] text-[10px] uppercase font-medium"
            >
              <span className="w-10 h-px bg-zinc-800" />
              Software Engineer
            </motion.div>

            {/* Headline Utama */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-6xl md:text-8xl font-light tracking-tighter leading-[1.05]"
            >
              Akmal <br />
              <motion.span
                animate={{ color: ["#3f3f46", "#fafafa", "#3f3f46"] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="italic font-extralight"
              >
                Dzakwan Faiz.
              </motion.span>
            </motion.h1>

            {/* Sub-headline / Deskripsi */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="text-[#98989F] text-lg md:text-xl max-w-md mx-auto lg:mx-0 font-light leading-relaxed tracking-tight"
            >
              Building <span className="text-zinc-200">minimalist</span> digital
              architecture with precision and{" "}
              <span className="text-zinc-200">performance</span>.
            </motion.p>
          </div>

          {/* --- ACTION BUTTONS & SOCIALS --- */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-12 pt-4">
            {/* Link ke Portfolio dengan animasi pulse lembut */}
            <motion.a
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 4, repeat: Infinity }}
              href="#portfolio"
              className="group flex items-center gap-4 text-[10px] font-medium tracking-[0.3em] uppercase text-white"
            >
              View Projects{" "}
              <ArrowRight
                size={12}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>

            {/* Komponen Social Media Links */}
            <SocialLinks />
          </div>
        </div>

        {/* --- IMAGE / FRAME SECTION --- */}
        <div className="flex justify-center lg:justify-end">
          <ProfileFrame />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
