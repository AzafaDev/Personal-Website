import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ProjectSection from './components/ProjectSection';
import TechSection from './components/SkillSection';

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-20'>
      <Navbar />
      <HeroSection/>
      <AboutSection/>
      <TechSection/>
      <ProjectSection/>
      <ExperienceSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
};

export default App;
