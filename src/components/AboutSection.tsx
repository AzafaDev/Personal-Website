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
          {/* --- BAGIAN KIRI: HEADLINE & VISUAL DEKORATIF --- */}
          <div className="lg:col-span-5 space-y-12">
            {/* Label Penomoran Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <span className="text-[#98989F] font-medium text-[10px] uppercase tracking-[0.4em]">
                01 // Perspective
              </span>
              <div className="h-px w-12 bg-zinc-800" />
            </motion.div>

            {/* Judul Utama dengan Animasi Warna */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-6xl md:text-7xl font-light leading-[1.1] tracking-tighter"
            >
              Driven by <br />
              <motion.span
                animate={{ color: ["#3f3f46", "#fafafa", "#3f3f46"] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="italic font-extralight text-5xl md:text-6xl"
              >
                Curiosity.
              </motion.span>
            </motion.h2>

            {/* Komponen Visual (Graphic/Image) */}
            <AboutVisual />
          </div>

          {/* --- BAGIAN KANAN: NARASI & SKILL GRID --- */}
          <div className="lg:col-span-7 space-y-16">
            {/* Teks Deskripsi Diri */}
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
                  Self-taught passion meets professional expertise. My journey
                  in web development began with curiosity about how{" "}
                  <span className="text-zinc-200">websites actually work</span>.
                  Growing up with a father who works as an{" "}
                  <span className="text-zinc-200">SEO specialist</span>, I was
                  naturally exposed to conversations about websites, traffic,
                  and digital presence.
                </p>

                <p>
                  Before diving into modern web frameworks, I built several
                  real-world business websites using{" "}
                  <span className="text-zinc-200">WordPress</span>, handling{" "}
                  <span className="text-zinc-200">layout design</span>,{" "}
                  <span className="text-zinc-200">theme customization</span>,{" "}
                  <span className="text-zinc-200">SEO setup</span>, and even{" "}
                  <span className="text-zinc-200">
                    WhatsApp-based commerce integration
                  </span>
                  . This hands-on experience taught me how to turn ideas into
                  functional digital products for clients.
                </p>

                <p>
                  At one point, I discovered a YouTube video showcasing a
                  website built with{" "}
                  <span className="text-zinc-200">Next.js</span> that achieved a{" "}
                  <span className="text-zinc-200">
                    perfect performance score
                  </span>
                  . That moment sparked my deeper interest in modern web
                  technologies, leading me to explore full-stack development
                  through self-learning and intensive bootcamp training.
                </p>

                <p>
                  Today, I work primarily with modern JavaScript technologies
                  such as <span className="text-zinc-200">Next.js</span>,{" "}
                  <span className="text-zinc-200">React</span>,{" "}
                  <span className="text-zinc-200">Node.js</span>, and{" "}
                  <span className="text-zinc-200">TypeScript</span>, along with
                  tools like <span className="text-zinc-200">PostgreSQL</span>,{" "}
                  <span className="text-zinc-200">Prisma</span>, and{" "}
                  <span className="text-zinc-200">Tailwind</span>. I focus on
                  writing{" "}
                  <span className="text-zinc-200">
                    clean, maintainable code
                  </span>{" "}
                  while building <span className="text-zinc-200">scalable</span>{" "}
                  and{" "}
                  <span className="text-zinc-200">
                    high-performance web applications
                  </span>
                  .
                </p>
              </div>
            </motion.div>

            {/* Iterasi Kategori Tech Stack */}
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
                  {/* Judul Kategori Skill */}
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#9797A0]">
                      {cat.title}
                    </span>
                    <div className="h-px flex-1 bg-zinc-900/50" />
                  </div>

                  {/* Grid Kartu Skill */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {cat.skills.map((skill, sIdx) => (
                      <SkillCard
                        key={sIdx}
                        icon={skill.icon}
                        name={skill.name}
                        index={sIdx + idx * 4} // Delay unik tiap card
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* --- ACTION: DOWNLOAD CV --- */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <button
                aria-label="button"
                onClick={() => toast.success("Resume coming soon!")}
                className="group flex items-center gap-8 py-4 border-t border-zinc-900 w-full"
              >
                <span className="text-xs font-medium text-[#98989F] tracking-[0.3em] uppercase">
                  Download Full CV
                </span>
                {/* Icon Circle dengan Animasi Scale */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="ml-auto size-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-zinc-500 transition-colors"
                >
                  <ArrowUpRight size={16} className="text-[#98989F]" />
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
