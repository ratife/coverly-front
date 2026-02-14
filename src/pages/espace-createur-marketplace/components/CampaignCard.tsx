
import React from 'react';
import type { Campaign } from '../types';

interface CampaignCardProps {
  campaign: Campaign;
  onApply: (campaign: Campaign) => void;
}

const CampaignCard: React.FC<CampaignCardProps> = ({ campaign, onApply }) => {
  return (
    <div className="group bg-card-lighter rounded-2xl border border-slate-800 hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col shadow-2xl shadow-black/50">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          alt={campaign.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
          src={campaign.image}
        />
        {campaign.isLive && (
          <div className="absolute top-4 left-4 bg-background-dark/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
            <span className="size-2 bg-accent-success rounded-full animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-white">Live Maintenant</span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background-dark to-transparent">
          <div className="flex items-center gap-2">
            <div className={`size-10 rounded-lg flex items-center justify-center ${campaign.brandColor || 'bg-white p-1'}`}>
              {campaign.brandLogo.startsWith('http') ? (
                <img alt="Brand" className="size-full object-contain" src={campaign.brandLogo} />
              ) : (
                <span className="material-symbols-outlined text-white">{campaign.brandLogo}</span>
              )}
            </div>
            <div className="text-white">
              <h4 className="font-bold text-sm">{campaign.brand}</h4>
              <p className="text-[10px] text-slate-300">{campaign.campaignLabel}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 space-y-4 flex-1 flex flex-col">
        <div className="flex flex-wrap gap-2">
          {campaign.tags.map((tag, idx) => (
            <span
              key={idx}
              className={`px-2.5 py-1 text-[10px] font-bold rounded-md border uppercase tracking-wide ${
                idx === 0
                  ? 'bg-primary/20 text-primary border-primary/30'
                  : 'bg-slate-800 text-slate-400 border-slate-700'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">{campaign.description}</p>
        <div className="pt-4 border-t border-slate-800 mt-auto flex items-center justify-between">
          <div>
            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Payout</p>
            <p className="text-xl font-bold text-accent-payout">
              {campaign.payout} <span className="text-xs text-slate-500 font-normal">{campaign.payoutSuffix}</span>
            </p>
          </div>
          <button
            onClick={() => onApply(campaign)}
            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-bold transition-transform active:scale-95 shadow-lg shadow-primary/20"
          >
            Postuler
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
