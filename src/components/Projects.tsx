import { motion } from 'framer-motion';
import { ExternalLink, Github, FileText, Globe } from 'lucide-react';

const Projects = () => {
  const sideProjects = [
    {
      title: "Uncredit",
      description: "Skyscanner for credit cards - helping users find the best credit card deals and offers",
      category: "Side Project",
      link: "https://uncredit.vercel.app/",
      icon: <Globe className="w-5 h-5" />,
      color: "text-blue-500"
    },
    {
      title: "Loan Genius", 
      description: "AI-powered platform that helps you find the best loan options tailored to your needs",
      category: "Side Project",
      link: "https://loan-genius-swart.vercel.app/",
      icon: <Globe className="w-5 h-5" />,
      color: "text-green-500"
    }
  ];

  const landingPages = [
    {
      title: "Riverline",
      description: "Custom designed landing page with modern UI/UX and smooth animations",
      category: "Landing Page",
      link: "https://riverline-ten.vercel.app/",
      icon: <Globe className="w-5 h-5" />,
      color: "text-purple-500"
    },
    {
      title: "Skairos",
      description: "Professional landing page showcasing innovative solutions and services",
      category: "Landing Page", 
      link: "https://www.skairos.net/",
      icon: <Globe className="w-5 h-5" />,
      color: "text-orange-500"
    },
    {
      title: "Travel Card Genius",
      description: "Specialized landing page for travel credit card recommendations and insights",
      category: "Landing Page",
      link: "https://travel-card-genius-aly-personal.vercel.app/",
      icon: <Globe className="w-5 h-5" />,
      color: "text-teal-500"
    }
  ];

  const caseStudies = [
    {
      title: "Demystifying Instagram's Magic",
      description: "Deep dive into the psychology and algorithms behind Instagram's user engagement and addiction mechanics",
      category: "Case Study",
      link: "https://kartikrawat.notion.site/Demystifying-Instagram-s-Magic-The-Secrets-Behind-Your-Screen-Addiction-a4a801f621cb4150b11580fee80e36e2",
      icon: <FileText className="w-5 h-5" />,
      color: "text-pink-500"
    },
    {
      title: "Zepto: Disruptive Journey",
      description: "Comprehensive case study analyzing Zepto's rapid growth and lessons for aspiring entrepreneurs",
      category: "Case Study",
      link: "https://kartikrawat.notion.site/Case-Study-Zepto-Disruptive-Journey-and-Lessons-for-Aspiring-Entrepreneurs-633157b65dca4b19a7735b3e33535dd5",
      icon: <FileText className="w-5 h-5" />,
      color: "text-red-500"
    }
  ];

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group relative"
    >
      <div className="bg-card/30 border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 h-full">
        <div className="flex items-start justify-between mb-4">
          <div className={`${project.color} text-2xl`}>
            {project.icon}
          </div>
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="w-5 h-5 text-primary" />
          </motion.a>
        </div>
        
        <div className="mb-3">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
            {project.category}
          </span>
        </div>
        
        <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          whileHover={{ x: 5 }}
        >
          View Project
          <ExternalLink className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 flex items-center justify-center gap-3"
          >
            <motion.span 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="text-terminal-green text-3xl sm:text-4xl"
            >
              ▸
            </motion.span> 
            Projects.build()
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-0.5 bg-gradient-to-r from-primary to-transparent ml-4"
            />
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base sm:text-lg lg:text-xl text-foreground/80 max-w-3xl mx-auto"
          >
            Here's some stuff I've been tinkering with! From side projects that actually solve real problems 
            to deep dives into what makes companies tick. Hope you find something interesting here! 😊
          </motion.p>
        </motion.div>

        {/* Side Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <h3 className="font-mono text-xl sm:text-2xl text-primary mb-6 sm:mb-8 flex items-center gap-3">
            <span className="text-terminal-green text-2xl">▸</span> 
            Side Projects
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "60%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="h-0.5 bg-gradient-to-r from-primary to-transparent ml-4"
            />
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {sideProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Landing Pages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <h3 className="font-mono text-xl sm:text-2xl text-primary mb-6 sm:mb-8 flex items-center gap-3">
            <span className="text-terminal-green text-2xl">▸</span> 
            Landing Pages
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "60%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="h-0.5 bg-gradient-to-r from-primary to-transparent ml-4"
            />
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {landingPages.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-8"
        >
          <h3 className="font-mono text-xl sm:text-2xl text-primary mb-6 sm:mb-8 flex items-center gap-3">
            <span className="text-terminal-green text-2xl">▸</span> 
            Case Studies
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "60%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="h-0.5 bg-gradient-to-r from-primary to-transparent ml-4"
            />
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {caseStudies.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10 border border-primary/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
              className="text-3xl mb-4"
            >
              🚀
            </motion.div>
            <h4 className="text-lg sm:text-xl font-semibold text-primary mb-3">
              Want to see more?
            </h4>
            <p className="text-foreground/80 mb-4 max-w-2xl mx-auto">
              This is just the tip of the iceberg! I'm always working on something new and 
              love diving deep into problems that actually matter to people.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Build Together
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
