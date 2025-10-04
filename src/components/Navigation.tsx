import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Linkedin, Twitter, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  const sections = [
    { id: 'hero', label: 'Story' },
    { id: 'impact', label: 'Impact' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'vibes', label: 'Vibes' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-background/95 backdrop-blur-xl shadow-lg' : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="font-mono text-lg sm:text-xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            [KR]
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`relative font-medium transition-colors text-sm lg:text-base ${
                  activeSection === section.id ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                {section.label}
                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </button>
            ))}
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                <a href="https://linkedin.com/in/kartikrawatt" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild className="gap-2 h-8 text-xs lg:text-sm">
                <a href="/resume/Trial_Resume___28_sep.pdf" download>
                  <FileDown className="w-3 h-3 lg:w-4 lg:h-4" />
                  <span className="hidden sm:inline">Resume</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary p-2 hover:bg-primary/10 rounded-md transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          className="fixed inset-0 z-30 bg-background/98 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col items-center justify-center h-full gap-6 sm:gap-8 px-4">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(section.id)}
                className="text-2xl sm:text-3xl font-semibold text-foreground hover:text-primary transition-colors py-2"
              >
                {section.label}
              </motion.button>
            ))}
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 w-full max-w-xs">
              <Button variant="outline" size="icon" asChild className="h-12 w-12">
                <a href="https://linkedin.com/in/kartikrawatt" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" asChild className="gap-2 h-12 flex-1">
                <a href="/resume/Trial_Resume___28_sep.pdf" download>
                  <FileDown className="w-4 h-4" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navigation;
