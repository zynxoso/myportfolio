import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Student Management System",
      description: "A full-featured online store with cart and payment integration",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
      tech: ["HTML", "Python", "Django"],
      github: "https://github.com/zynxoso/SMIS-PYTHON-DJANGO",
      demo: "https://demo.com"
    },
    {
      title: "GWA CALCULATOR",
      description: "Collaborative task management with real-time updates",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
      tech: ["Bootstrap", "HTML", "JavaScript"],
      github: "https://github.com/zynxoso/zynxosoGWAcalculator",
      demo: "https://demo.com"
    },
    {
      title: "Portfolio Website",
      description: "Modern and responsive portfolio website",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      tech: ["Html", "CSS", "JavaScript"],
      github: "https://github.com/zynxoso/zynxosoportfolio",
      demo: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-600">
            Featured Projects
          </h2>
          <p className="text-lg text-violet-300 max-w-2xl mx-auto">
            Showcasing my best work and technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card rounded-xl overflow-hidden group">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-violet-950/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="p-2 bg-violet-900/80 rounded-full text-violet-100 hover:bg-violet-800 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 bg-violet-900/80 rounded-full text-violet-100 hover:bg-violet-800 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2 text-violet-100">{project.title}</h3>
                <p className="text-violet-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-violet-900/50 text-violet-300 text-sm rounded-full border border-violet-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;