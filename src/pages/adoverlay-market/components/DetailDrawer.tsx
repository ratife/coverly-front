
import React, { useState, useEffect } from 'react';
import type { Campaign } from '../types';
import { generatePitch } from '../geminiService';

interface DetailDrawerProps {
  campaign: Campaign | null;
  onClose: () => void;
}

const DetailDrawer: React.FC<DetailDrawerProps> = ({ campaign, onClose }) => {
  const [pitch, setPitch] = useState<string | null>(null);
  const [loadingPitch, setLoadingPitch] = useState(false);

  useEffect(() => {
    if (campaign) {
      setPitch(null);
    }
  }, [campaign]);

  const handleGeneratePitch = async () => {
    if (!campaign) return;
    setLoadingPitch(true);
    const result = await generatePitch(campaign.title, campaign.brand, "Lifestyle & Beauté");
    setPitch(result);
    setLoadingPitch(false);
  };

  if (!campaign) return null;

  return (
    <aside className={`fixed inset-y-0 right-0 w-full sm:w-[450px] glass-panel border-l border-white/10 z-[60] p-8 transition-transform duration-300 ease-in-out ${campaign ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto custom-scrollbar`}>
      <button 
        onClick={onClose}
        className="absolute top-6 left-6 sm:left-[-20px] bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg z-20 hover:scale-110 transition-transform"
      >
        <span className="material-symbols-outlined">close</span>
      </button>

      <div className="flex items-center gap-4 mb-8 pt-10 sm:pt-0">
        <div className="w-16 h-16 rounded-2xl bg-[#292348] p-3 flex items-center justify-center shrink-0 shadow-inner">
          <img className="w-full h-full object-contain" src={campaign.brandLogo} alt={campaign.brand} />
        </div>
        <div>
          <h2 className="text-2xl font-bold leading-tight">{campaign.title}</h2>
          <p className="text-slate-400">par {campaign.brand}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center">
          <p className="text-xs text-slate-400 mb-1">Taux de Rémunération</p>
          <p className="text-xl font-bold text-primary">{campaign.rate}$ / 1k</p>
        </div>
        <div className="bg-slate-800/40 border border-white/5 rounded-xl p-4 text-center">
          <p className="text-xs text-slate-400 mb-1">Places Disponibles</p>
          <p className="text-xl font-bold">12 / 50</p>
        </div>
      </div>

      <div className="space-y-6 mb-10">
        <div>
          <h4 className="font-bold mb-3 flex items-center gap-2"><span className="material-symbols-outlined text-primary">description</span> Brief de Campagne</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            {campaign.description} Nous recherchons des créateurs authentiques pour incarner les valeurs de notre marque. Le contenu doit être organique et dynamique.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-3 flex items-center gap-2"><span className="material-symbols-outlined text-primary">task_alt</span> Prérequis</h4>
          <ul className="space-y-2">
            {campaign.requirements.map((req, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                <span className="material-symbols-outlined text-primary text-base shrink-0">check_circle</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">auto_awesome</span> 
              Pitch Suggéré par IA
            </h4>
            <button 
              onClick={handleGeneratePitch}
              disabled={loadingPitch}
              className="text-xs text-primary font-bold hover:underline disabled:opacity-50"
            >
              {loadingPitch ? 'Génération...' : (pitch ? 'Régénérer' : 'Générer')}
            </button>
          </div>
          {pitch ? (
            <div className="bg-white/5 rounded-xl p-4 italic text-sm text-slate-300 border border-white/5 relative">
              "{pitch}"
              <button 
                className="absolute top-2 right-2 text-slate-500 hover:text-white"
                onClick={() => navigator.clipboard.writeText(pitch)}
              >
                <span className="material-symbols-outlined text-sm">content_copy</span>
              </button>
            </div>
          ) : (
            <p className="text-xs text-slate-500 italic">Générez un pitch personnalisé pour augmenter vos chances d'être sélectionné.</p>
          )}
        </div>
      </div>

      <div className="sticky bottom-0 bg-[#131022]/80 backdrop-blur-md pt-4 space-y-3">
        <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20">
          Envoyer ma Candidature
        </button>
        <button className="w-full bg-white/5 hover:bg-white/10 text-white font-bold py-4 rounded-xl transition-all border border-white/5">
          Enregistrer pour plus tard
        </button>
      </div>
    </aside>
  );
};

export default DetailDrawer;
