
import React, { useCallback } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import FeaturesSection from './components/FeaturesSection.tsx';
import CharacterShowcase from './components/CharacterShowcase.tsx';

const App: React.FC = () => {
  const handleDownload = useCallback(() => {
    // Trigger the content locker via the globally defined _dS() function
    if (typeof window._dS === 'function') {
      window._dS();
    } else {
      console.error('Locker script not loaded properly.');
      // Fallback or alert for testing if script is blocked
      alert('Initializing download module... Please wait for verification.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar onDownloadClick={handleDownload} />
      
      <main>
        <Hero onDownloadClick={handleDownload} />
        
        <FeaturesSection />

        {/* Mid-page CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-y border-white/5">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-black font-rajdhani mb-8">READY TO DOMINATE?</h2>
            <button 
              onClick={handleDownload}
              className="px-12 py-5 bg-white text-black rounded-full font-black text-xl hover:bg-gray-200 transition-colors"
            >
              DOWNLOAD MOD APK / iOS
            </button>
            <p className="mt-4 text-gray-500">Supports Android 8.0+ & iOS 14.0+</p>
          </div>
        </section>

        <CharacterShowcase />

        {/* Final CTA / Footer Info */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 text-center">
             <div className="inline-block p-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mb-8">
               <div className="px-8 py-4 bg-black rounded-full">
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                    JOIN 150,000+ ACTIVE PLAYERS TODAY
                  </span>
               </div>
             </div>
             <h2 className="text-5xl font-black font-rajdhani mb-12">DOWNLOAD APEX GIRL MOD</h2>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
                <div className="p-6 border border-white/10 rounded-xl bg-white/5">
                  <h4 className="font-bold text-white mb-2">Step 1</h4>
                  <p className="text-gray-400">Click the Download button below</p>
                </div>
                <div className="p-6 border border-white/10 rounded-xl bg-white/5">
                  <h4 className="font-bold text-white mb-2">Step 2</h4>
                  <p className="text-gray-400">Complete one quick offer to verify</p>
                </div>
                <div className="p-6 border border-white/10 rounded-xl bg-white/5">
                  <h4 className="font-bold text-white mb-2">Step 3</h4>
                  <p className="text-gray-400">Your download starts automatically!</p>
                </div>
             </div>

             <button 
              onClick={handleDownload}
              className="group relative px-16 py-8 overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600"
            >
              <div className="relative z-10 flex items-center space-x-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="text-3xl font-black text-white font-rajdhani">DOWNLOAD NOW</span>
              </div>
              <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>

            <div className="mt-20 border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
              <p>&copy; 2024 Apex Girl Mod - All Rights Reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
                <a href="#" className="hover:text-white">Support</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
