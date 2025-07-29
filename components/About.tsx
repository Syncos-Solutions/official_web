"use client"

import { motion } from "framer-motion"
import { Badge } from "../components/ui/badge"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import {
  Zap,
  Shield,
  Users,
  BarChart,
  Layers,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Award,
  Globe,
  Clock
} from "lucide-react"

const AboutSection = () => {
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

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: <CheckCircle className="w-5 h-5" /> },
    { number: "50+", label: "Happy Clients", icon: <Users className="w-5 h-5" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <TrendingUp className="w-5 h-5" /> },
    { number: "24/7", label: "Expert Support", icon: <Clock className="w-5 h-5" /> }
  ]

  const values = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage in the digital landscape.",
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client Partnership", 
      description: "Your success is our success. We work closely with you to understand your unique needs and deliver tailored solutions that exceed expectations.",
      gradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Reliability",
      description: "We maintain the highest standards of security and reliability in every project, ensuring your data and systems are protected around the clock.",
      gradient: "from-green-500/10 to-emerald-500/10"
    }
  ]

  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Industry Recognition",
      description: "Recognized as a leading IT solutions provider"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Serving clients across multiple continents"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Proven Growth",
      description: "Consistent year-over-year client satisfaction"
    }
  ]

  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden" id="About">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
          <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            About Syncos Solutions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Innovating Tomorrow's Technology Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're not just another IT company. We're visionaries, problem-solvers, and digital architects 
            crafting the future of technology solutions for businesses worldwide.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                Empowering Businesses Through Digital Excellence
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since our inception, Syncos Solutions has been at the forefront of technological innovation. 
                We believe that every business deserves access to cutting-edge solutions that drive growth, 
                efficiency, and success in the digital age.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of passionate developers, designers, and strategists work tirelessly to transform 
                complex challenges into elegant, scalable solutions that exceed expectations.
              </p>
            </div>

            {/* Stats Grid */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6 pt-8 border-t border-border/40"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group"
                >
                  <Card className="p-6 border-border/40 bg-gradient-to-br from-background to-muted/20 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                    <CardContent className="p-0 text-center">
                      <div className="text-primary mb-2 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Orbiting Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <div className="relative flex h-[500px] w-full max-w-[500px] items-center justify-center overflow-hidden">
              {/* Central Logo */}
              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-lg font-bold shadow-lg">
                SS
              </div>

              {/* Orbit 1 - Inner circle */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="relative h-full w-full">
                  <div className="absolute top-1/2 left-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/20"></div>
                  {/* React */}
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-card border border-border/40 backdrop-blur-sm hover:shadow-lg transition-all duration-300" style={{ top: 'calc(50% - 100px)', left: '50%', transform: 'translateX(-50%)' }}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-6 h-6" />
                  </div>
                  {/* Node.js */}
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-card border border-border/40 backdrop-blur-sm hover:shadow-lg transition-all duration-300" style={{ top: 'calc(50% + 100px)', left: '50%', transform: 'translateX(-50%)' }}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-6 h-6" />
                  </div>
                  {/* Docker */}
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-card border border-border/40 backdrop-blur-sm hover:shadow-lg transition-all duration-300" style={{ top: '50%', left: 'calc(50% + 100px)', transform: 'translateY(-50%)' }}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-6 h-6" />
                  </div>
                  {/* TypeScript */}
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-card border border-border/40 backdrop-blur-sm hover:shadow-lg transition-all duration-300" style={{ top: '50%', left: 'calc(50% - 100px)', transform: 'translateY(-50%)' }}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Orbit 2 - Middle circle */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}>
                <div className="relative h-full w-full">
                  <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/20"></div>
                  {/* AWS */}
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-card border border-border/40 backdrop-blur-sm hover:shadow-lg transition-all duration-300" style={{ top: 'calc(50% - 150px)', left: '50%', transform: 'translateX(-50%)' }}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className="w-6 h-6" />
                  </div>
                  {/* Kubernetes */}
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-card border border-border/40 backdrop-blur-sm hover:shadow-lg transition-all duration-300" style={{ top: 'calc(50% + 150px)', left: '50%', transform: 'translateX(-50%)' }}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" className="w-6 h-6" />
                  </div>
                  {/* PostgreSQL */}
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-card border border-border/40 backdrop-blur-sm hover:shadow-lg transition-all duration-300" style={{ top: '50%', left: 'calc(50% + 150px)', transform: 'translateY(-50%)' }}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-6 h-6" />
                  </div>
                  {/* MongoDB */}
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-card border border-border/40 backdrop-blur-sm hover:shadow-lg transition-all duration-300" style={{ top: '50%', left: 'calc(50% - 150px)', transform: 'translateY(-50%)' }}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-6 h-6" />
                  </div>
                  {/* Redis */}
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-card border border-border/40 backdrop-blur-sm hover:shadow-lg transition-all duration-300" style={{ top: 'calc(50% - 106px)', left: '86%' }}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" className="w-6 h-6" />
                  </div>
                  {/* GraphQL */}
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-card border border-border/40 backdrop-blur-sm hover:shadow-lg transition-all duration-300" style={{ top: 'calc(50% + 106px)', left: 'calc(50% - 106px)' }}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt="GraphQL" className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Orbit 3 - Outer circle */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '40s' }}>
                <div className="relative h-full w-full">
                  <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/20"></div>
                  {/* Terraform */}
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-card border border-border/40 backdrop-blur-sm hover:shadow-lg transition-all duration-300" style={{ top: 'calc(50% - 200px)', left: '80%', transform: 'translateX(-50%)' }}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" alt="Terraform" className="w-6 h-6" />
                  </div>
                  {/* Grafana */}
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-card border border-border/40 backdrop-blur-sm hover:shadow-lg transition-all duration-300" style={{ top: 'calc(50% + 200px)', left: '50%', transform: 'translateX(-50%)' }}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" alt="Grafana" className="w-6 h-6" />
                  </div>
                  {/* Jenkins */}
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-card border border-border/40 backdrop-blur-sm hover:shadow-lg transition-all duration-300" style={{ top: '50%', left: 'calc(50% + 200px)', transform: 'translateY(-50%)' }}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" alt="Jenkins" className="w-6 h-6" />
                  </div>
                  {/* Nginx */}
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-card border border-border/40 backdrop-blur-sm hover:shadow-lg transition-all duration-300" style={{ top: '50%', left: 'calc(50% - 200px)', transform: 'translateY(-50%)' }}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" alt="Nginx" className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vision & Mission Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <Card className="p-8 border-border/40 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
            <CardContent className="p-0">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                  <BarChart className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading technology partner that empowers businesses worldwide to achieve 
                digital transformation and sustainable growth through innovative, reliable, and scalable solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 border-border/40 bg-gradient-to-br from-secondary/5 to-accent/5 backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
            <CardContent className="p-0">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional technology solutions that solve real-world problems, enhance business 
                efficiency, and create lasting value for our clients through innovation, expertise, and dedication.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            Why Leading Companies Trust Us
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group"
              >
                <Card className="p-8 border-border/40 bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/30 h-full">
                  <CardContent className="p-0 text-center">
                    <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                      {achievement.icon}
                    </div>
                    <h4 className="font-bold text-foreground mb-3 text-lg">{achievement.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <Card className="p-8 md:p-12 border-border/40 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 backdrop-blur-sm hover:shadow-xl transition-all duration-500">
            <CardContent className="p-0 space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">Ready to Transform Your Business?</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Let's discuss how Syncos Solutions can help you achieve your technology goals and drive your business forward with innovative solutions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button size="lg" className="rounded-full h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground group">
                  <span className="flex items-center gap-2">
                    Get Free Consultation
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8 border-primary/30 hover:bg-primary/10">
                  View Our Portfolio
                </Button>
              </div>

              <div className="flex items-center justify-center gap-8 pt-6 text-sm text-muted-foreground border-t border-border/40">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>No commitment required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Expert consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Tailored solutions</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection