// src/components/sections/Contact/ContactFields.tsx
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
  const baseClass =
    "w-full bg-transparent border-b-2 border-zinc-900 py-6 text-2xl md:text-4xl font-bold uppercase tracking-tighter outline-none focus:border-blue-600 transition-colors placeholder:text-zinc-800";

  return (
    <div className="group relative">
      {isTextArea ? (
        <textarea
          rows={1}
          placeholder={placeholder}
          className={`${baseClass} resize-none`}
        />
      ) : (
        <input type={type} placeholder={placeholder} className={baseClass} />
      )}
    </div>
  );
};

export const ContactButton = () => (
  <button
    onClick={() => toast.error("Mail server coming soon! 🚀")}
    className="flex items-center gap-8 group pt-8"
  >
    <span className="text-4xl font-black uppercase tracking-tighter group-hover:text-blue-400 transition-colors">
      Send Message
    </span>
    <div className="size-16 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
      <ArrowUpRight
        size={32}
        className="group-hover:rotate-45 transition-transform duration-500"
      />
    </div>
  </button>
);
