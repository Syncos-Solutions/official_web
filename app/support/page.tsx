"use client"

import { motion } from "framer-motion"
import { Headphones, MessageCircle, Mail, Phone, Clock, Search, FileText, Zap, Shield, Users, HelpCircle } from "lucide-react"

import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { Badge } from "../../components/ui/badge"
import { Card, CardContent } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion"

export default function SupportPage() {
  const supportOptions = [
    {
      title: "24/7 Emergency Support",
      description: "Critical system issues and emergencies",
      icon: <Zap className="w-6 h-6" />,
      availability: "Available 24/7",
      responseTime: "15 minutes",
      contact: "+61 8 1234 5678",
      action: "Call Emergency Line"
    },
    {
      title: "Technical Support",
      description: "General technical questions and assistance",
      icon: <Headphones className="w-6 h-6" />,
      availability: "Mon-Fri: 8 AM - 6 PM ACST",
      responseTime: "2-4 hours",
      contact: "support@syncos.com",
      action: "Email Support"
    },
    {
      title: "Live Chat",
      description: "Quick questions and instant assistance",
      icon: <MessageCircle className="w-6 h-6" />,
      availability: "Mon-Fri: 9 AM - 5 PM ACST",
      responseTime: "< 5 minutes",
      contact: "Chat with us",
      action: "Start Chat"
    },
    {
      title: "Project Consultation",
      description: "Planning and strategy discussions",
      icon: <Users className="w-6 h-6" />,
      availability: "By appointment",
      responseTime: "Same day",
      contact: "Book a meeting",
      action: "Schedule Call"
    }
  ]

  const supportCategories = [
    {
      title: "Getting Started",
      icon: <FileText className="w-5 h-5" />,
      articles: [
        "Initial Setup and Configuration",
        "Account Creation and Management",
        "Basic Service Overview",
        "First Steps with Your Infrastructure"
      ]
    },
    {
      title: "Technical Documentation",
      icon: <Shield className="w-5 h-5" />,
      articles: [
        "API Documentation and Integration",
        "Security Best Practices",
        "System Requirements",
        "Troubleshooting Common Issues"
      ]
    },
    {
      title: "Billing & Account",
      icon: <Users className="w-5 h-5" />,
      articles: [
        "Understanding Your Invoice",
        "Payment Methods and Billing Cycles",
        "Account Settings and Preferences",
        "Service Plan Upgrades"
      ]
    }
  ]

  const faqs = [
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
  ]

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navbar */}
      <Navbar currentPage="support" />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            
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
              <Badge className="mb-6 rounded-full px-6 py-2 text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800" variant="outline">
                <Headphones className="w-4 h-4 mr-2" />
                Expert Support Team
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-foreground via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Get Expert Support
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                Our dedicated support team is here to help you succeed. Get the assistance you need, when you need it, with our comprehensive support options.
              </p>
              
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Support available 24/7 for emergencies</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="w-full py-20 relative overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            <div className="max-w-6xl mx-auto">
              {/* Modern Introduction Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-16"
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/50 via-purple-600/30 to-cyan-600/50 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <Card className="relative border-0 bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl shadow-xl rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-white/80 dark:from-slate-900/80 dark:via-slate-800/40 dark:to-slate-900/80"></div>
                    <CardContent className="relative p-10">
                      <div className="flex items-start gap-6">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                            <Headphones className="w-8 h-8 text-white" />
                          </div>
                          <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl blur-md opacity-50 animate-pulse"></div>
                        </div>
                        <div className="flex-1">
                          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 dark:from-slate-100 dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                            Professional Support When You Need It
                          </h2>
                          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                            Our dedicated support team provides expert assistance across multiple channels. From emergency response to technical guidance, we're here to ensure your success with our services.
                          </p>
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Choose from our range of support options designed to meet your specific needs and urgency requirements. Professional, reliable, and always available when you need us most.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              {/* Bento Grid Layout for Support Options */}
              <div className="grid grid-cols-12 gap-6 mb-16">
                {supportOptions.map((option, index) => {
                  // Define grid layouts for bento style
                  const gridLayouts = [
                    "col-span-12 md:col-span-6", // 24/7 Emergency Support - Half
                    "col-span-12 md:col-span-6", // Technical Support - Half
                    "col-span-12 md:col-span-8", // Live Chat - Wide
                    "col-span-12 md:col-span-4"  // Project Consultation - Narrow
                  ];

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      whileHover={{ y: -5, transition: { duration: 0.3 } }}
                      className={`group ${gridLayouts[index]}`}
                    >
                      <div className="relative h-full">
                        
                        <Card className="relative h-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-white dark:hover:bg-white/95 shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden">
                          
                          <CardContent className="relative p-6 h-full flex flex-col">
                            {/* Section Header */}
                            <div className="flex items-center gap-3 mb-6">
                              <div className="w-10 h-10 bg-blue-600 hover:bg-white group-hover:text-blue-600 rounded-lg flex items-center justify-center text-white transition-all duration-300">
                                {option.icon}
                              </div>
                              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 group-hover:text-slate-900">
                                {option.title}
                              </h3>
                            </div>
                            
                            {/* Content */}
                            <div className="space-y-4 flex-1">
                              <p className="text-slate-600 dark:text-slate-400 group-hover:text-slate-700 leading-relaxed text-sm">
                                {option.description}
                              </p>
                              
                              <div className="space-y-2">
                                <div>
                                  <h4 className="text-base font-medium mb-1 text-slate-800 dark:text-slate-200 group-hover:text-slate-900">
                                    Availability
                                  </h4>
                                  <p className="text-slate-600 dark:text-slate-400 group-hover:text-slate-700 text-sm">
                                    {option.availability}
                                  </p>
                                </div>
                                
                                <div>
                                  <h4 className="text-base font-medium mb-1 text-slate-800 dark:text-slate-200 group-hover:text-slate-900">
                                    Response Time
                                  </h4>
                                  <p className="text-slate-600 dark:text-slate-400 group-hover:text-slate-700 text-sm">
                                    {option.responseTime}
                                  </p>
                                </div>
                                
                                <div>
                                  <h4 className="text-base font-medium mb-1 text-slate-800 dark:text-slate-200 group-hover:text-slate-900">
                                    Contact
                                  </h4>
                                  <p className="text-slate-600 dark:text-slate-400 group-hover:text-slate-700 text-sm">
                                    {option.contact}
                                  </p>
                                </div>
                              </div>
                            </div>
                            
                            {/* Action Button */}
                            <div className="mt-4">
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="w-full border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:border-blue-300 dark:hover:border-blue-600"
                              >
                                {option.action}
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Knowledge Base Section */}
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                {supportCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    className="group"
                  >
                    <div className="relative h-full">
                      
                      <Card className="relative h-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-white dark:hover:bg-white/95 shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden">
                        
                        <CardContent className="relative p-6 h-full flex flex-col">
                          {/* Section Header */}
                          <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-blue-600 hover:bg-white group-hover:text-blue-600 rounded-lg flex items-center justify-center text-white transition-all duration-300">
                              {category.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 group-hover:text-slate-900">
                              {category.title}
                            </h3>
                          </div>
                          
                          {/* Articles List */}
                          <div className="space-y-3 flex-1">
                            {category.articles.map((article, articleIndex) => (
                              <motion.div
                                key={articleIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: (index * 0.15) + (articleIndex * 0.1) }}
                                className="group/item"
                              >
                                <a 
                                  href="#" 
                                  className="flex items-center gap-2 text-slate-600 dark:text-slate-400 group-hover:text-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
                                >
                                  <FileText className="w-3 h-3 flex-shrink-0" />
                                  {article}
                                </a>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* FAQ Section - Professional Layout */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mb-16"
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 dark:from-slate-100 dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                    Quick answers to the most commonly asked questions about our support services
                  </p>
                </div>

                <Card className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm rounded-lg overflow-hidden">
                  <CardContent className="p-8">
                    <Accordion type="single" collapsible className="w-full">
                      {faqs.map((faq, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <AccordionItem value={`item-${index}`} className="border-b border-slate-200 dark:border-slate-800 py-2">
                            <AccordionTrigger className="text-left font-medium hover:no-underline text-slate-900 dark:text-slate-100">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 dark:text-slate-400 leading-relaxed">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        </motion.div>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}