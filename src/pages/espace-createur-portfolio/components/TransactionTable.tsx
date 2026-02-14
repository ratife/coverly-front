
import React from 'react';
import { TRANSACTIONS } from '../constants';
import type { Transaction } from '../types';

const TransactionTable: React.FC = () => {
  return (
    <div className="bg-white dark:bg-card-dark rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
      <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h3 className="text-lg font-bold">Historique des Transactions</h3>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-1.5 border border-slate-200 dark:border-slate-700 flex-1 sm:flex-none">
            <span className="material-symbols-outlined text-slate-400 text-lg">search</span>
            <input 
              className="bg-transparent border-none focus:ring-0 text-sm w-full sm:w-40" 
              placeholder="Rechercher..." 
              type="text"
            />
          </div>
          <button className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-200 transition-colors">
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">filter_list</span>
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-[10px] uppercase tracking-wider font-bold">
              <th className="px-6 py-4">Transaction / ID</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Montant</th>
              <th className="px-6 py-4">Statut</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {TRANSACTIONS.map((tx) => (
              <TransactionRow key={tx.id} transaction={tx} />
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <p className="text-xs text-slate-500 dark:text-slate-400">Affichage de 1-4 sur 56 transactions</p>
        <div className="flex gap-2">
          <button className="p-1.5 rounded border border-slate-200 dark:border-slate-700 disabled:opacity-50" disabled>
            <span className="material-symbols-outlined text-sm">chevron_left</span>
          </button>
          <button className="p-1.5 rounded border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const TransactionRow: React.FC<{ transaction: Transaction }> = ({ transaction }) => {
  const isNegative = transaction.amount < 0;
  const statusColor = transaction.status === 'En cours' ? 'text-accent-warning' : 'text-accent-success';
  const statusBg = transaction.status === 'En cours' ? 'bg-accent-warning' : 'bg-accent-success';
  const icon = isNegative ? 'south_west' : 'north_east';

  return (
    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className={`size-8 rounded-full flex items-center justify-center ${isNegative ? 'bg-slate-100 dark:bg-slate-700' : 'bg-accent-success/10'}`}>
            <span className={`material-symbols-outlined text-lg ${isNegative ? 'text-slate-500 dark:text-slate-400' : 'text-accent-success'}`}>{icon}</span>
          </div>
          <div>
            <p className="font-bold text-sm">{transaction.name}</p>
            <p className="text-[10px] text-slate-500 dark:text-slate-400">{transaction.id}</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-sm font-medium">{transaction.date}</td>
      <td className="px-6 py-4">
        <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">{transaction.type}</span>
      </td>
      <td className={`px-6 py-4 font-bold ${!isNegative ? 'text-accent-success' : ''}`}>
        {isNegative ? '' : '+ '}
        {transaction.amount.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
      </td>
      <td className="px-6 py-4">
        <div className={`flex items-center gap-1.5 ${statusColor}`}>
          <div className={`size-1.5 rounded-full ${statusBg} ${transaction.status === 'En cours' ? 'animate-pulse' : ''}`}></div>
          <span className="text-xs font-bold uppercase tracking-tight">{transaction.status}</span>
        </div>
      </td>
      <td className="px-6 py-4 text-right">
        <button className="material-symbols-outlined text-slate-400 hover:text-primary">
          {isNegative ? 'more_horiz' : 'receipt'}
        </button>
      </td>
    </tr>
  );
};

export default TransactionTable;
