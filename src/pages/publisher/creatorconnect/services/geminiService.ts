
//import { GoogleGenAI } from "@google/genai";

//const ai = new GoogleGenAI({ apiKey: /*process.env.API_KEY || */'' });

export const generatePitch = async (campaignTitle: string, brand: string, brief: string) => {
  /*
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a professional content creator pitch agent. Create a short, high-impact pitch for a campaign.
      
      Campaign: ${campaignTitle}
      Brand: ${brand}
      Brief: ${brief}
      
      The pitch should include:
      1. A catchy hook.
      2. How my content style fits this brand.
      3. A specific content idea.
      
      Format the output in professional Markdown.`,
      config: {
        temperature: 0.8,
        topP: 0.9,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Error generating pitch:", error);
    throw error;
  }*/
 return ""
};
