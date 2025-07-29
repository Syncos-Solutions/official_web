"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye, Users, FileText, Clock } from "lucide-react"

import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { Badge } from "../../components/ui/badge"
import { Card, CardContent } from "../../components/ui/card"

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      icon: <FileText className="w-5 h-5" />,
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include your name, email address, phone number, company information, and any other information you choose to provide."
        },
        {
          subtitle: "Technical Information",
          text: "We automatically collect certain information about your device and how you interact with our services, including IP address, browser type, operating system, referring URLs, and usage data."
        },
        {
          subtitle: "Cookies and Tracking",
          text: "We use cookies and similar tracking technologies to collect information about your browsing activities and to provide personalized experiences."
        }
      ]
    },
    {
      title: "How We Use Your Information",
      icon: <Users className="w-5 h-5" />,
      content: [
        {
          subtitle: "Service Provision",
          text: "We use your information to provide, maintain, and improve our IT services, respond to your inquiries, and fulfill our contractual obligations."
        },
        {
          subtitle: "Communication",
          text: "We may use your contact information to send you technical notices, updates, security alerts, and administrative messages related to our services."
        },
        {
          subtitle: "Analytics and Improvement",
          text: "We analyze usage patterns to understand how our services are used and to improve functionality and user experience."
        }
      ]
    },
    {
      title: "Information Sharing",
      icon: <Eye className="w-5 h-5" />,
      content: [
        {
          subtitle: "Service Providers",
          text: "We may share your information with trusted third-party service providers who assist us in operating our business and providing services to you."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required by law, court order, or to protect our rights, property, or safety, or that of others."
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction."
        }
      ]
    },
    {
      title: "Data Security",
      icon: <Lock className="w-5 h-5" />,
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
        },
        {
          subtitle: "Encryption",
          text: "We use industry-standard encryption protocols to protect data in transit and at rest."
        },
        {
          subtitle: "Access Controls",
          text: "Access to personal information is restricted to authorized personnel who need it to perform their job functions."
        }
      ]
    },
    {
      title: "Your Rights",
      icon: <Shield className="w-5 h-5" />,
      content: [
        {
          subtitle: "Access and Correction",
          text: "You have the right to access, update, or correct your personal information. You may also request a copy of the personal information we hold about you."
        },
        {
          subtitle: "Data Portability",
          text: "You have the right to receive your personal information in a structured, commonly used format and to have it transmitted to another controller."
        },
        {
          subtitle: "Deletion",
          text: "You may request the deletion of your personal information, subject to certain legal obligations and legitimate business interests."
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navbar */}
      <Navbar currentPage="privacy" />

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
                <Shield className="w-4 h-4 mr-2" />
                Privacy & Data Protection
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-foreground via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Privacy Policy
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                Your privacy is important to us. This policy outlines how Syncos Solutions collects, uses, and protects your personal information.
              </p>
              
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Last updated: January 29, 2025</span>
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
                    <CardContent className="relative p-10 ">
                      <div className="flex items-start gap-6">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                            <Shield className="w-8 h-8 text-white" />
                          </div>
                          <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl blur-md opacity-50 animate-pulse"></div>
                        </div>
                        <div className="flex-1 mt-3">
                          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 dark:from-slate-100 dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                            Your Privacy, Our Priority
                          </h2>
                          <p className="text-md text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                            At Syncos Solutions, we believe privacy is a fundamental right. This comprehensive policy explains how we collect, protect, and respect your personal information throughout our partnership.
                          </p>
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            By choosing our services, you're trusting us with your data. We take this responsibility seriously and are committed to transparency in all our data practices.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              {/* Bento Grid Layout */}
              <div className="grid grid-cols-12 gap-6 mb-20">
                {sections.map((section, index) => {
                  // Define grid layouts for bento style
                  const gridLayouts = [
                    "col-span-12 md:col-span-8", // Information We Collect - Wide
                    "col-span-12 md:col-span-4", // How We Use Your Information - Narrow
                    "col-span-12 md:col-span-5", // Information Sharing - Medium
                    "col-span-12 md:col-span-7", // Data Security - Wide
                    "col-span-12 md:col-span-12" // Your Rights - Full width
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
                                {section.icon}
                              </div>
                              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 group-hover:text-slate-900">
                                {section.title}
                              </h3>
                            </div>
                            
                            {/* Content Items */}
                            <div className={`space-y-4 flex-1 ${index === 4 ? 'grid md:grid-cols-3 md:gap-6 md:space-y-0' : ''}`}>
                              {section.content.map((item, itemIndex) => (
                                <motion.div
                                  key={itemIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.4, delay: (index * 0.15) + (itemIndex * 0.1) }}
                                  className="group/item"
                                >
                                  <div className="relative">
                                    <h4 className="text-base font-medium mb-2 text-slate-800 dark:text-slate-200 group-hover:text-slate-900">
                                      {item.subtitle}
                                    </h4>
                                    <p className="text-slate-600 dark:text-slate-400 group-hover:text-slate-700 leading-relaxed text-sm">
                                      {item.text}
                                    </p>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}