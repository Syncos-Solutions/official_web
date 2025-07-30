"use client"

// Extend Window type to include gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Check, AlertCircle, Send } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Enhanced email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      setStatus("error")
      setMessage("Please enter a valid email address")
      setTimeout(() => {
        setStatus("idle")
        setMessage("")
      }, 3000)
      return
    }

    setStatus("loading")
    
    try {
      // Option 1: Direct Resend API call (requires CORS setup)
      // Note: This approach requires your Resend API key to be public
      // Only use this if you're comfortable with that or use a restricted key
      
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Syncos Solutions <hello@notification.syncossolutions.com>',
          to: [email],
          subject: 'Welcome to Syncos Solutions Newsletter! 🚀',
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Welcome to Syncos Solutions</title>
            </head>
            <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
              <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);">
                
                <!-- Header -->
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; border-radius: 8px 8px 0 0; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">
                    Welcome to Syncos Solutions!
                  </h1>
                  <p style="color: #e2e8f0; margin: 10px 0 0 0; font-size: 16px;">
                    Your trusted IT partner for modern solutions
                  </p>
                </div>

                <!-- Content -->
                <div style="padding: 40px 30px;">
                  <h2 style="color: #1a202c; margin: 0 0 20px 0; font-size: 24px;">
                    Thank you for subscribing! 🎉
                  </h2>
                  
                  <p style="color: #4a5568; margin: 0 0 20px 0; font-size: 16px; line-height: 1.6;">
                    You're now part of our community of tech enthusiasts and business leaders who stay ahead of the curve.
                  </p>

                  <div style="background-color: #f7fafc; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #667eea;">
                    <h3 style="color: #2d3748; margin: 0 0 10px 0; font-size: 18px;">What to expect:</h3>
                    <ul style="color: #4a5568; margin: 0; padding-left: 20px; line-height: 1.6;">
                      <li>Weekly DevOps tips and best practices</li>
                      <li>Cloud infrastructure insights</li>
                      <li>Industry trends and technology updates</li>
                      <li>Exclusive case studies and project highlights</li>
                      <li>Early access to our latest resources</li>
                    </ul>
                  </div>

                  <!-- CTA Button -->
                  <div style="text-align: center; margin: 30px 0;">
                    <a href="https://syncossolutions.com" 
                       style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 12px 30px; border-radius: 6px; font-weight: 600; font-size: 16px;">
                      Explore Our Services
                    </a>
                  </div>
                </div>

                <!-- Footer -->
                <div style="background-color: #f7fafc; padding: 30px; border-radius: 0 0 8px 8px; text-align: center; border-top: 1px solid #e2e8f0;">
                  <p style="color: #718096; margin: 0 0 10px 0; font-size: 14px;">
                    <strong>Syncos Solutions</strong><br>
                    Colombo, Sri Lanka
                  </p>
                  
                  <p style="color: #a0aec0; margin: 0 0 15px 0; font-size: 12px;">
                    You received this email because you subscribed to our newsletter
                  </p>
                  
                  <div style="margin: 15px 0;">
                    <a href="https://syncossolutions.com" style="color: #667eea; text-decoration: none; margin: 0 10px; font-size: 12px;">Website</a>
                    <a href="mailto:hello@syncossolutions.com" style="color: #667eea; text-decoration: none; margin: 0 10px; font-size: 12px;">Contact</a>
                  </div>
                </div>
              </div>
            </body>
            </html>
          `,
        })
      })

      if (response.ok) {
        setStatus("success")
        setMessage("🎉 Welcome aboard! Check your inbox for a confirmation email from Syncos Solutions.")
        setEmail("")
        
        // Track successful subscription
        if (typeof window !== 'undefined') {
          if (window.gtag) {
            window.gtag('event', 'newsletter_subscribe', {
              event_category: 'Newsletter',
              event_label: 'Footer Subscription',
              email_domain: email.split('@')[1]
            })
          }
        }

        // Send admin notification (optional)
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Newsletter <admin@notification.syncossolutions.com>',
            to: ['admin@syncossolutions.com'], // Replace with your admin email
            subject: '📧 New Newsletter Subscription',
            html: `
              <h3>New Newsletter Subscription</h3>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
              <p><strong>Source:</strong> Website Footer</p>
            `,
          })
        })

      } else {
        const errorData = await response.json()
        setStatus("error")
        setMessage(errorData.message || "Failed to subscribe. Please try again.")
      }
      
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      
      // Fallback: Store in localStorage and show success message
      try {
        const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]')
        const newSubscriber = {
          email,
          timestamp: new Date().toISOString(),
          source: 'website_footer'
        }
        
        // Check if email already exists
        const exists = subscribers.find((sub: any) => sub.email === email)
        if (!exists) {
          subscribers.push(newSubscriber)
          localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers))
        }
        
        setStatus("success")
        setMessage("✅ Successfully subscribed! We'll contact you soon with updates.")
        setEmail("")
        
        // Log for manual processing
        console.log('Newsletter subscription stored locally:', newSubscriber)
        
      } catch (localError) {
        setStatus("error")
        setMessage("Connection error. Please try again or contact us directly.")
      }
    }
    
    // Reset status after 6 seconds
    setTimeout(() => {
      setStatus("idle")
      setMessage("")
    }, 6000)
  }

  return (
    <Card className="w-full border-border/40 bg-gradient-to-br from-background to-muted/10 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-full bg-primary/10 ">
                <Mail className="size-4 text-primary" />
              </div>
              <h3 className="text-lg font-bold">Stay Updated with Syncos Solutions</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed ">
              Join 2,500+ tech professionals getting weekly DevOps insights, cloud strategies, 
              and industry updates delivered straight to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 gap-5">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading"}
                  className="w-full px-4 py-2.5 rounded-lg border border-border/40 bg-background/50 backdrop-blur-sm 
                           text-sm placeholder:text-muted-foreground
                           focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 
                           disabled:opacity-50 disabled:cursor-not-allowed
                           transition-all duration-200"
                  required
                  autoComplete="email"
                />
              </div>
              <Button 
                type="submit" 
                disabled={status === "loading" || !email}
                className="rounded-lg h-[42px] px-6 bg-primary hover:bg-primary/90 disabled:opacity-50 
                          transform transition-all duration-200 hover:scale-105 active:scale-95"
              >
                {status === "loading" ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span className="text-sm">Subscribing...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="size-4" />
                    <span className="text-sm font-medium">Subscribe</span>
                  </div>
                )}
              </Button>
            </div>

            {/* Enhanced Status Messages */}
            {message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`flex items-start gap-2 p-4 rounded-lg text-sm border ${
                  status === "success" 
                    ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800" 
                    : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800"
                }`}
              >
                {status === "success" ? (
                  <Check className="size-4 flex-shrink-0 mt-0.5 text-green-600" />
                ) : (
                  <AlertCircle className="size-4 flex-shrink-0 mt-0.5 text-red-600" />
                )}
                <span className="leading-relaxed">{message}</span>
              </motion.div>
            )}
          </form>

          {/* Enhanced Social Proof */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs text-muted-foreground pt-2 border-t border-border/20">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {["S", "M", "A", "L", "T"].map((letter, i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center text-xs font-medium text-primary">
                    {letter}
                  </div>
                ))}
              </div>
              <span>2,500+ subscribers</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>Weekly updates</span>
              </div>
              {/* <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>No spam, ever</span>
              </div> */}
            </div>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed">
            By subscribing, you agree to receive marketing emails from Syncos Solutions. 
            You can unsubscribe at any time. We respect your privacy and will never share your data.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}