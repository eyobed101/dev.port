'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { X, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Project } from './_ops/_types';
import Link from 'next/link';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 30 }}
          className="relative bg-background rounded-xl border border-border/20 shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 rounded-full p-2 hover:bg-muted transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-8 p-6">
            {/* Media Section */}
            <div className="space-y-4">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-muted/50">
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-4xl">📁</span>
                  </div>
                )}
              </div>

              {project.videoUrl && (
                <div className="relative aspect-video rounded-lg overflow-hidden bg-muted/50">
                  <video
                    src={project.videoUrl}
                    controls
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                {project.category && (
                  <Badge variant="outline" className="mb-4">
                    {project.category.name}
                  </Badge>
                )}
                <p className="text-muted-foreground">{project.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Project Details</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Client</p>
                    <p>{project.client || 'Personal Project'}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Timeline</p>
                    <p>
                      {project.startDate?.toLocaleDateString() || 'N/A'} -{' '}
                      {project.endDate?.toLocaleDateString() || 'Present'}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <Badge 
                      key={skill.id} 
                      variant="outline"
                      className="bg-background/50 border-primary/20"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag.id} 
                      variant="secondary"
                    >
                      {tag.name}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                {project.projectUrl && (
                  <Button asChild>
                    <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live
                    </Link>
                  </Button>
                )}
                {project.sourceUrl && (
                  <Button variant="outline" asChild>
                    <Link href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Project Content */}
          {project.content && (
            <div className="p-6 border-t border-border/20">
              <div
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: project.content }}
              />
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}