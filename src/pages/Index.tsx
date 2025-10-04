import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import BootScreen from '@/components/BootScreen';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Impact from '@/components/Impact';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Vibes from '@/components/Vibes';
import Contact from '@/components/Contact';

const Index = () => {
  const [showBoot, setShowBoot] = useState(true);

  useEffect(() => {
    document.title = "Kartik Rawat | Product Builder & Entrepreneur";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Product builder & entrepreneur with 3+ years shipping 0→1 products across D2C, EdTech, and Web3. Currently EIR at CashKaro.'
      );
    }
  }, []);

  return (
    <>
      <AnimatePresence>
        {showBoot && <BootScreen onComplete={() => setShowBoot(false)} />}
      </AnimatePresence>

      {!showBoot && (
        <>
          <Navigation />
          <main className="pt-16">
            <Hero />
            <Impact />
            <Experience />
            <Skills />
            <Vibes />
            <Contact />
          </main>
        </>
      )}
    </>
  );
};

export default Index;
