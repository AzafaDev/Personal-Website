import { motion } from "framer-motion";
import { Terminal, ArrowUp, Heart } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                <Terminal className="text-[#4584f7] size-6" />
              </div>
              <span className="text-2xl font-bold tracking-tighter">Azafa</span>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Membangun solusi digital yang fokus pada fungsionalitas dan
              estetika. Mari berkolaborasi untuk menciptakan sesuatu yang luar
              biasa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-[0.2em] text-[#4584f7] mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="h-px w-0 bg-[#4584f7] mr-0 group-hover:w-4 group-hover:mr-2 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-[0.2em] text-[#4584f7] mb-6">
              Office
            </h4>
            <address className="not-italic text-gray-400 space-y-4">
              <p>Tangerang, Banten</p>
              <p>Indonesia</p>
              <p className="text-white font-medium">akmal.dz.f@gmail.com</p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            © {currentYear} Azafa. Made with{" "}
            <Heart size={14} className="text-red-500 fill-red-500" /> in
            Indonesia
          </p>

          <motion.button
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-white transition-colors"
          >
            BACK TO TOP
            <div className="p-2 bg-white/5 rounded-full group-hover:bg-[#4584f7] transition-colors">
              <ArrowUp size={16} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
