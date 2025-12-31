
import React from 'react';
import { CHARACTERS } from '../constants.tsx';

const CharacterShowcase: React.FC = () => {
  return (
    <section id="characters" className="py-24 px-4 bg-[#05001a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-rajdhani mb-4">EXCLUSIVE CHARACTERS</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Meet the elite warriors. All premium characters are pre-unlocked in our modded client.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CHARACTERS.map((char) => (
            <div key={char.id} className="group relative overflow-hidden rounded-2xl aspect-[3/4] glass">
              <img 
                src={char.image} 
                alt={char.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              
              <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-1 rounded-full font-black text-sm italic">
                {char.rarity}
              </div>

              <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-300">
                <p className="text-purple-400 font-bold mb-1 font-rajdhani">{char.role}</p>
                <h3 className="text-3xl font-black font-rajdhani mb-2">{char.name}</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {char.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharacterShowcase;
