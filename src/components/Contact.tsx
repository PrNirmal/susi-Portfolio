
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, MessageSquare } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "9789822030",
      link: "tel:+919789822030",
      color: "var(--portfolio-primary)",
      description: "Call me anytime"
    },
    {
      icon: Mail,
      title: "Email",
      value: "susidharan756@gmail.com",
      link: "mailto:susidharan756@gmail.com",
      color: "var(--portfolio-secondary)",
      description: "Send me an email"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Cuddalore, Tamil Nadu",
      link: "#",
      color: "var(--portfolio-accent)",
      description: "Visit me here"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Professional Profile",
      link: "https://www.linkedin.com/in/susi-dharan-5889a2245",
      color: "var(--portfolio-primary)",
      description: "Connect professionally"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[var(--portfolio-light)]/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--portfolio-primary)' }}>
              Get In Touch
            </h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a friendly chat.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 mb-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--portfolio-primary)' }}>
                Let's Connect
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                Whether you have a project in mind, want to collaborate, or simply want to say hello, 
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Enhanced Contact Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target={contact.link.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
                >
                  <div className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                       style={{ backgroundColor: `${contact.color}20` }}>
                    <contact.icon size={22} style={{ color: contact.color }} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 group-hover:text-[var(--portfolio-primary)] transition-colors mb-1">
                      {contact.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-1">
                      {contact.value}
                    </p>
                    <p className="text-xs text-gray-500">
                      {contact.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="bg-gradient-to-r from-[var(--portfolio-primary)] to-[var(--portfolio-secondary)] p-8 rounded-xl text-white relative overflow-hidden">
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <MessageSquare size={28} />
                <h4 className="text-xl font-bold">Ready to collaborate?</h4>
              </div>
              <p className="text-white/90 mb-6 leading-relaxed max-w-2xl mx-auto">
                I'm currently open to new opportunities and exciting projects. Let's create something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:susidharan756@gmail.com"
                  className="inline-flex items-center justify-center space-x-2 bg-white text-[var(--portfolio-primary)] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  <Mail size={16} />
                  <span>Send Email</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/susi-dharan-5889a2245"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-[var(--portfolio-primary)] transition-all duration-300 hover:scale-105"
                >
                  <Linkedin size={16} />
                  <span>Connect on LinkedIn</span>
                </a>
                <a
                  href="tel:+919789822030"
                  className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-[var(--portfolio-primary)] transition-all duration-300 hover:scale-105"
                >
                  <Phone size={16} />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/10" />
            <div className="absolute -bottom-5 -left-5 w-20 h-20 rounded-full bg-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
