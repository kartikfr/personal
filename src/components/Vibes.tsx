import { motion } from 'framer-motion';
import Window from './Window';
import { useMobileDetection } from '@/hooks/use-mobile-detection';

const Vibes = () => {
  const isMobile = useMobileDetection();
  const tracks = [
    {
      id: 1,
      embedUrl: "https://open.spotify.com/embed/track/3qJZMCC972toRKxNVQQWjX?utm_source=generator",
    },
    {
      id: 2,
      embedUrl: "https://open.spotify.com/embed/track/7zrjicr33yF4WpDAdbvebQ?utm_source=generator",
    },
    {
      id: 3,
      embedUrl: "https://open.spotify.com/embed/track/7unLxuzKpxbjASww1qi4br?utm_source=generator",
    }
  ];

  return (
    <section id="vibes" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4"
        >
          <span className="text-terminal-green">&gt;</span> Vibes.mp3
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-foreground/80 mb-8 sm:mb-12 max-w-4xl"
        >
          Music is basically my productivity hack! When I'm in the zone building stuff, 
          these tracks keep me locked in and motivated. 
          <br className="hidden sm:block" />
          <span className="block sm:inline mt-2 text-primary font-medium">
            Here's what's been keeping me pumped lately:
          </span>
        </motion.p>

        <Window title="Vibes.mp3 — My Productivity Playlist">
          <div className="space-y-8">
            {/* Desktop Layout - Side by Side */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tracks.map((track, index) => (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative"
                >
                  <div className="bg-card/30 border border-border rounded-2xl p-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden">
                    <div className="relative">
                      <iframe
                        src={track.embedUrl}
                        width="100%"
                        height="352"
                        frameBorder="0"
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        title={`Productivity Track ${track.id}`}
                        className="rounded-xl w-full no-scrollbar"
                        style={{ 
                          background: 'transparent',
                          filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))',
                          overflow: 'hidden',
                          overflowX: 'hidden',
                          overflowY: 'hidden'
                        }}
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Layout - Stacked */}
            <div className="md:hidden space-y-6">
              {tracks.map((track, index) => (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative"
                >
                  <div className="bg-card/30 border border-border rounded-2xl p-3 hover:border-primary/50 transition-all duration-300">
                    <iframe
                      src={track.embedUrl}
                      width="100%"
                      height="400"
                      frameBorder="0"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      title={`Productivity Track ${track.id}`}
                      className="rounded-xl w-full no-scrollbar"
                      style={{ 
                        background: 'transparent',
                        minHeight: '400px',
                        overflow: 'hidden',
                        overflowX: 'hidden',
                        overflowY: 'hidden'
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Pro Tip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 p-6 bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10 border border-primary/20 rounded-2xl text-center backdrop-blur-sm"
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="text-2xl"
                >
                  🎵
                </motion.div>
                <span className="text-primary font-semibold text-lg">Pro Tip</span>
              </div>
              <p className="text-foreground/90 font-medium leading-relaxed">
                These are my go-to tracks when I need to get stuff done! 
                <br className="hidden sm:block" />
                <span className="text-primary">Give them a listen</span> while you're here - maybe they'll get you pumped up too! 🎵
              </p>
            </motion.div>
          </div>
        </Window>
      </div>
    </section>
  );
};

export default Vibes;
