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
  
  // Industrial green palette
  // base: emerald-600 (#059669), dark: emerald-800 (#065f46), soft: emerald-300 (#6ee7b7)
  const variants = {
    solid: "bg-emerald-600 text-white hover:bg-emerald-800 hover:text-white",
    ghost: "text-emerald-600 hover:text-emerald-400 bg-transparent",
    outline: "border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white",
    link: "px-0 py-2 text-emerald-600 hover:text-emerald-400"
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