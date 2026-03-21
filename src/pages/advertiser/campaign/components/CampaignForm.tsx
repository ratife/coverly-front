import React, { useState } from 'react';
import { motion } from 'motion/react';

export const CampaignForm: React.FC = () => {
  const [budget, setBudget] = useState(5000);

  return (
    <div className="flex-1 space-y-8">
      {/* Header & Progress */}
      <section className="space-y-6">
        <div>
          <h1 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight">Nouvelle Campagne</h1>
          <p className="text-on-surface-variant mt-1">Configurez votre stratégie publicitaire en quelques étapes.</p>
        </div>
        <div className="flex items-center justify-between bg-surface-container-low p-4 rounded-xl border border-white/5 shadow-sm">
          {[
            { step: 1, label: 'Détails', active: true },
            { step: 2, label: 'Ciblage', active: false },
            { step: 3, label: 'Budget', active: false },
            { step: 4, label: 'Création', active: false },
          ].map((item, index, array) => (
            <React.Fragment key={item.step}>
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  item.active ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-on-surface-variant'
                }`}>
                  {item.step}
                </div>
                <span className={`font-semibold text-sm ${item.active ? 'text-primary' : 'text-on-surface-variant'}`}>
                  {item.label}
                </span>
              </div>
              {index < array.length - 1 && (
                <div className="h-px bg-outline-variant/30 flex-1 mx-4"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Step 1: Details & Platforms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block text-sm font-semibold text-primary/80 uppercase tracking-wider ml-1">Identité de Campagne</label>
          <div className="bg-surface-container-low p-6 rounded-xl border border-white/5 space-y-4">
            <div>
              <label className="block text-xs font-medium text-on-surface-variant mb-2">Nom de la campagne</label>
              <input 
                className="w-full bg-surface-container-highest border-none rounded-lg text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/50 transition-all p-3 outline-none" 
                placeholder="Ex: Lancement Collection Hiver 2024" 
                type="text"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-on-surface-variant mb-2">Date de début</label>
                <input className="w-full bg-surface-container-highest border-none rounded-lg text-on-surface focus:ring-2 focus:ring-primary/50 p-3 outline-none" type="date"/>
              </div>
              <div>
                <label className="block text-xs font-medium text-on-surface-variant mb-2">Date de fin</label>
                <input className="w-full bg-surface-container-highest border-none rounded-lg text-on-surface focus:ring-2 focus:ring-primary/50 p-3 outline-none" type="date"/>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-semibold text-primary/80 uppercase tracking-wider ml-1">Plateformes Cibles</label>
          <div className="bg-surface-container-low p-6 rounded-xl border border-white/5 grid grid-cols-3 gap-3">
            {[
              { id: 'instagram', icon: 'brand_family', label: 'Instagram', active: true },
              { id: 'tiktok', icon: 'movie', label: 'TikTok', active: false },
              { id: 'youtube', icon: 'play_circle', label: 'YouTube', active: false },
            ].map((platform) => (
              <button 
                key={platform.id}
                className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border transition-all ${
                  platform.active 
                    ? 'border-primary/40 bg-primary/5 text-primary' 
                    : 'border-white/5 bg-surface-container-highest text-on-surface-variant hover:border-secondary/50'
                }`}
              >
                <span className="material-symbols-outlined text-2xl">{platform.icon}</span>
                <span className="text-[10px] font-bold uppercase">{platform.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Step 2: Budget Management */}
      <section className="space-y-4">
        <label className="block text-sm font-semibold text-secondary/80 uppercase tracking-wider ml-1">Gestion du Budget</label>
        <div className="bg-surface-container-low p-8 rounded-xl border border-white/5">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium text-on-surface">Budget total estimé</label>
                  <span className="text-primary font-headline text-xl font-bold">{budget.toLocaleString()} €</span>
                </div>
                <input 
                  className="w-full h-1.5 bg-surface-container-highest rounded-full appearance-none accent-primary cursor-pointer" 
                  max="50000" 
                  min="100" 
                  step="100" 
                  type="range"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container-highest p-4 rounded-lg">
                  <span className="block text-[10px] text-on-surface-variant uppercase mb-1">Max CPM</span>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">4.50</span>
                    <span className="text-xs text-on-surface-variant">€</span>
                  </div>
                </div>
                <div className="bg-surface-container-highest p-4 rounded-lg">
                  <span className="block text-[10px] text-on-surface-variant uppercase mb-1">Rythme</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">Accéléré</span>
                    <span className="material-symbols-outlined text-secondary text-sm">bolt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3: Media Upload */}
      <section className="space-y-4">
        <label className="block text-sm font-semibold text-tertiary/80 uppercase tracking-wider ml-1">Visuels de l'annonce</label>
        <div className="relative group">
          <div className="bg-surface-container-low border-2 border-dashed border-white/10 hover:border-primary/50 transition-all rounded-2xl p-12 flex flex-col items-center justify-center text-center space-y-4 overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-primary text-3xl">cloud_upload</span>
            </div>
            <div>
              <p className="text-on-surface font-semibold">Glissez-déposez vos fichiers ici</p>
              <p className="text-on-surface-variant text-sm mt-1">MP4, MOV ou JPG (Max. 500MB)</p>
            </div>
            <button className="bg-primary/10 text-primary hover:bg-primary/20 transition-all px-6 py-2 rounded-lg text-sm font-semibold relative z-10">
              Parcourir les fichiers
            </button>
          </div>
        </div>
      </section>

      {/* Action Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-white/5">
        <button className="text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-2 font-medium">
          <span className="material-symbols-outlined">chevron_left</span>
          Retour
        </button>
        <button className="bg-primary hover:bg-primary-container text-on-primary font-bold px-8 py-3 rounded-lg shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center gap-2">
          Continuer au ciblage
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
};
