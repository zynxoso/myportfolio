import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-600">
            Get In Touch
          </h2>
          <p className="text-lg text-violet-300 max-w-2xl mx-auto">
            Let's collaborate and bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-violet-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-display font-medium text-violet-100">Email</h3>
                  <p className="mt-1 text-violet-300">madrona.jan@clsu2.edu.ph</p>
                  <p className="mt-1 text-violet-300">xtremejeel@gmail.com</p> <p className="mt-1 text-violet-300">madrona.jan@clsu2.edu.ph</p>
                  
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-violet-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-display font-medium text-violet-100">Phone</h3>
                  <p className="mt-1 text-violet-300">+63 977 625 563</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-violet-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-display font-medium text-violet-100">Location</h3>
                  <p className="mt-1 text-violet-300">Guimba, Nueva Ecija</p>
                </div>
              </div>
            </div>
          </div>

          <form className="glass-card p-8 rounded-xl space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-violet-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-violet-900/30 border border-violet-700/50 rounded-lg px-4 py-3 text-violet-100 placeholder-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-600"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-violet-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-violet-900/30 border border-violet-700/50 rounded-lg px-4 py-3 text-violet-100 placeholder-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-600"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-violet-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-violet-900/30 border border-violet-700/50 rounded-lg px-4 py-3 text-violet-100 placeholder-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-600"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-violet-600 text-white px-6 py-4 rounded-lg hover:bg-violet-700 transition-colors flex items-center justify-center space-x-2 animate-glow"
            >
              <span>Send Message</span>
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;