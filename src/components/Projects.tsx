import { Github, Calendar, ExternalLink, Star, Code2 } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  const projects = [
    {
      title: 'AI Code Reviewer & Security Auditor Agent',
      description: 'Advanced AI-powered tool that automatically reviews code quality and performs comprehensive security audits. Identifies vulnerabilities, suggests improvements, and ensures coding best practices.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['AI', 'Python', 'Code Review', 'Security', 'LLMs', 'DevOps'],
      period: 'Oct 2025 – Present',
      github: 'https://github.com/srinivas112004/AI-Code-Reviewer-And-Security-Auditor-Agent',
      demo: '',
      status: 'Developing',
      featured: true,
      category: 'AI/ML & Full Stack'
    },
    {
      title: 'Face Recognition Smart Attendance',
      description: 'Automated attendance system using real-time face recognition. Captures video, recognizes faces, and stores attendance records in a database with high accuracy.',
      image: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'OpenCV', 'SQLite', 'Face Recognition', 'Computer Vision'],
      period: 'Jan 2025 – May 2025',
      github: 'https://github.com/srinivas112004/Face-Recognition-Based-Smart-Attendence-System',
      demo: 'https://github.com/srinivas112004/Face-Recognition-Based-Smart-Attendence-System',
      status: 'Completed',
      featured: true,
      category: 'AI/ML'
    },
    {
      title: 'API Response Explainer',
      description: 'Enhanced web application that explains JSON API responses using AI. Features REST API integration and a user-friendly interface built with modern web technologies.',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'React', 'TailwindCSS', 'Ollama', 'AI'],
      period: 'Aug 2025 – Sep 2025',
      github: 'https://github.com/srinivas112004/Api-Response-Explainer',
      demo: 'https://github.com/srinivas112004/Api-Response-Explainer',
      status: 'Completed',
      featured: true,
      category: 'Web Development'
    },
    {
      title: 'Learn AI App',
      description: 'Interactive educational platform for learning AI and machine learning concepts. Features hands-on tutorials, code examples, and practical exercises to master AI fundamentals.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'AI', 'Education', 'JavaScript', 'Interactive Learning'],
      period: 'Jun 2024 – Aug 2024',
      github: 'https://github.com/srinivas112004/Learn-AI-App',
      demo: 'https://github.com/srinivas112004/Learn-AI-App',
      status: 'Completed',
      featured: true,
      category: 'AI/ML'
    },
    {
      title: 'Travel Booking System',
      description: 'Full-featured booking system with authentication and seat validation. Includes an expanded admin dashboard and is deployed live for real-world use.',
      image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Django', 'Python', 'MySQL', 'Bootstrap 5', 'Authentication'],
      period: 'Aug 2025 – Sep 2025',
      github: 'https://github.com/srinivas112004/Travel-Booking-System-Django',
      demo: 'https://srinivas07.pythonanywhere.com',
      status: 'Live',
      featured: false,
      category: 'Full Stack'
    },
    
    {
      title: 'Local Food Wastage Management System',
      description: 'Community-driven platform to reduce food waste by connecting surplus food donors with those in need. Features real-time tracking, location-based matching, and impact analytics.',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python','Web Development', 'Social Impact', 'Database', 'Streamlit', 'MySQL'],
      period: 'Mar 2024 – May 2024',
      github: 'https://github.com/srinivas112004/Local-Food-Wastage-Management-System',
      demo: 'https://github.com/srinivas112004/Local-Food-Wastage-Management-System',
      status: 'Completed',
      featured: false,
      category: 'Full Stack'
    },
    {
      title: 'Personal Protective Equipment Detection System',
      description: 'AI-powered safety monitoring system using computer vision to detect PPE compliance in real-time. Identifies helmets, vests, and safety gear to enhance workplace safety.',
      image: 'https://images.pexels.com/photos/5561923/pexels-photo-5561923.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'YOLOv5', 'Computer Vision', 'Deep Learning', 'Safety Tech'],
      period: 'Dec 2023 – Feb 2024',
      github: 'https://github.com/srinivas112004/Personal-Protective-Equipment-Detection-System',
      demo: 'https://github.com/srinivas112004/Personal-Protective-Equipment-Detection-System',
      status: 'Completed',
      featured: false,
      category: 'AI/ML'
    },
  ];

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    if (hoveredProject === index) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };

  return (
    <section id="projects" className={`py-20 relative overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Background animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Showcasing innovative solutions in AI/ML, web development, and software engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden border transition-all duration-500 transform hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
                  : 'bg-gray-50 border-gray-200 hover:border-gray-300 shadow-lg'
              } ${
                project.featured ? 'ring-2 ring-blue-500/20 hover:ring-blue-500/40' : ''
              }`}
              style={{
                transform: hoveredProject === index 
                  ? `perspective(1000px) rotateX(${(mousePosition.y - 50) * 0.1}deg) rotateY(${(mousePosition.x - 50) * 0.1}deg) scale3d(1.05, 1.05, 1.05)`
                  : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                transformStyle: 'preserve-3d'
              }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              onMouseMove={(e) => handleMouseMove(e, index)}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20">
                  <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-xs font-medium animate-pulse">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                </div>
              )}

              {/* Category badge */}
              <div className="absolute top-4 right-4 z-20">
                <div className={`px-2 py-1 backdrop-blur-sm rounded-full text-xs border ${
                  theme === 'dark' 
                    ? 'bg-gray-900/80 text-gray-300 border-gray-600' 
                    : 'bg-white/80 text-gray-700 border-gray-300'
                }`}>
                  {project.category}
                </div>
              </div>

              {/* Project image with overlay */}
              <div className="relative overflow-hidden h-48 group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  style={{
                    filter: hoveredProject === index ? 'brightness(0.7) saturate(1.2)' : 'brightness(1) saturate(1)'
                  }}
                />
                
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60 ${
                  theme === 'dark' ? 'from-gray-900' : 'from-gray-100'
                }`}></div>
                
                {/* Interactive overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 transition-opacity duration-300 ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-30">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-110 cursor-pointer"
                      title="View on GitHub"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github, '_blank');
                      }}
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn bg-blue-500/20 backdrop-blur-sm p-3 rounded-full hover:bg-blue-500/30 transition-all duration-300 border border-blue-500/30 hover:scale-110 cursor-pointer"
                        title="View Live Demo"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.demo, '_blank');
                        }}
                      >
                        <ExternalLink className="w-5 h-5 text-blue-300" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Animated border */}
                <div className={`absolute inset-0 border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                     style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }}>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6 relative">
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`text-xl font-semibold group-hover:text-blue-300 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    project.status === 'Live' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                    project.status === 'Deployed' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                    project.status === 'Developing' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                    project.status === 'Completed' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                    'bg-gray-600/10 text-gray-400 border border-gray-600/20'
                  } ${hoveredProject === index ? 'scale-110' : ''}`}>
                    {project.status === 'Developing' && (
                      <div className="flex space-x-1 mr-2">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    )}
                    <span className={project.status === 'Developing' ? 'text-yellow-400 font-semibold' : ''}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className={`flex items-center gap-2 text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  <Calendar className="w-4 h-4" />
                  <span>{project.period}</span>
                </div>

                <p className={`mb-6 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 text-xs rounded-lg border transition-all duration-300 transform ${
                        theme === 'dark' 
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 border-gray-600' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-300'
                      } ${
                        hoveredProject === index ? 'scale-105' : ''
                      }`}
                      style={{ transitionDelay: `${tagIndex * 50}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl transition-opacity duration-300 ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action with animation */}
        <div className="mt-16 text-center">
          <div className={`inline-flex items-center gap-3 px-8 py-4 rounded-full border transition-all duration-300 group hover:scale-105 ${
            theme === 'dark' 
              ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
              : 'bg-white border-gray-300 hover:border-gray-400 shadow-lg'
          }`}>
            <Code2 className="w-5 h-5 text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
            <span className={`transition-colors ${theme === 'dark' ? 'text-gray-300 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-900'}`}>More projects available on GitHub</span>
            <a 
              href="https://github.com/srinivas112004" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-110"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
