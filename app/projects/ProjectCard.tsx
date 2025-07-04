'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from './_ops/_types';

interface ProjectCardProps {
  project: Project;
  index: number;
  setSelectedProject: (project: Project) => void;
}

export function ProjectCard({ project, index, setSelectedProject }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border/20 bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all"
    >
      {/* Project Image */}
      <div 
        className="relative h-64 overflow-hidden cursor-pointer"
        onClick={() => setSelectedProject(project)}
      >
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
            <span className="text-4xl">📁</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <h3 
          className="text-xl font-semibold mb-2 bg-gradient-to-b from-foreground to-foreground/80 bg-clip-text text-transparent cursor-pointer"
          onClick={() => setSelectedProject(project)}
        >
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge 
              key={tag.id} 
              variant="outline"
              className="rounded-full border-primary/20 bg-background/50 hover:bg-primary/5"
            >
              {tag.name}
            </Badge>
          ))}
          {project.tags.length > 3 && (
            <Badge variant="outline" className="rounded-full border-primary/20 bg-background/50">
              +{project.tags.length - 3}
            </Badge>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          <Button 
            variant="outline" 
            className="rounded-full"
            onClick={() => setSelectedProject(project)}
          >
            View Details
          </Button>
          {project.projectUrl && (
            <Button 
              variant="default" 
              className="rounded-full shadow-lg hover:shadow-primary/20"
              asChild
            >
              <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}