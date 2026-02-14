
import { GoogleGenAI } from "@google/genai";

export const generatePitch = async (campaignTitle: string, brandName: string, creatorNiche: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const prompt = `En tant que créateur de contenu dans la niche ${creatorNiche}, rédige une courte candidature (pitch) convaincante et professionnelle en français pour la campagne "${campaignTitle}" de la marque "${brandName}". Le ton doit être enthousiaste et direct. Maximum 3 phrases.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating pitch:", error);
    return "Bonjour ! Je suis très intéressé par votre campagne. Mon audience correspond parfaitement à votre image de marque et je serais ravi de collaborer avec vous.";
  }
};
