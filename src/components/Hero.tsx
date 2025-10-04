import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useMobileDetection } from '@/hooks/use-mobile-detection';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const isMobile = useMobileDetection();
  
  const fullText = "Product builder & entrepreneur with 3+ years in 0→1 startup execution across D2C, EdTech, and Web3.";

  useEffect(() => {
    let currentIndex = 0;
    // Faster typing on mobile for better UX
    const typingSpeed = isMobile ? 20 : 30;

    // Create audio context for realistic typewriter sound
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    const playTypewriterSound = () => {
      // Create noise buffer for mechanical sound
      const bufferSize = audioContext.sampleRate * 0.05; // 50ms
      const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      
      // Generate white noise
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * 0.3;
      }
      
      // Create noise source
      const noiseSource = audioContext.createBufferSource();
      noiseSource.buffer = noiseBuffer;
      
      // Create filter for mechanical sound
      const filter = audioContext.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(800, audioContext.currentTime);
      filter.Q.setValueAtTime(5, audioContext.currentTime);
      
      // Create envelope
      const gainNode = audioContext.createGain();
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.15, audioContext.currentTime + 0.005);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
      
      // Connect audio chain
      noiseSource.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Add slight pitch variation for realism
      filter.frequency.exponentialRampToValueAtTime(
        800 + (Math.random() * 200 - 100), 
        audioContext.currentTime + 0.02
      );
      
      noiseSource.start(audioContext.currentTime);
      noiseSource.stop(audioContext.currentTime + 0.05);
    };

    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        
        // Play typewriter sound for each character (except spaces)
        if (fullText[currentIndex - 1] && fullText[currentIndex - 1] !== ' ') {
          try {
            playTypewriterSound();
          } catch (e) {
            // Ignore audio context errors
          }
        }
        
        currentIndex++;
      } else {
        clearInterval(interval);
        setShowCursor(false);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {[...Array(20)].map((_, i) => (
              <motion.line
                key={`circuit-${i}`}
                x1={`${Math.random() * 100}%`}
                y1={`${Math.random() * 100}%`}
                x2={`${Math.random() * 100}%`}
                y2={`${Math.random() * 100}%`}
                stroke="hsl(var(--primary))"
                strokeWidth="0.1"
                animate={{
                  opacity: [0.1, 0.4, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </svg>
        </div>

        {/* Floating Particles with Trails */}
        {[...Array(isMobile ? 6 : 12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
              scale: [0.5, 1.5, 0.5],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut',
            }}
          >
            <div className="w-1 h-1 bg-primary/30 rounded-full" />
            <motion.div
              className="absolute inset-0 bg-primary/10 rounded-full"
              animate={{
                scale: [1, 3, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5,
              }}
            />
          </motion.div>
        ))}

        {/* Data Stream Effect */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(isMobile ? 8 : 15)].map((_, i) => (
            <motion.div
              key={`stream-${i}`}
              className="absolute h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
              style={{
                left: `${i * 7}%`,
                top: '0%',
                width: '2px',
              }}
              animate={{
                y: ['-100%', '200%'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        {/* Hexagonal Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="hexagons" x="0" y="0" width="10" height="8.66" patternUnits="userSpaceOnUse">
                <polygon
                  points="5,0 10,2.5 10,7.5 5,10 0,7.5 0,2.5"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="0.1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>

        {/* Floating Code Snippets */}
        {[...Array(isMobile ? 4 : 8)].map((_, i) => {
          const codeSnippets = [
            "const build = () => {",
            "ship(product);",
            "scale(impact);",
            "return success;",
            "}",
            "// Kartik Rawat",
            "async function innovate() {",
            "while(true) build();"
          ];
          
          return (
            <motion.div
              key={`code-${i}`}
              className="absolute font-mono text-xs text-primary/15 hidden lg:block"
              style={{
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 90}%`,
              }}
              animate={{
                opacity: [0.05, 0.2, 0.05],
                scale: [0.8, 1.1, 0.8],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 1.5,
                ease: 'easeInOut',
              }}
            >
              {codeSnippets[i % codeSnippets.length]}
            </motion.div>
          );
        })}

        {/* Matrix-style Rain Effect */}
        <div className="absolute inset-0 opacity-3">
          {[...Array(isMobile ? 5 : 10)].map((_, i) => (
            <motion.div
              key={`matrix-${i}`}
              className="absolute font-mono text-xs text-primary/20"
              style={{
                left: `${i * 10}%`,
                top: '0%',
              }}
              animate={{
                y: ['-100%', '200%'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: 'linear',
              }}
            >
              {[...Array(10)].map((_, j) => (
                <div key={j} className="mb-1">
                  {String.fromCharCode(0x30A0 + Math.random() * 96)}
                </div>
              ))}
            </motion.div>
        ))}
      </div>

        {/* Dynamic Gradient Orbs with Complex Motion */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-primary/10 via-secondary/5 to-transparent rounded-full blur-3xl"
          style={{
            left: '10%',
            top: '10%',
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-r from-accent/8 via-primary/4 to-transparent rounded-full blur-3xl"
          style={{
            right: '15%',
            bottom: '20%',
          }}
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 60, -80, 0],
            scale: [1, 0.9, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />

        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-secondary/6 via-accent/3 to-transparent rounded-full blur-3xl"
          style={{
            left: '60%',
            top: '50%',
          }}
          animate={{
            x: [0, -100, 80, 0],
            y: [0, 80, -60, 0],
            scale: [1, 1.4, 0.7, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,
          }}
        />

        {/* Neural Network Connections */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {[...Array(12)].map((_, i) => (
              <motion.circle
                key={`node-${i}`}
                cx={`${20 + (i % 4) * 20}%`}
                cy={`${20 + Math.floor(i / 4) * 20}%`}
                r="0.5"
                fill="hsl(var(--primary))"
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.5, 1.5, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: 'easeInOut',
                }}
              />
            ))}
            {[...Array(8)].map((_, i) => (
              <motion.line
                key={`connection-${i}`}
                x1={`${20 + (i % 3) * 20}%`}
                y1={`${20 + Math.floor(i / 3) * 20}%`}
                x2={`${20 + ((i + 1) % 4) * 20}%`}
                y2={`${20 + Math.floor((i + 1) / 4) * 20}%`}
                stroke="hsl(var(--primary))"
                strokeWidth="0.05"
                animate={{
                  opacity: [0.1, 0.4, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </svg>
        </div>
      </div>

      <div className="max-w-4xl w-full relative z-10 flex flex-col items-center justify-center">
        {/* Mobile Layout */}
        <div className="md:hidden w-full space-y-5 sm:space-y-6">
          {/* Favorite Quote - Compact */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="px-4 text-center"
          >
            <p className="text-xs text-muted-foreground mb-2 font-medium">
              My favorite quote
            </p>
            <blockquote className="text-sm text-foreground/90 font-medium italic leading-relaxed">
              "You either take the risk or work for someone who did"
            </blockquote>
          </motion.div>

          {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="px-4"
        >
            <h1 className="font-mono text-2xl font-bold text-primary leading-tight">
            Kartik Rawat
          </h1>
          </motion.div>
          
          {/* Typewriter Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="px-4"
          >
            <div className="font-mono text-sm text-foreground min-h-[50px]">
              <span className="text-terminal-green">&gt;</span> {displayedText}
              {showCursor && <span className="cursor-blink">_</span>}
            </div>
          </motion.div>

          {/* Compact Bullet Points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.5 }}
            className="px-4"
          >
            <div className="grid grid-cols-1 gap-2 text-muted-foreground text-xs">
              <div className="flex items-center gap-2">
                <span className="text-primary text-sm">■</span>
                <span>Led high-growth teams</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-secondary text-sm">■</span>
                <span>Raised capital & scaled ops</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent text-sm">■</span>
                <span>Shipped products from scratch</span>
              </div>
            </div>
          </motion.div>

          {/* Current Role */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 0.5 }}
            className="text-sm text-foreground/80 px-4"
          >
            Currently <span className="text-primary font-semibold">
              <a 
                href="https://cashkaro.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline transition-all"
              >
                EIR at CashKaro
              </a>
            </span>, driving revenue and retention at scale.
          </motion.p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block w-full">
          {/* Favorite Quote */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 lg:mb-12 text-center"
          >
            <p className="text-sm lg:text-base text-muted-foreground mb-3 font-medium">
              My favorite quote
            </p>
            <blockquote className="text-lg lg:text-xl xl:text-2xl text-foreground/90 font-medium italic leading-relaxed max-w-4xl mx-auto">
              "You either take the risk or work for someone who did"
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="font-mono text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 lg:mb-8 text-primary leading-tight">
              Kartik Rawat
            </h1>
            
            <div className="font-mono text-base lg:text-lg xl:text-xl 2xl:text-2xl text-foreground mb-6 lg:mb-8 min-h-[80px] lg:min-h-[100px] xl:min-h-[120px]">
            <span className="text-terminal-green">&gt;</span> {displayedText}
            {showCursor && <span className="cursor-blink">_</span>}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.5 }}
              className="flex flex-row flex-wrap gap-4 lg:gap-6 text-muted-foreground text-sm lg:text-base mb-6 lg:mb-8"
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
              className="text-base lg:text-lg text-foreground/80 max-w-2xl"
            >
              Currently <span className="text-primary font-semibold">
                <a 
                  href="https://cashkaro.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline transition-all"
                >
                  EIR at CashKaro
                </a>
              </span>, driving revenue and retention at scale.
          </motion.p>
        </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="text-primary w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
      </motion.div>
    </section>
  );
};

export default Hero;
