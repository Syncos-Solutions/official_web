"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ChevronRight,
  Menu,
  X,
  Moon,
  Sun,
} from "lucide-react"

import { useTheme } from "next-themes"
import { Button } from "./ui/button"

interface NavbarProps {
  currentPage?: string
}

export default function Navbar({ currentPage = "home" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const isActivePage = (page: string) => currentPage === page

  const navLinks = [
    { href: "/#Features", label: "Features", page: "Features" },
    { href: "/#Blogs", label: "Blogs", page: "Blogs" },
    { href: "/#About", label: "About Us", page: "About" },
    // { href: "/career", label: "Career", page: "Career" },
    { href: "/contact", label: "Contact Us", page: "contact" },
  ]

  // Mobile menu links (matching your original structure)
  const mobileLinks = [
    { href: "#Features", label: "Features" },
    { href: "#Blogs", label: "Blogs" },
    { href: "#About", label: "About Us" },
    // { href: "/Career", label: "Career" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
        isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold font-medium">
          <Link href="/">
            <span className="cursor-pointer text-foreground font-mono text-xl text-black">
              Syncos Solutions
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.page}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                isActivePage(link.page)
                  ? "text-foreground border-b-2 border-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex gap-4 items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme} 
            className="rounded-full"
          >
            {mounted && theme === "dark" ? 
              <Sun className="size-[18px]" /> : 
              <Moon className="size-[18px]" />
            }
            <span className="sr-only">Toggle theme</span>
          </Button>
          
          <Button className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-mono">
           <Link href="/contact"> Connect with Us </Link>
            <ChevronRight className="ml-1 size-4" />
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme} 
            className="rounded-full"
          >
            {mounted && theme === "dark" ? 
              <Sun className="size-[18px]" /> : 
              <Moon className="size-[18px]" />
            }
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
        >
          <div className="container py-4 flex flex-col gap-4">
            {mobileLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`py-2 text-sm font-medium transition-colors ${
                  isActivePage(link.label.toLowerCase().replace(' ', ''))
                    ? "text-foreground border-l-2 border-primary pl-2"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="flex flex-col gap-2 pt-2 border-t ">
              <Button 
                className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-mono"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href="/contact"> Connect with Us </Link>
                <ChevronRight className="ml-1 size-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
