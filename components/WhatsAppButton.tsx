"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"

interface WhatsAppButtonProps {
  phoneNumber: string // Format: country code + number (e.g., "1234567890" for +1 234 567 890)
  message?: string
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left"
  showTooltip?: boolean
  className?: string
}

const WhatsAppButton = ({ 
  phoneNumber, 
  message = "Hello! I'm interested in your services.",
  position = "bottom-right",
  showTooltip = true,
  className = ""
}: WhatsAppButtonProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltipState, setShowTooltipState] = useState(false)

  useEffect(() => {
    // Show button after page loads
    const timer = setTimeout(() => {
      setIsVisible(true)
      
      // Show tooltip after 3 seconds, hide after 8 seconds total
      if (showTooltip) {
        setTimeout(() => setShowTooltipState(true), 3000)
        setTimeout(() => setShowTooltipState(false), 8000)
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [showTooltip])

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  const getPositionClasses = () => {
    switch (position) {
      case "bottom-left":
        return "bottom-6 left-10"
      case "top-right":
        return "top-6 right-6"
      case "top-left":
        return "top-6 left-6"
      default:
        return "bottom-6 right-8"
    }
  }

  const getTooltipPosition = () => {
    switch (position) {
      case "bottom-left":
        return "left-16 bottom-2"
      case "top-right":
        return "left-16 top-2"
      case "top-left":
        return "right-16 top-2"
      default:
        return "left-16 bottom-2"
    }
  }

  const getTooltipArrow = () => {
    switch (position) {
      case "bottom-left":
        return "-left-1 top-1/2 -translate-y-1/2 rotate-45"
      case "top-right":
        return "-right-1 top-1/2 -translate-y-1/2 rotate-45"
      case "top-left":
        return "-left-1 top-1/2 -translate-y-1/2 rotate-45"
      default:
        return "-right-1 top-1/2 -translate-y-1/2 rotate-45"
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20 
          }}
          className={`fixed ${getPositionClasses()} z-50 ${className}`}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltipState && (
              <motion.div
                initial={{ 
                  opacity: 0, 
                  x: position.includes('right') ? 20 : -20,
                  y: 5
                }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  y: 0
                }}
                exit={{ 
                  opacity: 0, 
                  x: position.includes('right') ? 20 : -20,
                  y: 5
                }}
                transition={{ duration: 0.3 }}
                className={`absolute ${getTooltipPosition()} max-w-sm`}
              >
                <div className="bg-white dark:bg-gray-800  text-gray-800 dark:text-white px-8 py-5  rounded-lg shadow-lg border border-gray-200 dark:border-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="flex-1">
                      <p className="text-sm font-medium mb-1">Need help? Chat with us!</p>
                      <p className="text-xs text-gray-600 dark:text-gray-300">We typically reply instantly</p>
                    </div>
                    <button
                      onClick={() => setShowTooltipState(false)}
                      className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 flex-shrink-0"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  {/* Arrow */}
                  <div
                    className={`absolute w-2 h-2 bg-white dark:bg-gray-800 border-r border-b border-gray-200 dark:border-gray-600 ${getTooltipArrow()}`}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.button
            onClick={handleWhatsAppClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
            aria-label="Chat on WhatsApp"
          >
            {/* Pulsing ring animation */}
            <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
            <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-50"></div>
            
            {/* Main button */}
            <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 transform hover:rotate-12">
              {/* Real WhatsApp Logo */}
              <img 
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg"
                alt="WhatsApp"
                className="w-7 h-7 text-white filter brightness-0 invert"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              
              {/* Online indicator */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-gray-800">
                <div className="w-full h-full bg-green-400 rounded-full animate-ping"></div>
              </div>
            </div>

            {/* Hover tooltip */}
            <div className="absolute bottom-full mb-3 left-10 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg">
              Chat on WhatsApp
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
            </div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WhatsAppButton