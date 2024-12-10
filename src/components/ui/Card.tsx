import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glowEffect?: boolean;
}

const Card = ({ children, className = '', glowEffect = false }: CardProps) => {
  return (
    <div className={`glass-card rounded-xl ${glowEffect ? 'glow-effect' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default Card;