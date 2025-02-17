import { FormData } from '../types/script';
import { inputBaseStyles } from '../styles/commonStyles';

interface StoryFormProps {
  formData: FormData;
  onFormChange: (field: keyof FormData, value: string) => void;
  errors: { [key: string]: string };
}

export default function StoryForm({ formData, onFormChange, errors }: StoryFormProps) {
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold mb-6">Describe your story premise</h2>
        <textarea
  style={{ width: 300, height: 300 }}  // changed from 100 to 300
  value={formData.premise}
          onChange={(e) => onFormChange('premise', e.target.value)}
          placeholder="A brilliant scientist discovers a way to travel through dreams, but each journey costs a piece of their memory... (minimum 50 characters)"
          className={`${inputBaseStyles} h-32 ${errors.premise ? 'border-red-500' : ''}`}
        />
        {errors.premise && (
          <p className="mt-2 text-red-500 text-sm">{errors.premise}</p>
        )}
        <p className="mt-2 text-gray-400 text-sm">
          Characters: {formData.premise.length} / Minimum: 50
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Describe main characters</h2>
        <textarea
         style={{ width: 300, height: 300 }} 
          value={formData.characters}
          onChange={(e) => onFormChange('characters', e.target.value)}
          placeholder="Dr. Emma Chen - Brilliant but arrogant neuroscientist, haunted by past failures... (minimum 50 characters)"
          className={`${inputBaseStyles} h-32 ${errors.characters ? 'border-red-500' : ''}`}
        />
        {errors.characters && (
          <p className="mt-2 text-red-500 text-sm">{errors.characters}</p>
        )}
        <p className="mt-2 text-gray-400 text-sm">
          Characters: {formData.characters.length} / Minimum: 50
        </p>
      </div>

    </>
  );
}