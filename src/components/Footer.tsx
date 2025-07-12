
import React from 'react';
import { Heart, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Mail, href: 'mailto:susidharan756@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:+919789822030', label: 'Phone' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/susi-dharan-5889a2245', label: 'LinkedIn' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[var(--portfolio-primary)] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg">
                SM
              </div>
              <div>
                <h3 className="text-xl font-bold">Susidharan M</h3>
                <p className="text-white/80">Computer Science Engineer</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed">
              Passionate about technology and committed to creating innovative solutions 
              while contributing to community development through various initiatives.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/70">
                <MapPin size={16} />
                <span>Cuddalore, Tamil Nadu - 607109</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Phone size={16} />
                <span>+91 9789822030</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Mail size={16} />
                <span>susidharan756@gmail.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="font-medium mb-3">Connect with me</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-white/70">
              <span>&copy; {currentYear} Susidharan M. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-2 text-white/70">
              <span>Made with</span>
              <Heart size={16} className="text-red-400 animate-pulse" />
              <span>and passion for technology</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
