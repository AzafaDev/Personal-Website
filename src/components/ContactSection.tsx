// src/components/sections/Contact/ContactSection.tsx
import { contactInfo, socials } from "../data/portoflio";
import { ContactInput, ContactButton } from "./contact/ContactFields";

const ContactSection = () => {
  return (
    <section id="contact" className="w-full py-32 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- SECTION LABEL --- */}
        <div className="flex items-center gap-4 mb-24">
          <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em]">
            03 // Get In Touch
          </span>
          <div className="h-[1px] flex-1 bg-zinc-800" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 italic">
          
          {/* --- LEFT: BIG TITLE & EDITORIAL FORM --- */}
          <div className="lg:col-span-8 space-y-16">
            <h2 className="text-6xl md:text-[120px] font-black leading-[0.8] tracking-tighter uppercase italic">
              Ready to <br />
              <span
                className="text-zinc-900"
                style={{ WebkitTextStroke: "1px #3f3f46" }}
              >
                Collaborate?
              </span>
            </h2>

            <div className="space-y-12 max-w-2xl pt-10">
              <ContactInput type="text" placeholder="YOUR NAME" />
              <ContactInput type="email" placeholder="EMAIL ADDRESS" />
              <ContactInput placeholder="YOUR MESSAGE" isTextArea />
              <ContactButton />
            </div>
          </div>

          {/* --- RIGHT: INFO & SOCIALS --- */}
          <div className="lg:col-span-4 flex flex-col justify-between py-4 space-y-20 lg:space-y-0">
            
            {/* Direct Contact Links */}
            <div className="space-y-12 text-right lg:text-left">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em] font-black">
                    // {info.label}
                  </p>
                  <a href={info.link} className="text-xl font-bold hover:text-blue-600 transition-colors tracking-tight">
                    {info.value}
                  </a>
                </div>
              ))}
            </div>

            {/* Social Media & Footer Info */}
            <div className="space-y-10 text-right lg:text-left">
              <div className="flex flex-col gap-4">
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em] font-black underline decoration-blue-600 underline-offset-8">
                  Follow the journey
                </p>
                <div className="flex justify-end lg:justify-start gap-6 pt-4">
                  {socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      className="text-sm font-black uppercase tracking-widest hover:text-blue-600 transition-colors border-b border-transparent hover:border-blue-600"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>

              <p className="text-[9px] font-mono text-zinc-700 uppercase tracking-[0.2em] leading-loose">
                © 2026 Akmal Dzakwan. <br />
                Built with React & Precision.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;