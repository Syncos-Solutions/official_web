"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Check,
  ChevronRight,
  Menu,
  X,
  Moon,
  Sun,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Users,
  BarChart,
  Layers,
} from "lucide-react"

import { useTheme } from "next-themes"

import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Card, CardContent } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"
import AboutSection from "../components/About"


export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

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

  const features = [
    {
      title: "DevOps Automation",
    description: "Streamline CI/CD pipelines, automate builds and deployments, and reduce manual overhead with modern DevOps practices.",
      icon: <Zap className="size-5" />,
    },
    {
      title: "Cloud Infrastructure",
    description: "Design, migrate, and manage secure cloud environments with AWS, Azure, or GCP — optimized for performance and cost.",
      icon: <BarChart className="size-5" />,
    },
    {
     title: "Security & Compliance",
    description: "Protect your data with end-to-end encryption, firewall hardening, access control, and continuous compliance monitoring.",
      icon: <Users className="size-5" />,
    },
    {
      title: "Infrastructure Monitoring",
    description: "Get full visibility into your systems with real-time dashboards, alerts, and reports powered by Grafana, Zabbix, and more.",
      icon: <Shield className="size-5" />,
    },
    {
      title: "System Integration",
    description: "Connect all your tools and platforms with seamless API integration to ensure smooth workflows across your tech stack.",
      icon: <Layers className="size-5" />,
    },
    {
      title: "24/7 Technical Support",
    description: "Our expert engineers are available around the clock to help you solve issues, optimize systems, and keep things running.",
      icon: <Star className="size-5" />,
    },
  
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col">

      <Navbar currentPage="home" />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-30 lg:py-30 overflow-hidden">
          <div className="container px-3 md:px-6 relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              {/* <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                🚀 Get Started Now
              </Badge> */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Reliable. Secure. Tailored IT services that drive real results.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                We engineer high-performance IT systems, automate processes, and simplify technology — so you can focus on what matters most: growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full h-12 px-8 text-base">
                  <Link href="/contact">Free Consultation </Link>
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base">
                  Get a Custom Quote
                </Button>
              </div>
              <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>No commitment required </span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>Tailored to your business</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>Expert support</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-5xl"
            >

              <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
              <iframe
                  src="https://my.spline.design/genkubgreetingrobot-tmlK71aXlgHtkIeplp1JMJDH/"
                  width={1280}
                  height={720}
                  allowFullScreen
                  
                />
            {/* <Image
                  src="https://cdn.dribbble.com/userupload/12302729/file/original-fa372845e394ee85bebe0389b9d86871.png?resize=1504x1128&vertical=center"
                  width={1280}
                  height={720}
                  alt="SaaSify dashboard"
                  className="w-full h-auto "
                  priority
                /> */}
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
              <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
            </motion.div>
          </div>
        </section>


        {/* Modern About Us Section for Syncos Solutions */}

        <AboutSection />



        
        <section id="Features" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Features
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Everything You Need to Scale with Confidence</h2>
              <p className="max-w-[800px] mb-20 mt-10 text-muted-foreground md:text-lg">
                Our expert-driven services empower your team to deploy faster, automate operations, and ensure secure, scalable infrastructure that grows with your business.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {features.map((feature, i) => (
                <motion.div key={i} variants={item}>
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section> 

        {/* How It Works Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden" id="howitworks">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                How It Works
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Simple Process, Powerful Results</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Partnering with Syncos Solutions is easy — let us take care of the tech so you can focus on growing your business.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0"></div>

              {[
                {
                  step: "01",
                  title: "Schedule a Free Consultation",
                  description: "Tell us your challenges — we’ll understand your needs and identify the right tech solutions.",
                },
                {
                  step: "02",
                  title: "Get a Custom IT Plan",
                  description: "We’ll design a tailored solution for your business — whether it’s DevOps, cloud, monitoring, or full-stack deployment.",
                },
                {
                  step: "03",
                  title: "Launch & Optimize",
                  description: "Our experts will implement, automate, and support your systems — with continuous improvements as you scale.",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center space-y-4"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

{/* Home Page Blog Section - Navigate to Separate Blog Page */}
      <section id="Blogs" className="w-full py-20 md:py-32">
            <div className="container px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
              >
                {/* <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                  📚 Latest Insights
                </Badge> */}
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Tech Insights & Industry Updates</h2>
                <p className="max-w-[800px] text-muted-foreground md:text-lg mb-20">
                  Stay ahead with the latest trends, best practices, and expert insights from our team of technology specialists.
                </p>
              </motion.div>

              {/* Featured Blog Posts - First 3 */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12 mb-12">
                {[
                  {
                    slug: "devops-automation-2024",
                    title: "The Future of DevOps: Automation Trends in 2024",
                    excerpt: "Discover how AI-powered automation and GitOps are revolutionizing software delivery pipelines and reducing deployment risks.",
                    category: "DevOps",
                    readTime: "5 min read",
                    date: "",
                    author: {
                      name: "System",
                      role: "",
                      avatar: "S"
                    },
                    featured: true
                  },
                  {
                    slug: "cloud-security-enterprise",
                    title: "Cloud Security Best Practices for Enterprise",
                    excerpt: "Essential security frameworks and compliance strategies to protect your cloud infrastructure from emerging threats.",
                    category: "Security",
                    readTime: "7 min read", 
                    date: "",
                    author: {
                      name: "Sytem", 
                      role: "",
                      avatar: "S"
                    }
                  },
                  {
                    slug: "kubernetes-vs-docker-swarm",
                    title: "Kubernetes vs. Docker Swarm: A 2024 Comparison",
                    excerpt: "An in-depth analysis of container orchestration platforms to help you choose the right solution for your infrastructure.",
                    category: "Infrastructure",
                    readTime: "6 min read",
                    date: "", 
                    author: {
                      name: "System",
                      role: "", 
                      avatar: "S"
                    }
                  }
                ].map((blog, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                  >
                    <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md group cursor-pointer">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                              {blog.category}
                            </span>
                            {blog.featured && (
                              <span className="px-2 py-1 text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full flex items-center gap-1">
                                <Star className="w-3 h-3 fill-current" />
                                Featured
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-muted-foreground">{blog.readTime}</span>
                        </div>

                        <h3 className="text-xl font-bold mb-3 flex-grow group-hover:text-primary transition-colors duration-300">
                          {blog.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {blog.excerpt}
                        </p>
                        
                        <div className="mb-4">
                          <Link href={`/blog/${blog.slug}`}>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="w-full rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                            >
                              <span className="flex items-center gap-2">
                                Read Full Article
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                              </span>
                            </Button>
                          </Link>
                        </div>

                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/40">
                          <div className="flex items-center gap-3">
                            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-sm">
                              {blog.author.avatar}
                            </div>
                            <div>
                              <p className="font-medium text-sm">{blog.author.name}</p>
                              <p className="text-xs text-muted-foreground">{blog.author.role}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-muted-foreground">{blog.date}</p>
                            <div className="flex items-center gap-1 mt-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                              <span className="text-xs text-muted-foreground">Published</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Call to Action - Navigate to Blog Page */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-center"
              >
                <Card className=" p-8 border-border/60 bg-gradient-to-r from-background   to-muted/20 backdrop-blur-sm">
                  <CardContent className="p-0 space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground">Explore Our Complete Blog</h3>
                      <p className="text-muted-foreground max-w-md mx-auto">
                        Discover more in-depth tutorials, case studies, and technical insights from our engineering team.
                      </p>
                    </div>
                    
                   
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/blog">
                        <Button 
                          size="lg" 
                          className="rounded-full h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground group"
                        >
                          <span className="flex items-center gap-2">
                            View All Articles
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </span>
                        </Button>
                      </Link>
                      
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="rounded-full h-12 px-8 border-primary/30 hover:bg-primary/10 group"
                      >
                        <span className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                          <Link href="/#newsletter">Subscribe to Newsletter </Link>
                        </span>
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                          {["A", "S", "M", "L"].map((letter, i) => (
                            <div key={i} className="w-6 h-6 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center text-xs font-medium text-primary">
                              {letter}
                            </div>
                          ))}
                        </div>
                        <span>2,500+ subscribers</span>
                      </div>
                      <div className="flex items-center gap-1">
                        
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>
   

        

        {/* FAQ Section */}
        <section id="FAQ" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-md">
                Find answers to common questions about our Service.
              </p>
            </motion.div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {[
                {
                  question: "How do I get started with your services?",
                  answer:
                    "Getting started is easy. Reach out to us via our contact form or schedule a consultation. We'll assess your requirements, propose a tailored solution, and begin onboarding with minimal delay. No upfront commitment is required until you approve the plan.",
                },
                {
                  question: "Can I customize your solutions to fit my business?",
                  answer:
                    "Absolutely. Our solutions are fully customizable. Whether you need DevOps automation, hosting, or custom application development, we tailor everything to your exact requirements.",
                },
                {
                  question: "What platforms and technologies do you support?",
                  answer:
                    "We support a wide range of platforms including AWS, Lightsail, cPanel, WordPress, Joomla, Node.js, React, NestJS, Docker, and monitoring tools like Zabbix and Grafana.",
                },
                {
                  question: "How secure is your infrastructure?",
                  answer:
                    "Security is a top priority. We implement end-to-end encryption, regular security audits, server hardening, and comply with industry standards like GDPR. We also offer firewall setups, backup systems, and uptime monitoring.",
                },
                {
                  question: "Can you migrate my existing site or system?",
                  answer:
                    "Yes. We handle complete website or server migrations — including WordPress, Joomla, databases, and email — with minimal downtime and no data loss.",
                },
                {
                  question: "What kind of support do you provide?",
                  answer:
                    "We offer dedicated support based on your service package. This includes email, phone, and ticket-based support. For premium clients, we provide 24/7 monitoring and emergency response.",
                }
              ].map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <AccordionItem value={`item-${i}`} className="border-b border-border/40 py-2">
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        
        <Footer/>
      </main>
      {/* <Footer/> */}
    </div>
  )
} 
