
import React from 'react';

const StatCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white dark:bg-card-dark p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Revenus Totaux (30 j)</p>
        <div className="flex items-end gap-2 mt-2">
          <span className="text-2xl font-bold">14 285,50 €</span>
          <span className="text-accent-success text-xs font-bold mb-1 flex items-center">
            +12% <span className="material-symbols-outlined text-xs ml-0.5">trending_up</span>
          </span>
        </div>
      </div>
      
      <div className="bg-white dark:bg-card-dark p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Nombre de Paiements</p>
        <div className="flex items-end gap-2 mt-2">
          <span className="text-2xl font-bold">128</span>
          <span className="text-accent-success text-xs font-bold mb-1 flex items-center">
            +8 <span className="material-symbols-outlined text-xs ml-0.5">add</span>
          </span>
        </div>
      </div>
      
      <div className="bg-white dark:bg-card-dark p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Temps de Retrait Moyen</p>
        <div className="flex items-end gap-2 mt-2">
          <span className="text-2xl font-bold">24h</span>
          <span className="text-slate-400 text-xs mb-1">Délai moyen</span>
        </div>
      </div>
    </div>
  );
};

export default StatCards;
