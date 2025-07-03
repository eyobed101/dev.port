'use client'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download, Github } from "lucide-react";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      {/* Floating background elements */}
      <motion.div 
        className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
        animate={{
          x: [0, 20, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-20 w-72 h-72 rounded-full bg-secondary/10 blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-screen-xl mx-auto">
        <motion.div 
          ref={ref}
          className="flex flex-col lg:flex-row-reverse gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Profile Image with fancy effects */}
          <motion.div variants={itemVariants}>
            <ProfileImage className="hidden lg:block" />
          </motion.div>

          {/* Content */}
          <motion.div 
            className="flex-1 lg:text-left"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Badge 
                variant="outline" 
                className="mb-6 bg-background/80 backdrop-blur-sm border-primary/20"
              >
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  About Me
                </span>
              </Badge>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <ProfileImage className="mt-3 mb-8 block lg:hidden" />
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-b from-foreground to-foreground/80 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Passionate about creating{' '}
              <span className="relative inline-block">
                <span className="relative z-10">
                  <Typewriter
                    words={['impactful', 'beautiful', 'scalable', 'innovative']}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
              </span>{' '}
              web experiences
            </motion.h2>

            <motion.p 
              className="text-lg text-muted-foreground mb-8 text-justify lg:text-left leading-relaxed"
              variants={itemVariants}
            >
              With over 5 years of experience in full-stack development, I
              specialize in building scalable web applications using modern
              technologies. My expertise includes React, Node.js, and cloud
              architecture. I'm passionate about creating elegant solutions
              to complex problems and sharing knowledge with the developer
              community.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <Button 
                className="rounded-full px-8 shadow-lg hover:shadow-primary/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="mr-2 h-5 w-5" />
                View Github
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full px-8 border-primary/20 bg-background/80 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ProfileImage = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <motion.div
    className={cn(
      "relative w-56 h-56 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-4 border-background shadow-2xl",
      className
    )}
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    {...props}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
    <Image 
      src="/profile.jpg" // Replace with your image
      alt="Profile picture"
      fill
      className="object-cover object-top"
    />
    {/* Glow effect */}
    <div className="absolute inset-0 shadow-[inset_0_0_30px_10px_rgba(125,211,252,0.3)]" />
  </motion.div>
);

export default About;