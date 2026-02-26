// src/components/ui/SocialLinks.tsx
import { Github, Linkedin } from "lucide-react";

export const SocialLinks = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-6 ${className}`}>
    {/* GitHub Link */}
    <a 
      href="https://github.com/AzafaDev" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-zinc-600 hover:text-white transition-colors"
      aria-label="GitHub Profile"
    >
      <Github size={20} />
    </a>
    
    {/* LinkedIn Link */}
    <a 
      href="https://linkedin.com/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-zinc-600 hover:text-white transition-colors"
      aria-label="LinkedIn Profile"
    >
      <Linkedin size={20} />
    </a>
  </div>
);