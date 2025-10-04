import Window from './Window';
import { motion } from 'framer-motion';

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
    <section id="impact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-4xl md:text-5xl font-bold text-primary mb-4"
        >
          <span className="text-terminal-green">&gt;</span> Impact.log
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-foreground/80 mb-12 max-w-3xl"
        >
          Real results from the trenches. Here's what I've been building, shipping, and learning—documented in real-time.
        </motion.p>

        <Window title="Impact.log — Recent Updates">
          <div className="grid md:grid-cols-3 gap-6">
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
