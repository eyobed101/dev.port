'use client'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  index: number;
}

const TestimonialCard = ({
  name,
  role,
  company,
  content,
  rating,
  image,
  index,
}: TestimonialCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      className="group relative flex flex-col p-8 rounded-2xl border border-border/20 bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Rating Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Star
              className={`h-5 w-5 ${i < rating ? "fill-primary text-primary" : "text-muted-foreground/20"}`}
            />
          </motion.div>
        ))}
      </div>

      {/* Testimonial Content */}
      <p className="text-lg italic text-muted-foreground mb-6 relative">
        <span className="absolute -top-4 -left-4 text-4xl text-primary/20">"</span>
        {content}
        <span className="absolute -bottom-4 -right-4 text-4xl text-primary/20">"</span>
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/20">
        <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-primary/20">
          <Image 
            src={image} 
            alt={name} 
            fill 
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
          <p className="text-sm text-primary/80">{company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Chief Technology Officer",
      company: "TechCorp Solutions",
      content: "Working with this developer was transformative for our project. Their technical expertise and problem-solving skills helped us deliver a complex application ahead of schedule while maintaining exceptional quality standards.",
      rating: 5,
      image: "/testimonial-1.jpg",
    },
    {
      name: "Michael Chen",
      role: "Product Director",
      company: "InnovateX",
      content: "The level of professionalism and attention to detail was outstanding. They consistently delivered beyond our expectations, providing innovative solutions to our most challenging technical problems.",
      rating: 5,
      image: "/testimonial-2.jpg",
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Designer",
      company: "CreativeCo Studio",
      content: "Rarely do you find a developer who understands both technical implementation and design systems so thoroughly. They brought our vision to life with pixel-perfect precision while suggesting technical improvements.",
      rating: 4,
      image: "/testimonial-3.jpg",
    },
  ];

  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  return (
    <section className="relative py-28 px-6 overflow-hidden bg-gradient-to-b from-background to-secondary/5">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"
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
              Client Testimonials
            </span>
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            What <Typewriter
              words={['Clients Say', 'Colleagues Share', 'Partners Think', 'Teams Experience']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feedback from professionals I've had the privilege to work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isTitleInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <Button 
            variant="outline" 
            className="rounded-full border-primary/20 bg-background/80 backdrop-blur-sm px-8"
            asChild
          >
            <a href="/testimonials" className="flex items-center gap-2">
              View All Testimonials
              <ChevronRight className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};