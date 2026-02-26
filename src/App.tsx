import { Analytics } from "@vercel/analytics/react";
import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TechSection from "./components/TechSection";
import ProjectSection from "./components/ProjectSection";

const ExperienceSection = lazy(() => import("./components/ExperienceSection"));
const ContactSection = lazy(() => import("./components/ContactSection"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-20">
      <Navbar />
      <main className="w-full flex flex-col items-center justify-center">
        <HeroSection />
        <AboutSection />
        <TechSection />
        <ProjectSection />

        <Suspense fallback={<div className="h-[50vh] bg-black" />}>
          <ExperienceSection />
          <ContactSection />
          <Footer />
        </Suspense>
      </main>
      <Analytics />
    </div>
  );
};

export default App;
