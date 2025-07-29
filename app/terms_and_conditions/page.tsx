"use client"

import { motion } from "framer-motion"
import { FileText, Scale, AlertTriangle, Users, Shield, Clock } from "lucide-react"

import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { Badge } from "../../components/ui/badge"
import { Card, CardContent } from "../../components/ui/card"

export default function TermsOfServicePage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      icon: <FileText className="w-5 h-5" />,
      content: [
        {
          subtitle: "Agreement to Terms",
          text: "By accessing and using Syncos Solutions' services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
        },
        {
          subtitle: "Modifications",
          text: "We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our website. Continued use of our services after such modifications constitutes acceptance of the updated terms."
        }
      ]
    },
    {
      title: "Service Description",
      icon: <Users className="w-5 h-5" />,
      content: [
        {
          subtitle: "IT Services",
          text: "Syncos Solutions provides comprehensive IT services including but not limited to DevOps automation, cloud infrastructure management, security consulting, system integration, and technical support."
        },
        {
          subtitle: "Service Availability",
          text: "While we strive to maintain 99.9% uptime, we do not guarantee uninterrupted service availability. Scheduled maintenance will be communicated in advance when possible."
        },
        {
          subtitle: "Service Modifications",
          text: "We reserve the right to modify, suspend, or discontinue any aspect of our services at any time, with or without notice, though we will make reasonable efforts to provide advance notice of significant changes."
        }
      ]
    },
    {
      title: "User Responsibilities",
      icon: <Shield className="w-5 h-5" />,
      content: [
        {
          subtitle: "Account Security",
          text: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use."
        },
        {
          subtitle: "Acceptable Use",
          text: "You agree to use our services only for lawful purposes and in accordance with our Acceptable Use Policy. You will not use our services to transmit harmful, offensive, or illegal content."
        },
        {
          subtitle: "Data Backup",
          text: "While we implement robust backup systems, you remain responsible for maintaining your own backups of critical data and systems."
        }
      ]
    },
    {
      title: "Payment Terms",
      icon: <Scale className="w-5 h-5" />,
      content: [
        {
          subtitle: "Billing",
          text: "Payment terms will be specified in your service agreement. Unless otherwise stated, invoices are due within 30 days of the invoice date. Late payments may result in service suspension."
        },
        {
          subtitle: "Refunds",
          text: "Refund policies vary by service type and will be detailed in your specific service agreement. Custom development work is generally non-refundable once commenced."
        },
        {
          subtitle: "Price Changes",
          text: "We reserve the right to modify our pricing with 30 days' notice for ongoing services. Price changes will not affect services already paid for in advance."
        }
      ]
    },
    {
      title: "Intellectual Property",
      icon: <FileText className="w-5 h-5" />,
      content: [
        {
          subtitle: "Our IP Rights",
          text: "All content, features, and functionality of our services are owned by Syncos Solutions and are protected by copyright, trademark, and other intellectual property laws."
        },
        {
          subtitle: "Client IP Rights",
          text: "You retain ownership of your data and any intellectual property you provide to us. We will not use your proprietary information for any purpose other than providing our services."
        },
        {
          subtitle: "Custom Development",
          text: "For custom development projects, intellectual property ownership will be explicitly defined in the project agreement before work begins."
        }
      ]
    },
    {
      title: "Limitation of Liability",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: [
        {
          subtitle: "Service Limitations",
          text: "Our services are provided 'as is' without warranties of any kind. We do not guarantee that our services will meet your specific requirements or be error-free."
        },
        {
          subtitle: "Liability Cap",
          text: "Our total liability for any claims arising from our services shall not exceed the amount paid by you for the specific service in the 12 months preceding the claim."
        },
        {
          subtitle: "Consequential Damages",
          text: "We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business interruption."
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navbar */}
      <Navbar currentPage="terms" />

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
                <Scale className="w-4 h-4 mr-2" />
                Legal Terms & Conditions
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-foreground via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Terms of Service
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                These terms govern your use of Syncos Solutions' services. Please read them carefully before using our services.
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
                    <CardContent className="relative p-10">
                      <div className="flex items-start gap-6">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                            <Scale className="w-8 h-8 text-white" />
                          </div>
                          <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl blur-md opacity-50 animate-pulse"></div>
                        </div>
                        <div className="flex-1">
                          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 dark:from-slate-100 dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                            Legal Framework for Our Partnership
                          </h2>
                          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                            These Terms of Service establish the foundation for our professional relationship. They outline the rights, responsibilities, and expectations for all parties using Syncos Solutions' services.
                          </p>
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            By accessing or using our services, you agree to be bound by these terms. We've designed them to be fair, transparent, and protective of both parties' interests.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              {/* Bento Grid Layout */}
              <div className="grid grid-cols-12 gap-6 mb-16">
                {sections.map((section, index) => {
                  // Define grid layouts for bento style
                  const gridLayouts = [
                    "col-span-12 md:col-span-6", // Acceptance of Terms - Half
                    "col-span-12 md:col-span-6", // Service Description - Half
                    "col-span-12 md:col-span-8", // User Responsibilities - Wide
                    "col-span-12 md:col-span-4", // Payment Terms - Narrow
                    "col-span-12 md:col-span-7", // Intellectual Property - Wide
                    "col-span-12 md:col-span-5"  // Limitation of Liability - Medium
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
                            <div className="space-y-4 flex-1">
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

              {/* Additional Legal Information */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {/* Governing Law */}
                <Card className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-white dark:hover:bg-white/95 shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-600 hover:bg-white group-hover:text-blue-600 rounded-lg flex items-center justify-center text-white transition-all duration-300">
                        <Scale className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 group-hover:text-slate-900">
                        Governing Law
                      </h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-base font-medium mb-2 text-slate-800 dark:text-slate-200 group-hover:text-slate-900">
                          Jurisdiction
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 group-hover:text-slate-700 leading-relaxed text-sm">
                          These Terms shall be governed by and construed in accordance with the laws of Australia. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Australia.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-base font-medium mb-2 text-slate-800 dark:text-slate-200 group-hover:text-slate-900">
                          Severability
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 group-hover:text-slate-700 leading-relaxed text-sm">
                          If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <Card className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-white dark:hover:bg-white/95 shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-600 hover:bg-white group-hover:text-blue-600 rounded-lg flex items-center justify-center text-white transition-all duration-300">
                        <FileText className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 group-hover:text-slate-900">
                        Legal Contact
                      </h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-base font-medium mb-2 text-slate-800 dark:text-slate-200 group-hover:text-slate-900">
                          Contact Information
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 group-hover:text-slate-700 leading-relaxed text-sm mb-3">
                          If you have any questions about these Terms of Service, please contact our legal team.
                        </p>
                        <div className="space-y-1 text-sm">
                          <p className="text-slate-600 dark:text-slate-400 group-hover:text-slate-700">
                            <strong>Email:</strong> legal@syncos.com
                          </p>
                          <p className="text-slate-600 dark:text-slate-400 group-hover:text-slate-700">
                            <strong>Phone:</strong> +61 8 1234 5678
                          </p>
                        </div>
                      </div>
                    </div>
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