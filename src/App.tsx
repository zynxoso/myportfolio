import React from 'react';
import Header from './components/Header';
import Hero from './components/sections/hero/Hero';
import About from './components/sections/about/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative bg-dark min-h-screen bg-mesh">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 border-t border-violet-800/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-violet-400">
          <p>© 2024 Jan Harry Madrona. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;