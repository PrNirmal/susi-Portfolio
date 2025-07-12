
import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Website UI/UX Designing using ChatGPT",
      provider: "Simplilearn",
      type: "Online Course",
      skills: ["UI/UX Design", "ChatGPT", "Web Design", "User Experience"],
      color: "var(--portfolio-primary)"
    },
    {
      title: "Python Programming",
      provider: "LinkedIn Learning",
      type: "Professional Certificate",
      skills: ["Python", "Programming", "Data Structures", "Algorithms"],
      color: "var(--portfolio-secondary)"
    },
    {
      title: "Excel Automation using ChatGPT",
      provider: "Simplilearn",
      type: "Online Course",
      skills: ["Excel", "Automation", "ChatGPT", "Data Analysis"],
      color: "var(--portfolio-accent)"
    }
  ];

  const languages = [
    { language: "Tamil", proficiency: "Native", level: 100 },
    { language: "English", proficiency: "Fluent", level: 90 }
  ];

  const activities = [
    {
      organization: "Youth Red Cross (YRC)",
      role: "Volunteer",
      period: "2022-2026",
      description: "Active Youth Red Cross (YRC) member and volunteer, committed to community service and humanitarian activities. Participating in blood donation camps, health awareness drives, and social outreach programs, gaining teamwork and leadership skills while serving society."
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--portfolio-primary)' }}>
              Certifications & More
            </h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional certifications, language proficiency, and community involvement.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8" style={{ color: 'var(--portfolio-primary)' }}>
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 hover:border-[var(--portfolio-accent)]">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                         style={{ backgroundColor: `${cert.color}20` }}>
                      <Award size={20} style={{ color: cert.color }} />
                    </div>
                    <ExternalLink size={16} className="text-gray-400 group-hover:text-[var(--portfolio-accent)] transition-colors" />
                  </div>
                  
                  <h4 className="font-bold mb-2 text-gray-800 group-hover:text-[var(--portfolio-primary)] transition-colors">
                    {cert.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-3">{cert.provider}</p>
                  
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
                       style={{ backgroundColor: `${cert.color}10`, color: cert.color }}>
                    {cert.type}
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} 
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8" style={{ color: 'var(--portfolio-primary)' }}>
              Language Proficiency
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {languages.map((lang, index) => (
                <div key={index} className="bg-[var(--portfolio-light)]/50 p-6 rounded-xl">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-bold text-lg" style={{ color: 'var(--portfolio-primary)' }}>
                      {lang.language}
                    </h4>
                    <span className="text-sm font-medium" style={{ color: 'var(--portfolio-secondary)' }}>
                      {lang.proficiency}
                    </span>
                  </div>
                  <div className="w-full bg-white rounded-full h-3">
                    <div 
                      className="h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${lang.level}%`,
                        backgroundColor: 'var(--portfolio-secondary)'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Co-curricular Activities */}
          <div>
            <h3 className="text-2xl font-bold mb-8" style={{ color: 'var(--portfolio-primary)' }}>
              Co-curricular Activities
            </h3>
            {activities.map((activity, index) => (
              <div key={index} className="bg-gradient-to-r from-[var(--portfolio-light)]/30 to-white p-8 rounded-xl shadow-lg">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold mb-2" style={{ color: 'var(--portfolio-primary)' }}>
                      {activity.organization}
                    </h4>
                    <p className="text-lg font-medium mb-2" style={{ color: 'var(--portfolio-secondary)' }}>
                      {activity.role}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar size={16} />
                    <span>{activity.period}</span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
