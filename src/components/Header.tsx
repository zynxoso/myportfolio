import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-violet-950/80 backdrop-blur-md z-50 border-b border-violet-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-display font-bold text-violet-100">Jan Harry</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/zynxoso" className="text-violet-400 hover:text-violet-100 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" className="text-violet-400 hover:text-violet-100 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:xtremejeel@gmail.com" className="text-violet-400 hover:text-violet-100 transition-colors">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-violet-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-card">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-violet-300 hover:text-violet-100">Home</a>
            <a href="#about" className="block px-3 py-2 text-violet-300 hover:text-violet-100">About</a>
            <a href="#projects" className="block px-3 py-2 text-violet-300 hover:text-violet-100">Projects</a>
            <a href="#contact" className="block px-3 py-2 text-violet-300 hover:text-violet-100">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;