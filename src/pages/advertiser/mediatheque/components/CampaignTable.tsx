import { MoreHorizontal } from 'lucide-react';
import { CAMPAIGNS } from '../../shared/constants';

export default function CampaignTable() {
  return (
    <div className="bg-white dark:bg-card-dark rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
            <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Nom de la Campagne</th>
            <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Statut</th>
            <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Contenu Média</th>
            <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Budget Consommé</th>
            <th className="px-6 py-4 text-xs font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
          {CAMPAIGNS.map((campaign) => (
            <tr key={campaign.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
              <td className="px-6 py-5">
                <div className="font-bold text-slate-900 dark:text-white">{campaign.name}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{campaign.type} • Début : {campaign.startDate}</div>
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${
                    campaign.status === 'active' 
                      ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' 
                      : 'bg-amber-500'
                  }`}></span>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    {campaign.status === 'active' ? 'Actif' : 'En pause'}
                  </span>
                </div>
              </td>
              <td className="px-6 py-5">
                <img
                  src={campaign.mediaUrl}
                  alt={campaign.name}
                  className="w-12 h-12 rounded-lg object-cover border border-slate-200 dark:border-slate-700"
                  referrerPolicy="no-referrer"
                />
              </td>
              <td className="px-6 py-5">
                <div className="w-32 space-y-1.5">
                  <div className="flex justify-between text-[10px] font-bold">
                    <span className="text-slate-600 dark:text-slate-300">{campaign.spent} € / {campaign.budget} €</span>
                    <span className="text-primary">{Math.round((campaign.spent / campaign.budget) * 100)}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className="bg-primary h-full rounded-full" 
                      style={{ width: `${(campaign.spent / campaign.budget) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-5 text-right">
                <button className="text-slate-400 hover:text-primary transition-colors">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
