import { Download, FileText, Award, Briefcase, GraduationCap, Code, ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function Resume() {
  const { theme } = useTheme();

  const resumeHighlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'B.Tech in Computer Science (AI & ML)',
      detail: 'CGPA: 8.90',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Briefcase,
      title: 'Experience',
      description: 'AI & Tech Decentralized Intern',
      detail: 'BlockseBlock in collaboration with (OpenxAI)',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'Projects',
      description: '10+ AI/ML & Web Projects',
      detail: 'Full-stack & AI Solutions',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Award,
      title: 'Skills',
      description: '15+ Technologies',
      detail: 'AI/ML, Web3, Full-stack',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const handleDownload = (e?: React.MouseEvent) => {
    // Prevent any default behavior
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    console.log('Download button clicked'); // Debug log
    
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Srinivas_Kandagatla_Resume.pdf';
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewOnline = (e?: React.MouseEvent) => {
    // Prevent any default behavior
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    console.log('View online button clicked'); // Debug log
    
    // Use Google Drive link to view resume
    const viewerUrl = 'https://drive.google.com/file/d/1Q37TRtYN_5ccyFHeCHmr36nOOKX8FVFV/view?usp=drive_link';
    window.open(viewerUrl, '_blank');
  };

  return (
    <section id="resume" className={`py-20 relative overflow-hidden ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <FileText className={`w-8 h-8 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
            <h2 className={`text-4xl md:text-5xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Resume
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Download my complete resume or view it online to learn more about my experience and skills
          </p>
        </div>

        {/* Resume Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resumeHighlights.map((item, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl p-6 border transition-all duration-300 hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
                  : 'bg-gray-50 border-gray-200 hover:border-gray-300 shadow-lg'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.color} p-0.5 mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                <div className={`w-full h-full rounded-[10px] flex items-center justify-center ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                }`}>
                  <item.icon className={`w-7 h-7 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} />
                </div>
              </div>

              {/* Content */}
              <h3 className={`text-lg font-semibold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {item.title}
              </h3>
              <p className={`text-sm mb-1 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {item.description}
              </p>
              <p className={`text-xs font-medium ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}>
                {item.detail}
              </p>

              {/* Hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
            </div>
          ))}
        </div>

        {/* Main Resume Card */}
        <div className={`rounded-3xl p-8 md:p-12 border relative overflow-hidden ${
          theme === 'dark' 
            ? 'bg-gray-800 border-gray-700' 
            : 'bg-gradient-to-br from-blue-50 to-purple-50 border-gray-200 shadow-xl'
        }`}>
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.5)_1px,transparent_0)] bg-[length:24px_24px]"></div>
          </div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left Side - Info */}
              <div className="flex-1 text-center md:text-left w-full md:w-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    Updated Recently
                  </span>
                </div>

                <h3 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 break-words ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Srinivas Kandagatla
                </h3>
                <p className={`text-lg sm:text-xl mb-6 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  AI/ML Developer & Full-Stack Engineer
                </p>

                <div className={`flex flex-wrap gap-3 justify-center md:justify-start mb-8 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <span className="text-sm">B.Tech AI & ML</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    <span className="text-sm">CGPA 8.90</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span className="text-sm">8+ Months Experience</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <button
                    type="button"
                    onClick={handleDownload}
                    className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                  >
                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                    Download Resume
                  </button>
                  <button
                    type="button"
                    onClick={handleViewOnline}
                    className={`group px-8 py-4 border rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 ${
                      theme === 'dark' 
                        ? 'border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white hover:bg-gray-700' 
                        : 'border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 hover:bg-white shadow-md'
                    }`}
                  >
                    <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    View Online
                  </button>
                </div>
              </div>

              {/* Right Side - Visual */}
              <div className="relative">
                <div className="w-48 h-64 md:w-56 md:h-72 relative">
                  {/* Resume preview mockup */}
                  <div className={`absolute inset-0 rounded-2xl border-2 overflow-hidden transform rotate-3 transition-transform duration-300 hover:rotate-6 ${
                    theme === 'dark' 
                      ? 'bg-white border-gray-600 shadow-2xl' 
                      : 'bg-white border-gray-300 shadow-2xl'
                  }`}>
                    <div className="p-4 space-y-2">
                      <div className="h-3 bg-gray-800 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-400 rounded w-1/2"></div>
                      <div className="h-2 bg-gray-400 rounded w-2/3"></div>
                      <div className="mt-4 space-y-1">
                        <div className="h-2 bg-gray-300 rounded"></div>
                        <div className="h-2 bg-gray-300 rounded"></div>
                        <div className="h-2 bg-gray-300 rounded w-5/6"></div>
                      </div>
                      <div className="mt-4 space-y-1">
                        <div className="h-2 bg-gray-300 rounded"></div>
                        <div className="h-2 bg-gray-300 rounded"></div>
                        <div className="h-2 bg-gray-300 rounded w-4/5"></div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className={`mt-12 text-center p-6 rounded-2xl border ${
          theme === 'dark' 
            ? 'bg-gray-800/50 border-gray-700' 
            : 'bg-blue-50/50 border-blue-100'
        }`}>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            💡 <span className="font-medium">Pro Tip:</span> My resume is regularly updated with the latest projects and achievements. 
            Feel free to download it and reach out for any opportunities!
          </p>
        </div>
      </div>
    </section>
  );
}
