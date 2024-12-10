import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroButtons = () => {
  return (
    <div className="flex justify-center gap-6">
      <a
        href="#projects"
        className="inline-flex items-center px-8 py-4 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-700 transition-all animate-glow"
      >
        View My Work
        <ArrowRight className="ml-2" size={20} />
      </a>
      <a
        href="#contact"
        className="inline-flex items-center px-8 py-4 border border-violet-600/50 text-violet-300 font-medium rounded-lg hover:bg-violet-900/30 transition-all"
      >
        Get in Touch
      </a>
    </div>
  );
};

export default HeroButtons;