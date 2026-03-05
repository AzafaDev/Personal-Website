import { Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export const SocialLinks = () => {
  // Data link sosial media
  const socials = [
    { name: "GitHub", href: "https://github.com/AzafaDev", icon: <Github size={16} /> },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/akmal-dzakwan-faiz-0bb98839b/", icon: <Linkedin size={16} /> },
    { name: "Instagram", href: "https://www.instagram.com/akmldz?utm_source=qr&igsh=MWtkZ3BldTRndzhxNw==", icon: <Instagram size={16} /> },
  ];

  return (
    <div className="flex items-center gap-8">
      {socials.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          
          /* --- ANIMASI AMBIENT (IDLE) --- */
          // Memberikan efek "bernapas" dengan opacity dan gerakan y-axis
          animate={{ 
            opacity: [0.2, 0.5, 0.2], 
            y: [0, -3, 0] 
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            // Delay bertahap (index * 0.8) menciptakan efek ombak antar ikon
            delay: index * 0.8, 
            ease: "easeInOut" 
          }}

          /* --- HOVER STATE --- */
          // Transisi cepat saat kursor diarahkan ke ikon
          className="text-white hover:opacity-100 transition-opacity duration-300"
          aria-label={social.name}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};