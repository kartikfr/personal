import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, FileDown, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Window from './Window';

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4"
        >
          <span className="text-terminal-green">&gt;</span> Contact.txt
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-foreground/80 mb-8 sm:mb-12"
        >
          Let's Connect
        </motion.p>

        <Window title="Contact.txt — Let's Build Something Together">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-base sm:text-lg"
            >
              <p className="text-terminal-green mb-2">&gt; Ready to build something?</p>
              <p className="text-terminal-green mb-4 sm:mb-6">&gt; Let's connect._</p>
              
              <p className="text-foreground/80 mb-3 sm:mb-4">I'm always down to chat about:</p>
              <ul className="space-y-1 sm:space-y-2 ml-4 text-foreground/70 text-sm sm:text-base mb-6 sm:mb-8">
                <li>• Cool product ideas and startup stuff</li>
                <li>• Building things from scratch together</li>
                <li>• Podcasts, events, or just random conversations</li>
                <li>• Honestly, anything related to making awesome products!</li>
              </ul>

              {/* Book a Meeting Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10 border border-primary/20 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8"
              >
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                    className="text-2xl sm:text-3xl mb-3"
                  >
                    📅
                  </motion.div>
                  <h4 className="text-lg sm:text-xl font-semibold text-primary mb-2">
                    Book a Meeting
                  </h4>
                  <p className="text-foreground/80 text-sm sm:text-base mb-4">
                    Let's grab a virtual coffee and talk about whatever's on your mind - whether it's product ideas, startup life, or just shooting the breeze!
                  </p>
                  <motion.a
                    href="https://calendly.com/kartikrawat2912/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Calendar className="w-4 h-4" />
                    Book a 30-min Call
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            <div className="border-t border-border pt-6 sm:pt-8">
              <h3 className="font-semibold text-lg sm:text-xl mb-4 sm:mb-6 text-primary">Contact Methods:</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <motion.a
                  href="mailto:kartikrawat2912@gmail.com"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-all group text-sm sm:text-base"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="truncate">kartikrawat2912@gmail.com</span>
                </motion.a>

                <motion.a
                  href="tel:+919058010369"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-all group text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span>+91-9058010369</span>
                </motion.a>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <Button
                  asChild
                  variant="outline"
                  className="gap-2 border-primary text-primary hover:bg-primary/10 hover:border-primary/80 transition-all h-10 sm:h-auto"
                >
                  <a href="https://calendly.com/kartikrawat2912/30min" target="_blank" rel="noopener noreferrer">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm sm:text-base">Book a Call</span>
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="gap-2 border-secondary text-secondary hover:bg-secondary/10 hover:border-secondary/80 transition-all h-10 sm:h-auto"
                >
                  <a href="https://linkedin.com/in/kartikrawatt" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                    <span className="text-sm sm:text-base">Connect on LinkedIn</span>
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="gap-2 border-accent text-accent hover:bg-accent/10 hover:border-accent/80 transition-all h-10 sm:h-auto"
                >
                  <a href="/resume/Trial_Resume___28_sep.pdf" download>
                    <FileDown className="w-4 h-4" />
                    <span className="text-sm sm:text-base">Download Resume</span>
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
              <p className="mb-3 text-foreground/90 leading-relaxed">
                If you've come this far, thank you from the bottom of my heart! 💙
              </p>
              <p className="mb-3 text-foreground/80 leading-relaxed">
                I'd love to talk about <span className="text-primary font-medium">products</span>, 
                <span className="text-primary font-medium"> AI</span>, 
                <span className="text-primary font-medium"> DHH (Desi Hip Hop)</span>, 
                and <span className="text-primary font-medium">gym life</span>. 
                Seriously, hit me up anytime!
              </p>
              <p className="text-primary font-medium">
                Let's build something amazing together! 🚀
              </p>
            </motion.div>
          </div>
        </Window>
      </div>
    </section>
  );
};

export default Contact;

