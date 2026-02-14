
import { GoogleGenAI } from "@google/genai";

export const getFinancialInsights = async (balance: number, revenue30d: number) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompt = `As a financial advisor for digital creators, provide 3 short, punchy insights based on these stats: 
  Current Balance: ${balance}€
  Revenue last 30 days: ${revenue30d}€
  Focus on withdrawal strategy, tax planning, and investment for growth. Keep it in French, professional, and encouraging.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Désolé, les analyses IA sont momentanément indisponibles.";
  }
};
