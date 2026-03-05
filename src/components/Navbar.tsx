import { Terminal, Menu, X, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // Efek pendeteksi scroll untuk ganti style navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu navigasi
  const list = [
    { name: "Home", link: "/" },
    { name: "About", link: "/#about" },
    { name: "Portfolio", link: "/#portfolio" },
    { name: "Experience", link: "/#experience" },
    { name: "Contact", link: "/#contact" },
  ];

  // Logika navigasi (Scroll ke ID atau pindah halaman)
  const handleNavClick = (link: string) => {
    setIsOpen(false);
    if (link.includes("#")) {
      const id = link.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(link);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-100 transition-all duration-500 ${
        scrolled ? "py-4 md:py-6" : "py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Container Utama Navbar */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`flex justify-between items-center px-6 py-3 rounded-2xl border transition-all duration-700 ${
            scrolled
              ? "bg-black/60 backdrop-blur-xl border-zinc-800 shadow-2xl"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo & Brand */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleNavClick("/")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="p-2 bg-white rounded-lg group-hover:bg-zinc-200 transition-colors">
              <Terminal className="text-black size-4" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white uppercase">
              AZAFA<span className="text-[#98989F]">.</span>DEV
            </span>
          </motion.div>

          {/* Navigasi Desktop */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex gap-8">
              {list.map((item, index) => (
                <button
                  aria-label="button"
                  key={index}
                  onClick={() => handleNavClick(item.link)}
                  className="text-sm font-medium text-zinc-400 hover:text-white transition-all relative group"
                >
                  {item.name}
                  {/* Efek garis bawah saat hover */}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* Tombol CTA (Hire Me) */}
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.link/q3wda6"
              target="_blank"
              className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-xl font-bold text-xs group transition-all"
            >
              HIRE ME
              <ArrowUpRight
                size={14}
                className="group-hover:rotate-45 transition-transform duration-300"
              />
            </motion.a>
          </div>

          {/* Toggle Menu Mobile */}
          <button
            aria-label="button"
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>
      </div>

      {/* Dropdown Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-6 right-6 mt-4 md:hidden"
          >
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col gap-5 shadow-2xl">
              {list.map((item, index) => (
                <button
                  aria-label="button"
                  key={index}
                  onClick={() => handleNavClick(item.link)}
                  className="text-left text-lg font-bold text-zinc-400 border-b border-zinc-800/50 pb-3 hover:text-white transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <a
                href="https://wa.link/q3wda6"
                target="_blank"
                className="w-full bg-white text-black py-4 rounded-xl font-bold text-center text-sm"
              >
                HIRE ME
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
