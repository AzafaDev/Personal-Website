// src/components/ui/SocialLinks.tsx
import { Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export const SocialLinks = () => {
  const socials = [
    { name: "GitHub", href: "https://github.com/AzafaDev", icon: <Github size={16} /> },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/akmal-dzakwan-faiz-0bb98839b/", icon: <Linkedin size={16} /> },
    { name: "Instagram", href: "https://instagram.com/", icon: <Instagram size={16} /> },
  ];

  return (
    <div className="flex items-center gap-8">
      {socials.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          // Animasi "Bernapas": Opacity naik turun & Gerakan vertikal tipis
          animate={{ 
            opacity: [0.2, 0.5, 0.2], 
            y: [0, -3, 0] 
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            delay: index * 0.8, // Wave effect (bergantian)
            ease: "easeInOut" 
          }}
          className="text-white hover:opacity-100 transition-opacity duration-300"
          aria-label={social.name}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};