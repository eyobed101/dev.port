'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import About from "@/components/home/about";
import { FeaturedBlogs } from "@/components/home/blogs";
import Experience from "@/components/home/experience";
import Hero from "@/components/home/hero";
import Projects from "@/components/home/projects";
import { TestimonialsSection } from "@/components/home/testimonials";
import ServicesSection from "@/components/home/services";
import { ContactForm } from "@/components/home/contact-form";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animate gradient positions based on scroll
  const gradientX = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const gradientY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const gradientRotation = useTransform(scrollYProgress, [0, 1], [0, 15]);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(
              circle at ${gradientX}% ${gradientY}%,
              hsl(var(--primary)/15%),
              transparent 70%
            ),
            radial-gradient(
              circle at calc(100% - ${gradientX}%) calc(100% - ${gradientY}%),
              hsl(var(--secondary)/15%),
              transparent 70%
            ),
            linear-gradient(
              ${gradientRotation}deg,
              hsl(var(--background)) 0%,
              hsl(var(--background)/98%) 50%,
              hsl(var(--background)) 100%
            )
          `,
          backgroundBlendMode: "overlay",
          backdropFilter: "blur(120px)",
          transform: "translate3d(0,0,0)" // GPU acceleration
        }}
      />

      {/* Content */}
      <div className="space-y-10 sm:space-y-16 relative z-10">
        <Hero />
        <About />
        <Experience />
        <ServicesSection />
        <Projects />
        <FeaturedBlogs />
        <TestimonialsSection />
        <ContactForm />
      </div>

      {/* Subtle floating particles */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              opacity: Math.random() * 0.2 + 0.1
            }}
            animate={{
              x: [null, Math.random() * 100],
              y: [null, Math.random() * 100],
              transition: {
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}