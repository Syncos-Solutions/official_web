import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { ThemeProvider } from "../components/theme-provider"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Syncos Solutions - Elevate Your Workflow",
  description: "We engineer high-performance IT systems, automate processes, and simplify technology — so you can focus on what matters most: growth.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}