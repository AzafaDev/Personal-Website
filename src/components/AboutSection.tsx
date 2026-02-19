import {
  Code,
  Cpu,
  Globe,
  CheckCircle2,
  Zap,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const AboutSection = () => {
  const skills = [
    {
      name: "Frontend",
      desc: "React, Next.js, Tailwind, Framer Motion",
      icon: <Code className="size-5" />,
    },
    {
      name: "Backend",
      desc: "Node.js, Express, PostgreSQL, Prisma",
      icon: <Cpu className="size-5" />,
    },
    {
      name: "DevOps",
      desc: "Docker, AWS, CI/CD, Vercel",
      icon: <Globe className="size-5" />,
    },
  ];

  const values = [
    {
      name: "Timeliness",
      icon: <Zap className="size-4" />,
      text: "On-time delivery",
    },
    {
      name: "Attention to Detail",
      icon: <CheckCircle2 className="size-4" />,
      text: "Pixel perfect",
    },
    {
      name: "Clear Communication",
      icon: <MessageSquare className="size-4" />,
      text: "Transparent",
    },
  ];

  return (
    <section
      id="about"
      className="w-full py-24 bg-[#0a0a0a] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-[#4584f7]"></span>
            <span className="text-[#4584f7] font-mono text-sm tracking-widest uppercase">
              About Me
            </span>
            <span className="h-px w-8 bg-[#4584f7]"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Designing solutions, <br />{" "}
            <span className="text-gray-300 italic font-light text-3xl md:text-4xl">
              not just interfaces.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Image with Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute -inset-4 bg-linear-to-r from-[#4584f7] to-purple-600 rounded-2xl opacity-10 blur-2xl group-hover:opacity-20 transition duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2">
              <img
                src="/workspace.webp"
                alt="Akmal Dzakwan Faiz Workspace"
                className="rounded-xl grayscale hover:grayscale-0 transition duration-700 object-cover w-full h-112.5"
                loading="eager"
                fetchPriority="high"
                width={'100%'}
                height={'450px'}
              />
            </div>

            {/* Experience Card */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-6 -right-6 bg-[#4584f7] p-6 rounded-2xl shadow-xl hidden md:block"
            >
              <p className="text-4xl font-black text-white">3+</p>
              <p className="text-xs font-bold text-white/80 uppercase tracking-tighter leading-none">
                Years of <br /> Experience
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Bio & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <p className="text-xl text-gray-300 leading-relaxed">
                Hi, I'm{" "}
                <span className="text-white font-semibold italic underline decoration-[#4584f7]">
                  Akmal Dzakwan Faiz
                </span>
                . I bridge the gap between{" "}
                <span className="text-white font-semibold">
                  design and technology
                </span>{" "}
                by creating applications that are not only beautiful but also
                highly performant.
              </p>
              <p className="text-gray-400 leading-relaxed text-justify">
                Sejak memulai perjalanan saya sebagai developer, saya fokus
                membangun produk digital yang membantu bisnis berkembang.
                Ketertarikan saya pada{" "}
                <span className="text-blue-400">Web Development</span> bermula
                dari rasa penasaran bagaimana logika bisa diubah menjadi
                interaksi visual yang bermakna. Fokus utama saya adalah
                skalabilitas dan pengalaman pengguna yang mulus.
              </p>
            </div>

            {/* Key Values Section (Baru) */}
            <div className="flex flex-wrap gap-4">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"
                >
                  <span className="text-[#4584f7]">{v.icon}</span>
                  <span className="text-[10px] md:text-xs font-medium uppercase tracking-wider text-gray-300">
                    {v.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-5 rounded-xl border border-white/5 bg-white/5 hover:border-[#4584f7]/50 transition-all group"
                >
                  <div className="text-[#4584f7] mb-3 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <h3 className="font-bold mb-1 text-sm">{skill.name}</h3>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    {skill.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Download Button */}
            <div className="pt-4 flex items-center gap-6">
              <button
                className="flex items-center gap-2 text-[#4584f7] font-semibold hover:gap-4 transition-all group"
                onClick={() => toast.success("Coming soon! 😁")}
                aria-label="download-button"
              >
                Download Resume
                <span className="h-0.5 w-6 bg-[#4584f7] group-hover:w-10 transition-all"></span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
