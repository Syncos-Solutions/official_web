"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Star,
  Calendar,
  Clock,
  User,
  Search,
  Filter,
  ChevronLeft
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"
import { Card, CardContent } from "../../components/ui/card"
import Footer from "../../components/Footer"
// import Navbar from "../../components/Navbar"



// All blog posts data
const allBlogs = [
  {
    slug: "devops-automation-2024",
    title: "The Future of DevOps: Automation Trends in 2024",
    excerpt: "Discover how AI-powered automation and GitOps are revolutionizing software delivery pipelines and reducing deployment risks by up to 80%. Learn about the latest tools and practices that are shaping the future of DevOps.",
    category: "DevOps",
    readTime: "5 min read",
    date: "Dec 15, 2024",
    author: {
      name: "System",
      // role: "Senior DevOps Engineer",
       avatar: "S"
    },
    featured: true,
    tags: ["DevOps", "Automation", "CI/CD", "GitOps"]
  },
  {
    slug: "cloud-security-enterprise",
    title: "Cloud Security Best Practices for Enterprise",
    excerpt: "Essential security frameworks and compliance strategies to protect your cloud infrastructure from emerging threats in today's digital landscape. A comprehensive guide to enterprise-grade security.",
    category: "Security",
    readTime: "7 min read", 
    date: "Dec 12, 2024",
    author: {
      name: "System", 
      // role: "Security Specialist",
       avatar: "S"
    },
    tags: ["Security", "Cloud", "Compliance", "Enterprise"]
  },
  {
    slug: "kubernetes-vs-docker-swarm",
    title: "Kubernetes vs. Docker Swarm: A 2024 Comparison",
    excerpt: "An in-depth analysis of container orchestration platforms to help you choose the right solution for your infrastructure needs. Compare features, performance, and use cases.",
    category: "Infrastructure",
    readTime: "6 min read",
    date: "Dec 10, 2024", 
    author: {
      name: "System",
      // role: "Infrastructure Architect", 
       avatar: "S"
    },
    tags: ["Kubernetes", "Docker", "Containers", "Infrastructure"]
  },
  {
    slug: "monitoring-stack-grafana-prometheus",
    title: "Complete Monitoring Stack: Grafana + Prometheus Setup",
    excerpt: "Step-by-step tutorial to build a comprehensive monitoring solution with real-time alerts and beautiful dashboards for your infrastructure. Perfect for production environments.",
    category: "Monitoring",
    readTime: "8 min read",
    date: "Dec 8, 2024",
    author: {
      name: "System",
      // role: "Monitoring Specialist",
       avatar: "S"
    },
    tags: ["Monitoring", "Grafana", "Prometheus", "Observability"]
  },
  {
    slug: "api-integration-patterns",
    title: "Modern API Integration Patterns & Best Practices",
    excerpt: "Learn about REST, GraphQL, and event-driven architectures to build scalable and maintainable API ecosystems for modern applications. Includes real-world examples and code snippets.",
    category: "Development",
    readTime: "6 min read",
    date: "Dec 5, 2024",
    author: {
      name: "System",
      // role: "Senior Developer",
       avatar: "S"
    },
    tags: ["API", "REST", "GraphQL", "Architecture"]
  },
  {
    slug: "aws-cost-optimization",
    title: "AWS Cost Optimization: Save 40% on Your Cloud Bill",
    excerpt: "Practical tips and tools to reduce your cloud expenses while maintaining performance and reliability standards across your infrastructure. Proven strategies from real implementations.",
    category: "Cloud",
    readTime: "5 min read",
    date: "Dec 3, 2024",
    author: {
      name: "System",
      // role: "Cloud Architect",
       avatar: "S"
    },
    tags: ["AWS", "Cost Optimization", "Cloud", "FinOps"]
  }
]

const categories = ["All", "DevOps", "Security", "Infrastructure", "Monitoring", "Development", "Cloud"]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredBlogs, setFilteredBlogs] = useState(allBlogs)

  useEffect(() => {
    let filtered = allBlogs

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(blog => blog.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(blog => 
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    setFilteredBlogs(filtered)
  }, [selectedCategory, searchTerm])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* <Navbar /> */}
      {/* Blog Hero Section */}
      <section className="w-full py-15 mt-8 md:py-30 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container px-4 md:px-4 relative">
          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={"mb-8"}
          >
            <Link href="/#blog">
              <Button variant="ghost" className="group">
                <ChevronLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Home
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-20 mb-16"
          >
            {/* <Badge className="mb-4 rounded-full px-6 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20" variant="outline">
              📚 Tech Blog
            </Badge> */}
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground">
             Tech Insights & Industry Updates
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              In-depth technical insights, tutorials, and industry analysis from our team of expert engineers and architects.
            </p>

            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-full border border-border/40 bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-300"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="rounded-full transition-all duration-300"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="w-full pb-20">
        <div className="container px-4 md:px-6">
          {/* Results Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center"
          >
            <p className="text-muted-foreground">
              Found <span className="font-semibold text-foreground">{filteredBlogs.length}</span> articles
              {selectedCategory !== "All" && (
                <span> in <span className="font-semibold text-primary">{selectedCategory}</span></span>
              )}
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((blog, index) => (
              <motion.div
                key={blog.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link href={`/blog/${blog.slug}`}>
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:border-primary/30 cursor-pointer">
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Category and Featured Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
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
                          <span key={i} className="px-2 py-1 text-xs bg-secondary/50 text-secondary-foreground rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Author and Date */}
                      <div className="flex items-center justify-between pt-4 border-t border-border/40">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-xs">
                            {blog.author.avatar}
                          </div>
                          <div>
                            <p className="font-medium text-sm">{blog.author.name}</p>
                            {/* <p className="text-xs text-muted-foreground">{blog.author.role}</p> */}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {blog.date}
                          </p>
                          <div className="flex items-center justify-end gap-1 mt-1">
                            <ArrowRight className="w-3 h-3 text-primary group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredBlogs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or browse a different category.
              </p>
              <Button onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}>
                Clear Filters
              </Button>
            </motion.div>
          )}

          {/* Newsletter Signup */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-20"
          >
            <Card className="inline-block p-8 border-border/40 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border border-primary/10 backdrop-blur-sm">
              <CardContent className="p-0 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">Stay Updated</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Get the latest technical insights and industry updates delivered to your inbox.
                  </p>
                </div>
                
                <Button 
                  size="lg" 
                  className="rounded-full h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Subscribe to Newsletter
                </Button>
                
                <p className="text-xs text-muted-foreground">
                  Join 2,500+ subscribers • No spam, unsubscribe anytime
                </p>
              </CardContent>
            </Card>
          </motion.div> */}
        </div>
      </section>
      <Footer />
    </div>
  )
}