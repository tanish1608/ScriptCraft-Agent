import { Clock } from 'lucide-react';
import { Length } from '../types/script';
import { lengths } from '../constants/scriptOptions';

interface LengthSelectorProps {
  selectedLength: Length;
  onLengthSelect: (length: Length) => void;
}

export default function LengthSelector({ selectedLength, onLengthSelect }: LengthSelectorProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Choose script length</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {lengths.map((length) => (
          <button
            key={length.id}
            onClick={() => onLengthSelect(length.id)}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedLength === length.id
                ? 'border-purple-400 bg-purple-400/20'
                : 'border-gray-700 hover:border-purple-400/50'
            }`}
          >
            <Clock className="w-6 h-6 mb-2 mx-auto" />
            <span className="block font-medium">{length.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}