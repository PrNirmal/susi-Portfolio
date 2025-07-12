
import React from 'react';
import { GraduationCap, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "B.E. Computer Science",
      description: "Currently pursuing at Krishnasamy College of Engineering and Technology",
      color: "var(--portfolio-primary)"
    },
    {
      icon: Award,
      title: "CGPA: 8.14%",
      description: "Maintaining excellent academic performance",
      color: "var(--portfolio-secondary)"
    },
    {
      icon: Users,
      title: "YRC Volunteer",
      description: "Active community service and humanitarian activities",
      color: "var(--portfolio-accent)"
    },
    {
      icon: Clock,
      title: "Self-Directed",
      description: "Motivated work study student with excellent listening skills",
      color: "var(--portfolio-primary)"
    }
  ];

  return (
    <section id="about" className="py-20 bg-[var(--portfolio-light)]/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--portfolio-primary)' }}>
              About Me
            </h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A passionate computer science student with a drive for excellence in technology and community service.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold" style={{ color: 'var(--portfolio-secondary)' }}>
                My Journey
              </h3>
              <p className="text-gray-700 leading-relaxed">
                I am a self-directed work study student currently pursuing B.E. Computer Science and Engineering 
                at Krishnasamy College of Engineering and Technology, Cuddalore. With a strong academic record 
                and a passion for technology, I am motivated to apply my education and experience in meaningful roles.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My excellent listening and communication skills, combined with keen operations planning ability, 
                enable me to keep operations running smoothly. I believe in continuous learning and contributing 
                to both technology and community through my work.
              </p>
              <p className="text-gray-700 leading-relaxed">
                As an active Youth Red Cross volunteer, I am committed to community service and humanitarian 
                activities, which has shaped my perspective on using technology for social good.
              </p>
            </div>

            {/* Profile Stats */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--portfolio-primary)' }}>
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: 'var(--portfolio-light)' }}>
                  <span className="font-medium">Location</span>
                  <span className="text-gray-600">Cuddalore, Tamil Nadu</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50">
                  <span className="font-medium">Education</span>
                  <span className="text-gray-600">B.E. CSE (Current)</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: 'var(--portfolio-light)' }}>
                  <span className="font-medium">CGPA</span>
                  <span className="text-gray-600">8.14%</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50">
                  <span className="font-medium">Languages</span>
                  <span className="text-gray-600">Tamil, English</span>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                     style={{ backgroundColor: `${item.color}20` }}>
                  <item.icon size={24} style={{ color: item.color }} />
                </div>
                <h4 className="font-bold mb-2" style={{ color: item.color }}>
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
