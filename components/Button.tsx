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
  
  // Use a more natural emerald green accent
  const variants = {
    solid: "bg-text-main text-white hover:bg-emerald-700 hover:text-white",
    ghost: "text-text-main hover:text-emerald-700 bg-transparent",
    outline: "border border-text-main text-text-main hover:bg-text-main hover:text-white",
    link: "px-0 py-2 text-text-main hover:text-emerald-700"
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