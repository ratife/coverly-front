
import React, { useState } from 'react';
import { Sparkles, Loader2, Copy, Check } from 'lucide-react';
import { generatePitch } from '../services/geminiService';

const GeminiPitchGenerator: React.FC = () => {
  const [pitch, setPitch] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const result = await generatePitch(
        "Summer Tech Launch 2024",
        "TechNova Solutions",
        "Introducing our mobile workstation and looking for creative tech enthusiasts to showcase how it fits into a remote lifestyle."
      );
      setPitch(result);
    } catch (err) {
      alert("Failed to generate pitch. Please check your API key.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (pitch) {
      navigator.clipboard.writeText(pitch);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border border-purple-500/30 rounded-2xl p-6 mb-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Sparkles className="w-24 h-24 text-purple-400" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-purple-400" />
          <h2 className="text-lg font-bold text-white">Smart Pitch Assistant</h2>
        </div>
        
        {!pitch && !loading && (
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-sm text-gray-300 flex-1">
              Want a competitive edge? Let Gemini analyze the brief and draft a high-converting pitch for you.
            </p>
            <button 
              onClick={handleGenerate}
              className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-purple-600/20 whitespace-nowrap"
            >
              Draft My Pitch
            </button>
          </div>
        )}

        {loading && (
          <div className="flex items-center gap-3 text-purple-400 py-4">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span className="text-sm font-medium">Analyzing brief and crafting content ideas...</span>
          </div>
        )}

        {pitch && !loading && (
          <div className="mt-4">
            <div className="bg-[#0d0f17]/60 border border-gray-800 rounded-xl p-4 text-sm text-gray-300 leading-relaxed whitespace-pre-wrap max-h-60 overflow-y-auto custom-scrollbar">
              {pitch}
            </div>
            <div className="flex justify-end gap-3 mt-4">
              <button 
                onClick={() => setPitch(undefined)}
                className="text-xs font-bold text-gray-500 hover:text-gray-300"
              >
                Start Over
              </button>
              <button 
                onClick={handleCopy}
                className="flex items-center gap-2 bg-[#1a1d2d] hover:bg-[#252a41] border border-gray-700 px-4 py-2 rounded-lg text-xs font-bold text-white transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied!' : 'Copy to Clipboard'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeminiPitchGenerator;
