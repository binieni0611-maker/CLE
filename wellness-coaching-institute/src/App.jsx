import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProgramMap from './components/ProgramMap';
import CoachingPrograms from './components/CoachingPrograms';
import ChurchPrograms from './components/ChurchPrograms';
import ESGPrograms from './components/ESGPrograms';
import HealthPrograms from './components/HealthPrograms';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-wellness-cream via-white to-lavender-50">
      <Header setCurrentSection={setCurrentSection} />
      
      {currentSection === 'home' && (
        <>
          <Hero />
          <About />
          <ProgramMap />
        </>
      )}
      
      {currentSection === 'coaching' && <CoachingPrograms />}
      {currentSection === 'church' && <ChurchPrograms />}
      {currentSection === 'esg' && <ESGPrograms />}
      {currentSection === 'health' && <HealthPrograms />}
      {currentSection === 'contact' && <Contact />}
      
      <Footer />
    </div>
  );
}

export default App;
