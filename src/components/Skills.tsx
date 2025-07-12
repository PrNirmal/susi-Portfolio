
import React, { useState, useEffect, useRef } from 'react';
import { Code, Palette, Settings, MessageSquare, Users, Clock, TrendingUp } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical');
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, boolean>>({});
  const skillsRef = useRef<HTMLDivElement>(null);

  const technicalSkills = [
    { name: 'Python', level: 85, category: 'Languages', icon: '🐍' },
    { name: 'SQL', level: 80, category: 'Languages', icon: '🗃️' },
    { name: 'Java', level: 75, category: 'Languages', icon: '☕' },
    { name: 'Canva', level: 90, category: 'Editing', icon: '🎨' },
    { name: 'Other Apps', level: 85, category: 'Editing', icon: '📱' },
    { name: 'Tableau', level: 80, category: 'Tools & Platform', icon: '📊' },
    { name: 'MySQL', level: 85, category: 'Tools & Platform', icon: '🐬' },
    { name: 'Word', level: 95, category: 'Tools & Platform', icon: '📄' },
    { name: 'Excel', level: 90, category: 'Tools & Platform', icon: '📈' },
    { name: 'PowerPoint', level: 92, category: 'Tools & Platform', icon: '📽️' }
  ];

  const softSkills = [
    { 
      name: 'Communication', 
      icon: MessageSquare, 
      description: 'Excellent verbal and written communication',
      level: 95,
      achievements: ['Presentation Skills', 'Active Listening', 'Clear Documentation']
    },
    { 
      name: 'Team Management', 
      icon: Users, 
      description: 'Leadership and collaborative skills',
      level: 88,
      achievements: ['Project Leadership', 'Conflict Resolution', 'Mentoring']
    },
    { 
      name: 'Positive Thinking', 
      icon: TrendingUp, 
      description: 'Optimistic approach to challenges',
      level: 92,
      achievements: ['Problem-Solving', 'Adaptability', 'Resilience']
    },
    { 
      name: 'Time Management', 
      icon: Clock, 
      description: 'Efficient prioritization and organization',
      level: 90,
      achievements: ['Task Prioritization', 'Deadline Management', 'Productivity']
    }
  ];

  const skillCategories = ['Languages', 'Editing', 'Tools & Platform'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillName = entry.target.getAttribute('data-skill');
            if (skillName) {
              setTimeout(() => {
                setAnimatedSkills(prev => ({ ...prev, [skillName]: true }));
              }, Math.random() * 500);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const skillElements = document.querySelectorAll('[data-skill]');
    skillElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [activeTab]);

  const getSkillColor = (categoryIndex: number) => {
    const colors = ['var(--portfolio-primary)', 'var(--portfolio-secondary)', 'var(--portfolio-accent)'];
    return colors[categoryIndex];
  };

  return (
    <section id="skills" className="py-20 bg-[var(--portfolio-light)]/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--portfolio-primary)' }}>
              Skills & Expertise
            </h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive overview of my technical proficiency and soft skills with interactive progress tracking.
            </p>
          </div>

          {/* Enhanced Skill Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-2 shadow-lg">
              <button
                onClick={() => setActiveTab('technical')}
                className={`px-8 py-4 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'technical'
                    ? 'bg-[var(--portfolio-primary)] text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-[var(--portfolio-primary)] hover:bg-gray-50'
                }`}
              >
                <Code size={18} />
                <span className="font-medium">Technical Skills</span>
              </button>
              <button
                onClick={() => setActiveTab('soft')}
                className={`px-8 py-4 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'soft'
                    ? 'bg-[var(--portfolio-primary)] text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-[var(--portfolio-primary)] hover:bg-gray-50'
                }`}
              >
                <Users size={18} />
                <span className="font-medium">Soft Skills</span>
              </button>
            </div>
          </div>

          {/* Technical Skills */}
          {activeTab === 'technical' && (
            <div className="animate-fade-in-up" ref={skillsRef}>
              {skillCategories.map((category, categoryIndex) => (
                <div key={category} className="mb-12">
                  <h3 className="text-2xl font-bold mb-8 flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300"
                         style={{ backgroundColor: `${getSkillColor(categoryIndex)}20` }}>
                      {categoryIndex === 0 && <Code size={20} style={{ color: getSkillColor(categoryIndex) }} />}
                      {categoryIndex === 1 && <Palette size={20} style={{ color: getSkillColor(categoryIndex) }} />}
                      {categoryIndex === 2 && <Settings size={20} style={{ color: getSkillColor(categoryIndex) }} />}
                    </div>
                    <span style={{ color: 'var(--portfolio-primary)' }}>{category}</span>
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {technicalSkills
                      .filter(skill => skill.category === category)
                      .map((skill, index) => (
                        <div 
                          key={index} 
                          className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
                          data-skill={skill.name}
                        >
                          <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{skill.icon}</span>
                              <span className="font-bold text-gray-800 group-hover:text-[var(--portfolio-primary)] transition-colors">
                                {skill.name}
                              </span>
                            </div>
                            <div className="text-right">
                              <span className="text-lg font-bold" style={{ color: getSkillColor(categoryIndex) }}>
                                {skill.level}%
                              </span>
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                            <div 
                              className="h-3 rounded-full transition-all duration-1500 ease-out relative"
                              style={{ 
                                width: animatedSkills[skill.name] ? `${skill.level}%` : '0%',
                                backgroundColor: getSkillColor(categoryIndex)
                              }}
                            >
                              <div className="absolute inset-0 bg-white opacity-30 animate-pulse" />
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Enhanced Soft Skills */}
          {activeTab === 'soft' && (
            <div className="animate-fade-in-up">
              <div className="grid md:grid-cols-2 gap-8">
                {softSkills.map((skill, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                             style={{ backgroundColor: `var(--portfolio-${index % 2 === 0 ? 'primary' : 'secondary'})20` }}>
                          <skill.icon size={24} style={{ color: `var(--portfolio-${index % 2 === 0 ? 'primary' : 'secondary'})` }} />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-1" 
                              style={{ color: `var(--portfolio-${index % 2 === 0 ? 'primary' : 'secondary'})` }}>
                            {skill.name}
                          </h4>
                          <p className="text-gray-600 text-sm">{skill.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold" style={{ color: `var(--portfolio-${index % 2 === 0 ? 'primary' : 'secondary'})` }}>
                          {skill.level}%
                        </div>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div 
                        className="h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: `var(--portfolio-${index % 2 === 0 ? 'primary' : 'secondary'})`
                        }}
                      />
                    </div>

                    {/* Achievements */}
                    <div className="flex flex-wrap gap-2">
                      {skill.achievements.map((achievement, achIndex) => (
                        <span 
                          key={achIndex}
                          className="px-3 py-1 text-xs font-medium rounded-full transition-colors duration-300 hover:scale-105 transform cursor-default"
                          style={{ 
                            backgroundColor: `var(--portfolio-${index % 2 === 0 ? 'primary' : 'secondary'})10`,
                            color: `var(--portfolio-${index % 2 === 0 ? 'primary' : 'secondary'})`
                          }}
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
