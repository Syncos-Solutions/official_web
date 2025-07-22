"use client"

import { useState, useEffect } from "react"
import Link from "next/link" 
import { motion } from "framer-motion"
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  User,
  Building,
  MessageSquare,
  Globe,
  Shield,
  Zap,
  Users,
  Star,
  Menu,
  X,
  Moon,
  Sun,
  ChevronRight,
  Calendar,
  Headphones,
  Award,
  Target
} from "lucide-react"

import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"
import { Card, CardContent } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { Label } from "../../components/ui/label"
import { BentoCard, BentoGrid } from "../../components/bento"

export default function ContactUsPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState("light")
  const [mounted, setMounted] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: ""
  })

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const services = [
    "DevOps Automation",
    "Cloud Infrastructure",
    "Security & Compliance",
    "Infrastructure Monitoring",
    "System Integration",
    "Custom Development",
    "Other"
  ]

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "hello@syncos.com",
      action: "Send Email",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "Speak directly with our team",
      contact: "+1 (555) 123-4567",
      action: "Call Now",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Live Chat",
      description: "Chat with us in real-time",
      contact: "Available 9 AM - 6 PM EST",
      action: "Start Chat",
      gradient: "from-purple-500/20 to-violet-500/20"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Schedule Meeting",
      description: "Book a consultation call",
      contact: "Free 30-min consultation",
      action: "Book Now",
      gradient: "from-orange-500/20 to-red-500/20"
    },
  ]

  const offices = [
    {
      city: "San Francisco",
      address: "123 Tech Street, Suite 100",
      zipcode: "CA 94105",
      phone: "+1 (555) 123-4567",
      timezone: "PST",
      isHeadquarters: true
    },
    {
      city: "New York",
      address: "456 Business Ave, Floor 15",
      zipcode: "NY 10001",
      phone: "+1 (555) 987-6543",
      timezone: "EST",
      isHeadquarters: false
    },
    {
      city: "London",
      address: "789 Innovation Hub, Level 5",
      zipcode: "E1 6AN",
      phone: "+44 20 7123 4567",
      timezone: "GMT",
      isHeadquarters: false
    }
  ]

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        {/* Header */}
        <header
          className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}
        >
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2 font-medium ">
              <Link href="/"><span className="cursor-pointer" >Syncos Solutions</span></Link>
            </div>
            <nav className="hidden md:flex gap-8">
              <Link
                href="#features"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Features
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Blogs
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                About Us
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Career
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact Us
              </Link>
            </nav>

            <div className="hidden md:flex gap-4 items-center">
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
                {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Button className="rounded-full">
                Connect with Us
                <ChevronRight className="ml-1 size-4" />
              </Button>
            </div>
            <div className="flex items-center gap-4 md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
                {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
            >
              <div className="container py-4 flex flex-col gap-4">
                <Link href="#features" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Features
                </Link>
                <Link href="#testimonials" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Blogs
                </Link>
                <Link href="#pricing" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                  About Us
                </Link>
                <Link href="#faq" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Career
                </Link>
                <Link href="/contact" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Contact Us
                </Link>
                
                <div className="flex flex-col gap-2 pt-2 border-t">
                  <Button className="rounded-full">
                    Connect with Us
                    <ChevronRight className="ml-1 size-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </header>

        {/* Main Content */}
        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full py-20 md:py-32 relative overflow-hidden" >
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>

            <div className="container px-4 md:px-6 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <Badge className="mb-6 rounded-full px-6 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20" variant="outline">
                  <Headphones className="w-4 h-4 mr-2" />
                  Contact Our Experts
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                    Let's Build Something
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
                    Amazing Together
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                  Ready to transform your technology infrastructure? Our expert team is here to help you achieve your goals with tailored IT solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Button size="lg" className="rounded-full h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground group">
                    <span className="flex items-center gap-2">
                      Schedule Free Consultation
                      <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    </span>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full h-12 px-8 border-primary/30 hover:bg-primary/10">
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Call Now: +1 (555) 123-4567
                    </span>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Contact Form & Office Info Section */}
          <section className="w-full py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/30">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-indigo-400/20 via-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
              
              {/* Grid Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)] opacity-20"></div>
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
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950/50 rounded-full mb-6">
                  <Headphones className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Ready to Connect</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                  Let's Build Something Amazing Together
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                  Transform your technology infrastructure with personalized solutions from our expert team. Start your journey today.
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-5 gap-8 items-start mb-20">
                {/* Enhanced Contact Form - Takes 3 columns */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="lg:col-span-3 relative"
                >
                  {/* Magical Glow Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                  
                  <Card className="relative group border-0 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-2xl shadow-blue-500/10 dark:shadow-blue-500/5 hover:shadow-3xl hover:shadow-blue-500/20 transition-all duration-500">
                    {/* Card Header with Sparkle Effect */}
                    <div className="relative p-8 pb-6 border-b border-slate-200/50 dark:border-slate-700/50">
                      <div className="absolute top-6 right-6">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                        </motion.div>
                      </div>
                      
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                            <MessageSquare className="w-6 h-6 text-white" />
                          </div>
                          <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl blur-md opacity-50"></div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                            Start Your Project Today
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400">
                            Get a personalized solution in 24 hours
                          </p>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-8">
                      {formSubmitted ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          className="text-center py-12"
                        >
                          <div className="relative mb-6">
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                              className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-green-500/30"
                            >
                              <CheckCircle className="w-10 h-10 text-white" />
                            </motion.div>
                            <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full mx-auto blur-xl opacity-50"></div>
                          </div>
                          
                          <motion.h4 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-2xl font-bold mb-3 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent"
                          >
                            Message Sent Successfully!
                          </motion.h4>
                          
                          <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-slate-600 dark:text-slate-400 mb-6"
                          >
                            Our expert team will review your requirements and respond with a tailored solution within 24 hours.
                          </motion.p>
                          
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex items-center justify-center gap-2 text-sm text-green-600 dark:text-green-400"
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="font-medium">Response expected within 24 hours</span>
                          </motion.div>
                        </motion.div>
                      ) : (
                        <form onSubmit={handleFormSubmit} className="space-y-6">
                          {/* Name and Email Row */}
                          <div className="grid md:grid-cols-2 gap-4">
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                              className="space-y-2"
                            >
                              <Label htmlFor="name" className="flex items-center gap-2">
                                <User className="w-4 h-4 text-blue-500" />
                                Full Name *
                              </Label>
                              <div className="relative group">
                                <Input
                                  id="name"
                                  name="name"
                                  placeholder="John Doe"
                                  value={formData.name}
                                  onChange={handleInputChange}
                                  className="rounded-xl border-slate-200/60 dark:border-slate-700/60 focus:border-blue-500/60 focus:ring-blue-500/20 group-hover:border-blue-400/40 transition-all duration-300"
                                  required
                                />
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                            
                          </motion.div>
                          </div>

                          {/* Submit Button */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                          >
                            <Button 
                              type="submit" 
                              size="lg" 
                              className="w-full rounded-xl h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 group"
                            >
                              <span className="flex items-center gap-3 text-base">
                                Send Message & Get Started
                                <motion.div
                                  whileHover={{ x: 5, y: -2 }}
                                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                  <Send className="w-5 h-5" />
                                </motion.div>
                              </span>
                            </Button>
                            
                            <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-3">
                              By submitting this form, you agree to our privacy policy and terms of service.
                            </p>
                          </motion.div>
                        </form>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Enhanced Office Information - Takes 2 columns */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="lg:col-span-2 space-y-6"
                >
                  {/* Header */}
                  <div className="text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950/50 rounded-full mb-4">
                      <Globe className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Global Presence</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                      We're Here to Help
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Strategic offices in major tech hubs providing localized support with global expertise.
                    </p>
                  </div>

                  {/* Compact Office Cards */}
                  <div className="space-y-4">
                    {offices.map((office, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        whileHover={{ y: -2, transition: { duration: 0.2 } }}
                      >
                        <Card className="border-0 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-sm hover:shadow-lg transition-all duration-300 group">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div>
                                  <div className="flex items-center gap-2">
                                    <h4 className="font-semibold text-sm group-hover:text-blue-600 transition-colors duration-300">
                                      {office.city}
                                    </h4>
                                    {office.isHeadquarters && (
                                      <Badge variant="secondary" className="text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300">
                                        HQ
                                      </Badge>
                                    )}
                                  </div>
                                  <p className="text-xs text-slate-500 dark:text-slate-400">{office.timezone}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="text-xs font-medium text-slate-700 dark:text-slate-300">{office.phone}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">{office.zipcode}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  {/* Enhanced Business Hours */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Card className="border-0 bg-gradient-to-br from-green-50/80 to-emerald-50/80 dark:from-green-950/30 dark:to-emerald-950/30 backdrop-blur-xl shadow-sm">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                            <Clock className="w-4 h-4 text-white" />
                          </div>
                          <h4 className="font-semibold text-sm">Business Hours</h4>
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between">
                            <span className="text-slate-600 dark:text-slate-400">Mon - Fri</span>
                            <span className="font-medium">9:00 AM - 6:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600 dark:text-slate-400">Saturday</span>
                            <span className="font-medium">10:00 AM - 2:00 PM</span>
                          </div>
                          <div className="flex justify-between border-t border-slate-200/50 dark:border-slate-700/50 pt-2">
                            <span className="text-slate-600 dark:text-slate-400">Emergency</span>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="font-medium text-green-600 dark:text-green-400">24/7 Available</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

         

          {/* CTA Section */}
          <section className="w-full py-20">
            <div className="container px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-blue-500/10 to-primary/10 rounded-2xl blur-xl"></div>
                  <Card className="relative border-border/40 bg-gradient-to-r from-background via-muted/20 to-background backdrop-blur-sm shadow-2xl">
                    <CardContent className="p-12">
                      <div className="max-w-3xl mx-auto">
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">
                          Ready to Transform Your IT Infrastructure?
                        </h3>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                          Don't let technology limitations hold your business back. Let's discuss how we can help you achieve your goals with our expert IT solutions.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                          <Button size="lg" className="rounded-full h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground group">
                            <span className="flex items-center gap-2">
                              Start Your Project Today
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                          </Button>
                          <Button size="lg" variant="outline" className="rounded-full h-12 px-8 border-primary/30 hover:bg-primary/10">
                            <span className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              Schedule Consultation
                            </span>
                          </Button>
                        </div>
                        
                        <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Free Initial Consultation</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>No Long-term Contracts</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>24/7 Support Available</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
          <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-medium text-lg">
                  <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent font-bold">
                    Syncos Solutions
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your trusted IT partner for DevOps, cloud infrastructure, and smart automation.
                  We help businesses streamline, secure, and scale with expert-driven solutions.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-bold">Services</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      DevOps Automation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Cloud Infrastructure
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Security & Compliance
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Infrastructure Monitoring
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-bold">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="/#about" className="text-muted-foreground hover:text-primary transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-bold">Contact Info</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">hello@syncos.com</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">+1 (555) 123-4567</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">San Francisco, CA</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-600 dark:text-green-400 text-xs font-medium">Available Now</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
              <p className="text-xs text-muted-foreground">
                &copy; {new Date().getFullYear()} Syncos Solutions. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}