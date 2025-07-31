
import React from "react";
import { twMerge } from "tailwind-merge";

export interface OrbitingCirclesProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 0,
  radius = 160,
  path = true,
  iconSize = 40,
  speed = 1,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;
  
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {path && (
        <div 
          className="absolute rounded-full border border-border/20"
          style={{
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
            transform: 'translate(-50%, -50%)'
          }}
        />
      )}
      
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;
        
        return (
          <div
            key={index}
            style={{
              transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
            }}
            className={twMerge(
              `absolute flex items-center justify-center rounded-full`,
              `animate-[spin_${calculatedDuration}s_linear_infinite]`,
              reverse ? "[animation-direction:reverse]" : "",
              className,
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}

// Tech Icon Component using CDN links
interface TechIconWithPathProps {
  iconPath: string;
  name: string;
  className?: string;
}

export function TechIconWithPath({ iconPath, name, className }: TechIconWithPathProps) {
  return (
    <div className={twMerge(
      "flex h-10 w-10 items-center justify-center rounded-full",
      "bg-card border border-border/40 backdrop-blur-sm",
      "hover:shadow-lg transition-all duration-300",
      "hover:scale-110",
      className
    )}>
      <img
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconPath}`}
        alt={name}
        className="w-5 h-5 object-contain"
        loading="lazy"
      />
    </div>
  );
}

// Tech Icon Component
interface TechIconProps {
  icon: string;
  name: string;
  className?: string;
}

export function TechIcon({ icon, name, className }: TechIconProps) {
  return (
    <div className={twMerge(
      "flex h-full w-full items-center justify-center rounded-full",
      "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm",
      "border border-gray-200/40 dark:border-gray-700/40",
      "shadow-lg hover:shadow-xl transition-all duration-300",
      "hover:scale-110 hover:bg-white dark:hover:bg-gray-700",
      className
    )}>
      <img
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`}
        alt={name}
        className="w-5 h-5 object-contain"
        loading="lazy"
      />
    </div>
  );
}

// Orbit Container Component
interface OrbitContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function OrbitContainer({ children, className }: OrbitContainerProps) {
  return (
    <div className={twMerge(
      "relative flex items-center justify-center",
      "h-[500px] w-full max-w-[500px]",
      "overflow-visible",
      className
    )}>
      {children}
    </div>
  );
}