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
      { name: "UX Audit", icon: "🎨", description: "User experience optimization" }
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
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-4xl md:text-5xl font-bold text-primary mb-4"
        >
          <span className="text-terminal-green">&gt;</span> Skills.json
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-foreground/80 mb-12"
        >
          My toolkit for turning ideas into reality.
        </motion.p>

        <Window title="Skills.json — Technical & Strategic Capabilities">
          <div className="space-y-10">
            <div>
              <h3 className="font-mono text-xl text-primary mb-4 flex items-center gap-2">
                <span className="text-terminal-green">▸</span> Product Strategy
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {skillCategories.productStrategy.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} delay={i * 0.1} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-mono text-xl text-secondary mb-4 flex items-center gap-2">
                <span className="text-terminal-green">▸</span> Growth & Marketing
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skillCategories.growthMarketing.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} delay={i * 0.1} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-mono text-xl text-accent mb-4 flex items-center gap-2">
                <span className="text-terminal-green">▸</span> Tools & Tech
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                {skillCategories.toolsTech.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} delay={i * 0.1} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-mono text-xl text-foreground mb-4 flex items-center gap-2">
                <span className="text-terminal-green">▸</span> Soft Skills
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skillCategories.softSkills.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} delay={i * 0.1} />
                ))}
              </div>
            </div>
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
