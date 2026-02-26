import { Terminal, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black border-t border-zinc-900 pt-20 pb-10 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          {/* Brand Section - Industrial Look */}
          <div className="md:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 border border-zinc-800 bg-zinc-950">
                <Terminal className="text-blue-600 size-5" />
              </div>
              <span className="text-xl font-black uppercase tracking-tighter italic">
                Azafa<span className="text-blue-600">.</span>Dev
              </span>
            </div>
            <p className="text-zinc-500 max-w-sm text-sm leading-relaxed uppercase tracking-tight">
              Membangun solusi digital yang fokus pada fungsionalitas dan
              estetika. Mari berkolaborasi untuk menciptakan sesuatu yang luar
              biasa.
            </p>
          </div>

          {/* Navigation - Minimalist List */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-600 mb-8 font-black">
              // Navigation
            </h4>
            <ul className="space-y-4">
              {["Home", "About", "Portfolio", "Experience", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
                      className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-blue-600 transition-colors flex items-center group"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Office - High Contrast */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-600 mb-8 font-black">
              // Availability
            </h4>
            <div className="space-y-6">
              <address className="not-italic text-sm text-zinc-400 leading-none space-y-2 uppercase tracking-tighter">
                <p>Tangerang, Banten</p>
                <p>Indonesia (GMT+7)</p>
              </address>
              <div className="inline-block border-b border-blue-600 pb-1">
                <a
                  href="mailto:akmal.dz.f@gmail.com"
                  className="text-sm font-black hover:text-blue-600 transition-colors"
                >
                  akmal.dz.f@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Brutalist Footer */}
        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
            © {currentYear} Azafa Archive — Built by Akmal Dzakwan
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-colors"
          >
            Back to Top
            <div className="size-10 border border-zinc-800 flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-600 transition-all">
              <ArrowUp
                size={14}
                className="group-hover:-translate-y-1 transition-transform"
              />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
