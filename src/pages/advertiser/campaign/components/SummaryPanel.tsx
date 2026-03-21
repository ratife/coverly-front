import React from 'react';

export const SummaryPanel: React.FC = () => {
  return (
    <aside className="w-full lg:w-80 space-y-6">
      <div className="glass-panel sticky top-24 rounded-2xl border border-white/10 p-6 space-y-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-3xl -z-10"></div>
        <div>
          <h3 className="font-headline text-lg font-bold text-on-surface">Résumé Direct</h3>
          <p className="text-xs text-on-surface-variant">Estimations en temps réel</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-end">
              <span className="text-xs text-on-surface-variant">Portée estimée</span>
              <span className="font-headline text-2xl font-extrabold text-secondary">840k - 1.2M</span>
            </div>
            <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-to-r from-secondary-container to-secondary"></div>
            </div>
            <p className="text-[10px] text-on-surface-variant italic">Basé sur un budget de 5 000€</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white/5 p-4 rounded-xl border border-white/5">
              <span className="block text-[10px] text-tertiary font-bold uppercase tracking-widest mb-1">ROI Estimé</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold">3.2</span>
                <span className="text-xs text-on-surface-variant">x</span>
              </div>
              <p className="text-[10px] text-on-surface-variant mt-1">Précision de l'IA: 92%</p>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/5">
              <span className="block text-[10px] text-primary font-bold uppercase tracking-widest mb-1">Coût par clic (CPC)</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold">0.42</span>
                <span className="text-xs text-on-surface-variant">€</span>
              </div>
              <p className="text-[10px] text-on-surface-variant mt-1">Optimisé pour la conversion</p>
            </div>
          </div>

          <div className="pt-4 space-y-3">
            <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Répartition plateformes</p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#E1306C]/20 flex items-center justify-center text-[#E1306C]">
                <span className="material-symbols-outlined text-lg">brand_family</span>
              </div>
              <div className="flex-1 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full w-full bg-[#E1306C]"></div>
              </div>
              <span className="text-[10px] font-bold">100%</span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10">
          <div className="bg-primary/5 p-4 rounded-lg flex gap-3">
            <span className="material-symbols-outlined text-primary">info</span>
            <p className="text-[11px] leading-relaxed text-on-surface-variant">
              Cette campagne sera examinée par notre équipe de modération sous <span className="text-primary font-bold">2 heures</span> après soumission.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};
