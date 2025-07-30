import Link from "next/link"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram  } from "lucide-react"
import Newsletter from "./newsletter"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur-sm relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_100%,#000_40%,transparent_100%)]"></div>
      
      <div className="container relative">
        {/* Newsletter Section */}
        <div className="px-4 py-12 md:px-6">
          <div className="max-w-2xl mx-auto">
            <Newsletter />
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16 border-t border-border/40">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 font-medium text-lg">
                <span className="bg-gradient-to-r text-foreground font-mono text-xl text-black bg-clip-text font-bold">
                  Syncos Solutions
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                Your trusted IT partner for DevOps, cloud infrastructure, and smart automation. 
                We help businesses streamline, secure, and scale with expert-driven solutions.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="size-4" />
                  <a href="mailto:hello@syncossolutions.com" className="hover:text-primary transition-colors">
                    info@syncossolutions.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="size-4" />
                  <a href="tel:+94123456789" className="hover:text-primary transition-colors">
                    +94 12 345 6789
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="size-4" />
                  <span>Colombo, Sri Lanka</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 pt-2">
                <a 
                  href="https://www.linkedin.com/company/syncos-solution/" 
                  className="p-2 rounded-full bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
                >
                  <Linkedin className="size-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/Syncos-Solutions" 
                  className="p-2 rounded-full bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
                >
                  <Github className="size-4" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-full bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
                >
                  <Twitter className="size-4" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-full bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
                >
                  <Instagram className="size-4" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
            
            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-foreground">Services</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/#Features" className="text-muted-foreground hover:text-primary transition-colors">
                    DevOps Automation
                  </Link>
                </li>
                <li>
                  <Link href="/#Features" className="text-muted-foreground hover:text-primary transition-colors">
                    Cloud Infrastructure
                  </Link>
                </li>
                <li>
                  <Link href="/#Features" className="text-muted-foreground hover:text-primary transition-colors">
                    Security & Compliance
                  </Link>
                </li>
                <li>
                  <Link href="/#Features" className="text-muted-foreground hover:text-primary transition-colors">
                    24/7 Support
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Company */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-foreground">Company</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/#About" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/Projects" className="text-muted-foreground hover:text-primary transition-colors">
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link href="/#Blogs" className="text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Resources */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-foreground">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/#FAQ" className="text-muted-foreground hover:text-primary transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-muted-foreground hover:text-primary transition-colors">
                    Support Center
                  </Link>
                </li>
                <li>
                  <Link href="/privacy_policy" className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms_and_conditions" className="text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Syncos Solutions. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-end">
              <Link href="/privacy_policy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms_and_conditions" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy_policy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}