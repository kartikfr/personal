import Window from './Window';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const Impact = () => {
  const posts = [
    {
      id: 1,
      embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:7280293429257846784?collapsed=1",
      height: "566",
    },
    {
      id: 2,
      embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:7275597723871932418?collapsed=1",
      height: "670",
    },
    {
      id: 3,
      embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:7308259943365713921?collapsed=1",
      height: "670",
    },
  ];

  return (
    <section id="impact" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4"
        >
          <span className="text-terminal-green">&gt;</span> Impact.log
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-foreground/80 mb-8 sm:mb-12 max-w-3xl"
        >
          Here's the real stuff - what I've actually been building and learning along the way. 
          No fluff, just genuine progress and insights! 📈
        </motion.p>

        <Window title="Impact.log — Recent Updates">
          {/* LinkedIn Followers Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 p-4 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-foreground">10k+ Followers</p>
                <p className="text-sm text-muted-foreground">Connect with me on LinkedIn</p>
              </div>
            </div>
          </motion.div>

          {/* Desktop Grid Layout */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-card/50 border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all"
              >
                <iframe
                  src={post.embedUrl}
                  height={post.height}
                  width="100%"
                  frameBorder="0"
                  allowFullScreen
                  title={`LinkedIn post ${post.id}`}
                  loading="lazy"
                  className="w-full"
                />
              </motion.div>
            ))}
          </div>

          {/* Mobile Horizontal Scroll Layout */}
          <div className="md:hidden relative">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-1" style={{ scrollSnapType: 'x mandatory' }}>
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex-shrink-0 w-80 bg-card/50 border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <div className="relative">
                    <iframe
                      src={post.embedUrl}
                      height="400"
                      width="100%"
                      frameBorder="0"
                      allowFullScreen
                      title={`LinkedIn post ${post.id}`}
                      loading="lazy"
                      className="w-full rounded-lg"
                      style={{ minHeight: '400px' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Gradient fade indicators */}
            <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none" />
            
            {/* Scroll indicator for mobile */}
            <div className="flex justify-center mt-4">
              <div className="flex gap-2">
                {posts.map((_, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-full bg-primary/30"
                  />
                ))}
              </div>
            </div>
            
            {/* Swipe hint */}
            <p className="text-center text-xs text-muted-foreground mt-2">
              ← Swipe to see more posts →
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-8 p-4 bg-muted/30 border border-border rounded-lg"
          >
            <p className="font-mono text-sm text-muted-foreground">
              💡 <span className="text-primary">Pro tip:</span> Click any post to interact and see the full thread on LinkedIn.
            </p>
          </motion.div>
        </Window>
      </div>
    </section>
  );
};

export default Impact;
