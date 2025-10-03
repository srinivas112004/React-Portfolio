import { Code2, Rocket, Users, GraduationCap, Award, Target } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, experience: 0, skills: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.',
      delay: 'delay-100'
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Building cutting-edge solutions with latest AI/ML technologies.',
      delay: 'delay-200'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Effective teamwork and communication for successful project delivery.',
      delay: 'delay-300'
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Analytical thinking to solve complex technical challenges efficiently.',
      delay: 'delay-400'
    },
  ];

  const stats = [
    { label: 'Projects Completed', value: 10, suffix: '+' },
    { label: 'Months Experience', value: 8, suffix: '+' },
    { label: 'Technologies', value: 10, suffix: '+' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
          stats.forEach((stat, index) => {
            let start = 0;
            const increment = stat.value / 30;
            const timer = setInterval(() => {
              start += increment;
              if (start >= stat.value) {
                setCounters(prev => ({ ...prev, [Object.keys(counters)[index]]: stat.value }));
                clearInterval(timer);
              } else {
                setCounters(prev => ({ ...prev, [Object.keys(counters)[index]]: Math.floor(start) }));
              }
            }, 50);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`} ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            About Me
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6 transition-all duration-1000 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Passionate about creating intelligent solutions and building seamless digital experiences
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-gray-900 hover:bg-gray-700' 
                  : 'bg-white hover:bg-gray-100 shadow-lg hover:shadow-xl'
              }`}>
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-2">
                  {index === 0 ? counters.projects : index === 1 ? counters.experience : counters.skills}{stat.suffix}
                </div>
                <div className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className={`space-y-8 transition-all duration-1000 delay-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className={`p-8 rounded-2xl border transition-all duration-300 group hover:transform hover:scale-105 ${
              theme === 'dark' 
                ? 'bg-gray-900 border-gray-700 hover:border-gray-600' 
                : 'bg-white border-gray-200 hover:border-gray-300 shadow-lg'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Education</h3>
              </div>
              <div className="space-y-3">
                <h4 className={`text-xl font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                  B.Tech in Computer Science (AI & ML)
                </h4>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  Nalla Narasimha Reddy Education Society's Group Of Institutions
                </p>
                <div className={`flex justify-between items-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  <span>2022 – 2026</span>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span className="font-semibold text-emerald-400">CGPA: 8.90</span>
                  </div>
                </div>
                <p className="text-gray-400">Hyderabad, Telangana</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>My Journey</h3>
              <div className={`space-y-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                <p className={`transition-colors duration-300 ${theme === 'dark' ? 'hover:text-white' : 'hover:text-gray-900'}`}>
                  I'm a passionate AI/ML and full-stack developer who loves building intelligent applications 
                  that solve real-world problems. My journey began with curiosity about how machines can 
                  learn and think, which led me to explore the fascinating world of artificial intelligence.
                </p>
                <p className={`transition-colors duration-300 ${theme === 'dark' ? 'hover:text-white' : 'hover:text-gray-900'}`}>
                  With hands-on experience in machine learning, blockchain technology, and modern web 
                  development, I've worked on diverse projects ranging from face recognition systems 
                  to decentralized applications. I believe in continuous learning and staying updated 
                  with the latest technological advancements.
                </p>
                <p className={`transition-colors duration-300 ${theme === 'dark' ? 'hover:text-white' : 'hover:text-gray-900'}`}>
                  When I'm not coding, you'll find me participating in hackathons, contributing to 
                  open-source projects, or exploring new frameworks and tools that can enhance my 
                  development workflow.
                </p>
              </div>
            </div>
          </div>

          <div className={`space-y-6 transition-all duration-1000 delay-900 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <h3 className={`text-2xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>What I Bring</h3>
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border transition-all duration-300 group hover:transform hover:scale-105 animate-fade-in ${item.delay} ${
                  theme === 'dark' 
                    ? 'bg-gray-900 border-gray-700 hover:border-gray-600' 
                    : 'bg-white border-gray-200 hover:border-gray-300 shadow-lg'
                }`}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300 group-hover:rotate-12">
                      <item.icon className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div>
                    <h4 className={`text-xl font-semibold mb-2 group-hover:text-blue-300 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {item.title}
                    </h4>
                    <p className={`leading-relaxed transition-colors ${theme === 'dark' ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-600 group-hover:text-gray-700'}`}>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating action indicator */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className={`inline-flex items-center px-6 py-3 rounded-full border transition-all duration-300 group ${theme === 'dark' ? 'bg-gray-900 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-300 hover:border-gray-400 shadow-lg'}`}>
            <div className="flex space-x-1 mr-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
            <span className={`font-medium transition-colors ${
              theme === 'dark' 
                ? 'text-gray-300 group-hover:text-white' 
                : 'text-gray-600 group-hover:text-gray-900'
            }`}>Always learning and growing</span>
          </div>
        </div>
      </div>
    </section>
  );
}
