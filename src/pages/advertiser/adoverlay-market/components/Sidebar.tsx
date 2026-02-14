
import React from 'react';
import { RECOMMENDED_CAMPAIGNS } from '../constants';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-80 border-r border-slate-200 dark:border-[#292348] bg-white dark:bg-panel-dark p-6 overflow-y-auto custom-scrollbar hidden lg:block h-full">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-lg">Recommandé pour vous</h2>
          <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
        </div>
        <div className="space-y-4">
          {RECOMMENDED_CAMPAIGNS.map((campaign) => (
            <div key={campaign.id} className="p-4 rounded-xl bg-slate-50 dark:bg-[#1a1630] border border-slate-200 dark:border-[#292348] hover:border-primary/50 transition-all cursor-pointer group">
              <div className="flex gap-3 items-start mb-2">
                <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
                  <img className="w-full h-full object-cover" src={campaign.brandLogo} alt={campaign.brand} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm line-clamp-1">{campaign.brand}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{campaign.industry}</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-3">
                <span className="text-primary font-bold text-sm">{campaign.viewsTarget}</span>
                <span className="material-symbols-outlined text-slate-400 group-hover:translate-x-1 transition-transform">chevron_right</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">Votre Performance</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-primary/5 p-3 rounded-lg border border-primary/10">
            <p className="text-[10px] text-slate-500 dark:text-slate-400 mb-1 font-semibold uppercase">Total Gagné</p>
            <p className="font-bold text-lg">2.4k$</p>
          </div>
          <div className="bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/10">
            <p className="text-[10px] text-slate-500 dark:text-slate-400 mb-1 font-semibold uppercase">Ads Actives</p>
            <p className="font-bold text-lg text-emerald-500">12</p>
          </div>
        </div>
      </div>

      <div className="p-5 rounded-2xl bg-gradient-to-br from-primary to-purple-600 text-white relative overflow-hidden shadow-lg shadow-primary/20">
        <div className="relative z-10">
          <p className="text-sm font-medium opacity-90 mb-1 uppercase tracking-tight">Nouvelle Fonctionnalité</p>
          <h4 className="font-bold mb-3 leading-tight text-base">Rémunération instantanée disponible pour les Créateurs Elite.</h4>
          <button className="bg-white text-primary px-4 py-2 rounded-lg text-xs font-bold hover:bg-slate-100 transition-colors w-full sm:w-auto">
            Postuler maintenant
          </button>
        </div>
        <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-7xl opacity-20 rotate-12 select-none">bolt</span>
      </div>
    </aside>
  );
};

export default Sidebar;
