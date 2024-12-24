import { FormData } from '../types/script';
import { lengths } from '../constants/scriptOptions';
import { generateScene } from '../services/openai/api';

const generateRandomLength = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateScriptContent = async (formData: FormData): Promise<string> => {
  const selectedLength = lengths.find(l => l.id === formData.length)!;
  
  try {
    const script = await generateScene({
      context: formData.premise,
      style: formData.genre,
      setting: "Derived from the premise",
      characters: formData.characters,
      tone: "Matching the genre and premise",
    });

    // Ensure the script length meets our constraints
    const targetLength = generateRandomLength(
      selectedLength.minChars,
      selectedLength.maxChars
    );

    return script.slice(0, targetLength);
  } catch (error) {
    console.error("Error generating script:", error);
    throw error;
  }
};