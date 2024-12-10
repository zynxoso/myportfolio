import React from 'react';
import GradientText from './GradientText';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <GradientText>{title}</GradientText>
      </h2>
      <p className="text-lg text-violet-300 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;