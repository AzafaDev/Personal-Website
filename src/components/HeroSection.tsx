import { motion } from 'framer-motion'; 
import { Github, Linkedin, ArrowRight, Code2, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  const itemVariants : any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden text-white px-6 py-20">
      <motion.div 
        animate={{ scale: [1, 1.1, 1] }} 
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-[#4584f7]/10 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1] }} 
        transition={{ duration: 12, repeat: Infinity, delay: 1 }}
        className="absolute bottom-[-10%] right-[-10%] w-125 h-125 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        
        <motion.div 
          className="space-y-8 text-center lg:text-left order-2 lg:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/3 backdrop-blur-md">
            <Sparkles className="size-4 text-[#4584f7]" />
            <span className="text-xs font-semibold text-blue-400 tracking-wider uppercase">
              Available for Work
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-[#4584f7] font-mono text-lg tracking-widest uppercase">
              Full-Stack Web Developer
            </h2>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter">
              I'm <span className="text-white">Akmal Dzakwan Faiz</span>
              <span className="text-[#4584f7]">.</span>
            </h1>
          </motion.div>

          <motion.p variants={itemVariants} className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
            Building scalable and <span className="text-white font-medium">high-performance web solutions</span> for your business needs. I craft immersive web experiences where art meets logic.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
            <a
              href="#portfolio"
              className="group relative flex items-center gap-3 bg-[#4584f7] px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:bg-[#3b72d1] hover:shadow-[0_20px_40px_rgba(69,132,247,0.3)] hover:-translate-y-1"
            >
              View Portfolio
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex items-center gap-5">
              <a href="https://github.com/AzafaDev" target="_blank" className="text-gray-400 hover:text-white transition-transform hover:scale-110"><Github className="size-6" /></a>
              <a href="https://www.linkedin.com/in/akmal-dzakwan-faiz-0bb98839b?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" className="text-gray-400 hover:text-white transition-transform hover:scale-110"><Linkedin className="size-6" /></a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative order-1 lg:order-2 flex justify-center items-center"
        >
          <div className="relative w-64 h-64 md:w-112.5 md:h-112.5 group">
            <div className="absolute inset-0 rounded-[40px] bg-linear-to-tr from-[#4584f7] via-purple-500 to-transparent opacity-20 group-hover:opacity-40 transition-all duration-700 animate-pulse" />

            <motion.div 
              whileHover={{ rotate: 2, scale: 1.02 }}
              className="absolute inset-4 rounded-[30px] overflow-hidden border border-white/10 bg-[#111] backdrop-blur-2xl"
            >
              <img
                src="/profile.webp"
                alt="Akmal Dzakwan Faiz"
                className="w-full h-full object-cover grayscale hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-700"
              />
            </motion.div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 p-4 bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 rounded-2xl hidden md:block"
            >
              <Code2 className="text-[#4584f7] size-8" />
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -right-4 p-5 bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 rounded-3xl hidden md:block"
            >
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">3+</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">Years Exp</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;