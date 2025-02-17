import openai from './config';
import * as prompts from './prompts';
import type { 
  SceneParams, 
  PlotTwistParams, 
} from './types';

const generateCompletion = async (prompt: string): Promise<string> => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.8,
    });
    return response.choices[0].message.content || '';
  } catch (error) {
    console.error("Error communicating with ChatGPT:", error);
    throw new Error("Failed to generate content. Please try again.");
  }
};

export const generateScene = async (params: SceneParams): Promise<string> => {
  const prompt = prompts.createScenePrompt(params);
  return generateCompletion(prompt);
};

export const generatePlotTwist = async (params: PlotTwistParams): Promise<string> => {
  const prompt = prompts.createPlotTwistPrompt(params);
  return generateCompletion(prompt);
};

export const modifyScript = async (currentScript: string, modification: string): Promise<string> => {
  const prompt = `
As a professional screenwriter, modify the following script according to this request: "${modification}"

Current script:
${currentScript}

Please provide the complete modified script while maintaining proper screenplay format and ensuring the changes are coherent with the overall story.`;

  return generateCompletion(prompt);
};