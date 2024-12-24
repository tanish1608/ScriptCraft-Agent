import { ChevronRight, Loader, Wand2 } from 'lucide-react';
import { primaryButtonStyles, secondaryButtonStyles } from '../styles/commonStyles';

interface FormStepButtonsProps {
  step: number;
  isGenerating: boolean;
  onBack: () => void;
  onNext: () => void;
  onGenerate: () => void;
}

export default function FormStepButtons({ 
  step, 
  isGenerating, 
  onBack, 
  onNext, 
  onGenerate 
}: FormStepButtonsProps) {
  if (step === 1) {
    return (
      <button
        onClick={onNext}
        className={`${primaryButtonStyles} flex items-center justify-center space-x-2 w-full md:w-auto px-6 py-3`}
      >
        <span>Next</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    );
  }

  return (
    <div className="flex space-x-4">
      <button
        onClick={onBack}
        className={`${secondaryButtonStyles} px-6 py-3`}
      >
        Back
      </button>
      <button
        onClick={onGenerate}
        disabled={isGenerating}
        className={`${primaryButtonStyles} flex items-center justify-center space-x-2 flex-1 px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {isGenerating ? (
          <>
            <Loader className="w-5 h-5 animate-spin" />
            <span>Generating Script...</span>
          </>
        ) : (
          <>
            <Wand2 className="w-5 h-5" />
            <span>Generate Script</span>
          </>
        )}
      </button>
    </div>
  );
}