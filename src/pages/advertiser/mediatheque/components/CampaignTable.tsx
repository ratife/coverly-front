import { MoreHorizontal } from 'lucide-react';
import { CAMPAIGNS } from '../../shared/constants';

export default function CampaignTable() {
  return (
    <div className="bg-[#141122] rounded-xl border border-[#3b3267] overflow-hidden shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-surface-dark border-b border-[#3b3267]">
            <th className="px-6 py-4 text-xs font-bold uppercase text-text-muted tracking-wider">Nom de la Campagne</th>
            <th className="px-6 py-4 text-xs font-bold uppercase text-text-muted tracking-wider">Statut</th>
            <th className="px-6 py-4 text-xs font-bold uppercase text-text-muted tracking-wider">Contenu Média</th>
            <th className="px-6 py-4 text-xs font-bold uppercase text-text-muted tracking-wider">Budget Consommé</th>
            <th className="px-6 py-4 text-xs font-bold uppercase text-text-muted tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#3b3267]">
          {CAMPAIGNS.map((campaign) => (
            <tr key={campaign.id} className="hover:bg-surface-dark/50 transition-colors">
              <td className="px-6 py-5">
                <div className="font-bold">{campaign.name}</div>
                <div className="text-xs text-text-muted">{campaign.type} • Début : {campaign.startDate}</div>
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${
                    campaign.status === 'active' 
                      ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' 
                      : 'bg-amber-500'
                  }`}></span>
                  <span className="text-sm font-semibold">
                    {campaign.status === 'active' ? 'Actif' : 'En pause'}
                  </span>
                </div>
              </td>
              <td className="px-6 py-5">
                <img
                  src={campaign.mediaUrl}
                  alt={campaign.name}
                  className="w-12 h-12 rounded-lg object-cover border border-[#3b3267]"
                  referrerPolicy="no-referrer"
                />
              </td>
              <td className="px-6 py-5">
                <div className="w-32 space-y-1.5">
                  <div className="flex justify-between text-[10px] font-bold">
                    <span>{campaign.spent} € / {campaign.budget} €</span>
                    <span className="text-primary">{Math.round((campaign.spent / campaign.budget) * 100)}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#3b3267] rounded-full overflow-hidden">
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
