"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ExternalLink,
  Code,
  Globe,
  Calendar,
  Users,
  ArrowRight,
  Star,
  Zap,
  Shield,
  BarChart,
  Layers,
  CheckCircle,
  X,
  Clock,
  Target,
  Award
} from "lucide-react"

import { useTheme } from "next-themes"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"
import { Card, CardContent } from "../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const projects = [
    {
      id: 1,
      title: "Mihith Lanka Tours",
      description: "A comprehensive travel and tourism platform featuring tour packages, booking systems, and destination guides for Sri Lankan adventures.",
      category: "Travel & Tourism",
      url: "https://mihithlankatours.com/",
      technologies: ["#React", "#Next.js", "#TailwindCss", "#TypeScript", ],
      features: [
        "Online booking system",
        "Integrate blogs section",
        "Tour package management",
        "Responsive design",
        "SEO optimization"
      ],
      status: "Live",
      completedDate: "March 2025",
      featured: true,
      type: "Web Application",
      detailedInfo: {
        challenge: "Create a modern, user-friendly travel platform that allows tourists to easily discover and book Sri Lankan tour packages while providing the business with efficient management tools.",
        solution: "Developed a full-stack web application with integrated booking system, payment processing, and content management capabilities.",
        results: [
          "Increased online bookings by 80%",
          "Reduced manual booking processing time by 50%",
          "Improved customer satisfaction scores",
          "Enhanced mobile user experience"
        ],
        timeline: "2 months",
        teamSize: "4 developers",
        clientFeedback: "Exceptional work! The platform has transformed our business operations and significantly increased our online presence.",
        technicalHighlights: [
          "Responsive design optimized for mobile devices",
          "Blogs section implement",
          "SEO-optimized content structure",
          "No performance issues",
          "Email Integration"
        ]
      }
    },
    {
        id: 2,
        title: "Sri Lankan Vibes Blog",
        description: "Designed and developed a vibrant, responsive blog platform capturing the essence of Sri Lankan culture, travel, and lifestyle.",
        category: "Web Development",
        url: "https://srilankanvibez.com/",
        technologies: ["Next.js", "Tailwind CSS", "Sanity CMS", "#S3", "#TypeScript"],
        features: [
          "Dynamic content management with Sanity CMS",
          "Mobile-first responsive design",
          "Animated transitions with Framer Motion",
          "SEO optimization and fast performance",
          "Dark/light mode support"
        ],
        status: "In Development",
        completedDate: "Q1 2025",
        featured: true,
        type: "Frontend & CMS",
        detailedInfo: {
          challenge: "The client needed a platform to showcase blog posts, travel stories, and lifestyle content focused on Sri Lanka, with a modern look and the ability to easily manage content.",
          solution: "Built a fully responsive blog using Next.js and integrated Sanity CMS for flexible content management. Designed for optimal performance and SEO with engaging UI/UX elements.",
          results: [
            "40% increase in user engagement within the first month",
            "Fully editable content system for non-technical users",
            "High Lighthouse scores in performance and SEO",
            "Strong brand identity through customized visuals"
          ],
          timeline: "2 months",
          teamSize: "2 Developer, 1 UI/UX Designer",
          clientFeedback: "The blog looks stunning and is super fast. It's exactly what we needed to express our identity and connect with our readers.",
          technicalHighlights: [
            "Static site generation with Next.js",
            "CMS-driven blog structure using Sanity",
            "Image optimization and lazy loading",
            "Tailwind CSS for utility-first styling",
            "Smooth animations with Framer Motion"
          ]
        }
}
,
    // {
    //   id: 3,
    //   title: "Cloud Migration Project",
    //   description: "Complete infrastructure migration from on-premises to AWS cloud, ensuring zero downtime and enhanced scalability.",
    //   category: "Cloud Services",
    //   technologies: ["AWS", "Docker", "RDS", "CloudFormation", "Route 53"],
    //   features: [
    //     "Zero-downtime migration",
    //     "Auto-scaling infrastructure",
    //     "Database optimization",
    //     "Backup and disaster recovery",
    //     "Cost optimization"
    //   ],
    //   status: "Completed",
    //   completedDate: "October 2024",
    //   type: "Migration",
    //   detailedInfo: {
    //     challenge: "Migrate legacy on-premises infrastructure to AWS cloud while maintaining 24/7 uptime and improving performance and scalability.",
    //     solution: "Executed a phased migration approach using AWS services, ensuring seamless transition with enhanced capabilities.",
    //     results: [
    //       "Zero downtime during migration",
    //       "40% reduction in infrastructure costs",
    //       "300% improvement in scalability",
    //       "Enhanced disaster recovery capabilities"
    //     ],
    //     timeline: "4 months",
    //     teamSize: "5 cloud engineers",
    //     clientFeedback: "Seamless migration with immediate benefits. Our applications now run faster and more reliably than ever before.",
    //     technicalHighlights: [
    //       "Phased migration strategy",
    //       "Auto-scaling EC2 instances",
    //       "RDS database optimization",
    //       "CloudFront CDN implementation",
    //       "Automated backup and disaster recovery"
    //     ]
    //   }
    // },
    // {
    //   id: 4,
    //   title: "E-commerce Platform",
    //   description: "Custom e-commerce solution with advanced inventory management, payment processing, and analytics dashboard.",
    //   category: "E-commerce",
    //   technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Stripe"],
    //   features: [
    //     "Inventory management",
    //     "Multi-payment gateway",
    //     "Real-time analytics",
    //     "Mobile responsive",
    //     "Admin dashboard"
    //   ],
    //   status: "In Development",
    //   completedDate: "Q1 2025",
    //   type: "Web Application",
    //   detailedInfo: {
    //     challenge: "Build a comprehensive e-commerce platform that can handle high traffic, complex inventory management, and provide real-time analytics for business decisions.",
    //     solution: "Developing a scalable e-commerce solution with modern technologies and best practices for performance and user experience.",
    //     results: [
    //       "Expected to handle 10,000+ concurrent users",
    //       "Real-time inventory tracking",
    //       "Advanced analytics and reporting",
    //       "Mobile-first responsive design"
    //     ],
    //     timeline: "5 months",
    //     teamSize: "6 developers",
    //     clientFeedback: "Early preview looks amazing! The admin dashboard provides insights we never had before.",
    //     technicalHighlights: [
    //       "Microservices architecture",
    //       "Real-time data processing with Redis",
    //       "Advanced search and filtering",
    //       "Multiple payment gateway integration",
    //       "Comprehensive admin analytics dashboard"
    //     ]
    //   }
    // }
  ]

  const categories = ["All", "Web Application", "Infrastructure", "Migration", "E-commerce"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.type === selectedCategory)

  const openProjectModal = (project) => {
    setSelectedProject(project)
    setShowModal(true)
    document.body.style.overflow = 'hidden'
  }

  const closeProjectModal = () => {
    setShowModal(false)
    setSelectedProject(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar currentPage="Projects" />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-30 lg:py-30 overflow-hidden">
          <div className="container px-3 md:px-6 relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                 Our Portfolio
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Innovative Solutions That Drive Success
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Explore our recent projects showcasing cutting-edge technology implementations, seamless integrations, and transformative digital solutions for businesses across various industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full h-12 px-8 text-base">
                  <Link href="/contact">Start Your Project</Link>
                  <ArrowRight className="ml-2 size-4" />
                </Button>

                <Button  size="lg" variant="outline" className="rounded-full h-12 px-8 text-base">
                  <Link href="/#howitworks">View Our Process </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Categories Filter */}
        {/* <section className="w-full py-12 border-b border-border/40">
          <div className="container px-4 md:px-6">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="grid w-full grid-cols-5 max-w-2xl mx-auto rounded-full bg-muted/50">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="rounded-full text-sm font-medium"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </section> */}

        {/* Featured Project - Mihith Lanka Tours */}
        {selectedCategory === "All" || selectedCategory === "Web Application" ? (
          <section className="w-full py-20 md:py-32">
            <div className="container px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Star className="size-5 text-yellow-500 fill-current" />
                  <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                    Featured Project
                  </Badge>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Mihith Lanka Tours</h2>
                <p className="text-lg text-muted-foreground max-w-3xl">
                  A comprehensive travel platform that revolutionizes how travelers discover and book Sri Lankan adventures, featuring seamless booking experiences and rich destination content.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="grid lg:grid-cols-2 gap-12 items-start"
              >
                {/* Project Preview */}
                <div className="relative">
                  <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
                    <iframe
                      src="https://mihithlankatours.com/"
                      width="100%"
                      height="400"
                      className="w-full h-[400px]"
                      title="Mihith Lanka Tours"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10 pointer-events-none"></div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 -z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
                </div>

                {/* Project Details */}
                <div className="space-y-8">
                  <div className="flex flex-wrap gap-2">
                    {projects[0].technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="rounded-full px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {projects[0].features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle className="size-4 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Status</p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="size-2 rounded-full bg-green-500"></div>
                          <span className="font-medium text-green-600 dark:text-green-400">Live</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Completed</p>
                        <p className="font-medium mt-1">December 2024</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" className="rounded-full flex-1" asChild>
                        <a href="https://mihithlankatours.com/" target="_blank" rel="noopener noreferrer">
                          Visit Live Site
                          <ExternalLink className="ml-2 size-4" />
                        </a>
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="rounded-full flex-1"
                        onClick={() => openProjectModal(projects[0])}
                      >
                        View Details
                        <ArrowRight className="ml-2 size-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        ) : null}

        {/* All Projects Grid */}
        <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Recent Projects</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our latest work across various technologies and industries
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.map((project, i) => (
                <motion.div key={project.id} variants={item}>
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg group">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="outline" className="rounded-full px-3 py-1 text-xs">
                          {project.category}
                        </Badge>
                        {project.featured && (
                          <div className="flex items-center gap-1 text-yellow-500">
                            <Star className="size-3 fill-current" />
                            <span className="text-xs font-medium">Featured</span>
                          </div>
                        )}
                      </div>

                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs rounded-full px-2 py-1">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs rounded-full px-2 py-1">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Status</span>
                          <div className="flex items-center gap-2">
                            <div className={`size-2 rounded-full ${
                              project.status === 'Live' ? 'bg-green-500' : 
                              project.status === 'Completed' ? 'bg-blue-500' : 
                              'bg-yellow-500'
                            }`}></div>
                            <span className="font-medium">{project.status}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Completed</span>
                          <span className="font-medium">{project.completedDate}</span>
                        </div>
                      </div>

                      <div className="flex gap-3 mt-auto">
                        {project.url ? (
                          <Button size="sm" className="rounded-full flex-1" asChild>
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                              <Globe className="size-3 mr-1" />
                              Visit
                            </a>
                          </Button>
                        ) : (
                          <Button size="sm" className="rounded-full flex-1">
                            <Code className="size-3 mr-1" />
                            Preview
                          </Button>
                        )}
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="rounded-full flex-1"
                          onClick={() => openProjectModal(project)}
                        >
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Ready to Start Your Next Project?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how we can bring your vision to life with our expert development and infrastructure solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full h-12 px-8 text-base" asChild>
                  <Link href="/contact">
                    Get Started Today
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                {/* <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base">
                  Schedule Consultation
                </Button> */}
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>

      {/* Project Details Modal */}
      <AnimatePresence>
        {showModal && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeProjectModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-background rounded-2xl shadow-2xl max-w-4xl max-h-[90vh] overflow-y-auto relative border border-border/40"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/40 hover:bg-muted/80 transition-colors"
              >
                <X className="size-4" />
              </button>

              <div className="p-8">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    {selectedProject.featured && (
                      <Star className="size-5 text-yellow-500 fill-current" />
                    )}
                    <Badge variant="outline" className="rounded-full px-3 py-1">
                      {selectedProject.category}
                    </Badge>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {selectedProject.description}
                  </p>
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 rounded-lg bg-muted/20 border border-border/40">
                      <Clock className="size-5 text-primary mx-auto mb-2" />
                      <p className="font-medium">{selectedProject.detailedInfo.timeline}</p>
                      <p className="text-sm text-muted-foreground">Timeline</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-muted/20 border border-border/40">
                      <Users className="size-5 text-primary mx-auto mb-2" />
                      <p className="font-medium">{selectedProject.detailedInfo.teamSize}</p>
                      <p className="text-sm text-muted-foreground">Team Size</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-muted/20 border border-border/40">
                      <Award className="size-5 text-primary mx-auto mb-2" />
                      <p className="font-medium">{selectedProject.status}</p>
                      <p className="text-sm text-muted-foreground">Status</p>
                    </div>
                  </div>
                </div>

                {/* Content Sections */}
                <div className="space-y-8">
                  {/* Challenge */}
                  <div>
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <Target className="size-5 text-primary" />
                      Challenge
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.detailedInfo.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <Zap className="size-5 text-primary" />
                      Solution
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {selectedProject.detailedInfo.solution}
                    </p>
                    
                    {/* Technologies */}
                    <div className="mb-4">
                      <p className="font-medium mb-2">Technologies Used:</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="rounded-full px-3 py-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Technical Highlights */}
                  <div>
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <Code className="size-5 text-primary" />
                      Technical Highlights
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.detailedInfo.technicalHighlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle className="size-4 text-primary flex-shrink-0 mt-0.5" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <BarChart className="size-5 text-primary" />
                      Results & Impact
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.detailedInfo.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle className="size-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Client Feedback */}
                  <div>
                    <h3 className="text-xl font-bold mb-3">Client Feedback</h3>
                    <div className="p-4 rounded-lg bg-muted/20 border border-border/40 border-l-4 border-l-primary">
                      <p className="text-muted-foreground italic leading-relaxed">
                        "{selectedProject.detailedInfo.clientFeedback}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-border/40">
                  {selectedProject.url && (
                    <Button size="lg" className="rounded-full flex-1" asChild>
                      <a href={selectedProject.url} target="_blank" rel="noopener noreferrer">
                        Visit Live Site
                        <ExternalLink className="ml-2 size-4" />
                      </a>
                    </Button>
                  )}
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="rounded-full flex-1"
                    asChild
                  >
                    <Link href="/contact">
                      Start Similar Project
                      <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}