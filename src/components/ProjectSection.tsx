import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description:
        "Membangun sistem manajemen inventaris real-time untuk XYZ Retail guna meningkatkan efisiensi operasional hingga 35%.",
      tech: ["React", "Node.js", "PostgreSQL", "AWS"],
      image: "/Dashboard.webp",
    },
    {
      title: "AI Chat Application",
      description:
        "Mengintegrasikan OpenAI API untuk menciptakan asisten cerdas dengan fitur streaming respons dan manajemen konteks percakapan.",
      tech: ["Next.js", "Tailwind", "OpenAI", "Firebase"],
      image: "/AI.webp",
    },
    {
      title: "Task Management Tool",
      description:
        "Solusi kolaborasi tim dengan fitur drag-and-drop Kanban yang mengoptimalkan alur kerja pengembang secara signifikan.",
      tech: ["TypeScript", "Zustand", "Framer Motion"],
      image: "/Management.webp",
    },
  ];

  return (
    <section id="portfolio" className="w-full py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h4 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
              Featured{" "}
              <span className="text-gray-300 italic font-light">Work</span>
            </h4>
            <div className="h-1 w-20 bg-[#4584f7] rounded-full" />
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={index}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
