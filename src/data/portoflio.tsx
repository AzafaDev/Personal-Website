import { Layout, Server, Wrench } from "lucide-react";

export const categories = [
  {
    title: "Frontend",
    icon: <Layout size={18} className="text-blue-500" />,
    skills: [
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
      {
        name: "Tailwind",
        icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.simpleicons.org/typescript/3178C6",
      },
    ],
  },
  {
    title: "Backend",
    icon: <Server size={18} className="text-purple-500" />,
    skills: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      {
        name: "PostgreSQL",
        icon: "https://cdn.simpleicons.org/postgresql/4169E1",
      },
      { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/white" },
      { name: "Express", icon: "https://cdn.simpleicons.org/express/white" },
    ],
  },
  {
    title: "Tools & Deploy",
    icon: <Wrench size={18} className="text-emerald-500" />,
    skills: [
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/white" },
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white" },
      { name: "NPM", icon: "https://cdn.simpleicons.org/npm/CB3837" },
    ],
  },
];

export const contactInfo = [
  {
    label: "Email",
    value: "akmal.dz.f@gmail.com",
    link: "mailto:akmal.dz.f@gmail.com",
  },
  {
    label: "WhatsApp",
    value: "+62 882-2565-9672",
    link: "https://wa.me/6288225659672",
  },
  { label: "Location", value: "Tangerang, ID", link: "#" },
];

export const socials = [
  { name: "Github", link: "https://github.com/AzafaDev" },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/akmal-dzakwan-faiz",
  },
  { name: "Instagram", link: "https://www.instagram.com/akmaldz.dev" },
];

export const experiences = [
  {
    title: "Full-Stack Developer (Freelance)",
    company: "Upwork / Self-Employed",
    period: "2023 - Present",
    desc: "Membangun solusi web kustom untuk klien internasional. Fokus pada skalabilitas dan integrasi API pihak ketiga.",
    tasks: ["SaaS MVP", "API Optimization", "Database Architecting"],
  },
  {
    title: "Frontend Developer",
    company: "Tech Solutions ID",
    period: "2021 - 2023",
    desc: "Transformasi UI/UX menjadi kode yang responsif dan performan menggunakan ekosistem React.",
    tasks: ["Component Library", "Performance Audit", "Unit Testing"],
  },
];

export const projects = [
  {
    title: "Modern Company Profile",
    category: "Fullstack Development",
    description:
      "Transformasi digital profil perusahaan dengan integrasi Payload CMS untuk manajemen konten yang dinamis dan performa Next.js yang optimal.",
    tech: ["Next.js", "PostgreSQL", "Payload CMS", "Tailwind"],
    image: "/company-profile.webp",
    link: "https://company-profile-challange.vercel.app/",
  },
  {
    title: "AI Chat Application",
    category: "AI Integration",
    description:
      "Asisten cerdas dengan fitur streaming respons menggunakan OpenAI API untuk interaksi pengguna yang lebih natural dan real-time.",
    tech: ["Next.js", "Tailwind", "Firebase"],
    image: "/AI.webp",
    link: "#",
  },
  {
    title: "Task Management Tool",
    category: "SaaS Product",
    description:
      "Solusi kolaborasi tim dengan fitur drag-and-drop Kanban yang dioptimalkan untuk produktivitas developer.",
    tech: ["TypeScript", "Zustand", "Framer"],
    image: "/Management.webp",
    link: "#",
  },
];

export const technologies = [
  {
    id: "01",
    category: "Frontend Development",
    description:
      "Crafting fast, responsive, and pixel-perfect user interfaces.",
    skills: [
      { name: "React", img: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Next.js", img: "https://cdn.simpleicons.org/nextdotjs/white" },
      {
        name: "Tailwind",
        img: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      },
      {
        name: "TypeScript",
        img: "https://cdn.simpleicons.org/typescript/3178C6",
      },
    ],
  },
  {
    id: "02",
    category: "Backend Systems",
    description: "Building robust server-side logic and scalable databases.",
    skills: [
      {
        name: "Node.js",
        img: "https://cdn.simpleicons.org/nodedotjs/339933",
      },
      {
        name: "PostgreSQL",
        img: "https://cdn.simpleicons.org/postgresql/4169E1",
      },
      { name: "Prisma", img: "https://cdn.simpleicons.org/prisma/white" },
      { name: "Express", img: "https://cdn.simpleicons.org/express/white" },
    ],
  },
  {
    id: "03",
    category: "Deployment & Tools",
    description: "Managing environments and ensuring seamless delivery.",
    skills: [
      { name: "Vercel", img: "https://cdn.simpleicons.org/vercel/white" },
      { name: "Git", img: "https://cdn.simpleicons.org/git/F05032" },
      { name: "GitHub", img: "https://cdn.simpleicons.org/github/white" },
      { name: "NPM", img: "https://cdn.simpleicons.org/npm/CB3837" },
    ],
  },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at CloudScale",
    text: "Akmal adalah developer yang sangat detail. Solusi yang diberikan tidak hanya menyelesaikan masalah, tapi juga memikirkan skalabilitas ke depan.",
    img: "/sarah.webp",
  },
  {
    name: "Budi Santoso",
    role: "Project Manager",
    text: "Komunikasinya sangat jelas. Project selesai lebih cepat dari deadline dengan kualitas kode yang sangat rapi.",
    img: "/budi.webp",
  },
];
