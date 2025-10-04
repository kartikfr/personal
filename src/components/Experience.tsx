import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Window from './Window';

interface Job {
  id: number;
  company: string;
  role: string;
  period: string;
  isCurrent: boolean;
  badge?: string;
  description?: string;
  highlights: string[];
  techStack: string[];
  color: string;
}

const Experience = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const jobs: Job[] = [
    {
      id: 1,
      company: "CashKaro",
      role: "Entrepreneur-in-Residence (EIR)",
      period: "July 2025 – Present",
      isCurrent: true,
      highlights: [
        "1CR+ Revenue Impact: Built 4+ product MVPs in 8 weeks",
        "Full-Stack Product Delivery: End-to-end ownership",
        "Cross-Functional Leadership: Managed 5+ stakeholders"
      ],
      techStack: ["Figma", "Cursor", "Lovable", "Jira", "SQL"],
      color: "hsl(180 100% 50%)"
    },
    {
      id: 2,
      company: "FitFeast",
      role: "Entrepreneur-in-Residence (EIR)",
      period: "July 2024 – July 2025",
      isCurrent: false,
      badge: "🦈 Shark Tank Season 4",
      description: "India's Taste-First Protein Brand",
      highlights: [
        "500% Revenue Growth: Led end-to-end ad campaigns",
        "45% ROAS Boost: Revamped ad angles & packaging",
        "41% RTO Drop | 68% Prepaid Surge",
        "1Cr+ PO Managed | 30% Lower Ops Cost",
        "100,000+ Customers Served"
      ],
      techStack: ["Meta Ads", "Figma", "A/B Testing", "Excel", "Zepto", "Amazon FBA"],
      color: "hsl(250 65% 65%)"
    },
    {
      id: 3,
      company: "UNTRADE",
      role: "Product Manager",
      period: "January 2024 – July 2024",
      isCurrent: false,
      description: "Automated Crypto Trading Platform",
      highlights: [
        "300+ Beta Testers | $80K+ AUM",
        "Led 7+ Cross-Functional Team",
        "Owned UX, Tech & Ops",
        "Launched 'Create & Earn' Program: 400+ quants"
      ],
      techStack: ["Figma", "Jira", "Tableau", "SQL"],
      color: "hsl(160 100% 55%)"
    },
    {
      id: 4,
      company: "Fanperk",
      role: "Co-Founder & CEO",
      period: "December 2021 – August 2022",
      isCurrent: false,
      description: "Token-Gated Social Media Platform",
      highlights: [
        "4L Seed Raised | 10+ B-Plan Wins",
        "52+ Creator Interviews",
        "Pitched to Top Investors"
      ],
      techStack: ["Figma", "Wireframing", "GTM Strategy"],
      color: "hsl(45 100% 50%)"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-4xl md:text-5xl font-bold text-primary mb-4"
        >
          <span className="text-terminal-green">&gt;</span> Experience.timeline
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-foreground/80 mb-12"
        >
          From idea to execution, here's my journey building 0→1 products.
        </motion.p>

        <Window title="Experience.timeline — Career Path">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border md:left-8" />
            
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-12 pb-12 md:pl-20"
              >
                <div
                  className="absolute left-2.5 w-3 h-3 rounded-full border-2 border-background md:left-6.5"
                  style={{ backgroundColor: job.color }}
                />
                
                <div
                  className="bg-card border rounded-lg p-6 hover:border-primary/50 transition-all cursor-pointer"
                  onClick={() => setExpandedId(expandedId === job.id ? null : job.id)}
                  style={{ borderColor: expandedId === job.id ? job.color : undefined }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold" style={{ color: job.color }}>
                        {job.company}
                      </h3>
                      {job.badge && (
                        <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                          {job.badge}
                        </span>
                      )}
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        expandedId === job.id ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  
                  <p className="text-lg font-semibold text-foreground mb-1">{job.role}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {job.period}
                    {job.isCurrent && <span className="ml-2 text-terminal-green">● Active</span>}
                  </p>
                  {job.description && (
                    <p className="text-sm text-foreground/70 mb-4">{job.description}</p>
                  )}

                  <AnimatePresence>
                    {expandedId === job.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-border">
                          <h4 className="font-semibold mb-3 text-primary">Key Achievements:</h4>
                          <ul className="space-y-2 mb-4">
                            {job.highlights.map((highlight, i) => (
                              <li key={i} className="text-sm text-foreground/80 flex items-start">
                                <span className="text-primary mr-2">▸</span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                          
                          <h4 className="font-semibold mb-2 text-primary">Tech Stack:</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.techStack.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-muted text-foreground text-xs rounded-full border border-border"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </Window>
      </div>
    </section>
  );
};

export default Experience;
