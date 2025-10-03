import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    'Initializing AI systems...',
    'Loading project data...',
    'Preparing experience...',
    'Almost ready...'
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        {/* Logo animation */}
        <div className="w-24 h-24 mx-auto relative">
          <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center animate-pulse">
            <span className="text-2xl font-bold text-white">SK</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-30 animate-ping"></div>
        </div>

        {/* Loading text */}
        <div className="h-8">
          <p className="text-white text-lg font-medium animate-fade-in">
            {loadingTexts[currentText]}
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-80 max-w-sm mx-auto">
          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-gray-400 text-sm mt-2">{progress}%</p>
        </div>


      </div>
    </div>
  );
}