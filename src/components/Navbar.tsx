import { Terminal, Menu, X, ArrowRight, PhoneCall } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const list = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/#about' },
    { name: 'Portfolio', link: '/#portfolio' },
    { name: 'Skills', link: '/#skills' },
    {name: 'Experience', link: '/#experience'},
    { name: 'Contact', link: '/#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 border-b ${
        scrolled
          ? 'bg-black/60 backdrop-blur-xl border-white/10 py-3'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-[#4584f7] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative p-2 bg-black rounded-lg border border-white/10 group-hover:border-[#4584f7]/50 transition-colors">
              <a href="/" aria-label='home-link'>
                <Terminal className="text-[#4584f7] size-6" />
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <a className="text-xl font-bold tracking-tight leading-none" href="/" aria-label='home-link'>
              Azafa
            </a>
            <span className="text-[10px] text-[#4584f7] font-mono tracking-[0.2em] uppercase">
              Developer
            </span>
          </div>
        </motion.div>

        <div className="hidden md:flex gap-10 items-center">
          <div className="flex gap-8">
            {list.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4584f7] transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.link/q3wda6"
            target="blank"
            className="group relative inline-flex items-center justify-center px-6 py-2.5 font-semibold text-white bg-[#4584f7] rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(69,132,247,0.4)]"
          >
            <span className="relative z-10 flex items-center">
              Contact Me <PhoneCall className="ml-2 size-4 group-hover:rotate-12 transition-transform" />
            </span>
          </motion.a>
        </div>

        <button
          className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
          aria-label='hamburger-button'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden md:hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {list.map((item, index) => (
                <motion.a
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-[#4584f7] transition-colors flex justify-between items-center group"
                >
                  {item.name}
                  <ArrowRight className="size-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;