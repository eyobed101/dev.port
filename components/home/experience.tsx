'use client'
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  index: number;
}

const ExperienceItem = ({
  title,
  company,
  period,
  description,
  technologies,
  index,
}: ExperienceItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      className="relative pl-8 not-last:pb-16 group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Animated timeline line */}
      <div className="absolute left-0 top-2.5 h-full w-[2px] bg-gradient-to-b from-primary/20 via-primary to-primary/20 group-first:h-[calc(100%-24px)] group-first:top-6">
        <motion.div
          className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background"
          whileHover={{ scale: 1.3, backgroundColor: "hsl(var(--primary))" }}
          transition={{ type: "spring", stiffness: 400 }}
        />
      </div>

      {/* Content with glass morphism effect */}
      <motion.div 
        className="space-y-4 p-6 rounded-xl bg-background/80 backdrop-blur-sm border border-border/20 shadow-sm hover:shadow-md transition-all"
        whileHover={{ y: -5 }}
      >
        <div className="flex items-center gap-3">
          <motion.div 
            className="flex-shrink-0 size-10 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center border border-border/20"
            whileHover={{ rotate: 10 }}
          >
            <Building2 className="size-5 text-primary" />
          </motion.div>
          <span className="text-lg font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            {company}
          </span>
        </div>
        
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
            <Calendar className="size-4" />
            <span>{period}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge 
              key={tech} 
              variant="outline"
              className="rounded-full border-primary/20 bg-background/50 hover:bg-primary/5"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2021 - Present",
      description:
        "Led the development of enterprise-scale web applications, mentored junior developers, and implemented best practices for code quality and performance optimization.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Inc",
      period: "2019 - 2021",
      description:
        "Developed and maintained multiple client projects, implemented responsive designs, and integrated third-party APIs for enhanced functionality.",
      technologies: ["React", "Express.js", "PostgreSQL", "Docker", "Redis"],
    },
    {
      title: "Frontend Developer",
      company: "WebTech Studios",
      period: "2018 - 2019",
      description:
        "Created responsive and interactive user interfaces, collaborated with designers, and optimized application performance.",
      technologies: ["React", "JavaScript", "SASS", "Webpack", "Jest"],
    },
  ];

  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  return (
    <section id="experience" className="relative py-28 px-6 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="max-w-screen-lg mx-auto relative z-10">
        <motion.div 
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Badge 
            variant="outline" 
            className="mb-4 bg-background/80 backdrop-blur-sm border-primary/20"
          >
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Professional Journey
            </span>
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            My <Typewriter
              words={['Experience', 'Career Path', 'Timeline']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional growth and key achievements
          </p>
        </motion.div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;