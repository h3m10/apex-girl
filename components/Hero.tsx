
import React from 'react';

interface HeroProps {
  onDownloadClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDownloadClick }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/apexgirl/1920/1080?blur=5" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030014]/50 via-[#030014]/80 to-[#030014]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-purple-400 font-bold tracking-widest uppercase mb-4 font-rajdhani">The Ultimate Anime Strategy RPG</h2>
        <h1 className="text-5xl md:text-8xl font-black font-rajdhani mb-6 leading-none">
          UNLEASH THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 neon-glow">APEX FORCE</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Step into a world where technology and magic collide. Download the Mod version to unlock all premium features and dominate the digital arena.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onDownloadClick}
            className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xl font-bold hover:scale-105 transition-transform shadow-2xl shadow-purple-500/20 neon-border"
          >
            FREE DOWNLOAD (MOD)
          </button>
          <a 
            href="#features"
            className="w-full sm:w-auto px-10 py-5 border border-white/20 rounded-full text-xl font-bold hover:bg-white/5 transition-colors"
          >
            VIEW FEATURES
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center space-x-8 text-gray-500 text-sm uppercase tracking-widest">
          <div className="flex flex-col items-center">
            <span className="text-white font-bold text-lg">1M+</span>
            <span>Downloads</span>
          </div>
          <div className="w-px h-8 bg-white/10"></div>
          <div className="flex flex-col items-center">
            <span className="text-white font-bold text-lg">4.9/5</span>
            <span>Rating</span>
          </div>
          <div className="w-px h-8 bg-white/10"></div>
          <div className="flex flex-col items-center">
            <span className="text-white font-bold text-lg">v2.4.0</span>
            <span>Version</span>
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
    </div>
  );
};

export default Hero;
