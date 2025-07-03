'use client'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  slug: string;
  index: number;
}

const BlogCard = ({
  title,
  excerpt,
  date,
  readTime,
  image,
  tags,
  slug,
  index,
}: BlogCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      className="group relative flex flex-col h-full overflow-hidden rounded-2xl border border-border/20 bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Blog Image with Gradient Overlay */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <div className="absolute top-4 right-4 flex gap-2">
          {tags.slice(0, 2).map((tag) => (
            <motion.div
              key={tag}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Badge 
                variant="outline"
                className="rounded-full border-primary/30 bg-background/50 backdrop-blur-sm"
              >
                {tag}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <MessageCircle className="h-4 w-4" />
            <span>{readTime}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3 bg-gradient-to-b from-foreground to-foreground/90 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-muted-foreground mb-5 line-clamp-2">{excerpt}</p>

        <div className="mt-auto">
          <Button 
            variant="link" 
            className="px-0 text-primary group-hover:text-primary/80 transition-colors"
            asChild
          >
            <a href={`/blog/${slug}`} className="flex items-center gap-1">
              Read Article
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export const FeaturedBlogs = () => {
  const featuredBlogs = [
    {
      title: "Modern Web Development in 2024",
      excerpt: "Exploring the latest trends and technologies shaping the future of web development and how to stay ahead of the curve with practical examples and code snippets.",
      date: "May 15, 2024",
      readTime: "5 min read",
      image: "/blog-tech.jpg",
      tags: ["Web Dev", "Trends", "JavaScript"],
      slug: "modern-web-dev-2024",
    },
    {
      title: "Optimizing React Performance",
      excerpt: "Practical techniques to significantly improve your React application's performance and user experience with real-world benchmarks and optimization strategies.",
      date: "April 28, 2024",
      readTime: "8 min read",
      image: "/blog-react.jpg",
      tags: ["React", "Performance", "Frontend"],
      slug: "optimizing-react-performance",
    },
    {
      title: "The Power of TypeScript",
      excerpt: "How adopting TypeScript can transform your development workflow and reduce bugs in production with type safety and better developer experience.",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: "/blog-typescript.jpg",
      tags: ["TypeScript", "Best Practices"],
      slug: "power-of-typescript",
    },
  ];

  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
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
              Featured Articles
            </span>
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Latest <Typewriter
              words={['Insights', 'Thoughts', 'Writings', 'Tutorials']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge and experiences from my development journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBlogs.map((blog, index) => (
            <BlogCard key={index} {...blog} index={index} />
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
            <a href="/blog" className="flex items-center gap-2">
              View All Articles
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};