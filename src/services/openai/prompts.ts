import {
  SceneParams,
  PlotTwistParams,
} from "./types";

export const createScenePrompt = ({
  context,
  style,
  setting,
  characters,
  tone,
}: SceneParams): string => `
You are a professional screenwriter. Write a high-quality movie scene in proper screenplay format:
- Context: ${context}
- Style: ${style}
- Setting: ${setting}
- Characters: ${characters}
- Tone: ${tone}

Structure the output like this:
INT. LOCATION - TIME OF DAY
[Action description]
CHARACTER NAME
(Dialogue)
Include vivid descriptions, engaging dialogue, and consistent tone.`;

export const createPlotTwistPrompt = ({
  currentStory,
  genre,
  constraints,
}: PlotTwistParams): string => `
You are a professional script consultant. Suggest three creative plot twists:
- Current story: ${currentStory}
- Genre: ${genre}
- Constraints: ${constraints}

Each twist should:
1. Be unexpected but logical.
2. Enhance the story's tension.
3. Provide unique and memorable developments.`;

// Add other prompt generators similarly
