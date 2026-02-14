
import React from 'react';
import { type Campaign, CampaignBadge } from '../types';

interface CampaignCardProps {
  campaign: Campaign;
  onViewDetails: (campaign: Campaign) => void;
}

const CampaignCard: React.FC<CampaignCardProps> = ({ campaign, onViewDetails }) => {
  const getBadgeColor = (badge: CampaignBadge) => {
    switch (badge) {
      case CampaignBadge.TENDANCE: return 'bg-primary';
      case CampaignBadge.HAUT_REVENU: return 'bg-orange-500';
      case CampaignBadge.NOUVEAU: return 'bg-cyan-500';
      case CampaignBadge.ECO_RESPONSABLE: return 'bg-emerald-500';
      default: return 'bg-slate-500';
    }
  };

  return (
    <div className="bg-white dark:bg-[#1a1630] rounded-2xl border border-slate-200 dark:border-[#292348] p-5 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all flex flex-col relative group h-full">
      {campaign.badge && (
        <div className="absolute top-4 right-4 z-10">
          <span className={`px-2 py-1 ${getBadgeColor(campaign.badge)} text-white text-[10px] font-bold rounded uppercase tracking-wider`}>
            {campaign.badge}
          </span>
        </div>
      )}
      
      <div className="flex items-center gap-4 mb-5">
        <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-[#292348] flex items-center justify-center p-2 shrink-0">
          <img className="w-full h-full object-contain" src={campaign.brandLogo} alt={campaign.brand} />
        </div>
        <div>
          <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-1">{campaign.title}</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{campaign.brand}</p>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-[#231e3d] rounded-xl p-4 mb-5">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-slate-500 dark:text-slate-400">Rémunération de base</span>
          {campaign.bonus && <span className="text-xs font-bold text-emerald-500">{campaign.bonus}</span>}
        </div>
        <p className="text-2xl font-bold text-primary">
          {campaign.rate}$ <span className="text-sm font-normal text-slate-500">/ 1k vues</span>
        </p>
      </div>

      <div className="space-y-3 mb-6 flex-1">
        <div className="flex items-center gap-2 text-sm">
          <span className="material-symbols-outlined text-primary text-base">video_library</span>
          <span className="text-slate-600 dark:text-slate-300 truncate">{campaign.format}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="material-symbols-outlined text-primary text-base">calendar_today</span>
          <span className="text-slate-600 dark:text-slate-300">Durée : {campaign.duration}</span>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
          {campaign.description}
        </p>
      </div>

      <button 
        onClick={() => onViewDetails(campaign)}
        className="w-full bg-slate-100 dark:bg-[#292348] hover:bg-primary group-hover:bg-primary hover:text-white group-hover:text-white text-slate-900 dark:text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
      >
        Voir les Détails <span className="material-symbols-outlined text-base">open_in_new</span>
      </button>
    </div>
  );
};

export default CampaignCard;
