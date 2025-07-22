// components/home-blog-section.tsx
"use client"

import React, { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Star,
  Calendar,
  Clock,
  Terminal as TerminalIcon,
  Code2
} from "lucide-react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"
import { Terminal, TypingAnimation, AnimatedSpan } from "./ui/terminal-animations"

// Featured blog posts data
const featuredBlogs = [
  {
    slug: "devops-automation-2024",
    title: "The Future of DevOps: Automation Trends in 2024",
    excerpt: "Discover how AI-powered automation and GitOps are revolutionizing software delivery pipelines and reducing deployment risks by up to 80%.",
    category: "DevOps",
    readTime: "5 min read",
    date: "Dec 15, 2024",
    author: {
      name: "Alex Kumar",
      role: "Senior DevOps Engineer",
      avatar: "AK"
    },
    featured: true,
    tags: ["DevOps", "Automation", "CI/CD", "GitOps"],
    terminalContent: [
      "$ kubectl apply -f deployment.yaml",
      "deployment.apps/web-app created",
      "$ kubectl get pods",
      "NAME                       READY   STATUS    RESTARTS   AGE",
      "web-app-7d4b8c9f6b-x8k2p  1/1     Running   0          30s",
      "web-app-7d4b8c9f6b-m9n7q  1/1     Running   0          30s",
      "$ echo 'DevOps automation deployed successfully!'",
      "DevOps automation deployed successfully! ✅"
    ]
  },
  {
    slug: "cloud-security-enterprise",
    title: "Cloud Security Best Practices for Enterprise",
    excerpt: "Essential security frameworks and compliance strategies to protect your cloud infrastructure from emerging threats in today's digital landscape.",
    category: "Security",
    readTime: "7 min read",
    date: "Dec 12, 2024",
    author: {
      name: "Sarah Chen",
      role: "Security Specialist",
      avatar: "SC"
    },
    tags: ["Security", "Cloud", "Compliance", "Enterprise"],
    terminalContent: [
      "$ aws iam create-role --role-name SecurityAuditRole",
      "$ aws configure set region us-east-1",
      "$ aws s3api get-bucket-encryption --bucket secure-data",
      "{",
      '  "ServerSideEncryptionConfiguration": {',
      '    "Rules": [{"ApplyServerSideEncryptionByDefault": {',
      '      "SSEAlgorithm": "AES256"',
      "    }}]",
      "  }",
      "}",
      "$ echo 'Security compliance verified ✅'"
    ]
  },
  {
    slug: "kubernetes-vs-docker-swarm",
    title: "Kubernetes vs. Docker Swarm: A 2024 Comparison",
    excerpt: "An in-depth analysis of container orchestration platforms to help you choose the right solution for your infrastructure needs.",
    category: "Infrastructure",
    readTime: "6 min read",
    date: "Dec 10, 2024",
    author: {
      name: "Mike Rodriguez",
      role: "Infrastructure Architect",
      avatar: "MR"
    },
    tags: ["Kubernetes", "Docker", "Containers", "Infrastructure"],
    terminalContent: [
      "$ docker swarm init",
      "Swarm initialized: current node is now a manager.",
      "$ docker service create --name web --replicas 3 nginx",
      "$ kubectl create deployment web --image=nginx --replicas=3",
      "deployment.apps/web created",
      "$ kubectl get deployments",
      "NAME   READY   UP-TO-DATE   AVAILABLE   AGE",
      "web    3/3     3            3           1m",
      "$ echo 'Container orchestration comparison complete!'",
      "Container orchestration comparison complete! 🚀"
    ]
  }
]

export default function HomeBlogSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="blog" className="w-full py-20 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container px-4 md:px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 rounded-full px-6 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20" variant="outline">
            <TerminalIcon className="w-4 h-4 mr-2" />
            Latest Tech Insights
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground">
            From Our Technical Blog
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            In-depth tutorials, industry insights, and best practices from our engineering team.
            Discover the latest trends in DevOps, cloud security, and infrastructure automation.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {featuredBlogs.map((blog, index) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group h-full"
            >
              <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:border-primary/30">
                <CardContent className="p-0 flex flex-col h-full">
                  {/* Terminal Display */}
                  <div className="p-4 bg-gradient-to-br from-gray-900 to-black relative">
                    <Terminal 
                      title={`${blog.author.name.toLowerCase().replace(' ', '-')}-terminal`}
                      className="max-h-48 text-xs"
                    >
                      {blog.terminalContent.map((line, i) => (
                        <AnimatedSpan key={i} delay={hoveredCard === index ? i * 200 : 0}>
                          {line.startsWith('$') ? (
                            <span className="text-yellow-400">
                              <span className="text-green-400">user@syncos</span>
                              <span className="text-white">:</span>
                              <span className="text-blue-400">~</span>
                              <span className="text-white">{line}</span>
                            </span>
                          ) : (
                            <span className="text-gray-300 pl-0">{line}</span>
                          )}
                        </AnimatedSpan>
                      ))}
                    </Terminal>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Category and Featured Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full flex items-center gap-1">
                          <Code2 className="w-3 h-3" />
                          {blog.category}
                        </span>
                        {blog.featured && (
                          <span className="px-2 py-1 text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full flex items-center gap-1">
                            <Star className="w-3 h-3 fill-current" />
                            Featured
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {blog.readTime}
                      </span>
                    </div>

                    {/* Blog Title */}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {blog.title}
                    </h3>
                    
                    {/* Blog Excerpt */}
                    <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3 flex-grow">
                      {blog.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="px-2 py-1 text-xs bg-secondary/50 text-secondary-foreground rounded-md font-mono">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Author and Read More */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/40">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-xs">
                          {blog.author.avatar}
                        </div>
                        <div>
                          <p className="font-medium text-sm">{blog.author.name}</p>
                          <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {blog.date}
                          </p>
                        </div>
                      </div>
                      <Link href={`/blog/${blog.slug}`}>
                        <Button size="sm" variant="ghost" className="group/btn text-primary hover:text-primary-foreground hover:bg-primary">
                          Read Full Article
                          <ArrowRight className="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
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
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Card className="inline-block p-8 border-border/40 bg-gradient-to-r from-background to-muted/20 backdrop-blur-sm">
            <CardContent className="p-0 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Explore Our Complete Blog</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Discover more in-depth tutorials, case studies, and technical insights from our engineering team.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 py-4 border-y border-border/40">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10k+</div>
                  <div className="text-sm text-muted-foreground">Readers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Weekly</div>
                  <div className="text-sm text-muted-foreground">Updates</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/blog">
                  <Button 
                    size="lg" 
                    className="rounded-full h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground group"
                  >
                    <TerminalIcon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    View All Articles
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-full h-12 px-8 border-primary/30 hover:bg-primary/10 group"
                >
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    Subscribe to Newsletter
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
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span>4.9/5 rating</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}