import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import LoadingScreen from './components/LoadingScreen';
import BackToTop from './components/BackToTop';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [isPageVisible, setIsPageVisible] = useState(false);
  const { theme } = useTheme();

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setIsPageVisible(true), 300);
  };

  useEffect(() => {
    // Preload images
    const imageUrls = [
      '/WhatsApp Image_2.jpeg',
      'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800'
    ];

    const preloadImages = imageUrls.map(url => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
      });
    });

    Promise.allSettled(preloadImages).then(() => {
      // Minimum loading time for better UX
      setTimeout(() => {
        if (isLoading) {
          // Will be handled by LoadingScreen component
        }
      }, 2000);
    });
  }, []);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className={`min-h-screen transition-all duration-1000 ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    } ${
      isPageVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
    }`}>
      <Navigation />
      <BackToTop />
      
      {/* Page content with staggered animations */}
      <div className="relative">
        <div className={`transition-all duration-700 delay-100 ${isPageVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Hero />
        </div>
        
        <div className={`transition-all duration-700 delay-200 ${isPageVisible ? 'opacity-100' : 'opacity-0'}`}>
          <About />
        </div>
        
        <div className={`transition-all duration-700 delay-250 ${isPageVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Resume />
        </div>
        
        <div className={`transition-all duration-700 delay-300 ${isPageVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Experience />
        </div>
        
        <div className={`transition-all duration-700 delay-400 ${isPageVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Skills />
        </div>
        
        <div className={`transition-all duration-700 delay-500 ${isPageVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Projects />
        </div>
        
        <div className={`transition-all duration-700 delay-600 ${isPageVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Contact />
        </div>
      </div>

      {/* Enhanced footer with animations */}
      <footer className={`py-12 border-t transition-all duration-700 delay-700 ${
        theme === 'dark' 
          ? 'bg-gray-950 border-gray-800' 
          : 'bg-gray-100 border-gray-200'
      } ${
        isPageVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-6">
            {/* Social links with hover animations */}
            <div className="flex space-x-6">
              {[
                { Icon: Github, href: "https://github.com/srinivas112004", label: "GitHub" },
                { Icon: Linkedin, href: "https://linkedin.com/in/srinivas-kandagatla-98aa69305", label: "LinkedIn" },
                { Icon: Mail, href: "mailto:srinivas.kandagatla112004@gmail.com", label: "Email" }
              ].map(({ Icon, href, label }, index) => (
                <a 
                  key={label}
                  href={href}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`group p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12 ${
                    theme === 'dark' 
                      ? 'bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white' 
                      : 'bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-900 shadow-md'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            
            {/* Animated heart */}
            <div className={`flex items-center space-x-2 text-sm group ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse group-hover:scale-110 transition-transform" />
              <span>by Srinivas Kandagatla</span>
            </div>
            
            {/* Copyright with typing effect */}
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>© 2025 All rights reserved.</p>
            
            {/* Back to top button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              ↑ Back to top
            </button>
          </div>
        </div>
      </footer>

      {/* Floating scroll indicator */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-2">
        {['hero', 'about', 'resume', 'experience', 'skills', 'projects', 'contact'].map((section) => (
          <button
            key={section}
            onClick={() => {
              const element = document.getElementById(section);
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`block w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 hover:bg-blue-500 ${
              theme === 'dark' ? 'bg-gray-600' : 'bg-gray-400'
            }`}
            aria-label={`Go to ${section} section`}
          />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
