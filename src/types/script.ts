export type Genre = 'action' | 'comedy' | 'drama' | 'horror' | 'romance' | 'sci-fi' | 'thriller';
export type Length = 'short' | 'medium' | 'full';

export interface FormData {
  genre: Genre;
  length: Length;
  premise: string;
  characters: string;
}

export interface ScriptLength {
  id: Length;
  label: string;
  minChars: number;
  maxChars: number;
}

export interface ValidationError {
  field: string;
  message: string;
}