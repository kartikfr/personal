import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const BootScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [bootMessages, setBootMessages] = useState<string[]>([]);
  
  const messages = [
    '> Initializing Entrepreneur OS...',
    '> Loading core modules...',
    '> Mounting /experience',
    '> Mounting /skills',
    '> Mounting /impact',
    '> Starting services...',
    '> [OK] Product builder initialized',
    '> [OK] Entrepreneur mode active',
    '> System ready. Welcome!',
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < messages.length) {
        setBootMessages(prev => [...prev, messages[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 500);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-background z-50 flex items-center justify-center font-mono"
    >
      <div className="max-w-2xl w-full px-4">
        {bootMessages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="text-terminal-green mb-2"
          >
            {msg}
          </motion.div>
        ))}
        <span className="cursor-blink text-terminal-green">_</span>
      </div>
    </motion.div>
  );
};

export default BootScreen;
