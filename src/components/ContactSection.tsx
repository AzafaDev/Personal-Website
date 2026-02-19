import React from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const ContactSection = () => {
  const contactInfo = [
    { icon: <Mail />, label: "Email Me", value: "akmal.dz.f@gmail.com", link: "mailto:akmal.dz.f@gmail.com" },
    { icon: <MapPin />, label: "Location", value: "Tangerang, Indonesia", link: "https://www.google.com/maps/place/Jl.+Komp.+Tataka+Puri+Blok+J5+No.10,+RT.3%2FRW.5,+Kadu,+Kec.+Curug,+Kabupaten+Tangerang,+Banten+15810/@-6.2293892,106.564913,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69fdd9a1da92e7:0xf1696e6acfa1a396!8m2!3d-6.2293892!4d106.5674879!16s%2Fg%2F11lmnv_15n?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D" },
    { icon: <Phone />, label: "Phone", value: "+62 882-2565-9672", link: "https://wa.me/6288225659672" },
  ];

  const socials = [
    { icon: <Github className="size-5" />, link: "https://github.com/AzafaDev", name: "GitHub" },
    { icon: <Linkedin className="size-5" />, link: "https://www.linkedin.com/in/akmal-dzakwan-faiz-0bb98839b?utm_source=share_via&utm_content=profile&utm_medium=member_android", name: "LinkedIn" },
    { icon: <Instagram className="size-5" />, link: "https://www.instagram.com/akmaldz.dev?utm_source=qr&igsh=aGVkZDFlcjZsdGVi", name: "Instagram" },
  ];

  return (
    <section id="contact" className="w-full py-24 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
            Let's <span className="text-[#4584f7]">Connect.</span>
          </h2>
          <p className="text-gray-400 max-w-lg leading-relaxed">
            Punya ide proyek atau sekadar ingin menyapa? Silakan kirim pesan, 
            saya akan membalasnya sesegera mungkin.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Side: Info & Socials */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              {contactInfo.map((info, idx) => (
                <motion.a
                  key={idx}
                  href={info.link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-[#4584f7] group-hover:bg-[#4584f7] group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-500/0 group-hover:shadow-blue-500/20">
                    {React.cloneElement(info.icon, { className: "size-6" })}
                  </div>
                  <div>
                    <h4 className="text-sm font-mono text-gray-500 uppercase tracking-widest">{info.label}</h4>
                    <p className="text-lg font-semibold group-hover:text-[#4584f7] transition-colors">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-white/5">
              <p className="text-sm font-medium text-gray-500 mb-6 uppercase tracking-widest">Social Profiles</p>
              <div className="flex gap-4">
                {socials.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.link}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 bg-white/5 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-[#4584f7]/50 transition-all"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Animated Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form 
              onSubmit={(e) => e.preventDefault()}
              className="space-y-6 bg-linear-to-b from-white/4 to-transparent border border-white/10 p-8 md:p-10 rounded-[2.5rem] backdrop-blur-md shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-500 uppercase tracking-wider ml-1">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#4584f7] focus:ring-1 focus:ring-[#4584f7]/50 transition-all placeholder:text-gray-700"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-500 uppercase tracking-wider ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#4584f7] focus:ring-1 focus:ring-[#4584f7]/50 transition-all placeholder:text-gray-700"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase tracking-wider ml-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#4584f7] focus:ring-1 focus:ring-[#4584f7]/50 transition-all resize-none placeholder:text-gray-700"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => toast.error("Mail server coming soon! 🚀")}
                className="w-full flex items-center justify-center gap-3 bg-[#4584f7] hover:bg-[#3b72d1] text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-blue-500/20 group overflow-hidden relative"
                aria-label="mail-button"
              >
                <span className="relative z-10">Send Message</span>
                <Send className="size-5 relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;