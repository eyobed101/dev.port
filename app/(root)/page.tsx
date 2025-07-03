import About from "@/components/home/about";
import { FeaturedBlogs } from "@/components/home/blogs";
import Experience from "@/components/home/experience";
import Hero from "@/components/home/hero";
import Projects from "@/components/home/projects";
import { TestimonialsSection } from "@/components/home/testimonials";

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-16">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <FeaturedBlogs />
      <TestimonialsSection />
    </div>
  );
}