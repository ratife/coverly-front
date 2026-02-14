
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

interface GeminiGeneratorProps {
  onClose: () => void;
}

const GeminiGenerator: React.FC<GeminiGeneratorProps> = ({ onClose }) => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [suggestion, setSuggestion] = useState<{
    title: string;
    description: string;
    colors: string[];
    elements: string[];
    vibe: string;
  } | null>(null);

  const generateIdea = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Generate a creative social media cover overlay idea for: ${prompt}`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING },
              colors: { type: Type.ARRAY, items: { type: Type.STRING } },
              elements: { type: Type.ARRAY, items: { type: Type.STRING } },
              vibe: { type: Type.STRING }
            },
            required: ["title", "description", "colors", "elements", "vibe"]
          }
        }
      });
      
      const data = JSON.parse(response.text);
      setSuggestion(data);
    } catch (error) {
      console.error("Gemini Error:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl bg-white dark:bg-surface-dark rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-border-dark">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black">AI Custom Request</h2>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          
          <p className="text-slate-500 dark:text-slate-400 mb-6">
            Décrivez votre niche ou votre style, et notre IA Gemini créera une suggestion de cover unique pour vous.
          </p>
          
          <div className="space-y-4">
            <textarea
              className="w-full h-32 bg-slate-100 dark:bg-background-dark border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-primary transition-all resize-none text-slate-900 dark:text-white"
              placeholder="Ex: Une cover pour une chaîne de cuisine minimaliste avec des tons pastel..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            
            <button
              onClick={generateIdea}
              disabled={isGenerating || !prompt}
              className="w-full py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.01] transition-all disabled:opacity-50 disabled:scale-100"
            >
              {isGenerating ? (
                <span className="animate-spin material-symbols-outlined">progress_activity</span>
              ) : (
                <span className="material-symbols-outlined">auto_awesome</span>
              )}
              {isGenerating ? 'Génération en cours...' : 'Générer mon Idée'}
            </button>
          </div>

          {suggestion && (
            <div className="mt-8 p-6 bg-slate-50 dark:bg-background-dark rounded-2xl border border-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-xl font-bold text-primary mb-2">{suggestion.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">{suggestion.description}</p>
              
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="font-bold uppercase text-slate-400 mb-1">Couleurs</p>
                  <div className="flex gap-1">
                    {suggestion.colors.map(c => (
                      <span key={c} className="px-2 py-1 bg-white dark:bg-surface-dark border dark:border-border-dark rounded">{c}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-bold uppercase text-slate-400 mb-1">Vibe</p>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded">{suggestion.vibe}</span>
                </div>
              </div>
              
              <div className="mt-4">
                <p className="font-bold uppercase text-xs text-slate-400 mb-1">Éléments Visuels</p>
                <div className="flex flex-wrap gap-2">
                  {suggestion.elements.map(e => (
                    <span key={e} className="text-[10px] px-2 py-1 bg-slate-200 dark:bg-surface-dark rounded-full">#{e}</span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeminiGenerator;
