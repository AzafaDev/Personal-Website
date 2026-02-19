import { motion } from 'framer-motion';

const TechSection = () => {
  const technologies = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 'Advanced', icon: '⚛️' },
        { name: 'Next.js', level: 'Intermediate', icon: '▲' },
        { name: 'Tailwind CSS', level: 'Advanced', icon: '🌊' },
        { name: 'TypeScript', level: 'Intermediate', icon: '🟦' },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 'Advanced', icon: '🟢' },
        { name: 'PostgreSQL', level: 'Intermediate', icon: '🐘' },
        { name: 'MongoDB', level: 'Intermediate', icon: '🍃' },
        { name: 'Express', level: 'Advanced', icon: '🚂' },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 'Advanced', icon: '🐙' },
        { name: 'Docker', level: 'Beginner', icon: '🐋' },
        { name: 'Figma', level: 'Intermediate', icon: '🎨' },
        { name: 'Firebase', level: 'Intermediate', icon: '🔥' },
      ],
    },
  ];

  // Variasi animasi untuk container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Muncul satu per satu
      },
    },
  };

  // Variasi animasi untuk kartu skill
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="w-full py-24 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tech <span className="text-[#4584f7]">Stack</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Kumpulan teknologi yang sering saya gunakan untuk mengubah ide
            menjadi produk digital yang fungsional dan terukur.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {technologies.map((group, idx) => (
            <motion.div 
              key={idx}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-sm font-mono text-[#4584f7] uppercase tracking-[0.3em] font-semibold flex items-center gap-2">
                <span className="h-px w-4 bg-[#4584f7]/50"></span>
                {group.category}
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {group.skills.map((tech, techIdx) => (
                  <motion.div
                    key={techIdx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group relative p-4 rounded-xl border border-white/5 bg-white/2 hover:bg-white/5 transition-all duration-300"
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-linear-to-r from-[#4584f7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                          {tech.icon}
                        </span>
                        <div>
                          <h4 className="font-semibold group-hover:text-[#4584f7] transition-colors">
                            {tech.name}
                          </h4>
                          <span className="text-[10px] text-gray-500 uppercase tracking-widest">
                            {tech.level}
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar Mini */}
                      <div className="h-1.5 w-16 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ 
                            width: tech.level === 'Advanced' ? '100%' : tech.level === 'Intermediate' ? '65%' : '35%' 
                          }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                          viewport={{ once: true }}
                          className="h-full bg-[#4584f7] rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;