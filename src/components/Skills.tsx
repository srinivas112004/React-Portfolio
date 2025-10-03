import { Code, Database, Cloud, Brain, Wrench, BookOpen } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Skills() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'C', 'Java', 'PHP', 'HTML', 'TypeScript', 'JavaScript'],
      color: 'from-blue-500 to-cyan-500',
      proficiency: 90
    },
    {
      title: 'Frameworks & Libraries',
      icon: Wrench,
      skills: ['React.js', 'Next.js', 'Node.js', 'Django', 'Flask', 'TailwindCSS', 'Git'],
      color: 'from-purple-500 to-pink-500',
      proficiency: 85
    },
    {
      title: 'AI/ML & Data Science',
      icon: Brain,
      skills: ['Machine Learning', 'NLP', 'Generative AI', 'LLMs', 'TensorFlow', 'PyTorch'],
      color: 'from-emerald-500 to-teal-500',
      proficiency: 80
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'SQLite', 'MongoDB', 'PostgreSQL'],
      color: 'from-orange-500 to-red-500',
      proficiency: 75
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['AWS', 'Google Cloud'],
      color: 'from-indigo-500 to-purple-500',
      proficiency: 50
    },
    {
      title: 'Computer Science',
      icon: BookOpen,
      skills: ['DSA', 'DBMS', 'OS', 'Computer Networks', 'Algorithms'],
      color: 'from-yellow-500 to-orange-500',
      proficiency: 88
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = Array.from(entry.target.children);
            cards.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Technical proficiency across diverse domains of software development and AI/ML
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={sectionRef}>
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className={`rounded-2xl p-6 border transition-all duration-500 group relative overflow-hidden transform ${
                theme === 'dark' 
                  ? 'bg-gray-900 border-gray-700 hover:border-gray-600' 
                  : 'bg-white border-gray-200 hover:border-gray-300 shadow-lg'
              } ${
                visibleCards.includes(categoryIndex) 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-10 opacity-0 scale-95'
              } ${hoveredCard === categoryIndex ? 'scale-105' : ''}`}
              onMouseEnter={() => setHoveredCard(categoryIndex)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              {/* Background gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${category.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              {/* Proficiency ring */}
              <div className="absolute top-4 right-4 w-12 h-12">
                <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeDasharray={`${category.proficiency}, 100`}
                    className={`transition-all duration-1000 ${visibleCards.includes(categoryIndex) ? 'opacity-100' : 'opacity-0'}`}
                    style={{ transitionDelay: `${categoryIndex * 200 + 500}ms` }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" className="text-blue-400" stopColor="currentColor" />
                      <stop offset="100%" className="text-purple-400" stopColor="currentColor" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-xs font-bold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{category.proficiency}%</span>
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} p-0.5 transition-transform duration-300 ${hoveredCard === categoryIndex ? 'rotate-12 scale-110' : ''}`}>
                    <div className={`w-full h-full rounded-[10px] flex items-center justify-center ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
                      <category.icon className={`w-6 h-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} />
                    </div>
                  </div>
                  <h3 className={`text-xl font-semibold transition-colors ${theme === 'dark' ? 'text-white group-hover:text-gray-100' : 'text-gray-900 group-hover:text-gray-700'}`}>
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-2 rounded-lg text-sm font-medium border transition-all duration-300 cursor-default transform ${
                        theme === 'dark' 
                          ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border-gray-700 hover:border-gray-600' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 border-gray-300 hover:border-gray-400'
                      } ${
                        hoveredCard === categoryIndex ? 'scale-105' : ''
                      }`}
                      style={{ 
                        transitionDelay: `${skillIndex * 50}ms`,
                        animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms` 
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced skill progression indicator */}
        <div className="mt-16 text-center">
          <div className={`inline-flex items-center px-8 py-4 rounded-full border transition-all duration-300 group ${
            theme === 'dark' 
              ? 'bg-gray-900 border-gray-700 hover:border-gray-600' 
              : 'bg-white border-gray-300 hover:border-gray-400 shadow-lg'
          }`}>
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
            <span className={`font-medium transition-colors ${
              theme === 'dark' 
                ? 'text-gray-300 group-hover:text-white' 
                : 'text-gray-600 group-hover:text-gray-900'
            }`}>Continuously learning and evolving</span>
          </div>
        </div>


      </div>
    </section>
  );
}
