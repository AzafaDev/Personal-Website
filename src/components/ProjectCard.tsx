import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Folder, Github } from "lucide-react";
import toast from "react-hot-toast";

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const handleProjectClick = (
    e: React.MouseEvent,
    title: string,
    type: string,
  ) => {
    e.stopPropagation(); // Mencegah bubbling kalau klik di icon
    if (type === "github") {
      toast(`Repositori ${title} bersifat privat 🔒`, { icon: "📂" });
    } else if (type === "demo") {
      toast.error(`Demo untuk ${title} sedang dalam pemeliharaan.`);
    } else {
      toast.success(`${title} proyek akan segera hadir!`, {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  const transitionSpring: any = {
    type: "spring",
    stiffness: 100,
    damping: 20,
    mass: 1,
  };

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, ...transitionSpring }}
      whileHover={{ y: -12 }}
      onClick={(e) => handleProjectClick(e, "detail", project.title)}
      className="group cursor-pointer relative flex flex-col h-full bg-[#111] rounded-4xl border border-white/5 overflow-hidden transition-colors duration-500 hover:border-[#4584f7]/20 shadow-2xl"
    >
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden">
        <motion.div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/10 transition-colors duration-500" />
        <motion.img
          src={project.image}
          alt={project.title}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />

        <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
          <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <ArrowUpRight className="text-white size-5" />
          </div>
        </div>
      </div>

      <div className="p-8 flex flex-col grow">
        <div className="flex justify-between items-start mb-6">
          <Folder className="text-[#4584f7] size-7" />
          <div className="flex gap-4">
            <button
              onClick={(e) => handleProjectClick(e, "github", project.title)}
              className="p-1 hover:text-[#4584f7] transition-colors"
              aria-label="project-button-by-github"
            >
              <Github className="size-5 text-gray-300 hover:text-white" />
            </button>
            <button
              onClick={(e) => handleProjectClick(e, "demo", project.title)}
              className="p-1 hover:text-[#4584f7] transition-colors"
              aria-label="project-button-by-demo"
            >
              <ExternalLink className="size-5 text-gray-300 hover:text-white" />
            </button>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-[#4584f7] transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-gray-400 text-[15px] leading-relaxed mb-8 grow font-light">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
          {project.tech.map((t: any, i: any) => (
            <span
              key={i}
              className="text-[10px] font-mono px-3 py-1 bg-white/5 rounded-full border border-white/10 text-gray-400 group-hover:border-[#4584f7]/40 group-hover:text-[#4584f7] transition-all duration-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
