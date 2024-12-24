import { useState } from 'react';
import { FormData } from '../types/script';
import { generateScriptContent } from '../utils/scriptGeneration';
import { validateFormData } from '../utils/validation';
import Header from './Header';
import GenreSelector from './GenreSelector';
import LengthSelector from './LengthSelector';
import StoryForm from './StoryForm';
import GeneratedScript from './GeneratedScript';
import FormStepButtons from './FormStepButtons';

export default function ScriptForm() {
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    genre: 'action',
    length: 'medium',
    premise: '',
    characters: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [generatedScript, setGeneratedScript] = useState('');

  const handleGenerate = async () => {
    const validationErrors = validateFormData(formData);
    
    if (validationErrors.length > 0) {
      const errorMap = validationErrors.reduce((acc, error) => ({
        ...acc,
        [error.field]: error.message
      }), {});
      setErrors(errorMap);
      return;
    }

    setErrors({});
    setIsGenerating(true);
    try {
      const script = await generateScriptContent(formData);
      setGeneratedScript(script);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleFormChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleScriptUpdate = (newScript: string) => {
    setGeneratedScript(newScript);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Header />

        {step === 1 && (
          <div className="space-y-8">
            <GenreSelector
              selectedGenre={formData.genre}
              onGenreSelect={(genre) => setFormData({ ...formData, genre })}
            />
            <LengthSelector
              selectedLength={formData.length}
              onLengthSelect={(length) => setFormData({ ...formData, length })}
            />
            <FormStepButtons
              step={step}
              isGenerating={isGenerating}
              onBack={() => setStep(1)}
              onNext={() => setStep(2)}
              onGenerate={handleGenerate}
            />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-8">
            <StoryForm 
              formData={formData} 
              onFormChange={handleFormChange}
              errors={errors}
            />
            <FormStepButtons
              step={step}
              isGenerating={isGenerating}
              onBack={() => setStep(1)}
              onNext={() => setStep(2)}
              onGenerate={handleGenerate}
            />
          </div>
        )}

        {generatedScript && !isGenerating && (
          <GeneratedScript 
            script={generatedScript} 
            onScriptUpdate={handleScriptUpdate}
          />
        )}
      </div>
    </div>
  );
}