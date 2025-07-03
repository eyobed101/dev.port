'use client'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  index,
}: ProjectCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border/20 bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Project Image with Glow Effect */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
        <div className="absolute inset-0 shadow-[inset_0_0_30px_10px_rgba(125,211,252,0.1)]" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-semibold mb-2 bg-gradient-to-b from-foreground to-foreground/80 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
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

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button 
                variant="default" 
                className="rounded-full shadow-lg hover:shadow-primary/20"
                asChild
              >
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            </motion.div>
          )}
          {githubUrl && (
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                variant="outline"
                className="rounded-full border-primary/20 bg-background/80 backdrop-blur-sm"
                asChild
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
      image: "/project1.jpg",
      technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/username/ecommerce",
    },
    {
      title: "AI Task Manager",
      description:
        "Smart task management app that uses AI to categorize, prioritize, and suggest optimal task scheduling.",
      image: "/project2.jpg",
      technologies: ["React", "Python", "TensorFlow", "FastAPI", "MongoDB"],
      liveUrl: "https://ai-taskmanager.com",
      githubUrl: "https://github.com/username/ai-taskmanager",
    },
    {
      title: "Real-time Chat Application",
      description:
        "Feature-rich chat application with real-time messaging, file sharing, and video calls.",
      image: "/project3.jpg",
      technologies: ["React", "Socket.io", "WebRTC", "Node.js", "Redis"],
      liveUrl: "https://chatapp-demo.com",
      githubUrl: "https://github.com/username/chat-app",
    },
    {
      title: "AI Image Generator",
      description:
        "An AI image generator that uses a model to generate images based on a prompt.",
      image: "/project4.jpg",
      technologies: ["React", "Next.js", "Tailwind CSS", "Shadcn UI"],
      liveUrl: "https://ai-image-generator.com",
      githubUrl: "https://github.com/username/ai-image-generator",
    },
  ];

  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="max-w-screen-xl mx-auto relative z-10">
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
              Featured Work
            </span>
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            My <Typewriter
              words={['Projects', 'Creations', 'Work', 'Portfolio']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing some of my best projects and technical achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;