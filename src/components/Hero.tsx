import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const { theme } = useTheme();

  const roles = [
    'AI/ML Developer',
    'Full Stack Developer',
    'Software Engineer',
    'Problem Solver',
    'Blockchain Developer',
    'Backend Devloper',
  ];

  useEffect(() => {
    const typeText = async () => {
      const currentRoleText = roles[currentRole];
      
      // Typing effect
      for (let i = 0; i <= currentRoleText.length; i++) {
        setDisplayText(currentRoleText.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Deleting effect
      for (let i = currentRoleText.length; i >= 0; i--) {
        setDisplayText(currentRoleText.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      
      setCurrentRole((prev) => (prev + 1) % roles.length);
    };

    typeText();
  }, [currentRole]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={`min-h-screen flex items-center justify-center relative overflow-hidden pt-16 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'
    }`}>
      {/* Clean background without particles */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
            : 'bg-gradient-to-br from-blue-50 via-white to-indigo-50'
        }`}>
          <div className={`absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:32px_32px] ${
            theme === 'dark' ? 'opacity-30' : 'opacity-20'
          }`}></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="text-left space-y-6 animate-fade-in">
            <div className="mb-6">
              <div className={`inline-flex items-center px-4 py-2 rounded-full border mb-6 hover:scale-105 transition-all duration-300 group ${
                theme === 'dark' 
                  ? 'bg-emerald-500/10 border-emerald-500/20 hover:bg-emerald-500/20' 
                  : 'bg-emerald-100 border-emerald-300 hover:bg-emerald-200'
              }`}>
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 animate-pulse"></div>
                <span className={`text-sm font-medium ${
                  theme === 'dark' ? 'text-emerald-400 group-hover:text-emerald-300' : 'text-emerald-700 group-hover:text-emerald-800'
                }`}>Available for opportunities</span>
              </div>
              
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                <span className="animate-fade-in-delay-1">Hi, I'm{' '}</span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in-delay-2 block">
                  Srinivas Kandagatla
                </span>
              </h1>
              
              <div className={`text-xl sm:text-2xl lg:text-3xl mb-6 font-light animate-fade-in-delay-3 h-12 flex items-center ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <span className="mr-3">I'm a</span>
                <span className="text-blue-500 font-medium min-w-0">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
              
              <p className={`text-lg mb-8 leading-relaxed max-w-xl animate-fade-in-delay-4 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Passionate about creating intelligent solutions through AI/ML and building 
                seamless full-stack applications. Let's build something amazing together.
              </p>
              
              <div className={`flex items-center mb-8 animate-fade-in-delay-4 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                <MapPin className="w-4 h-4 mr-2" />
                <span>Available Worldwide</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8 animate-fade-in-delay-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`group px-8 py-3 border rounded-lg font-medium transition-all duration-300 relative overflow-hidden ${
                  theme === 'dark' 
                    ? 'border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white hover:bg-gray-800' 
                    : 'border-gray-300 hover:border-gray-500 text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span className="relative z-10">Get In Touch</span>
              </button>
            </div>

            <div className="flex gap-6 animate-fade-in-delay-4">
              {[
                { icon: Github, href: "https://github.com/srinivas112004" },
                { icon: Linkedin, href: "https://linkedin.com/in/srinivas-kandagatla-98aa69305" },
                { icon: Mail, href: "mailto:srinivas.kandagatla112004@gmail.com" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12 ${
                    theme === 'dark' 
                      ? 'bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white' 
                      : 'bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 shadow-md hover:shadow-lg'
                  }`}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Enhanced Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-delay-2">
            <div className="relative group">
              <div className="w-80 h-80 rounded-2xl overflow-hidden relative">
                <img
                  src="/WhatsApp Image_2.jpeg"
                  alt="Srinivas Kandagatla"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                />
                <div className={`absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  theme === 'dark' ? 'from-gray-900/50 to-transparent' : 'from-white/50 to-transparent'
                }`}></div>
              </div>
              
              {/* Animated decorative elements */}
              <div className={`absolute -top-4 -right-4 w-72 h-72 rounded-2xl -z-10 blur-2xl group-hover:blur-3xl transition-all duration-500 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20' 
                  : 'bg-gradient-to-r from-blue-200/40 to-purple-200/40'
              }`}></div>
              <div className={`absolute -bottom-4 -left-4 w-72 h-72 rounded-2xl -z-10 blur-2xl group-hover:blur-3xl transition-all duration-500 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-cyan-600/20 to-blue-600/20' 
                  : 'bg-gradient-to-r from-cyan-200/40 to-blue-200/40'
              }`}></div>
              
              {/* Floating skill badges */}
              <div className={`absolute -top-6 -left-6 border px-3 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110 ${
                theme === 'dark' 
                  ? 'bg-gray-800 border-gray-600 text-gray-300' 
                  : 'bg-white border-gray-300 text-gray-700 shadow-md'
              }`}>
                React
              </div>
              <div className={`absolute top-1/2 -right-8 border px-3 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-all duration-700 hover:scale-110 ${
                theme === 'dark' 
                  ? 'bg-gray-800 border-gray-600 text-gray-300' 
                  : 'bg-white border-gray-300 text-gray-700 shadow-md'
              }`}>
                AI/ML
              </div>
              <div className={`absolute -bottom-6 right-12 border px-3 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-all duration-900 hover:scale-110 ${
                theme === 'dark' 
                  ? 'bg-gray-800 border-gray-600 text-gray-300' 
                  : 'bg-white border-gray-300 text-gray-700 shadow-md'
              }`}>
                Python
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce transition-colors p-2 rounded-full ${
          theme === 'dark' 
            ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
            : 'text-gray-500 hover:text-gray-700 hover:bg-white/50'
        }`}
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}