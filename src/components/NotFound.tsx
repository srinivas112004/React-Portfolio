import { Home, ArrowLeft } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function NotFound() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen flex items-center justify-center ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'
    }`}>
      <div className="text-center px-4">
        {/* 404 Text */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-pulse">
            404
          </h1>
        </div>

        {/* Message */}
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Page Not Found
        </h2>
        
        <p className={`text-lg mb-8 max-w-md mx-auto ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.history.back()}
            className={`group px-6 py-3 border rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 ${
              theme === 'dark' 
                ? 'border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white hover:bg-gray-800' 
                : 'border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 hover:bg-white shadow-md'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
          
          <a
            href="/"
            className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </a>
        </div>

        {/* Decorative element */}
        <div className="mt-12 opacity-20">
          <svg
            className={`w-64 h-64 mx-auto ${theme === 'dark' ? 'text-gray-700' : 'text-gray-400'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
