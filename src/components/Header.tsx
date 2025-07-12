import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Mail, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/90 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-lg">
              SM
            </div>
            <span className="text-xl font-bold" style={{ color: 'var(--portfolio-primary)' }}>
              Susidharan M
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: 'About', id: 'about' },
              { name: 'Education', id: 'education' },
              { name: 'Skills', id: 'skills' },
              { name: 'Projects', id: 'projects' },
              { name: 'Certifications', id: 'certifications' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-[var(--portfolio-primary)] transition-colors duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--portfolio-accent)] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col space-y-1 w-6 h-6 justify-center"
          >
            <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : 'w-6'}`}></span>
            <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-6'}`}></span>
            <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'w-6'}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <nav className="flex flex-col space-y-4 py-4 border-t">
            {[
              { name: 'About', id: 'about' },
              { name: 'Education', id: 'education' },
              { name: 'Skills', id: 'skills' },
              { name: 'Projects', id: 'projects' },
              { name: 'Certifications', id: 'certifications' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-gray-700 hover:text-[var(--portfolio-primary)] transition-colors duration-300 font-medium py-2"
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
