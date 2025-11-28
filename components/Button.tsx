import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  to?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '',
  fullWidth = false
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "border-transparent text-white bg-navy-900 hover:bg-navy-800 focus:ring-navy-900",
    secondary: "border-transparent text-white bg-gold-500 hover:bg-gold-600 focus:ring-gold-500",
    outline: "border-navy-900 text-navy-900 bg-transparent hover:bg-navy-50 focus:ring-navy-500",
    white: "border-white text-navy-900 bg-white hover:bg-gray-100 focus:ring-white",
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const classes = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};