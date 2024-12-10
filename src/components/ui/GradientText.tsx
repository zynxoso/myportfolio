import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const GradientText = ({ children, className = '' }: GradientTextProps) => {
  return (
    <span className={`text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-600 ${className}`}>
      {children}
    </span>
  );
};

export default GradientText;