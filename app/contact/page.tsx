"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
  Calendar,
  Headphones,
  Award,
  Target,
  Loader2,
  AlertCircle,
  CheckCircle2
} from "lucide-react"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import ModernMapSection from "../../components/mapsection"
import { Badge } from "../../components/ui/badge"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Alert, AlertDescription } from "../../components/ui/alert"
import { Label } from "../../components/ui/label"
import { Input } from "../../components/ui/input"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Textarea } from "../../components/ui/textarea"



export default function ContactUsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
    urgency: ""
  })

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE", // Replace with your Web3Forms access key
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          service: formData.service,
          budget: formData.budget,
          urgency: formData.urgency,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          budget: "",
          message: "",
          urgency: ""
        })
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        setSubmitStatus("error")
        setTimeout(() => setSubmitStatus(null), 5000)
      }
    } catch (error) {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const services = [
    "DevOps Automation",
    "Cloud Infrastructure (AWS/Azure/GCP)",
    "Website Development",
    "Mobile App Development",
    "E-commerce Solutions",
    "Security & Compliance",
    "Infrastructure Monitoring",
    "System Integration",
    "Database Management",
    "Custom Development",
    "Consulting Services",
    "Other"
  ]

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+",
    "Prefer to discuss"
  ]

  const urgencyLevels = [
    "ASAP (Within 2 weeks)",
    "1-2 months",
    "3-6 months",
    "6+ months",
    "Just exploring options"
  ]

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "hello@syncos.com",
      action: "Send Email",
      href: "mailto:hello@syncos.com",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "Speak directly with our team",
      contact: "+61 8 1234 5678",
      action: "Call Now",
      href: "tel:+61812345678",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "WhatsApp",
      description: "Chat with us instantly",
      contact: "Available 24/7",
      action: "Start Chat",
      href: "https://wa.me/61812345678",
      gradient: "from-green-500/20 to-green-600/20"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Schedule Meeting",
      description: "Book a consultation call",
      contact: "Free 30-min consultation",
      action: "Book Now",
      href: "#",
      gradient: "from-orange-500/20 to-red-500/20"
    },
  ]

  const offices = [
    {
      city: "Darwin",
      country: "Australia",
      address: "Level 3, 456 Smith Street Mall",
      zipcode: "NT 0800",
      phone: "+61 8 1234 5678",
      email: "darwin@syncos.com",
      timezone: "ACST (UTC+9:30)",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM",
      isHeadquarters: true,
      coordinates: { lat: -12.4634, lng: 130.8456 }
    },
    {
      city: "Colombo",
      country: "Sri Lanka",
      address: "No. 123, Galle Road, Colombo 03",
      zipcode: "00300",
      phone: "+94 11 234 5678",
      email: "colombo@syncos.com",
      timezone: "IST (UTC+5:30)",
      hours: "Mon-Fri: 9:00 AM - 7:00 PM",
      isHeadquarters: false,
      coordinates: { lat: 6.9271, lng: 79.8612 }
    }
  ]

  const whyChooseUs = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Rapid Response",
      description: "24-hour response time guaranteed for all inquiries"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Proven Expertise",
      description: "5+ years experience with 200+ successful projects"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dedicated Support",
      description: "Personal account manager for every client"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Assured",
      description: "100% satisfaction guarantee on all deliverables"
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navbar */}
      <Navbar currentPage="contact" />

      {/* Main Content */}
        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full py-20 md:py-32 relative overflow-hidden">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
              
              {/* Animated grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)] opacity-20"></div>
            </div>

            <div className="container px-4 md:px-6 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Badge className="rounded-full px-4 py-1.5 text-sm font-medium mb-8" variant="outline">
                    <Headphones className="w-4 h-4 mr-2" />
                    Contact Our Expert Team
                  </Badge>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
                >
                  <span className="">
                      Let's Transform Your  
                  </span>
                  <br />
                  <span className="">
                    Digital Vision Into Reality
                  </span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg mt-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8"
                >
                  Ready to elevate your technology infrastructure? Our expert team across Australia and Sri Lanka 
                  is here to deliver tailored IT solutions that drive real business results.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center mb-12 font-mono"
                >
                  <Button size="lg" className="rounded-full h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground group">
                    <span className="flex items-center gap-2">
                      Schedule Free Consultation
                      <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    </span>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full h-12 px-8 border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-950">
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      +61 8 1234 5678
                    </span>
                  </Button>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
                >
                  {[
                    { icon: <CheckCircle className="w-4 h-4 text-green-500" />, text: "24-hour response guarantee" },
                    { icon: <CheckCircle className="w-4 h-4 text-green-500" />, text: "Free initial consultation" },
                    { icon: <CheckCircle className="w-4 h-4 text-green-500" />, text: "No long-term contracts" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      {item.icon}
                      <span>{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </section>



          {/* Contact Methods */}
         
          {/* Main Contact Form & Office Info */}
          <section className="w-full py-20 relative overflow-hidden">
            <div className="container px-4 md:px-6 relative">
              <div className="grid lg:grid-cols-3 gap-12 items-start">
                {/* Enhanced Contact Form - Takes 2 columns */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="lg:col-span-2 relative"
                >
                  <Card className="relative group border-0 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-2xl shadow-blue-500/10 dark:shadow-blue-500/5 hover:shadow-3xl hover:shadow-blue-500/20 transition-all duration-500 rounded-2xl">
                    {/* Card Header */}
                    <div className="relative p-8 pb-6 border-b border-slate-200/50 dark:border-slate-700/50">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative">
                          
                          <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl blur-md opacity-50"></div>
                        </div>
                        <div>
                          <h3 className="text-3xl mb-3 font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                            Start Your Project Today
                          </h3>
                          <p className="text-slate-600 text-sm dark:text-slate-400">
                            Get a personalized solution proposal within 24 hours
                          </p>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-8">
                      <AnimatePresence mode="wait">
                        {submitStatus === "success" ? (
                          <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
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
                                <CheckCircle2 className="w-10 h-10 text-white" />
                              </motion.div>
                              <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full mx-auto blur-xl opacity-50"></div>
                            </div>
                            
                            <h4 className="text-2xl font-bold mb-3 text-green-600 dark:text-green-400">
                              Message Sent Successfully!
                            </h4>
                            
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                              Thank you for reaching out! Our expert team will review your requirements and respond with a tailored solution within 24 hours.
                            </p>
                            
                            <div className="flex items-center justify-center gap-2 text-sm text-green-600 dark:text-green-400">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="font-medium">Expected response time: 24 hours</span>
                            </div>
                          </motion.div>
                        ) : (
                          <motion.form 
                            key="form"
                            initial={{ opacity: 1 }}
                            onSubmit={handleFormSubmit} 
                            className="space-y-6 mt-2"
                          >
                            {/* Error Alert */}
                            {submitStatus === "error" && (
                              <Alert className="border-red-200 bg-red-50 dark:bg-red-950/50">
                                <AlertCircle className="h-4 w-4 text-red-600" />
                                <AlertDescription className="text-red-700 dark:text-red-400">
                                  Failed to send message. Please try again or contact us directly.
                                </AlertDescription>
                              </Alert>
                            )}

                            {/* Name and Email Row */}
                            <div className="grid md:grid-cols-2 gap-5">
                              <div className="space-y-2">
                                <Label htmlFor="name" className="flex items-center gap-2">
                                  <User className="w-4 h-4 text-blue-500" />
                                  Full Name *
                                </Label>
                                <Input
                                  id="name"
                                  name="name"
                                  placeholder="Your Name"
                                  value={formData.name}
                                  onChange={handleInputChange}
                                  className="rounded-xl border-slate-200/60 dark:border-slate-700/60 focus:border-blue-500/60 focus:ring-blue-500/20 transition-all duration-300"
                                  required
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="email" className="flex items-center gap-2">
                                  <Mail className="w-4 h-4 text-blue-500" />
                                  Email Address *
                                </Label>
                                <Input
                                  id="email"
                                  name="email"
                                  type="email"
                                  placeholder="Your Email"
                                  value={formData.email}
                                  onChange={handleInputChange}
                                  className="rounded-xl border-slate-200/60 dark:border-slate-700/60 focus:border-blue-500/60 focus:ring-blue-500/20 transition-all duration-300"
                                  required
                                />
                              </div>
                            </div>

                            {/* Company and Phone Row */}
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="company" className="flex items-center gap-2">
                                  <Building className="w-4 h-4 text-blue-500" />
                                  Company Name
                                </Label>
                                <Input
                                  id="company"
                                  name="company"
                                  placeholder="Your Company"
                                  value={formData.company}
                                  onChange={handleInputChange}
                                  className="rounded-xl border-slate-200/60 dark:border-slate-700/60 focus:border-blue-500/60 focus:ring-blue-500/20 transition-all duration-300"
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="phone" className="flex items-center gap-2">
                                  <Phone className="w-4 h-4 text-blue-500" />
                                  Phone Number
                                </Label>
                                <Input
                                  id="phone"
                                  name="phone"
                                  type="tel"
                                  placeholder="+61 8 1234 5678"
                                  value={formData.phone}
                                  onChange={handleInputChange}
                                  className="rounded-xl border-slate-200/60 dark:border-slate-700/60 focus:border-blue-500/60 focus:ring-blue-500/20 transition-all duration-300"
                                />
                              </div>
                            </div>

                            {/* Service and Budget Row */}
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label className="flex items-center gap-2">
                                  <Zap className="w-4 h-4 text-blue-500" />
                                  Service Needed *
                                </Label>
                                <Select value={formData.service} onValueChange={(value) => handleSelectChange("service", value)}>
                                  <SelectTrigger className="rounded-xl border-slate-200/60 dark:border-slate-700/60">
                                    <SelectValue placeholder="Select a service" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {services.map((service) => (
                                      <SelectItem key={service} value={service}>
                                        {service}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>

                              <div className="space-y-2">
                                <Label className="flex items-center gap-2">
                                  <Target className="w-4 h-4 text-blue-500" />
                                  Project Budget
                                </Label>
                                <Select value={formData.budget} onValueChange={(value) => handleSelectChange("budget", value)}>
                                  <SelectTrigger className="rounded-xl border-slate-200/60 dark:border-slate-700/60">
                                    <SelectValue placeholder="Select budget range" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {budgetRanges.map((budget) => (
                                      <SelectItem key={budget} value={budget}>
                                        {budget}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>

                            {/* Timeline */}
                            <div className="space-y-2">
                              <Label className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-blue-500" />
                                Project Timeline *
                              </Label>
                              <Select value={formData.urgency} onValueChange={(value) => handleSelectChange("urgency", value)}>
                                <SelectTrigger className="rounded-xl border-slate-200/60 dark:border-slate-700/60">
                                  <SelectValue placeholder="When do you need this completed?" />
                                </SelectTrigger>
                                <SelectContent>
                                  {urgencyLevels.map((urgency) => (
                                    <SelectItem key={urgency} value={urgency}>
                                      {urgency}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                              <Label htmlFor="message" className="flex items-center gap-2">
                                <MessageSquare className="w-4 h-4 text-blue-500" />
                                Project Details *
                              </Label>
                              <Textarea
                                id="message"
                                name="message"
                                placeholder="Tell us about your project requirements, current challenges, and goals. The more details you provide, the better we can tailor our solution to your needs."
                                value={formData.message}
                                onChange={handleInputChange}
                                className="rounded-xl border-slate-200/60 dark:border-slate-700/60 focus:border-blue-500/60 focus:ring-blue-500/20 transition-all duration-300 min-h-[120px] resize-none"
                                required
                              />
                            </div>

                            {/* Submit Button */}
                            <Button 
                              type="submit" 
                              size="lg" 
                              disabled={isSubmitting}
                              className="w-full rounded-xl h-14 bg-gradient-to-r from-blue-600  text-white  transition-all duration-300 group disabled:opacity-70"
                            >
                              {isSubmitting ? (
                                <span className="flex items-center gap-3 text-base">
                                  <Loader2 className="w-5 h-5 animate-spin" />
                                  Sending Message...
                                </span>
                              ) : (
                                <span className="flex items-center gap-3 text-base">
                                  Send Message & Get Proposal
                                  <motion.div
                                    whileHover={{ x: 5, y: -2 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                  >
                                    <Send className="w-5 h-5" />
                                  </motion.div>
                                </span>
                              )}
                            </Button>
                            
                            <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-3">
                              By submitting this form, you agree to our privacy policy and terms of service. 
                              We'll respond within 24 hours with a tailored solution proposal.
                            </p>
                          </motion.form>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Enhanced Office Information - Takes 1 column */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="lg:col-span-1 space-y-6"
                >
                  {/* Header */}
                  <div className="text-center lg:text-left">
                    <div className="rounded-full px-4 py-1.5 text-sm font-medium">
                      <Badge className="rounded-full px-5 py-1.5 gap-1 text-sm font-medium" variant="secondary">
                      <Globe className="w-4 h-4 text-blue-600" />
                      
                      Global Presence
                    </Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                      Our Offices
                    </h3>
                    <p className="text-slate-600 text-sm dark:text-slate-400 leading-relaxed">
                      Two strategic locations providing 24/7 coverage across Asia-Pacific
                    </p>
                  </div>

                  {/* Office Cards */}
                  <div className="space-y-6 font-mono">
                    {offices.map((office, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        whileHover={{ y: -2, transition: { duration: 0.2 } }}
                      >
                        <Card className="border-0 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 group rounded-xl">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-3">
                                
                                <div>
                                  <div className="flex items-center gap-2 font-mono">
                                    <h4 className="font-bold text-lg group-hover:text-blue-600 transition-colors duration-300">
                                      {office.city}
                                    </h4>
                                    {office.isHeadquarters && (
                                      <Badge variant="secondary" className="text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300">
                                        HQ
                                      </Badge>
                                    )}
                                  </div>
                                  <p className="text-sm text-slate-500 dark:text-slate-400">{office.country}</p>
                                </div>
                              </div>
                              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            </div>

                            <div className="space-y-3 text-sm">
                              <div className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                                <div>
                                  <p className="text-slate-700 dark:text-slate-300">{office.address}</p>
                                  <p className="text-slate-500 dark:text-slate-400">{office.zipcode}</p>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-slate-400" />
                                <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                                  {office.phone}
                                </a>
                              </div>
                              
                              <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-slate-400" />
                                <a href={`mailto:${office.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                                  {office.email}
                                </a>
                              </div>
                              
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-slate-400" />
                                <span className="text-slate-600 dark:text-slate-400">{office.hours}</span>
                              </div>
                              
                              <div className="flex items-center gap-2 pt-2 border-t border-slate-200/50 dark:border-slate-700/50">
                                <Globe className="w-4 h-4 text-slate-400" />
                                <span className="text-slate-600 dark:text-slate-400">{office.timezone}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  
                </motion.div>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="w-full py-20 bg-gradient-to-br from-slate-50/50 via-blue-50/30 to-purple-50/30 dark:from-slate-950/50 dark:via-blue-950/30 dark:to-purple-950/30">
            <div className="container px-4 md:px-6">
             <ModernMapSection /> 
              </div>
           
          </section>
          <Footer />
        </main>

       </div>
  )
}
