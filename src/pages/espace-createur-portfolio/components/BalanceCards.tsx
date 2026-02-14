
import React, { useState } from 'react';
import { getFinancialInsights } from '../services/geminiService';

const BalanceCards: React.FC = () => {
  const [insights, setInsights] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateInsights = async () => {
    setLoading(true);
    const result = await getFinancialInsights(8542.20, 14285.50);
    setInsights(result);
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Purple Card */}
        <div className="glass-gradient-purple rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl shadow-purple-500/20">
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-white/70 text-sm font-medium uppercase tracking-wider">Solde Disponible</p>
                <h3 className="text-4xl font-bold mt-2">8 542,20 €</h3>
              </div>
              <span className="material-symbols-outlined text-4xl opacity-50">account_balance</span>
            </div>
            <div className="mt-12 flex items-center gap-4">
              <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined">payments</span>
                Demander un retrait
              </button>
              <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition-all">
                Gérer les comptes
              </button>
            </div>
          </div>
          <div className="absolute -right-10 -top-10 size-48 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-10 -bottom-10 size-48 bg-purple-900/20 rounded-full blur-3xl"></div>
        </div>

        {/* Blue Card */}
        <div className="glass-gradient-blue rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl shadow-blue-500/20">
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-white/70 text-sm font-medium uppercase tracking-wider">Gains en Attente</p>
                <h3 className="text-4xl font-bold mt-2">2 150,00 €</h3>
              </div>
              <div className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-bold">
                Prévu le 15 oct.
              </div>
            </div>
            <div className="mt-12">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-sm">info</span>
                <p className="text-sm text-white/80">Ces fonds sont en cours de vérification par les annonceurs.</p>
              </div>
              <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                <div className="bg-white h-full w-[75%] rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="absolute -right-10 -bottom-10 size-40 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* AI Insights Bar */}
      <div className="bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm overflow-hidden relative">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">psychology</span>
            <h4 className="font-bold text-sm">Analyses & Conseils IA</h4>
          </div>
          <button 
            onClick={handleGenerateInsights}
            disabled={loading}
            className="text-xs font-bold bg-primary text-white px-4 py-1.5 rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-colors"
          >
            {loading ? 'Analyse...' : 'Générer des insights'}
          </button>
        </div>
        
        {insights ? (
          <div className="mt-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-wrap animate-in fade-in duration-500">
            {insights}
          </div>
        ) : (
          <p className="text-xs text-slate-400 italic">Obtenez des conseils personnalisés basés sur vos revenus récents.</p>
        )}
      </div>
    </div>
  );
};

export default BalanceCards;
