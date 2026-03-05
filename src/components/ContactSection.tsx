import { motion } from "framer-motion";
import { contactInfo, socials } from "../data/portoflio";
import { ContactInput, ContactButton } from "./contact/ContactFields";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 md:py-48 bg-[#050505] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* --- [1] SECTION LABEL --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16 md:mb-24"
        >
          <span className="text-[#98989F] font-medium text-[9px] md:text-[10px] uppercase tracking-[0.5em]">
            03 // Get In Touch
          </span>
          <div className="h-px flex-1 bg-zinc-900/50" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          {/* --- [2] LEFT SIDE: TITLE & FORM --- */}
          <div className="lg:col-span-8 space-y-12 md:space-y-20">
            {/* Headline masif dengan fluid typography (menyesuaikan ukuran layar) */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[130px] font-light leading-[0.9] tracking-tighter uppercase italic"
            >
              Ready to <br />
              <span
                className="text-zinc-900"
                style={{ WebkitTextStroke: "1px #27272a" }} // Efek outline transparan
              >
                Collaborate?
              </span>
            </motion.h2>

            {/* Input Form Fields */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-2 md:space-y-4 max-w-2xl"
            >
              <ContactInput type="text" placeholder="YOUR NAME" />
              <ContactInput type="email" placeholder="EMAIL ADDRESS" />
              <ContactInput placeholder="YOUR MESSAGE" isTextArea />
              <div className="pt-8 md:pt-12">
                <ContactButton />
              </div>
            </motion.div>
          </div>

          {/* --- [3] RIGHT SIDE: INFO & SOCIALS --- */}
          {/* Layout fleksibel: Vertikal di mobile, sejajar di desktop */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-20 lg:space-y-0 border-t border-zinc-900/50 lg:border-none pt-16 lg:pt-0">
            {/* Links Kontak Langsung */}
            <div className="space-y-10 md:space-y-16 text-left">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="space-y-2 group cursor-pointer">
                  <p className="text-[9px] font-medium text-[#9797A0] uppercase tracking-[0.3em]">
                    // {info.label}
                  </p>
                  <a
                    href={info.link}
                    className="text-xl md:text-2xl font-light tracking-tight text-zinc-300 group-hover:text-white transition-colors duration-500 block"
                  >
                    {info.value}
                  </a>
                </div>
              ))}
            </div>

            {/* Social Media & Micro-Footer */}
            <div className="space-y-10">
              <div className="flex flex-col gap-6">
                <p className="text-[9px] font-medium text-[#98989F] uppercase tracking-[0.4em]">
                  Follow the journey
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-all border-b border-transparent hover:border-zinc-500"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Copyright Tag */}
              <div className="pt-10 border-t border-zinc-900/30">
                <p className="text-[8px] font-medium text-[#9797A0] uppercase tracking-[0.3em] leading-relaxed">
                  © 2026 Akmal Dzakwan. <br />
                  Specializing in Full-stack Precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
