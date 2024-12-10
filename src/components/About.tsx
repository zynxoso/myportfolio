import React from 'react';
import { Code, Palette, Globe, Brain, Terminal, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-600">
            About Me
          </h2>
          <p className="text-lg text-violet-300 max-w-2xl mx-auto">
            Passionate about creating innovative solutions through code
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card p-8 rounded-xl glow-effect">
            <div className="w-14 h-14 bg-violet-900/50 rounded-lg flex items-center justify-center mb-6">
              <Terminal className="text-violet-400" size={28} />
            </div>
            <h3 className="text-xl font-display font-semibold mb-3 text-violet-100">Software Development</h3>
            <p className="text-violet-300">
              Specialized in building robust and scalable applications using modern technologies
            </p>
          </div>

          <div className="glass-card p-8 rounded-xl glow-effect">
            <div className="w-14 h-14 bg-violet-900/50 rounded-lg flex items-center justify-center mb-6">
              <Brain className="text-violet-400" size={28} />
            </div>
            <h3 className="text-xl font-display font-semibold mb-3 text-violet-100">Problem Solving</h3>
            <p className="text-violet-300">
              Analytical thinker with a knack for solving complex technical challenges
            </p>
          </div>

          <div className="glass-card p-8 rounded-xl glow-effect">
            <div className="w-14 h-14 bg-violet-900/50 rounded-lg flex items-center justify-center mb-6">
              <Rocket className="text-violet-400" size={28} />
            </div>
            <h3 className="text-xl font-display font-semibold mb-3 text-violet-100">Innovation</h3>
            <p className="text-violet-300">
              Always exploring new technologies and approaches to stay ahead
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;