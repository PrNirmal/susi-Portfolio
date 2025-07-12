
import React from 'react';
import { ExternalLink, Github, Eye, Database, BarChart3, FileSpreadsheet } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const Projects = () => {
  const project = {
    id: 1,
    title: "Comprehensive Data Analytics Project",
    description: "A complete data analytics solution combining customer segmentation, sales performance tracking, and predictive modeling using multiple industry-leading tools including Tableau, Power BI, and Google Colab for comprehensive business intelligence.",
    technologies: ["Tableau", "Power BI", "Google Colab", "Python", "SQL", "DAX", "Pandas", "Matplotlib"],
    features: [
      "Customer segmentation using RFM analysis",
      "Interactive Tableau dashboards with real-time filtering",
      "Power BI executive reports with automated refresh",
      "Python-based machine learning models in Colab",
      "Sales forecasting and trend analysis",
      "Cross-platform data integration",
      "Mobile-responsive dashboard design",
      "Automated reporting and insights generation"
    ],
    tools: [
      {
        name: "Tableau",
        icon: BarChart3,
        color: "var(--portfolio-primary)",
        description: "Interactive visualizations and customer segmentation dashboards"
      },
      {
        name: "Power BI",
        icon: Database,
        color: "var(--portfolio-secondary)",
        description: "Executive KPI reports and automated business intelligence"
      },
      {
        name: "Google Colab",
        icon: FileSpreadsheet,
        color: "var(--portfolio-accent)",
        description: "Machine learning models and predictive analytics"
      }
    ],
    image: "/placeholder.svg?height=400&width=600",
    liveDemo: "#",
    github: "#",
    tableauPublic: "#",
    powerBiReport: "#",
    colabNotebook: "#"
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--portfolio-primary)' }}>
            My Data Analytics Project
          </h2>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive data analytics solution showcasing expertise in customer segmentation, 
            business intelligence, and data visualization using industry-leading tools.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Project Card */}
          <Card className="hover-lift group cursor-pointer transition-all duration-300 mb-12">
            <div className="relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex space-x-4">
                  <a 
                    href={project.liveDemo}
                    className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    title="Live Demo"
                  >
                    <Eye className="w-5 h-5 text-gray-700" />
                  </a>
                  <a 
                    href={project.github}
                    className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    title="GitHub Repository"
                  >
                    <Github className="w-5 h-5 text-gray-700" />
                  </a>
                  <a 
                    href={project.tableauPublic}
                    className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    title="Tableau Dashboard"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-700" />
                  </a>
                </div>
              </div>
            </div>

            <CardHeader>
              <CardTitle className="text-2xl mb-4">{project.title}</CardTitle>
              <CardDescription className="text-gray-600 leading-relaxed text-lg">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              {/* Tools Used */}
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-gray-800 text-lg">Tools & Technologies Used:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {project.tools.map((tool, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${tool.color}20` }}>
                        <tool.icon size={20} style={{ color: tool.color }} />
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800">{tool.name}</h5>
                        <p className="text-sm text-gray-600">{tool.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-gray-800 text-lg">Key Features & Achievements:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--portfolio-primary)' }}></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-gray-800">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-sm font-medium rounded-full border"
                      style={{ 
                        borderColor: 'var(--portfolio-primary)',
                        color: 'var(--portfolio-primary)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href={project.tableauPublic}
                  className="inline-flex items-center space-x-2 bg-[var(--portfolio-primary)] text-white px-6 py-3 rounded-lg hover:bg-[var(--portfolio-secondary)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <BarChart3 size={16} />
                  <span>View Tableau Dashboard</span>
                </a>
                <a 
                  href={project.powerBiReport}
                  className="inline-flex items-center space-x-2 bg-[var(--portfolio-secondary)] text-white px-6 py-3 rounded-lg hover:bg-[var(--portfolio-primary)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <Database size={16} />
                  <span>View Power BI Report</span>
                </a>
                <a 
                  href={project.colabNotebook}
                  className="inline-flex items-center space-x-2 bg-[var(--portfolio-accent)] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <FileSpreadsheet size={16} />
                  <span>View Colab Notebook</span>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Project Statistics */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-8 p-8 bg-white rounded-lg shadow-sm">
              <div>
                <div className="text-4xl font-bold" style={{ color: 'var(--portfolio-primary)' }}>3</div>
                <h3 className="font-semibold text-gray-800">Tools Integrated</h3>
                <p className="text-gray-600 text-sm">Tableau, Power BI, Colab</p>
              </div>
              <div className="w-px h-16 bg-gray-200"></div>
              <div>
                <div className="text-4xl font-bold" style={{ color: 'var(--portfolio-secondary)' }}>8+</div>
                <h3 className="font-semibold text-gray-800">Key Features</h3>
                <p className="text-gray-600 text-sm">Comprehensive Analytics</p>
              </div>
              <div className="w-px h-16 bg-gray-200"></div>
              <div>
                <div className="text-4xl font-bold" style={{ color: 'var(--portfolio-accent)' }}>100%</div>
                <h3 className="font-semibold text-gray-800">Data Driven</h3>
                <p className="text-gray-600 text-sm">Business Intelligence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
