import { motion } from "framer-motion";
import { Terminal, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050505] border-t border-zinc-900/50 pt-20 pb-10 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          {/* --- [1] BRAND SECTION --- */}
          <div className="md:col-span-5 space-y-8">
            <div className="flex items-center gap-3 group cursor-default">
              <div className="relative p-2 border border-zinc-800 bg-zinc-950 overflow-hidden">
                <Terminal className="text-white size-4 relative z-10" />
                {/* Scanning Effect: Memberikan kesan sistem yang 'aktif' secara konstan */}
                <motion.div
                  animate={{ y: [-20, 20] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-white/5 w-full h-1/2"
                />
              </div>
              <span className="text-xl font-light uppercase tracking-tighter italic">
                Azafa<span className="text-[#98989F]">.</span>Dev
              </span>
            </div>
            <p className="text-[#98989F] max-w-sm text-[11px] leading-relaxed uppercase tracking-wider font-light">
              Membangun solusi digital dengan presisi penuh antara
              fungsionalitas dan estetika minimalis. Tersedia untuk kolaborasi
              terpilih.
            </p>
          </div>

          {/* --- [2] SITEMAP NAVIGATION --- */}
          <div className="md:col-span-3">
            <p className="text-[9px] font-medium uppercase tracking-[0.4em] text-[#9797A0] mb-8">
              // Sitemap
            </p>
            <ul className="space-y-4">
              {["Home", "About", "Portfolio", "Experience", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
                      className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-all duration-500 flex items-center group gap-2"
                    >
                      {/* Line Indicator: Muncul saat link di-hover */}
                      <span className="w-0 h-px bg-white group-hover:w-4 transition-all duration-500" />
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* --- [3] LOCATION & AVAILABILITY --- */}
          <div className="md:col-span-4">
            <p className="text-[9px] font-medium uppercase tracking-[0.4em] text-[#9797A0] mb-8">
              // Availability
            </p>
            <div className="space-y-8">
              <address className="not-italic text-xs text-zinc-300 leading-relaxed space-y-1 uppercase tracking-widest font-light">
                <p>Tangerang, Banten</p>
                <p>Indonesia (GMT+7)</p>
              </address>
              <div className="inline-block border-b border-zinc-800 pb-2 group">
                <a
                  href="mailto:akmal.dz.f@gmail.com"
                  className="text-sm font-light tracking-tight text-zinc-400 group-hover:text-white transition-colors duration-500"
                >
                  akmal.dz.f@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- [4] BOTTOM BAR --- */}
        <div className="pt-10 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright & Live Status Indicator */}
          <div className="text-[9px] font-medium text-[#9797A0] uppercase tracking-[0.3em] flex items-center gap-2">
            <span className="size-1 rounded-full bg-zinc-800 animate-pulse" />©{" "}
            {currentYear} Azafa Archive — Akmal Dzakwan Faiz
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-[9px] font-medium uppercase tracking-[0.4em] text-[#98989F] hover:text-white transition-all duration-500"
          >
            Back to Top
            <div className="size-10 border border-zinc-900 flex items-center justify-center group-hover:border-white group-hover:bg-white transition-all duration-700">
              <ArrowUp
                size={12}
                className="text-[#98989F] group-hover:text-black group-hover:-translate-y-1 transition-all duration-500"
              />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
