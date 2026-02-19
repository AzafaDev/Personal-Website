import { motion } from 'framer-motion';
import { Briefcase, Calendar, Star, Quote } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Full-Stack Developer (Freelance)',
      company: 'Upwork / Self-Employed',
      period: '2023 - Present',
      desc: 'Membangun solusi web kustom untuk klien internasional. Fokus pada skalabilitas dan integrasi API pihak ketiga.',
      tasks: ['Developing SaaS MVP', 'API Optimization', 'Database Architecting'],
    },
    {
      title: 'Frontend Developer',
      company: 'Tech Solutions ID',
      period: '2021 - 2023',
      desc: 'Bertanggung jawab atas transformasi UI/UX menjadi kode yang responsif dan performan menggunakan ekosistem React.',
      tasks: ['Component Library Design', 'Performance Audit', 'Unit Testing'],
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO at CloudScale',
      text: 'Akmal adalah developer yang sangat detail. Solusi yang diberikan tidak hanya menyelesaikan masalah, tapi juga memikirkan skalabilitas ke depan.',
      img: 'https://i.pravatar.cc/150?u=sarah',
    },
    {
      name: 'Budi Santoso',
      role: 'Project Manager',
      text: 'Komunikasinya sangat jelas. Project selesai lebih cepat dari deadline dengan kualitas kode yang sangat rapi.',
      img: 'https://i.pravatar.cc/150?u=budi',
    },
  ];

  return (
    <section id="experience" className="w-full py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Side: Experience Timeline */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-black tracking-tighter mb-4">
                Work <span className="text-[#4584f7]">History</span>
              </h2>
              <p className="text-gray-400">Perjalanan profesional saya dalam membangun produk digital.</p>
            </motion.div>

            <div className="space-y-8 relative">
              {/* Garis Tengah Timeline */}
              <div className="absolute left-4.5 top-0 bottom-0 w-px bg-white/10" />

              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, type: 'spring', stiffness: 50 }}
                  className="relative pl-12"
                >
                  {/* Dot Indikator */}
                  <div className="absolute left-0 top-1.5 size-9 bg-[#111] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:border-[#4584f7] transition-colors">
                    <Briefcase className="size-4 text-[#4584f7]" />
                  </div>

                  <div className="bg-white/2 border border-white/5 p-6 rounded-2xl hover:border-[#4584f7]/30 transition-all duration-500">
                    <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-xs font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full">
                        <Calendar className="size-3" />
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-[#4584f7] font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tasks.map((task, tIdx) => (
                        <span key={tIdx} className="text-[10px] bg-white/5 text-gray-300 px-2 py-1 rounded-md border border-white/5 italic">
                          #{task}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Testimonials */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-black tracking-tighter mb-4">
                What They <span className="text-gray-500">Say.</span>
              </h2>
              <p className="text-gray-400">Feedback jujur dari kolaborator dan klien sebelumnya.</p>
            </motion.div>

            <div className="grid gap-6">
              {testimonials.map((testi, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.3 }}
                  className="relative p-8 bg-linear-to-br from-white/5 to-transparent border border-white/10 rounded-4xl overflow-hidden"
                >
                  <Quote className="absolute top-6 right-8 size-12 text-white/3 rotate-12" />
                  
                  <div className="flex items-center gap-4 mb-6">
                    <img src={testi.img} alt={testi.name} className="size-12 rounded-full border border-[#4584f7]/50" />
                    <div>
                      <h4 className="font-bold text-white leading-none mb-1">{testi.name}</h4>
                      <p className="text-xs text-[#4584f7] font-mono">{testi.role}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 italic leading-relaxed relative z-10">
                    "{testi.text}"
                  </p>

                  <div className="flex gap-1 mt-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-3 fill-[#4584f7] text-[#4584f7]" />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;