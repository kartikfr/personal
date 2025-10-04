import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface WindowProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const Window = ({ title, children, className = '' }: WindowProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`bg-window border border-window-border rounded-xl window-shadow overflow-hidden ${className}`}
    >
      <div className="bg-gradient-to-r from-window-border to-muted px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 border-b border-window-border">
        <div className="flex gap-1.5 sm:gap-2">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-destructive"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFB800]"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-terminal-green"></div>
        </div>
        <span className="font-mono text-xs sm:text-sm text-foreground ml-2 truncate">{title}</span>
      </div>
      <div className="p-4 sm:p-6 md:p-8">
        {children}
      </div>
    </motion.div>
  );
};

export default Window;
