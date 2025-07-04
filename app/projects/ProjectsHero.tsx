'use client';

import { Typewriter } from 'react-simple-typewriter';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

export function ProjectsHero() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-background to-muted/10 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge 
            variant="outline" 
            className="mb-4 bg-background/80 backdrop-blur-sm border-primary/20"
          >
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Portfolio
            </span>
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            My <Typewriter
              words={['Projects', 'Work', 'Creations', 'Case Studies']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore a collection of my professional projects and personal experiments
          </p>
        </motion.div>
      </div>
    </section>
  );
}