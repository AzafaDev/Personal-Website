import { Analytics } from "@vercel/analytics/react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TechSection from "./components/TechSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ExperienceSection from "./components/ExperienceSection";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-20">
      <Navbar />
      <main className="w-full flex flex-col items-center justify-center">
        <HeroSection />
        <AboutSection />
        <TechSection />
        <ProjectSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
