
import React, { useState } from 'react';

interface NavbarProps {
  onDownloadClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onDownloadClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-3xl font-bold font-rajdhani text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 tracking-tighter">
              APEX GIRL <span className="text-white">MOD</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#characters" className="text-gray-300 hover:text-white transition-colors">Characters</a>
            <button 
              onClick={onDownloadClick}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold hover:scale-105 transition-transform neon-border"
            >
              DOWNLOAD NOW
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#030014]/95 backdrop-blur-xl py-4 px-4 border-b border-white/10">
          <div className="flex flex-col space-y-4">
            <a href="#features" className="text-gray-300" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#characters" className="text-gray-300" onClick={() => setIsMenuOpen(false)}>Characters</a>
            <button 
              onClick={() => { onDownloadClick(); setIsMenuOpen(false); }}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold"
            >
              DOWNLOAD NOW
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
