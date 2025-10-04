import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Window from './Window';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-4xl md:text-5xl font-bold text-primary mb-4"
        >
          <span className="text-terminal-green">&gt;</span> Contact.txt
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-foreground/80 mb-12"
        >
          Let's Connect
        </motion.p>

        <Window title="Contact.txt — Let's Build Something Together">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-lg"
            >
              <p className="text-terminal-green mb-2">&gt; Ready to build something?</p>
              <p className="text-terminal-green mb-6">&gt; Let's connect._</p>
              
              <p className="text-foreground/80 mb-4">I'm always open to discussing:</p>
              <ul className="space-y-2 ml-4 text-foreground/70">
                <li>• Product ideas & startup opportunities</li>
                <li>• Collaboration on 0→1 projects</li>
                <li>• Speaking at events or podcasts</li>
                <li>• Just having a conversation about building great products</li>
              </ul>
            </motion.div>

            <div className="border-t border-border pt-8">
              <h3 className="font-semibold text-xl mb-6 text-primary">Contact Methods:</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <motion.a
                  href="mailto:kartikrawat2912@gmail.com"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-all group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>kartikrawat2912@gmail.com</span>
                </motion.a>

                <motion.a
                  href="tel:+919058010369"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-all group"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>+91-9058010369</span>
                </motion.a>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  asChild
                  variant="outline"
                  className="gap-2 border-primary text-primary hover:bg-primary/10 hover:border-primary/80 transition-all"
                >
                  <a href="https://linkedin.com/in/kartikrawatt" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                    Connect on LinkedIn
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="gap-2 border-accent text-accent hover:bg-accent/10 hover:border-accent/80 transition-all"
                >
                  <a href="/resume/Trial_Resume___28_sep.pdf" download>
                    <FileDown className="w-4 h-4" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="border-t border-border pt-8 text-center text-sm text-muted-foreground"
            >
              <p className="mb-2">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
              <p className="mb-1">Built with ❤️ using React & Framer Motion</p>
              <p className="mb-1">© 2025 Kartik Rawat. All rights reserved.</p>
              <p className="text-primary">Designed to inspire. Built to impress.</p>
            </motion.div>
          </div>
        </Window>
      </div>
    </section>
  );
};

export default Contact;
