import React from 'react';
import { ArrowRight, Code, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-900/20 to-violet-950/50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-8">
            <Sparkles className="w-4 h-4 text-violet-400 mr-2" />
            <span className="text-sm text-violet-300">Software Developer</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-600">
              Jan Harry Madrona
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-violet-300 mb-8 font-light">
            22 years old • Central Luzon State University
          </p>
          <p className="text-lg text-violet-400 max-w-2xl mx-auto mb-12">
            Crafting digital experiences through elegant code and innovative solutions
          </p>
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
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-violet-950 to-transparent" />
    </section>
  );
};

export default Hero;