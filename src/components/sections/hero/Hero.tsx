import React from 'react';
import GradientText from '../../ui/GradientText';
import HeroTag from './HeroTag';
import HeroButtons from './HeroButtons';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-900/20 to-violet-950/50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="text-center">
          <HeroTag />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Hi, I'm{' '}
            <GradientText>Jan Harry Madrona</GradientText>
          </h1>
          <p className="text-xl md:text-2xl text-violet-300 mb-8 font-light">
            22 years old • Central Luzon State University
          </p>
          <p className="text-lg text-violet-400 max-w-2xl mx-auto mb-12">
            Crafting digital experiences through elegant code and innovative solutions
          </p>
          <HeroButtons />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-violet-950 to-transparent" />
    </section>
  );
};

export default Hero;