import React from 'react';
import { Terminal, Brain, Rocket } from 'lucide-react';
import SectionTitle from '../../ui/SectionTitle';
import SkillCard from './SkillCard';

const skills = [
  {
    icon: Terminal,
    title: 'Software Development',
    description: 'Specialized in building robust and scalable applications using modern technologies'
  },
  {
    icon: Brain,
    title: 'Problem Solving',
    description: 'Analytical thinker with a knack for solving complex technical challenges'
  },
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'Always exploring new technologies and approaches to stay ahead'
  }
];

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="About Me"
          subtitle="Passionate about creating innovative solutions through code"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;