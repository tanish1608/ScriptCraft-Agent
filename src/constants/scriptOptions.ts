import { Genre, ScriptLength } from '../types/script';

export const genres: Genre[] = ['action', 'comedy', 'drama', 'horror', 'romance', 'sci-fi', 'thriller'];

export const lengths: ScriptLength[] = [
  { 
    id: 'short',
    label: 'Short (1000 - 3000)',
    minChars: 1000,
    maxChars: 3000
  },
  { 
    id: 'medium',
    label: 'Medium (3000 - 6000)',
    minChars: 3000,
    maxChars: 6000
  },
  { 
    id: 'full',
    label: 'Full (6000 - 10000)',
    minChars: 6000,
    maxChars: 10000
  }
];