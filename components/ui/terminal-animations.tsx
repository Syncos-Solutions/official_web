// components/ui/terminal-animations.tsx
"use client";

import { motion, MotionProps } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge"

interface AnimatedSpanProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedSpan = ({
  children,
  delay = 0,
  className,
  ...props
}: AnimatedSpanProps) => (
  <motion.div
    initial={{ opacity: 0, y: -5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: delay / 1000 }}
    className={twMerge("grid text-sm font-normal tracking-tight", className)}
    {...props}
  >
    {children}
  </motion.div>
);

interface TypingAnimationProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
}

export const TypingAnimation = ({
  children,
  className,
  duration = 60,
  delay = 0,
  as: Component = "span",
  ...props
}: TypingAnimationProps) => {
  if (typeof children !== "string") {
    throw new Error("TypingAnimation: children must be a string.");
  }
  
  const MotionComponent = motion(Component);
  
  const [displayedText, setDisplayedText] = useState<string>("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);
  
  useEffect(() => {
    if (!started) return;
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);
    
    return () => {
      clearInterval(typingEffect);
    };
  }, [children, duration, started]);
  
  return (
    <MotionComponent
      ref={elementRef}
      className={twMerge("text-sm font-normal tracking-tight", className)}
      {...props}
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </MotionComponent>
  );
};

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const Terminal = ({ children, className, title = "terminal" }: TerminalProps) => {
  return (
    <div
      className={twMerge(
        "z-0 h-full max-h-[600px] w-full rounded-xl border border-gray-600 bg-black/90 backdrop-blur-sm shadow-2xl",
        className,
      )}
    >
      <div className="flex flex-col gap-y-2 border-b border-gray-600 p-4 bg-gray-800/50">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
            <div className="h-3 w-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
          </div>
          <div className="text-sm text-gray-400 font-mono">{title}</div>
          <div className="w-16"></div>
        </div>
      </div>
      <pre className="p-6 overflow-auto h-full bg-black/80">
        <code className="grid gap-y-2 text-green-400 font-mono text-sm leading-relaxed">
          {children}
        </code>
      </pre>
    </div>
  );
};