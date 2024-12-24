import { useState, useRef } from 'react';
import { Play, Pause, StopCircle } from 'lucide-react';
import { primaryButtonStyles } from '../styles/commonStyles';

interface VoiceControlsProps {
  text: string;
}

export default function VoiceControls({ text }: VoiceControlsProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const speechSynthRef = useRef<SpeechSynthesisUtterance | null>(null);

  const handlePlay = () => {
    if (!speechSynthRef.current) {
      speechSynthRef.current = new SpeechSynthesisUtterance(text);
      speechSynthRef.current.onend = () => {
        setIsPlaying(false);
      };
    }

    if (!isPlaying) {
      window.speechSynthesis.speak(speechSynthRef.current);
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    window.speechSynthesis.pause();
    setIsPlaying(false);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    speechSynthRef.current = null;
  };

  return (
    <div className="flex space-x-2 mt-4">
      {!isPlaying ? (
        <button
          onClick={handlePlay}
          className={`${primaryButtonStyles} px-4 py-2 flex items-center space-x-2`}
        >
          <Play className="w-4 h-4" />
          <span>Read Script</span>
        </button>
      ) : (
        <button
          onClick={handlePause}
          className={`${primaryButtonStyles} px-4 py-2 flex items-center space-x-2`}
        >
          <Pause className="w-4 h-4" />
          <span>Pause</span>
        </button>
      )}
      <button
        onClick={handleStop}
        className={`${primaryButtonStyles} px-4 py-2 flex items-center space-x-2`}
      >
        <StopCircle className="w-4 h-4" />
        <span>Stop</span>
      </button>
    </div>
  );
}