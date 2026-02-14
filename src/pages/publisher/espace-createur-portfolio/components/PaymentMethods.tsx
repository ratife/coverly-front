
import React from 'react';
import { PAYMENT_METHODS } from '../constants';

const PaymentMethods: React.FC = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
      <div className="xl:col-span-2 bg-white dark:bg-card-dark p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold">Méthodes de Paiement Enregistrées</h3>
          <button className="text-primary text-sm font-bold hover:underline flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">add</span> Ajouter
          </button>
        </div>
        
        <div className="space-y-4">
          {PAYMENT_METHODS.map((method) => (
            <div key={method.id} className="p-4 border border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-between hover:border-primary/50 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="size-12 bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl text-slate-500">
                    {method.type === 'bank' ? 'account_balance' : 'account_balance_wallet'}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-sm text-slate-900 dark:text-slate-100">{method.name}</p>
                  <p className="text-xs text-slate-500">{method.details}</p>
                </div>
              </div>
              {method.isDefault ? (
                <span className="text-[10px] font-bold text-accent-success uppercase bg-accent-success/10 px-2 py-1 rounded">Par défaut</span>
              ) : (
                <button className="text-xs font-bold text-slate-400 group-hover:text-primary transition-colors">Définir par défaut</button>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-2xl border border-primary/20 flex flex-col justify-between">
        <div>
          <div className="size-12 bg-primary rounded-xl flex items-center justify-center text-white mb-4">
            <span className="material-symbols-outlined">security</span>
          </div>
          <h4 className="font-bold text-lg mb-2">Sécurité des Fonds</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Vos revenus sont protégés par notre infrastructure de paiement sécurisée. Tous les retraits font l'objet d'une vérification de sécurité en deux étapes.
          </p>
        </div>
        <a className="mt-6 text-primary text-sm font-bold flex items-center gap-2 hover:translate-x-1 transition-transform" href="#">
          En savoir plus sur la sécurité <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>
    </div>
  );
};

export default PaymentMethods;
