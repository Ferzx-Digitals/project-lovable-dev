export interface CongressEvent {
  year: number;
  city: string;
  country: string;
  flag: string;
  icon: string;
}

export const congressHistory: CongressEvent[] = [
  { year: 1995, city: 'Zakopane', country: 'Poland', flag: '🇵🇱', icon: '🏔️' },
  { year: 1997, city: 'San José', country: 'Costa Rica', flag: '🇨🇷', icon: '🌋' },
  { year: 2000, city: 'Kruger', country: 'South Africa', flag: '🇿🇦', icon: '🦁' },
  { year: 2003, city: 'Melbourne', country: 'Australia', flag: '🇦🇺', icon: '🦘' },
  { year: 2006, city: 'Stirling', country: 'Scotland', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', icon: '🏰' },
  { year: 2009, city: 'Santa Cruz', country: 'Bolivia', flag: '🇧🇴', icon: '🦙' },
  { year: 2012, city: 'Arusha', country: 'Tanzania', flag: '🇹🇿', icon: '🐘' },
  { year: 2016, city: 'Estes Park', country: 'USA', flag: '🇺🇸', icon: '🦅' },
  { year: 2019, city: 'Chitwan', country: 'Nepal', flag: '🇳🇵', icon: '🐅' },
  { year: 2024, city: 'Hyères', country: 'France', flag: '🇫🇷', icon: '🏞️' },
];
