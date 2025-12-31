
import React from 'react';
import { Character, Feature } from './types.ts';

export const CHARACTERS: Character[] = [
  {
    id: 1,
    name: "Yuna Shadow",
    role: "Assault",
    rarity: "UR",
    image: "https://picsum.photos/seed/yuna/600/800",
    description: "The fastest blade in the digital realm. Unlocked in the Mod version."
  },
  {
    id: 2,
    name: "Celine Nova",
    role: "Tactician",
    rarity: "SSR",
    image: "https://picsum.photos/seed/celine/600/800",
    description: "Command the battlefield with orbital strikes and advanced AI drones."
  },
  {
    id: 3,
    name: "Mika Blast",
    role: "Heavy Support",
    rarity: "SSR",
    image: "https://picsum.photos/seed/mika/600/800",
    description: "Maximum firepower for those who prefer an explosive entrance."
  }
];

export const FEATURES: Feature[] = [
  {
    title: "Unlimited Crystals",
    description: "Get infinite resources to summon your favorite characters immediately.",
    icon: "💎"
  },
  {
    title: "All Characters Unlocked",
    description: "Access the full roster of UR and SSR girls from the start.",
    icon: "🔓"
  },
  {
    title: "Ultra HD Graphics",
    description: "Enhanced texture packs and 60FPS support for a buttery smooth experience.",
    icon: "🎮"
  },
  {
    title: "Anti-Ban Protection",
    description: "Advanced stealth technology keeps your account safe while using mod features.",
    icon: "🛡️"
  }
];
