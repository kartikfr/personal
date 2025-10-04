import { motion } from 'framer-motion';
import Window from './Window';

const Vibes = () => {
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
    <section id="vibes" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-4xl md:text-5xl font-bold text-primary mb-4"
        >
          <span className="text-terminal-green">&gt;</span> Vibes.mp3
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-foreground/80 mb-12"
        >
          The soundtrack that fuels building, shipping, and scaling.
          <br />
          Here are my top 3 hype songs on repeat:
        </motion.p>

        <Window title="Vibes.mp3 — My Current Playlist">
          <div className="space-y-6">
            {tracks.map((track, index) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="bg-card/50 border border-border rounded-xl p-4 hover:border-primary/50 hover:shadow-lg transition-all overflow-hidden"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 bg-primary/20 -z-10"
                    style={{
                      left: `${10 + i * 20}%`,
                      height: '60px',
                      bottom: '20px',
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
                
                <iframe
                  src={track.embedUrl}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title={`Spotify track ${track.id}`}
                  className="rounded-lg"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
            className="mt-8 p-4 bg-primary/10 border border-primary/30 rounded-lg text-center"
          >
            <p className="text-foreground font-medium">
              🎵 <span className="text-primary">Pro tip:</span> Play these while exploring the rest of the site.
              Music makes everything better.
            </p>
          </motion.div>
        </Window>
      </div>
    </section>
  );
};

export default Vibes;
