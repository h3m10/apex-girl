
export interface Character {
  id: number;
  name: string;
  role: string;
  rarity: 'SSR' | 'UR' | 'SR';
  image: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

declare global {
  interface Window {
    _dS: () => void;
  }
}
