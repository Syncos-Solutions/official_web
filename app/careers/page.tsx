"use client"

import { motion } from "framer-motion"
import { Briefcase, Users, Globe, Star, MapPin, Clock, DollarSign, GraduationCap, Heart, Zap, Shield, Code } from "lucide-react"

import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { Badge } from "../../components/ui/badge"
import { Card, CardContent } from "../../components/ui/card"
import { Button } from "../../components/ui/button"

export default function CareersPage() {
  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Market-leading salaries with performance bonuses and equity options",
      icon: <DollarSign className="w-6 h-6" />,
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Learning & Development",
      description: "Annual learning budget, conference attendance, and certification support",
      icon: <GraduationCap className="w-6 h-6" />,
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Work-Life Balance",
      description: "Flexible hours, remote work options, and generous paid time off",
      icon: <Heart className="w-6 h-6" />,
      gradient: "from-purple-500/20 to-violet-500/20"
    },
    {
      title: "Global Opportunities",
      description: "Work across our Australia and Sri Lanka offices with travel opportunities",
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Cutting-Edge Tech",
      description: "Work with the latest technologies and tools in cloud computing and DevOps",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-yellow-500/20 to-orange-500/20"
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance, wellness programs, and mental health support",
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-teal-500/20 to-cyan-500/20"
    }
  ]

  const openPositions = [
    {
      title: "Senior DevOps Engineer",
      department: "Engineering",
      location: "Darwin, Australia",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead our DevOps initiatives and help build scalable, secure infrastructure for our clients. Experience with AWS, Kubernetes, and CI/CD pipelines required.",
      skills: ["AWS", "Kubernetes", "Docker", "Terraform", "Jenkins", "Python"]
    },
    {
      title: "Cloud Solutions Architect",
      department: "Engineering",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      experience: "7+ years",
      description: "Design and implement cloud architectures for enterprise clients. Strong background in multi-cloud environments and security best practices.",
      skills: ["AWS", "Azure", "GCP", "Architecture Design", "Security", "Microservices"]
    },
    {
      title: "Frontend Developer",
      department: "Development",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Build beautiful, responsive web applications using modern frameworks. Join our team creating user-friendly interfaces for complex systems.",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "API Integration"]
    },
    {
      title: "Technical Support Specialist",
      department: "Support",
      location: "Darwin, Australia",
      type: "Full-time",
      experience: "2+ years",
      description: "Provide exceptional technical support to our clients. Help troubleshoot issues and ensure smooth operation of our managed services.",
      skills: ["Linux", "Networking", "Problem Solving", "Customer Service", "Documentation"]
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Lead technical projects from conception to delivery. Coordinate with cross-functional teams to ensure successful project outcomes.",
      skills: ["Project Management", "Agile", "Scrum", "Client Communication", "Risk Management"]
    },
    {
      title: "Junior Software Developer",
      department: "Development",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      experience: "0-2 years",
      description: "Start your career with us! Work on exciting projects while learning from experienced developers in a supportive environment.",
      skills: ["JavaScript", "Python", "Git", "Problem Solving", "Eagerness to Learn"]
    }
  ]

  const companyValues = [
    {
      title: "Innovation First",
      description: "We embrace new technologies and approaches to solve complex problems",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Team Collaboration",
      description: "We believe the best solutions come from working together",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Client Success",
      description: "Our clients' success is our success - we're invested in their growth",
      icon: <Star className="w-8 h-8" />
    },
    {
      title: "Continuous Learning",
      description: "We're always growing, learning, and improving our skills",
      icon: <GraduationCap className="w-8 h-8" />
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navbar */}
      <Navbar currentPage="careers" />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            
            {/* Animated particles */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -50, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
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
                <Badge className="mb-6 rounded-full px-6 py-2 text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800" variant="outline">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Join Our Team
                </Badge>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              >
                <span className="bg-gradient-to-r from-foreground via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Build Your Career
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  With Innovation
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8"
              >
                Join a dynamic team of passionate technologists working on cutting-edge projects across Australia and Sri Lanka. Shape the future of IT infrastructure while growing your career.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              >
                <Button size="lg" className="rounded-full h-12 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group">
                  <span className="flex items-center gap-2">
                    View Open Positions
                    <Briefcase className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  </span>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8 border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-950">
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Learn About Our Culture
                  </span>
                </Button>
              </motion.div>

              {/* Company Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
              >
                {[
                  { number: "50+", label: "Team Members" },
                  { number: "2", label: "Office Locations" },
                  { number: "100+", label: "Projects Delivered" },
                  { number: "98%", label: "Client Satisfaction" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Company Values */}
        <section className="w-full py-20 bg-gradient-to-br from-slate-50/50 via-blue-50/30 to-purple-50/30 dark:from-slate-950/50 dark:via-blue-950/30 dark:to-purple-950/30">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do and shape our company culture
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {companyValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="h-full border-0 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
                        {value.icon}
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-20">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Us?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We believe in taking care of our team with comprehensive benefits and growth opportunities
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <Card className={`h-full border-0 bg-gradient-to-br ${benefit.gradient} backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-slate-700 dark:text-slate-300 flex-shrink-0">
                          {benefit.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-slate-800 dark:text-slate-200">{benefit.title}</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="w-full py-20 bg-gradient-to-br from-slate-50/50 via-blue-50/30 to-purple-50/30 dark:from-slate-950/50 dark:via-blue-950/30 dark:to-purple-950/30">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950/50 rounded-full mb-6">
                <Briefcase className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Current Openings</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                Open Positions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find your perfect role and join our growing team of technology professionals
              </p>
            </motion.div>

            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-0 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            <h3 className="text-xl font-bold text-foreground">{position.title}</h3>
                            <Badge variant="secondary" className="text-xs">
                              {position.department}
                            </Badge>
                            <Badge variant="outline" className="text-xs border-green-200 text-green-700 dark:border-green-800 dark:text-green-300">
                              {position.type}
                            </Badge>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{position.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{position.experience}</span>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground mb-4 leading-relaxed">{position.description}</p>
                          
                          <div className="flex flex-wrap gap-2">
                            {position.skills.map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="secondary" className="text-xs bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button variant="outline" size="sm" className="rounded-full">
                            Learn More
                          </Button>
                          <Button size="sm" className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                            Apply Now
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="w-full py-20">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Hiring Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We've designed a transparent and efficient process to help you showcase your skills
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8 relative">
                <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
                
                {[
                  {
                    step: "01",
                    title: "Apply Online",
                    description: "Submit your application through our career portal with your resume and cover letter"
                  },
                  {
                    step: "02",
                    title: "Initial Screening",
                    description: "Our talent team will review your application and may conduct a brief phone screening"
                  },
                  {
                    step: "03",
                    title: "Technical Interview",
                    description: "Demonstrate your technical skills through practical exercises and discussions"
                  },
                  {
                    step: "04",
                    title: "Final Interview",
                    description: "Meet with the team and discuss culture fit, career goals, and next steps"
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative text-center"
                  >
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg relative z-10">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 bg-gradient-to-br from-slate-50/50 via-blue-50/30 to-purple-50/30 dark:from-slate-950/50 dark:via-blue-950/30 dark:to-purple-950/30">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Card className="relative border-border/40 bg-gradient-to-r from-background via-muted/20 to-background backdrop-blur-sm shadow-2xl rounded-2xl max-w-3xl mx-auto">
                <CardContent className="p-12">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                      Ready to Start Your Journey?
                    </h3>
                  </motion.div>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg text-muted-foreground mb-8 leading-relaxed"
                  >
                    Don't see the perfect role? We're always looking for talented individuals to join our team. Send us your resume and let's talk about opportunities.
                  </motion.p>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
                  >
                    <Button size="lg" className="rounded-full h-12 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group">
                      <span className="flex items-center gap-2">
                        Send Your Resume
                        <Code className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full h-12 px-8 border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-950">
                      <span className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Join Our Talent Network
                      </span>
                    </Button>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-sm text-muted-foreground"
                  >
                    <p>Questions about working with us? Contact our HR team at <strong>careers@syncos.com</strong></p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}