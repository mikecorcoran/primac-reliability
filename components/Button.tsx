import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'ghost' | 'outline' | 'link';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'solid', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseClasses = "relative overflow-hidden px-8 py-4 font-display font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 group inline-flex items-center justify-center";
  
  // Standardized industrial green palette
  // primary: #719B31, primary-dark: #567524, primary-soft: #A3C86A
  const variants = {
    solid: "bg-[#719B31] text-white hover:bg-[#567524] hover:text-white",
    ghost: "text-[#719B31] hover:text-[#A3C86A] bg-transparent",
    outline: "border border-[#719B31] text-[#719B31] hover:bg-[#719B31] hover:text-white",
    link: "px-0 py-2 text-[#719B31] hover:text-[#A3C86A]"
  } as const;

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {/* Content */}
      <span className="relative z-10 flex items-center gap-3">
        {children}
      </span>
    </button>
  );
};