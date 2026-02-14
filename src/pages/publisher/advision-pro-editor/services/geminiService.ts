/*
import { GoogleGenAI, Type } from "@google/genai";
import type { OverlayElement, ImpactAnalysis } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
*/
export async function analyzeOverlayImpact(element: OverlayElement): Promise<ImpactAnalysis> {
  /*
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Analyze the following ad overlay element and predict its engagement impact percentage. 
      Return the response in JSON format.
      
      Element Details:
      - Type: ${element.type}
      - Title: ${element.title}
      - Subtitle: ${element.subtitle || 'N/A'}
      - Button: ${element.buttonText || 'N/A'}
      - Behavior: ${element.behavior}
      - Style: ${element.backgroundType} background`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: {
              type: Type.NUMBER,
              description: 'The predicted engagement impact percentage increase (e.g. 24).',
            },
            reasoning: {
              type: Type.STRING,
              description: 'A short explanation for the score.',
            },
          },
          required: ["score", "reasoning"]
        },
      },
    });

    const result = JSON.parse(response.text);
    return {
      score: result.score || 0,
      reasoning: result.reasoning || "Analyse indisponible"
    };
  } catch (error) {
    console.error("Impact analysis failed", error);
    return { score: 12, reasoning: "Estimation basée sur les paramètres par défaut." };
  }*/
}
