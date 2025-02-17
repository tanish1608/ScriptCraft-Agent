import { Film } from 'lucide-react';
import { Genre } from '../types/script';
import { genres } from '../constants/scriptOptions';

interface GenreSelectorProps {
  selectedGenre: Genre;
  onGenreSelect: (genre: Genre) => void;
}

export default function GenreSelector({ selectedGenre, onGenreSelect }: GenreSelectorProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Select your genre</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '1rem' }}>
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => onGenreSelect(genre)}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedGenre === genre
                ? 'border-purple-400 bg-purple-400/20'
                : 'border-gray-700 hover:border-purple-400/50'
            }`}
          >
            <Film className="w-6 h-6 mb-2 mx-auto" />
            <span className="capitalize">{genre}</span>
          </button>
        ))}
      </div>
    </div>
  );
}