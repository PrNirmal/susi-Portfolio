
import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.E. Computer Science and Engineering",
      institution: "Krishnasamy College of Engineering and Technology",
      location: "Cuddalore - 607 109",
      period: "2022 - At present",
      grade: "CGPA - 8.14%",
      status: "current"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "St.Dominic savio Matric hr.sec School",
      location: "Nellikuppam - 607105",
      period: "2021 - 2022",
      grade: "Percentage - 77.83%",
      status: "completed"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "St.Dominic savio Matric hr.sec School",
      location: "Nellikuppam - 607105",
      period: "2019 - 2020",
      grade: "Percentage - 64.2%",
      status: "completed"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--portfolio-primary)' }}>
              Education
            </h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              My academic journey showcasing consistent growth and dedication to learning.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[var(--portfolio-primary)] via-[var(--portfolio-secondary)] to-[var(--portfolio-accent)]" />

            {educationData.map((edu, index) => (
              <div key={index} className={`relative mb-16 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg z-10"
                     style={{ backgroundColor: edu.status === 'current' ? 'var(--portfolio-accent)' : 'var(--portfolio-primary)' }} />

                {/* Content Card */}
                <div className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 ${
                  index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                }`}>
                  {/* Status Badge */}
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                    edu.status === 'current' 
                      ? 'bg-[var(--portfolio-accent)]/20 text-[var(--portfolio-primary)]' 
                      : 'bg-[var(--portfolio-light)] text-[var(--portfolio-secondary)]'
                  }`}>
                    {edu.status === 'current' ? 'Current' : 'Completed'}
                  </div>

                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--portfolio-primary)' }}>
                    {edu.degree}
                  </h3>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-start space-x-2">
                      <Award size={18} className="mt-1" style={{ color: 'var(--portfolio-secondary)' }} />
                      <span className="text-gray-700">{edu.institution}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <MapPin size={18} style={{ color: 'var(--portfolio-accent)' }} />
                      <span className="text-gray-600">{edu.location}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Calendar size={18} style={{ color: 'var(--portfolio-secondary)' }} />
                      <span className="text-gray-600">{edu.period}</span>
                    </div>
                  </div>

                  <div className="bg-[var(--portfolio-light)]/50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium" style={{ color: 'var(--portfolio-primary)' }}>
                        Academic Performance
                      </span>
                      <span className="font-bold text-lg" style={{ color: 'var(--portfolio-secondary)' }}>
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
