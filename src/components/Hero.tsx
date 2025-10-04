import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const fullText = "Product builder & entrepreneur with 3+ years in 0→1 startup execution across D2C, EdTech, and Web3.";

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 30;

    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setShowCursor(false);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 bg-primary/10"
            style={{
              left: `${20 + i * 20}%`,
              height: '60px',
              bottom: '20%',
            }}
            animate={{
              scaleY: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              delay: i * 0.1,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-mono text-5xl md:text-7xl font-bold mb-6 text-primary">
            Kartik Rawat
          </h1>
          
          <div className="font-mono text-xl md:text-2xl text-foreground mb-8 min-h-[120px]">
            <span className="text-terminal-green">&gt;</span> {displayedText}
            {showCursor && <span className="cursor-blink">_</span>}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.5 }}
            className="flex flex-wrap gap-4 text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <span className="text-primary">■</span>
              <span>Led high-growth teams</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-secondary">■</span>
              <span>Raised capital & scaled ops</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent">■</span>
              <span>Shipped products from scratch</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 0.5 }}
            className="mt-8 text-lg text-foreground/80 max-w-2xl"
          >
            Currently <span className="text-primary font-semibold">EIR at CashKaro</span>, driving revenue and retention at scale.
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="text-primary w-8 h-8" />
      </motion.div>
    </section>
  );
};

export default Hero;
