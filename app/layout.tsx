import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { ThemeProvider } from "../components/theme-provider"
import  WhatsAppButton  from "../components/WhatsAppButton"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Syncos Solutions - Elevate Your Workflow",
  description: "We engineer high-performance IT systems, automate processes, and simplify technology — so you can focus on what matters most: growth.",
  icons: {
    icon: '/favicon.ico?v=1',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico?v=1" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <WhatsAppButton 
            phoneNumber="1234567890" // Replace with your actual WhatsApp number (country code + number)
            message="Hello! I'm interested in your IT services. Can you help me?"
            position="bottom-left"
            showTooltip={true}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}