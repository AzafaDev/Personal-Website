import { Terminal, Menu, X, PhoneCall } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const list = [
    { name: "Home", link: "/" },
    { name: "About", link: "/#about" },
    { name: "Portfolio", link: "/#portfolio" },
    { name: "Skills", link: "/#skills" },
    { name: "Experience", link: "/#experience" },
    { name: "Contact", link: "/#contact" },
  ];

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
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      } absolute`}
    >
      <div className={`max-w-6xl mx-auto px-4 transition-all duration-500`}>
        <div
          className={`flex justify-between items-center px-6 py-3 rounded-2xl border transition-all ${
            scrolled
              ? "bg-black/80 backdrop-blur-md border-white/20 shadow-2xl"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* LOGO: High Contrast Blue */}
          <div
            onClick={() => handleNavClick("/")}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="bg-blue-600 p-2 rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.5)]">
              <Terminal className="text-white size-5" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-black tracking-tighter text-white">
                AZAFA
              </span>
              <span className="text-[9px] font-bold text-blue-500 tracking-[0.2em] uppercase">
                Studio
              </span>
            </div>
          </div>

          {/* DESKTOP MENU: Minim Motion, Hover CSS only */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {list.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(item.link)}
                  className="text-xs font-bold text-gray-400 hover:text-white transition-all uppercase tracking-widest relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* CTA Button: High Contrast */}
            <a
              href="https://wa.link/q3wda6"
              target="_blank"
              className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-xl font-bold text-xs hover:bg-blue-600 hover:text-white transition-all shadow-lg active:scale-95"
            >
              HIRE ME
              <PhoneCall className="size-3" />
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU: CSS Based transition (Ringan) */}
      <div
        className={`absolute top-full left-4 right-4 mt-2 transition-all duration-300 origin-top ${
          isOpen
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-black/95 border border-white/10 backdrop-blur-xl rounded-2xl p-6 flex flex-col gap-4">
          {list.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(item.link)}
              className="text-left text-lg font-bold text-gray-300 border-b border-white/5 pb-2 hover:text-blue-500 transition-colors"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
