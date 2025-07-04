'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Typewriter } from 'react-simple-typewriter'
import { StarsBackground } from '../ui/stars-background'
import { ShootingStars } from '../ui/shooting-stars'

const ServicesSection = () => {
    const services = [
        {
            title: 'Web Application Development',
            description: 'Building high-performance, scalable web applications with modern architectures',
            icon: '🌐',
            techStack: [
                'Next.js', 'React.js', 'TypeScript', 'Node.js', 'Express.js',
                'NestJS', 'Prisma ORM', 'GraphQL', 'Apollo', 'JWT',
                'ShadCn', 'TailwindCSS', 'Material UI', 'HTML/CSS'
            ],
            features: [
                'SSR/SSG with Next.js',
                'API integrations',
                'Real-time functionality',
                'Pixel-perfect UI/UX'
            ]
        },
        {
            title: 'Mobile Application Development',
            description: 'Cross-platform mobile apps with native-like performance',
            icon: '📱',
            techStack: [
                'React Native', 'Expo', 'TypeScript', 'Node.js',
                'GraphQL', 'JWT', 'TailwindCSS'
            ],
            features: [
                'iOS & Android apps',
                'Offline-first approach',
                'Push notifications',
                'Hardware API integration'
            ]
        },
        {
            title: 'AI/ML Solutions',
            description: 'Building and deploying intelligent systems and models',
            icon: '🧠',
            techStack: [
                'Python', 'TensorFlow', 'PyTorch', 'scikit-learn',
                'CNN', 'GNN', 'DeepLearning', 'Flask'
            ],
            features: [
                'Custom model development',
                'Computer vision solutions',
                'Predictive analytics',
                'NLP implementations'
            ]
        },
        {
            title: 'DevOps & Cloud Engineering',
            description: 'Scalable infrastructure and CI/CD pipelines',
            icon: '⚙️',
            techStack: [
                'Docker', 'Kubernetes', 'AWS', 'Azure',
                'CI/CD Pipelines', 'GitHub Actions', 'Redis',
                'MySQL', 'MongoDB', 'PostgreSQL'
            ],
            features: [
                'Infrastructure as Code',
                'Auto-scaling solutions',
                'Performance optimization',
                'Microservices architecture'
            ]
        },
        {
            title: 'Backend Development',
            description: 'Robust API development and database architecture',
            icon: '🔧',
            techStack: [
                'Node.js', 'Express.js', 'NestJS', 'Python',
                'Flask', 'Laravel', '.NET', 'C#',
                'MySQL', 'MongoDB', 'GraphQL', 'Redis'
            ],
            features: [
                'REST & GraphQL APIs',
                'Database design',
                'Authentication systems',
                'WebSockets'
            ]
        },
        {
            title: 'Performance Optimization',
            description: 'Making applications blazing fast and efficient',
            icon: '⚡',
            techStack: [
                'Next.js Optimization', 'React Optimization',
                'Database Indexing', 'Caching Strategies',
                'Redis', 'CDN Integration'
            ],
            features: [
                'Lighthouse score improvement',
                'Bundle size optimization',
                'Database query optimization',
                'Caching implementations'
            ]
        }
    ]

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    return (
        <section id="services" className="py-20 px-6 bg-gradient-to-b from-background to-muted/10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <Badge variant="outline" className="mb-4 bg-background/80 backdrop-blur-sm border-primary/20">
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            What I Offer
                        </span>
                    </Badge>
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                        <Typewriter
                            words={['Services', 'Expertise', 'Solutions']}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />{' '}
                        I Provide
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive solutions tailored to your business needs, powered by cutting-edge technologies
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div key={index} variants={item}>
                            <Card className="h-full bg-background/80 backdrop-blur-sm border-border/20 hover:border-primary/30 transition-all group overflow-hidden">
                                <CardHeader>
                                    <div className="text-4xl mb-4">{service.icon}</div>
                                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                                    <CardDescription>{service.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Key Features:</h4>
                                        <ul className="space-y-1 text-sm text-muted-foreground">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="flex items-center">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Tech Stack:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {service.techStack.map((tech, i) => (
                                                <Badge
                                                    key={i}
                                                    variant="outline"
                                                    className="text-xs bg-background/50 border-border/30 group-hover:border-primary/50 transition-colors"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Full Tech Stack Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold mb-2">My Comprehensive Tech Stack</h3>
                        <p className="text-muted-foreground">Technologies I work with across all domains</p>
                    </div>

                    <div className="bg-background/80 backdrop-blur-sm border border-border/20 rounded-xl p-6">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {[
                                'React.js', 'TypeScript', 'Next.js', 'Node.js',
                                'Express.js', 'NestJS', 'Python', 'Flask',
                                'Laravel', '.NET', 'C#', 'React Native',
                                'MySQL', 'MongoDB', 'GraphQL', 'Redis',
                                'Prisma ORM', 'JWT', 'ShadCn', 'TailwindCSS',
                                'Material UI', 'TensorFlow', 'PyTorch', 'scikit-learn',
                                'CNN', 'GNN', 'DeepLearning', 'Docker',
                                'Kubernetes', 'AWS', 'Azure', 'CI/CD'
                            ].map((tech, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center justify-center p-3 bg-muted/20 rounded-lg border border-border/20 hover:border-primary/50 transition-colors"
                                >
                                    <span className="text-sm font-medium">{tech}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
            <StarsBackground />
            <ShootingStars />
        </section>
    )
}

export default ServicesSection