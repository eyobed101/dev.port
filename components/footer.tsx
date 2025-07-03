'use client'

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const FancyFooter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <footer className="relative bg-background/90 backdrop-blur-sm border-t border-border/20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute bottom-0 left-1/2 w-[200%] h-32 bg-gradient-to-t from-primary/5 to-transparent -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        />
      </div>

      <motion.div
        ref={ref}
        className="container py-16 px-6 mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                About Me
              </span>
              <Badge variant="outline" className="border-primary/20">
                Available
              </Badge>
            </h3>
            <p className="text-muted-foreground mb-4">
              Full-stack developer passionate about creating beautiful, functional digital experiences.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="rounded-full border-primary/20" asChild>
                <a href="https://github.com" target="_blank" rel="noopener">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-primary/20" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-primary/20" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Links Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Experience", href: "#experience" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                "Web Development",
                "UI/UX Design",
                "Mobile Applications",
                "API Development",
                "Technical Consulting",
              ].map((service) => (
                <li key={service}>
                  <div className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 text-primary" />
                <div>
                  <p className="text-muted-foreground">Email</p>
                  <a href="mailto:hello@example.com" className="hover:text-primary transition-colors">
                    hello@example.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 text-primary" />
                <div>
                  <p className="text-muted-foreground">Phone</p>
                  <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-primary" />
                <div>
                  <p className="text-muted-foreground">Location</p>
                  <p>San Francisco, CA</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};