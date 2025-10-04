import { Briefcase, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function Experience() {
  const { theme } = useTheme();
  const experience = [
    {
      title: 'AI & Tech Decentralized Intern',
      company: 'BlockseBlock in collaboration with (OpenxAI)',
      logo: '/blockseblock_logo.jpeg',
      website: 'https://blockseblock.com',
      period: 'Aug 2025 – Sep 2025',
      location: 'Remote India',
      type: 'Internship',
      responsibilities: [
        'Designed, developed, and deployed AI/ML models for real-world applications',
        'Optimized large language models (LLMs) to enhance accuracy and performance',
        'Built scalable full-stack applications using React (frontend), ML/LLM models (backend), and Web3.js integrations (blockchain)',
        'Researched and implemented Web3.js features for decentralized applications (dApps)',
        'Stayed up to date with emerging trends in AI, LLMs, and decentralized technologies',
      ],
      achievements: [
        'Successfully deployed 3+ AI/ML models in production',
        'Improved model accuracy by 25% through optimization techniques',
        'Built end-to-end full-stack applications with blockchain integration',
      ]
    },
  ];

  return (
    <section id="experience" className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Professional journey and hands-on experience in AI/ML and Web3 development
          </p>
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-[1.02] relative overflow-hidden ${
                theme === 'dark' 
                  ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
                  : 'bg-gray-50 border-gray-200 hover:border-gray-300 shadow-lg'
              }`}
            >
              {/* Background gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-10"></div>
              
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    {/* Company Logo */}
                    {exp.logo ? (
                      exp.website ? (
                        <a 
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-16 h-16 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                            theme === 'dark' ? 'border-gray-700 hover:border-blue-500' : 'border-gray-200 hover:border-blue-500'
                          }`}
                          title={`Visit ${exp.company} website`}
                        >
                          <img 
                            src={exp.logo} 
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-cover"
                          />
                        </a>
                      ) : (
                        <div className={`w-16 h-16 rounded-xl overflow-hidden border-2 flex-shrink-0 ${
                          theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                        }`}>
                          <img 
                            src={exp.logo} 
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )
                    ) : (
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                    )}
                    <div>
                      <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{exp.title}</h3>
                      <a 
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl text-blue-400 font-semibold block mb-3 hover:text-blue-300 transition-colors duration-300 cursor-pointer hover:underline"
                      >
                        {exp.company}
                      </a>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                        <Award className="w-4 h-4 text-emerald-400 mr-2" />
                        <span className="text-emerald-400 text-sm font-medium">{exp.type}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3 mt-4 lg:mt-0">
                  <div className={`flex items-center gap-2 lg:justify-end ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                  <div className={`flex items-center gap-2 lg:justify-end ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Responsibilities */}
                <div>
                  <h4 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className={`flex items-start gap-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        <span className="text-blue-400 mt-2 flex-shrink-0">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                        </span>
                        <span className="leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    <Award className="w-5 h-5 text-purple-400" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className={`flex items-start gap-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional section for future experiences */}
        <div className="mt-12 text-center">
          <div className={`inline-flex items-center px-4 py-2 rounded-full border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300 shadow-lg'}`}>
            <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3 animate-pulse"></div>
            <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>Open to new opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
}
