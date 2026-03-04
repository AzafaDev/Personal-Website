// src/components/sections/Contact/contact/ContactFields.tsx
import { ArrowUpRight } from "lucide-react";
import toast from "react-hot-toast";

export const ContactInput = ({
  type,
  placeholder,
  isTextArea = false,
}: {
  type?: string;
  placeholder: string;
  isTextArea?: boolean;
}) => {
  return (
    <div className="group relative w-full overflow-hidden">
      {isTextArea ? (
        <textarea
          rows={1}
          placeholder={placeholder}
          // Responsive Font Size: text-xl di mobile, text-4xl+ di desktop
          className="w-full bg-transparent border-b border-zinc-900 py-6 md:py-8 text-xl md:text-4xl lg:text-5xl font-light uppercase tracking-tighter outline-none focus:border-zinc-500 transition-all duration-700 placeholder:text-zinc-800 focus:placeholder:text-zinc-500 resize-none"
        />
      ) : (
        <input 
          type={type} 
          placeholder={placeholder} 
          className="w-full bg-transparent border-b border-zinc-900 py-6 md:py-8 text-xl md:text-4xl lg:text-5xl font-light uppercase tracking-tighter outline-none focus:border-zinc-500 transition-all duration-700 placeholder:text-zinc-800 focus:placeholder:text-zinc-500" 
        />
      )}
      <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-700 ease-out group-focus-within:w-full" />
    </div>
  );
};

export const ContactButton = () => (
  <button
    aria-label="send message"
    onClick={() => toast.error("Mail server coming soon! 🚀")}
    className="flex items-center gap-6 md:gap-10 group"
  >
    <span className="text-2xl md:text-5xl font-light italic uppercase tracking-tighter text-zinc-500 group-hover:text-white transition-all duration-700">
      Send Message
    </span>
    {/* Perkecil size lingkaran di mobile */}
    <div className="size-12 md:size-20 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-700">
      <ArrowUpRight
        className="size-6 md:size-8 text-zinc-500 group-hover:text-black transition-colors duration-500"
      />
    </div>
  </button>
);