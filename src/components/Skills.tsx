import { motion } from 'framer-motion';
import Window from './Window';

interface Skill {
  name: string;
  icon: string;
  description: string;
}

const Skills = () => {
  const skillCategories = {
    productStrategy: [
      { name: "MVP Development", icon: "📦", description: "Building products from 0→1" },
      { name: "Go-To-Market", icon: "📊", description: "GTM strategy & execution" },
      { name: "Wireframing", icon: "✏️", description: "UX/UI design foundations" },
      { name: "Product Metrics", icon: "📈", description: "Data-driven decisions" },
      { name: "UX Audit", icon: "🎨", description: "User experience optimization" },
      { name: "Finding PMF", icon: "🎯", description: "Product-market fit discovery" }
    ],
    growthMarketing: [
      { name: "Meta Ads", icon: "📱", description: "Facebook & Instagram advertising" },
      { name: "A/B Testing", icon: "⚡", description: "Experimentation & optimization" },
      { name: "CRO", icon: "📊", description: "Conversion rate optimization" },
      { name: "CAC/ROAS", icon: "💰", description: "Performance tracking" }
    ],
    toolsTech: [
      { name: "Figma", icon: "🎨", description: "Design & prototyping" },
      { name: "Cursor", icon: "💻", description: "AI-assisted development" },
      { name: "Lovable", icon: "⚡", description: "Rapid prototyping" },
      { name: "Jira", icon: "📋", description: "Project management" },
      { name: "SQL", icon: "🗄️", description: "Database queries" },
      { name: "Excel", icon: "📊", description: "Data analysis" }
    ],
    softSkills: [
      { name: "Strategic Thinking", icon: "🧠", description: "First principles approach" },
      { name: "Team Leadership", icon: "👥", description: "Building & managing teams" },
      { name: "Storytelling", icon: "📖", description: "Narrative & communication" },
      { name: "First Principles", icon: "💡", description: "Problem-solving mindset" }
    ]
  };

  const SkillCard = ({ skill, delay }: { skill: Skill; delay: number }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.3 }}
      whileHover={{ scale: 1.05, borderColor: 'hsl(var(--primary))' }}
      className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-all"
    >
      <div className="text-4xl mb-3">{skill.icon}</div>
      <h4 className="font-semibold text-foreground mb-1">{skill.name}</h4>
      <p className="text-sm text-muted-foreground">{skill.description}</p>
    </motion.div>
  );

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4"
        >
          <span className="text-terminal-green">&gt;</span> Skills.json
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-foreground/80 mb-8 sm:mb-12"
        >
          Here's what I've got in my arsenal for bringing ideas to life! 🛠️
        </motion.p>

        <Window title="Skills.json — Technical & Strategic Capabilities">
          {/* Desktop Layout */}
          <div className="hidden md:block space-y-12">
            <div>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-mono text-2xl text-primary mb-6 flex items-center gap-3"
              >
                <motion.span 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="text-terminal-green text-3xl"
                >
                  ▸
                </motion.span> 
                Product Strategy
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="h-0.5 bg-gradient-to-r from-primary to-transparent ml-4"
                />
              </motion.h3>
              <div className="grid grid-cols-3 lg:grid-cols-5 gap-6">
                {skillCategories.productStrategy.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, type: "spring", stiffness: 100 }}
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: 5,
                      transition: { duration: 0.2 }
                    }}
                    className="group relative"
                  >
                    <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-xl p-6 hover:border-primary/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{skill.name}</h4>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">{skill.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-mono text-2xl text-secondary mb-6 flex items-center gap-3"
              >
                <motion.span 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="text-terminal-green text-3xl"
                >
                  ▸
                </motion.span> 
                Growth & Marketing
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="h-0.5 bg-gradient-to-r from-secondary to-transparent ml-4"
                />
              </motion.h3>
              <div className="grid grid-cols-4 gap-6">
                {skillCategories.growthMarketing.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.4, type: "spring", stiffness: 100 }}
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: 5,
                      transition: { duration: 0.2 }
                    }}
                    className="group relative"
                  >
                    <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/30 rounded-xl p-6 hover:border-secondary/60 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">{skill.name}</h4>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">{skill.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-mono text-2xl text-accent mb-6 flex items-center gap-3"
              >
                <motion.span 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                  className="text-terminal-green text-3xl"
                >
                  ▸
                </motion.span> 
                Tools & Tech
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="h-0.5 bg-gradient-to-r from-accent to-transparent ml-4"
                />
              </motion.h3>
              <div className="grid grid-cols-3 lg:grid-cols-6 gap-6">
                {skillCategories.toolsTech.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.5, type: "spring", stiffness: 100 }}
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: 5,
                      transition: { duration: 0.2 }
                    }}
                    className="group relative"
                  >
                    <div className="bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 rounded-xl p-6 hover:border-accent/60 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">{skill.name}</h4>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">{skill.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="font-mono text-2xl text-foreground mb-6 flex items-center gap-3"
              >
                <motion.span 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className="text-terminal-green text-3xl"
                >
                  ▸
                </motion.span> 
                Soft Skills
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="h-0.5 bg-gradient-to-r from-foreground to-transparent ml-4"
                />
              </motion.h3>
              <div className="grid grid-cols-4 gap-6">
                {skillCategories.softSkills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.6, type: "spring", stiffness: 100 }}
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: 5,
                      transition: { duration: 0.2 }
                    }}
                    className="group relative"
                  >
                    <div className="bg-gradient-to-br from-muted/30 to-muted/10 border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{skill.name}</h4>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">{skill.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Enhanced Layout */}
          <div className="md:hidden space-y-8">
            {/* Product Strategy - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring" }}
              className="relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5 rounded-2xl" />
              <div className="relative bg-card/40 border border-primary/20 rounded-2xl p-6 backdrop-blur-sm">
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="font-mono text-lg text-primary mb-4 flex items-center gap-2"
                >
                  <motion.span 
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="text-terminal-green text-xl"
                  >
                    ▸
                  </motion.span> 
                  Product Strategy
                </motion.h3>
                <div className="grid grid-cols-2 gap-3">
                  {skillCategories.productStrategy.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-primary/10 border border-primary/20 rounded-xl p-3 hover:bg-primary/20 transition-all"
                    >
                      <div className="text-2xl mb-2">{skill.icon}</div>
                      <div className="text-sm font-medium text-primary">{skill.name}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Growth & Marketing - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6, type: "spring" }}
              className="relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-transparent to-secondary/5 rounded-2xl" />
              <div className="relative bg-card/40 border border-secondary/20 rounded-2xl p-6 backdrop-blur-sm">
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="font-mono text-lg text-secondary mb-4 flex items-center gap-2"
                >
                  <motion.span 
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="text-terminal-green text-xl"
                  >
                    ▸
                  </motion.span> 
                  Growth & Marketing
                </motion.h3>
                <div className="grid grid-cols-2 gap-3">
                  {skillCategories.growthMarketing.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.1, type: "spring" }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-secondary/10 border border-secondary/20 rounded-xl p-3 hover:bg-secondary/20 transition-all"
                    >
                      <div className="text-2xl mb-2">{skill.icon}</div>
                      <div className="text-sm font-medium text-secondary">{skill.name}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Tools & Tech - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
              className="relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/5 rounded-2xl" />
              <div className="relative bg-card/40 border border-accent/20 rounded-2xl p-6 backdrop-blur-sm">
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="font-mono text-lg text-accent mb-4 flex items-center gap-2"
                >
                  <motion.span 
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="text-terminal-green text-xl"
                  >
                    ▸
                  </motion.span> 
                  Tools & Tech
                </motion.h3>
                <div className="grid grid-cols-2 gap-3">
                  {skillCategories.toolsTech.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-accent/10 border border-accent/20 rounded-xl p-3 hover:bg-accent/20 transition-all"
                    >
                      <div className="text-2xl mb-2">{skill.icon}</div>
                      <div className="text-sm font-medium text-accent">{skill.name}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Soft Skills - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
              className="relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-2xl" />
              <div className="relative bg-card/40 border border-border rounded-2xl p-6 backdrop-blur-sm">
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="font-mono text-lg text-foreground mb-4 flex items-center gap-2"
                >
                  <motion.span 
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="text-terminal-green text-xl"
                  >
                    ▸
                  </motion.span> 
                  Soft Skills
                </motion.h3>
                <div className="grid grid-cols-2 gap-3">
                  {skillCategories.softSkills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3, type: "spring" }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-muted/20 border border-border rounded-xl p-3 hover:bg-primary/10 hover:border-primary/30 transition-all"
                    >
                      <div className="text-2xl mb-2">{skill.icon}</div>
                      <div className="text-sm font-medium text-foreground">{skill.name}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-8 p-4 bg-muted/30 border border-border rounded-lg font-mono text-sm"
          >
            <p className="text-muted-foreground">
              <span className="text-terminal-green">//</span> Continuously learning and adapting. 
              My superpower? Picking up new tools and frameworks at lightning speed. 🚀
            </p>
          </motion.div>
        </Window>
      </div>
    </section>
  );
};

export default Skills;
