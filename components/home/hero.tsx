'use client'

import AnimatedGridPattern from "@/components/ui/shadcn-io/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleArrowDown, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { BackgroundBeams } from "../ui/background-beams";


const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden">
      {/* Animated background */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.05}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
      />

      {/* Glass morphism overlay */}
      <div className="absolute inset-0 backdrop-blur-[2px] pointer-events-none" />

      <div className="relative z-[1] text-center max-w-screen-md">
        {/* Profile picture floating above */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="absolute -top-24 left-1/2 -translate-x-1/2"
        >
          <Avatar className="w-24 h-24 border-4 border-background/80 shadow-lg">
            <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </motion.div>

        {/* Badge with animation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Badge
            variant="outline"
            className="rounded-full bg-background/80 backdrop-blur-sm border-primary/20"
          >
            <Zap className="w-4 h-6 mr-2 text-primary" />
            <span className="text-primary/90">Fullstack Web Developer</span>
          </Badge>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.15] tracking-tight bg-gradient-to-b from-foreground to-foreground/80 bg-clip-text text-transparent"
        >
          Building <span className="text-primary">Scalable</span> &<br />
          Engaging Web Experiences
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-lg md:text-xl text-foreground/80 max-w-[600px] mx-auto"
        >
          Hey there! I'm John Doe, a Full Stack Developer who specializes in
          creating performant, accessible digital experiences. With expertise in
          modern web technologies, I bridge design and functionality to deliver
          exceptional results.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="rounded-full text-base px-8 shadow-lg hover:shadow-primary/20 transition-all"
          >
            Explore My Work
            <CircleArrowDown className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base px-8 border-primary/20 bg-background/80 backdrop-blur-sm"
          >
            Contact Me
          </Button>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <CircleArrowDown className="h-6 w-6 text-foreground/50" />
      </motion.div>
      <BackgroundBeams />

    </div>
  );
};

export default Hero;