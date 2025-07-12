
import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Download } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    "Computer Science Engineer",
    "Web Developer",
    "Problem Solver",
    "Tech Enthusiast"
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = titles[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, titles]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a simple resume content
    const resumeContent = `
SUSIDHARAN M
Computer Science & Engineering Student
Phone: 9789822030
Email: susidharan756@gmail.com
Location: Cuddalore, Tamil Nadu

EDUCATION
B.E. Computer Science and Engineering
Krishnasamy College of Engineering and Technology
CGPA: 8.14% (2022 - Present)

SKILLS
- Programming: Python, Java, SQL
- Tools: MySQL, Tableau, MS Office
- Design: Canva, UI/UX Design
- Soft Skills: Communication, Team Management

CERTIFICATIONS
- Website UI/UX Designing using ChatGPT (Simplilearn)
- Python Programming (LinkedIn Learning)
- Excel Automation using ChatGPT (Simplilearn)

ACTIVITIES
Youth Red Cross (YRC) Volunteer (2022-2026)
    `;
    
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Susidharan_M_Resume.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--portfolio-primary) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 rounded-full opacity-10 animate-pulse" 
           style={{ backgroundColor: 'var(--portfolio-accent)' }} />
      <div className="absolute bottom-32 right-20 w-16 h-16 rounded-full opacity-10 animate-pulse" 
           style={{ backgroundColor: 'var(--portfolio-secondary)', animationDelay: '1s' }} />

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Enhanced Profile Image */}
          <div className="relative w-40 h-40 mx-auto mb-8 group">
            <div className="w-full h-full rounded-full gradient-bg flex items-center justify-center text-white text-5xl font-bold animate-pulse-subtle cursor-pointer group-hover:scale-110 transition-transform duration-300">
              SM
            </div>
            <div className="absolute -inset-2 rounded-full border-2 border-[var(--portfolio-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
          </div>

          {/* Main Content with Enhanced Animations */}
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="hover:scale-105 inline-block transition-transform duration-300 cursor-pointer" 
                    style={{ color: 'var(--portfolio-primary)' }}>Susidharan</span>{' '}
              <span className="hover:scale-105 inline-block transition-transform duration-300 cursor-pointer" 
                    style={{ color: 'var(--portfolio-secondary)' }}>M</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-light mb-8 h-12 flex items-center justify-center">
              <span style={{ color: 'var(--portfolio-accent)' }}>
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" 
               style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              Self-directed Work Study Student motivated to apply education and experience in job role. 
              Excellent listening and communication skills with keen operations planning ability to keep operations running smoothly.
            </p>

            {/* Enhanced Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 text-gray-600">
              <a href="tel:9789822030" className="flex items-center space-x-2 hover:text-[var(--portfolio-primary)] transition-all duration-300 group">
                <Phone size={18} className="group-hover:scale-110 transition-transform" />
                <span>9789822030</span>
              </a>
              <a href="mailto:susidharan756@gmail.com" className="flex items-center space-x-2 hover:text-[var(--portfolio-primary)] transition-all duration-300 group">
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                <span>susidharan756@gmail.com</span>
              </a>
              <div className="flex items-center space-x-2 hover:text-[var(--portfolio-primary)] transition-colors">
                <MapPin size={18} />
                <span>Cuddalore, Tamil Nadu</span>
              </div>
              <a href="https://www.linkedin.com/in/susi-dharan-5889a2245" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center space-x-2 hover:text-[var(--portfolio-primary)] transition-all duration-300 group">
                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => scrollToSection('about')}
                className="bg-[var(--portfolio-primary)] text-white px-8 py-4 rounded-full hover:bg-[var(--portfolio-secondary)] transition-all duration-300 flex items-center space-x-2 group hover:shadow-lg hover:-translate-y-1"
              >
                <span>Explore My Work</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={downloadResume}
                className="border-2 border-[var(--portfolio-accent)] text-[var(--portfolio-accent)] px-8 py-4 rounded-full hover:bg-[var(--portfolio-accent)] hover:text-white transition-all duration-300 flex items-center space-x-2 group hover:shadow-lg hover:-translate-y-1"
              >
                <Download size={18} className="group-hover:scale-110 transition-transform" />
                <span>Download Resume</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-[var(--portfolio-primary)] px-8 py-4 rounded-full hover:bg-[var(--portfolio-light)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
