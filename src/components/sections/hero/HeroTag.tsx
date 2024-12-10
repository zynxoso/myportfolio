import React from 'react';
import { Sparkles } from 'lucide-react';

const HeroTag = () => {
  return (
    <div className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-8">
      <Sparkles className="w-4 h-4 text-violet-400 mr-2" />
      <span className="text-sm text-violet-300">Software Developer</span>
    </div>
  );
};

export default HeroTag;